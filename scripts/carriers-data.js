// Centralized carrier data structure
const carriersData = [
  {
    id: 'bcbs-medical',
    name: 'Blue Cross Blue Shield',
    logo: 'images/carriers/logo10.png',
    benefitTypes: ['Medical', 'Wellness'],
    contact: {
      phone: '1-888-966-7742',
      phoneLink: 'tel:18889667742',
      groupNumbers: 'N05501 (High), N05502 (Low), 213895 (EPO)',
      website: 'https://www.bcbsnm.com/nmpsia/',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www.bcbsnm.com/nmpsia/doctors-and-hospitals.html',
      text: 'Find a Provider'
    },
    modalId: 'bcbsMedicalModal',
    componentTag: 'bcbs-medical-info'
  },
  {
    id: 'presbyterian',
    name: 'Presbyterian Health Plan',
    logo: 'images/carriers/logo6.png',
    benefitTypes: ['Medical', 'Wellness'],
    contact: {
      phone: '1-888-275-7737',
      phoneLink: 'tel:18882757737',
      groupNumbers: 'A0000035',
      website: 'https://www.phs.org/health-plans/employer-plans/new-mexico-public-schools-insurance-authority',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www2.phs.org/php_directory',
      text: 'Find a Provider'
    },
    modalId: 'presMedicalModal',
    componentTag: 'presbyterian-info'
  },
  {
    id: 'lantern',
    name: 'Lantern',
    logo: 'images/lantern_logo.png',
    benefitTypes: ['Medical'],
    contact: {
      phone: '855-204-3922',
      phoneLink: 'tel:18552043922',
      groupNumbers: 'n/a',
      website: 'https://surgeryplus.com/',
      websiteText: 'Visit Website',
      note: 'Formerly known as Surgery Plus'
    },
    providerSearch: null,
    modalId: 'lanternModal',
    componentTag: 'lantern-info'
  },
  {
    id: 'cvs-caremark',
    name: 'CVS Caremark',
    logo: 'images/CVS_Caremark_logo.jpg',
    benefitTypes: ['Pharmacy'],
    contact: {
      phone: '1-877-787-0652',
      phoneLink: 'tel:18777870652',
      groupNumbers: 'RxBIN: 004336, RxPCN: ADV, RxGRP: RX22AS',
      website: 'https://www.caremark.com/',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www.caremark.com/wps/portal/.cmd/el?id=s7a4i9un3m_1&cmxtarget=FRAMED_LOCAL_PHARMACY&newLogin=yes&returnURL=http://www.caremark.com/framedLogoff.html',
      text: 'Find a Pharmacy'
    },
    modalId: 'cvsCaremarkModal',
    componentTag: 'caremark-info'
  },
  {
    id: 'bcbs-dental',
    name: 'BlueCare Dental',
    logo: 'images/carriers/BlueCare DentalSM.png',
    benefitTypes: ['Dental'],
    contact: {
      phone: '1-877-723-5697',
      phoneLink: 'tel:18777235697',
      groupNumbers: '319228 – Low | 319225 – High (Effective 1/1/2025)',
      website: 'https://www.bcbsnm.com/nmpsia/benefits/dental',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www.bcbsnm.com/find-care/providers-in-your-network/find-a-dentist',
      text: 'Find a Dentist'
    },
    modalId: 'bcbsDentalModal',
    componentTag: 'bcbs-dental-info'
  },
  {
    id: 'delta-dental',
    name: 'Delta Dental',
    logo: 'images/carriers/logo1.png',
    benefitTypes: ['Dental'],
    contact: {
      phone: '1-877-395-9420',
      phoneLink: 'tel:18773959420',
      groupNumbers: '8564 – Low | 8565 – High',
      website: 'https://www.deltadentalnm.com/member/nmpsia-members/',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www.deltadentalnm.com/member/nmpsia-members/',
      text: 'Find a Dentist'
    },
    modalId: 'deltaDentalModal',
    componentTag: 'delta-dental-info'
  },
  {
    id: 'united-concordia',
    name: 'United Concordia Dental',
    logo: 'images/UCD_logo_2024.jpg',
    benefitTypes: ['Dental'],
    contact: {
      phone: '1-888-898-0370',
      phoneLink: 'tel:18888980370',
      groupNumbers: '812022 (refer to ID card or subgroup #)',
      website: 'https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://www.unitedconcordia.com/find-a-dentist/?network=990',
      text: 'Find a Dentist'
    },
    modalId: 'ucDentalModal',
    componentTag: 'united-concordia-info'
  },
  {
    id: 'davis-vision',
    name: 'Davis Vision',
    logo: 'images/carriers/logo2.png',
    benefitTypes: ['Vision'],
    contact: {
      phone: '1-800-999-5431',
      phoneLink: 'tel:18009995431',
      groupNumbers: '3066',
      website: 'https://www.davisvision.com/member',
      websiteText: 'Visit Website'
    },
    providerSearch: {
      url: 'https://davisvision.com/members/',
      text: 'Find a Provider'
    },
    modalId: 'davisVisionModal',
    componentTag: 'davis-vision-info'
  },
  {
    id: 'the-standard',
    name: 'The Standard',
    logo: 'images/carriers/logo5.png',
    benefitTypes: ['Life Insurance', 'Disability'],
    contact: {
      phone: '1-888-609-9763 Ext. 0957',
      phoneLink: 'tel:18886099763',
      groupNumbers: '645549',
      website: './TheStandard.html',
      websiteText: 'Visit Website'
    },
    providerSearch: null,
    modalId: 'standardLifeModal',
    componentTag: 'applying-life-ltd-info'
  }
];

// Get all unique benefit types for filtering
const getAllBenefitTypes = () => {
  const types = new Set();
  carriersData.forEach(carrier => {
    carrier.benefitTypes.forEach(type => types.add(type));
  });
  return Array.from(types).sort();
};

// Filter carriers by benefit type
const filterCarriersByType = (type) => {
  if (!type || type === 'All Benefits') {
    return carriersData;
  }
  return carriersData.filter(carrier => 
    carrier.benefitTypes.some(bt => bt.toLowerCase() === type.toLowerCase())
  );
};

// Search carriers by name or benefit type
const searchCarriers = (query) => {
  if (!query || query.trim() === '') {
    return carriersData;
  }
  const lowerQuery = query.toLowerCase();
  return carriersData.filter(carrier => 
    carrier.name.toLowerCase().includes(lowerQuery) ||
    carrier.benefitTypes.some(bt => bt.toLowerCase().includes(lowerQuery))
  );
};

// Combined filter and search
const filterAndSearchCarriers = (typeFilter, searchQuery) => {
  let results = carriersData;
  
  // Apply type filter
  if (typeFilter && typeFilter !== 'All Benefits') {
    results = filterCarriersByType(typeFilter);
  }
  
  // Apply search query
  if (searchQuery && searchQuery.trim() !== '') {
    results = searchCarriers(searchQuery);
    // Also filter by type if search matches
    if (typeFilter && typeFilter !== 'All Benefits') {
      results = results.filter(carrier => 
        carrier.benefitTypes.some(bt => bt.toLowerCase() === typeFilter.toLowerCase())
      );
    }
  }
  
  return results;
};
