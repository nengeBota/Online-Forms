import AnnexesAndAttachments from "./AnnexesAndAttachments2";
import CorporateStructureAndServices from "./CorporateStructureAndServices";
import FinancialCapability from "./FinancialCapability";
import LocalContent from "./LocalContent2";
import Miscellaneous from "./Miscellaneous";
import PlansAndProgrammes from "./PlansAndProgrammes";

export default function Success({ data, errors }) {
	return (
    <div>
      <div id='noprint'>
			<h3 id="noprint" style={{marginBottom: '30px'}}>
				Congratulations! You have successfully submitted your
				application
			</h3>
			<a
				id="noprint"
				href="#"
				onClick={() => {
					window.print();
				}}
			>
				Click here to download a copy of the completed form
      </a>
      
      <div id='noprint' style={{ height: '100px' }} />

      </div>

			<CorporateStructureAndServices
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
      />
      
      <div style={{ height: '100px' }} />


			<FinancialCapability
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
      />
      
      <div style={{ height: '100px' }} />


			<PlansAndProgrammes
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
      />
      
      <div style={{ height: '100px' }} />


			<LocalContent
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
      />
      <div style={{ height: '100px' }} />
      

			<Miscellaneous
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
			/>
      <div style={{ height: '100px' }} />

			<AnnexesAndAttachments
				data={data}
				errors={errors}
				setErrors={() => {}}
				setData={() => {}}
			/>
		</div>
	);
}
