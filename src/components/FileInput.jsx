import { Form } from "react-bootstrap";

function FileInput({ value, onChange }) {
	return (
		<Form.Control
			type="file"
			multiple
			value={value}
			onChange={(e) => {
				if (e.target.files.length > 0) {
					let result = [];
					for (let i = 0; i < e.target.files.length; i++) {
						const fileReader = new FileReader();
						const fileName = e.target.files[i].name;

						fileReader.onload = (file) => {
							result.push({ fileName, file: file.target.result });
						};
						fileReader.readAsBinaryString(e.target.files[i]);
					}
					onChange(result);
				}
			}}
		/>
	);
}

export default FileInput;
