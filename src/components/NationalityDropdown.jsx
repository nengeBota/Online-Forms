import { countries } from "country-list-json";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import OutsideClickHandler from "react-outside-click-handler";

export default function NationalityDropdown({ onBlur = () => {}, onChange = () => {}, value }) {
	const [isOpen, setIsOpen] = useState(false);
	const [filterText, setFilterText] = useState("");
	const [filteredCountries, setFilteredCountries] = useState(countries);

	useEffect(() => {
		const updatedCountriesList = countries.filter((each) =>
			each.name
				.toLocaleLowerCase()
				.includes(filterText.toLocaleLowerCase())
		);
		setFilteredCountries(updatedCountriesList);
	}, [filterText]);

	return (
		<OutsideClickHandler
      onOutsideClick={() => {
        onBlur();
				setIsOpen(false);
			}}
		>
			<div style={{ position: "relative", marginBottom: 10, }}>
				<button
					onClick={() => {
						setIsOpen(true);
					}}
					type="button"
					style={{
						borderRadius: 5,
						outline: "transparent",
						border: "1px solid #ced4da",
						cursor: "pointer",
						background: "white",
						padding: '5px 10px',
						width: "100%",
						textAlign: "left",
            fontSize: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
					}}
				>
					<div>
						{value?.flag}
						<span style={{ marginLeft: "10px" }}>
							{value
								? value?.name
								: "Select..."}
						</span>
					</div>
					<span
						style={{ display: "inline-block", marginRight: 20, color: 'gray', marginTop: '-10px',}}
					>
						&#8964;
					</span>
				</button>
				<div
					style={{
						maxHeight: 200,
						position: "absolute",
						marginTop: "10px",
						overflowY: "scroll",
						padding: "10px",
						display: isOpen ? "block" : "none",
						zIndex: 10,
						background: "white",
						width: "100%",
						border: "1px solid #ced4da",
						borderRadius: "5px",
					}}
				>
					<Form.Control
						value={filterText}
						onChange={(e) => {
							setFilterText(e.target.value);
						}}
					/>

					{filteredCountries.map((each) => (
						<button
							key={each.name}
							type="button"
							style={{
								display: "block",
								width: "100%",
								outline: "transparent",
								textAlign: "left",
								fontSize: 16,
								background: "white",
								border: "none",
								paddingBottom: 10,
							}}
							onClick={() => {
								onChange(each);
							}}
						>
							{each.flag}
							<span style={{ marginLeft: "10px" }}>
								{each.name}
							</span>
						</button>
					))}
				</div>
			</div>
		</OutsideClickHandler>
	);
}

