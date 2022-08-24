import styled from 'styled-components'
import CorporateStructureAndServices from "./pages/CorporateStructureAndServices";

function App() {
  return (
    <PageWrapper>
      <div>Petroleum Commission Ghana</div>
      <CorporateStructureAndServices />
    </PageWrapper>
  );
}

export default App;


const PageWrapper = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
  min-height: 100vh;
  padding: 30px;

  input {
    margin-bottom: 20px;
  }
`;