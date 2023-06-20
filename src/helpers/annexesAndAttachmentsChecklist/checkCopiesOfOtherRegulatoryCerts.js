export default function checkCopiesOfOtherRegulatoryCerts(data) {
	const {
		airOperatorCertificate,
		aviationLicense,
		fdaHygieneCertificate,
		epaPermit,
	} = data.miscFiles;

	return (
		fileIsNotEmpty(airOperatorCertificate) &&
		fileIsNotEmpty(aviationLicense) &&
		fileIsNotEmpty(fdaHygieneCertificate) &&
		fileIsNotEmpty(epaPermit)
	);
}

function fileIsNotEmpty(fileState) {
	return Boolean(fileState[0]?.fileName) && Boolean(fileState[0]?.file);
}