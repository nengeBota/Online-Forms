import styled from "styled-components";

function Pagination({
	validationSummary = {},
	currentPage = 1,
	onClick = () => {},
	pages = [],
}) {
	return (
		<Wrapper id='noprint'>
			{pages.map((_, index) => {
				const pageValue = index + 1;
				return (
          <PaginationButton
            id='noprint'
						isCurrentPage={pageValue === currentPage}
						onClick={() => onClick(pageValue)}
						type="button"
						hasErrors={validationSummary[`page${pageValue}`]}
					>
						{pageValue}
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
