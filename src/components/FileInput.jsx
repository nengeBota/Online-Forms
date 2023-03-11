import { useRef } from "react";
import { Form } from "react-bootstrap";

function FileInput({ value = [], onChange }) {
	const fileInputRef = useRef();

	return (
		<>
			<div
				style={{
					display: "flex",
					marginBottom: "15px",
					border: "1px solid #ced4da",
					borderRadius: "5px",
					cursor: "pointer",
				}}
				onClick={() => {
					fileInputRef?.current.click();
				}}
			>
				<button
					style={{
						background: "#ced4da4b",
						border: "none",
						borderRight: "1px solid #ced4da",
						padding: "6px 12px",
						margin: 0,
						borderRadius: "5px 0 0 5px",
					}}
					type="button"
				>
					Choose Files
				</button>
				<div
					style={{
						padding: "6px 12px",
						borderRadius: "0 5px 5px 0",
						flex: 1,
					}}
				>
					{value?.[0]?.fileName
						? value?.reduce(
								(acc, each, i) =>
									`${acc} ${each?.fileName}${
										i > 0 ? "," : ""
									}`,

								""
						  )
						: "No file chosen"}
				</div>
			</div>
			<Form.Control
				type="file"
				multiple
				style={{ display: "none" }}
				ref={fileInputRef}
				onChange={async (e) => {
					async function retrieveFiles(filesParam) {
						const filePromises = filesParam.map(
							(element) =>
								new Promise((resolve, reject) => {
									const fileReader = new FileReader();
									const fileName = element.name;
									fileReader.onload = (fileReadEvent) => {
										try {
											resolve({
												fileName,
												file: fileReadEvent.target
													.result,
											});
										} catch (e) {
											reject(e);
										}
									};

									fileReader.onerror = (e) => {
										reject(e);
									};

									fileReader.readAsBinaryString(element);
								})
						);
						const files = await Promise.all(filePromises);

						return files;
					}
					if (e.target.files.length > 0) {
						const files = await retrieveFiles(
							Array.from(e.target.files)
						);

						onChange(files);
					}
				}}
			/>
		</>
	);
}

export default FileInput;
