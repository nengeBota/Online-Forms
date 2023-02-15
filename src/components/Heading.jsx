import styledComponents from "styled-components"


function Heading({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styledComponents.h2`
  text-transform: uppercase;
`;

export default Heading;



function Subheading({children}) {
  return <SubheadingWrapper>{children}</SubheadingWrapper>
}

const SubheadingWrapper = styledComponents.h3`
  color: red;
`;


// export {Subheading, Heading};