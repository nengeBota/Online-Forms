const localContentFieldNames = {
	_: "localContent",
	staffBreakdown: {
		ghanaian: {
			mgt: "staffBreakdown-ghanaian-Management",
			technicalCoreStaff: "staffBreakdown-ghanaian-TechCoreStaff",
			other: "staffBreakdown-ghanaian-Other",
			fullTime: "staffBreakdown-ghanaian-FullTime",
			partTime: "staffBreakdown-ghanaian-PartTime",
			internsOrNationalService:
				"staffBreakdown-ghanaian-InternsOrNationalService",
		},
		foreigners: {
			mgt: "staffBreakdown-foreign-Management",
			technicalCoreStaff: "staffBreakdown-foreign-TechCoreStaff",
			other: "staffBreakdown-foreign-Other",
			fullTime: "staffBreakdown-foreign-FullTime",
			partTime: "staffBreakdown-foreign-PartTime",
			internsOrNationalService:
				"staffBreakdown-foreign-InternsOrNationalService",
		},
		total: {
			mgt: "staffBreakdown-total-Management",
			technicalCoreStaff: "staffBreakdown-total-TechCoreStaff",
			other: "staffBreakdown-total-Other",
			fullTime: "staffBreakdown-total-FullTime",
			partTime: "staffBreakdown-total-PartTime",
			internsOrNationalService:
				"staffBreakdown-total-InternsOrNationalService",
		},
	},

	capitalInvestment: "capitalInvestment",

	servicesReceived: {
		_: "servicesReceived",
		serviceProvider: "servicesReceived-serviceProvider",
		scopeOfWork: "servicesReceived-scopeOfWork",
		contractStartDate: "servicesReceived-contractStartDate",
		contractEndDate: "servicesReceived-contractEndDate",
		contractValue: "servicesReceived-contractValue",
		paymentsReceivedInLast12Months:
			"servicesReceived-paymentsReceivedInLast12Months",
		isEditing: "isEditing",
	},

	servicesRendered: {
		_: "servicesRendered",
		serviceRecipient: "servicesRendered-serviceRecipient",
		scopeOfWork: "servicesRendered-scopeOfWork",
		contractStartDate: "servicesRendered-contractStartDate",
		contractEndDate: "servicesRendered-contractEndDate",
		contractValue: "servicesRendered-contractValue",
		paymentsReceivedInLast12Months:
			"servicesRendered-paymentsReceivedInLast12Months",
		isEditing: "isEditing",
	},

	professionalServicesDetails: {
		insuranceServices: {
			serviceProvider: "insuranceServices-serviceProvider",
			location: "insuranceServices-location",
			expenditureInLast12Months:
				"insuranceServices-expenditureInLast12Months",
		},
		financialServices: {
			serviceProvider: "financialServices-serviceProvider",
			location: "financialServices-location",
			expenditureInLast12Months:
				"financialServices-expenditureInLast12Months",
		},
		indigenousBanks: {
			serviceProvider: "indigenousBanks-serviceProvider",
			location: "indigenousBanks-location",
			expenditureInLast12Months:
				"indigenousBanks-expenditureInLast12Months",
		},
		legalServices: {
			serviceProvider: "legalServices-serviceProvider",
			location: "legalServices-location",
			expenditureInLast12Months:
				"legalServices-expenditureInLast12Months",
		},
	},
};

export default localContentFieldNames;
