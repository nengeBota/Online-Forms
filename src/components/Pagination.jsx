import styled from "styled-components";

const pageNumbers = [1, 2, 3, 4, 5, 6];

function Pagination({ currentPage = 1, setPage = () => {} }) {
	return (
		<Wrapper>
			{pageNumbers.map((each) => {
				return (
					<PaginationButton
						isCurrentPage={each === currentPage}
						onClick={() => setPage(each)}
						type="button"
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
	margin: 20px 0;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`;

const PaginationButton = styled.button`
	background: ${({ isCurrentPage }) => (isCurrentPage ? "black" : "white")};
	color: ${({ isCurrentPage }) => (isCurrentPage ? "white" : "black")};
	padding: 10px 20px;
	border-radius: 5px;
	border: ${({ isCurrentPage }) =>
		isCurrentPage ? "none" : "1px black solid"};
`;
