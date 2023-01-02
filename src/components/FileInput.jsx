import { Form } from "react-bootstrap";

function FileInput({ value, onChange }) {
	return (
		<Form.Control
			type="file"
			value={value}
			onChange={(e) => {
				if (e.target.files.length > 0) {
					const fileReader = new FileReader();
          const fileName = e.target.value;

					fileReader.onload = (file) => {
						console.table(file.target.result);
						onChange({fileName, file: file.target.result});
					};
					fileReader.readAsBinaryString(e.target.files[0]);
				}
			}}
		/>
	);
}

export default FileInput;
