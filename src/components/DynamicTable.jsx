import { Button, ButtonGroup, Form, Table } from "react-bootstrap";
import Errors from "./Errors";

const columnTypes = {
	date: "date",
	text: "text",
	nationality: "nationality",
	phone: "tel",
	number: "number",
};

function showNormalInput(columnType) {
	return !!(
		columnType === columnTypes.date ||
		columnType === columnTypes.text ||
		columnType === columnTypes.phone ||
		columnType === columnTypes.number ||
		!columnType
	);
}

/**
 *
 * column [{name, key, type }]
 * data [{isEditing, columnName: colValue, }]
 */

function DynamicTable({
	columns,
	data,
	addNewRow,
	updateRow, // change the value of the row
	saveRow,
	editRow, // set the row to isEditing: true
	deleteRow,
	onBlur,
	errors,
}) {
	return (
		<Table striped>
			<thead>
				<tr>
					{columns.map((each) => (
						<th key={each.name}>{each.name}</th>
					))}
					<th id="noprint">
						<Button type="button" size="sm" onClick={addNewRow}>
							Add
						</Button>
					</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((val, index) => (
					<tr key={index}>
						{columns.map((col) =>
							!val.isEditing ? (
								<td key={col.key + index}>
									<div>{val[col.key]}</div>
									<Errors
										errors={errors?.[index]?.[col.key]}
									/>
								</td>
							) : (
								<td key={col.key + index}>
									{showNormalInput(col.type) ? (
										<Form.Control
											style={{
												minWidth: "0",
											}}
											type={col.type}
											value={val[col.key]}
											onChange={(e) =>
												updateRow(
													index,
													col.key,
													e.target.value
												)
											}
											onBlur={() =>
												onBlur(index, col.key)
											}
										/>
									) : null}
									<Errors
										errors={errors?.[index]?.[col.key]}
									/>
								</td>
							)
						)}
						<td id="noprint">
							{val.isEditing ? (
								<Button
									size="sm"
									onClick={() => saveRow(index)}
								>
									save
								</Button>
							) : (
								<ButtonGroup>
									<Button
										size="sm"
										variant="warning"
										onClick={() => editRow(index)}
									>
										edit
									</Button>
									<Button
										size="sm"
										variant="danger"
										onClick={() => deleteRow(index)}
									>
										delete
									</Button>
								</ButtonGroup>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default DynamicTable;
