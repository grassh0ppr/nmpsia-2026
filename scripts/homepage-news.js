// object holding news items to be rendered to the page
const homepageNews = [
  // notice of public meetings - JULY 20 & 21, 2026
  // {
  //   date: {
  //     day: "15",
  //     month: "July",
  //   },
  //   title: "Notice of Public Meetings July 20 & 21, 2026",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
  //   linkHref:
  //     "https://nmpsia.com/nmpsiadownload/202607/notice_of_public_meetings.pdf",
  //   linkText: "View notice",
  // },
  // BAC Meeting
  // {
  //   date: {
  //     day: "20",
  //     month: "July",
  //   },
  //   title: "Benefits Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202607/BAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // RAC meeting
  // {
  //   date: {
  //     day: "20",
  //     month: "July",
  //   },
  //   title: "Risk Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202607/RAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // IFR meeting
  // {
  //   date: {
  //     day: "21",
  //     month: "July",
  //   },
  //   title: "Internal Fiscal Review Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202607/IFR_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // Board meeting
  // {
  //   date: {
  //     day: "21",
  //     month: "July",
  //   },
  //   title: "Board of Directors Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202607/Board_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },

  //Wellness events and flyer materials go here

  // August wellness webinars
  {
    date: {
      day: "11",
      month: "August",
    },
    title: "BCBS Webinar - Living Financially Well",
    description:
      "Join Blue Cross and Blue Shield for a webinar on strategies for living financially well. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/BCBS Webinar - Living Financially Well.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "18",
      month: "August",
    },
    title: "BCBS Webinar - Food as Medicine",
    description:
      "Join Blue Cross and Blue Shield for a webinar exploring how food choices impact your health and well-being. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/BCBS Webinar - Food as Medicine.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "19",
      month: "August",
    },
    title: "TSG Webinar - Gut Instincts",
    description:
      "Join The Solutions Group for a wellness webinar on gut health and its connection to overall well-being. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/TSG Webinar - Gut Instincts.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "24",
      month: "August",
    },
    title: 'BCBS Webinar - Setting the Table for "Healthy Eating"',
    description:
      "Join Blue Cross and Blue Shield for a webinar on building healthy eating habits and making nutritious choices. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/BCBS Webinar - Setting the Table for Healthy Eating.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "26",
      month: "August",
    },
    title: "BCBS Webinar - Trust Your Gut and Support a Healthy Microbiome",
    description:
      "Join Blue Cross and Blue Shield for a webinar on the microbiome and how to support a healthy gut. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/BCBS Webinar - Trust Your Gut and Support a Healthy Microbiome.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "27",
      month: "August",
    },
    title: "August 2026 Cooking Show",
    description:
      "Join us for this month's wellness cooking show. View the flyer for details and registration information.",
    linkHref: "/wellness/august_2026/08_August Cooking Show_2026.pdf",
    linkText: "View flyer",
  },

  // ongoing promotions
  {
    date: {
      day: "",
      month: "",
    },
    title:
      "Well onTarget Health Assessment - Blue Cross and Blue Shield Members",
    description:
      "It's time to take your health assessment and earn an additional 2500 blue points! It is important to take the health assessment because this will determine your personal wellness report, identify specific wellness goals, and recommend activities for you. The health assessment takes 10-15 minutes to complete and is confidential. Log into Well onTarget to complete.",
    linkHref:
      "https://account.wellontarget.com/login/?goto=https%3A%2F%2Fcim.wellontarget.com%3A443%2Fam%2Foauth2%2Fmembers%2Fauthorize%3Fclient_id%3Doauth_mma_wot_APP00046856%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%3A%2F%2Fwellontarget.onlifehealth.com%2FHome%2FLoginCallback%26response_type%3Dcode%26state%3DlvxXs0_4smsc0nS_5G7eRuRlHuz0p3bkQtyaiwDdpq8%26code_challenge%3D_6qUrUaOUTl6ttQ1OBjV98k6c47zYfUtPjIPhNsg3CQ%26code_challenge_method%3DS256%26service%3Dhcsc-members-mma-mfa%26locale%3Dwot&realm=/members&service=hcsc-members-mma-mfa",
    linkText: "Log into Well onTarget",
  },

  // modal trigger for poms Premium Credit and Deductible Programs for Sexual/Ethical Misconduct Claims
  {
    date: {
      day: "",
      month: "",
    },
    title: "NMPSIA Premium Credit and Deductible Programs",
    description:
      "Learn more about the NMPSIA Premium Credit and Deductible Programs for Sexual/Ethical Misconduct Claims.",
    linkHref: "#pomModal",
    linkText: "Learn more",
    modalTrigger: true,
  },
];

// News is rendered by index.html: renderNewsCards() populates #news-wrapper
// with .news-card markup and initializes Swiper on .news-swiper.
// This file only provides the homepageNews data array.
