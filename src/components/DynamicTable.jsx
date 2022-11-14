import { Button, ButtonGroup, Table } from "react-bootstrap";

/**
 *
 * column [{name, key, }]
 * data [{isEditing, columnName: colValue, }]
 */

function DynamicTable({
	columns,
	data,
	addNewRow,
	updateRow,
	saveRow,
	editRow,
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
						<Button type="button" size="sm" onClick={addNewRow}>
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
									<input
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
