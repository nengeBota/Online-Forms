import styled from "styled-components";

const pageNumbers = [1, 2, 3, 4, 5, 6];

function Pagination({
	validationSummary = {},
	currentPage = 1,
	setPage = () => {},
}) {
	return (
		<Wrapper>
			{pageNumbers.map((each, index) => {
				return (
					<PaginationButton
						isCurrentPage={each === currentPage}
						onClick={() => setPage(each)}
						type="button"
						hasErrors={validationSummary[`page${index+1}`]}
					>
						{each}
					</PaginationButton>
				);
			})}
		</Wrapper>
	);
}

export default Pagination;

const Wrapper = styled.div`
	margin: 20px auto;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

const PaginationButton = styled.button`
	background: ${({ isCurrentPage, hasErrors }) =>
		hasErrors && !isCurrentPage
			? "red"
			: isCurrentPage
			? "black"
			: "white"};
	color: ${({ isCurrentPage, hasErrors }) =>
		isCurrentPage || hasErrors ? "white" : "black"};
	padding: 10px 20px;
	border-radius: 5px;
	border: ${({ isCurrentPage, hasErrors }) =>
		isCurrentPage || hasErrors ? "none" : "1px black solid"};
`;
