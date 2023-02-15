import { Button, ButtonGroup, Form, Table } from "react-bootstrap";

/**
 *
 * column [{name, key, }]
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
}) {
	return (
		<Table>
			<thead>
				<tr>
					{columns.map((each) => (
						<th>{each.name}</th>
					))}
					<th>
						<Button type="button" size="sm" onClick={addNewRow} style={{backgroundColor:'#00427c', padding:"5px 20px" }}>
							Add
						</Button>
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((val, index) => (
					<tr>
						{columns.map((col) =>
							!val.isEditing ? (
								<td>{val[col.key]}</td>
							) : (
								<td>
									<Form.Control
										style={{
											width: "100px",
											minWidth: "0",
										}}
										value={val[col.key]}
										onChange={(e) =>
											updateRow(
												index,
												col.key,
												e.target.value
											)
										}
									/>
								</td>
							)
						)}
						<td>
							{val.isEditing ? (
								<Button
									size="sm"
									onClick={() => saveRow(index) }
									style={{backgroundColor:'#00427c', padding:"5px 20px" }}>
									save
								</Button>
							) : (
								<ButtonGroup>
									<Button
										size="sm"
										variant="warning"
										onClick={() => editRow(index)}
										style={{backgroundColor:'#00427c', padding:"5px 30px" }}>
										edit
									</Button>
									<Button
										size="sm"
										variant="danger"
										onClick={() => deleteRow(index)}
										style={{backgroundColor:'#00427c', padding:"5px 20px" }}>
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
