// object holding news items to be rendered to the page
const homepageNews = [
  // notice of public meetings - JUNE 3 & 4, 2026
  {
    date: {
      day: "29",
      month: "May",
    },
    title: "Notice of Public Meetings June 3 & 4, 2026",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
    linkHref:
      "https://nmpsia.com/nmpsiadownload/202606/notice_of_public_meetings.pdf",
    linkText: "View notice",
  },
  // BAC Meeting
  {
    date: {
      day: "03",
      month: "June",
    },
    title: "Benefits Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202606/BAC_Meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // RAC meeting
  {
    date: {
      day: "03",
      month: "June",
    },
    title: "Risk Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202606/RAC_Meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // IFR meeting
  {
    date: {
      day: "04",
      month: "June",
    },
    title: "Internal Fiscal Review Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202606/IFR_Meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // Board meeting
  {
    date: {
      day: "04",
      month: "June",
    },
    title: "Board of Directors Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202606/Board_Meeting_agenda.pdf",
    linkText: "View agenda",
  },

  //Wellness events go here

  // Wellness Events Calendar - June 2026
  {
    date: {
      day: "",
      month: "",
    },
    title: "NMPSIA Wellness Events Calendar - June 2026",
    description:
      "View the full calendar of NMPSIA wellness events and activities for June 2026.",
    linkHref: "/wellness/June_2026/NMPSIA Wellness Calendar June 2025.pdf",
    linkText: "View calendar",
  },
  // Navigating the Grocery Store - June 16
  {
    date: {
      day: "16",
      month: "June",
    },
    title: "Navigating the Grocery Store",
    description:
      "Join us for a wellness webinar on how to navigate the grocery store for healthier choices.",
    linkHref: "/wellness/June_2026/Navigating the Grocery Store.pdf",
    linkText: "View flyer",
  },
  // TSG Wellness Webinar - June 17
  {
    date: {
      day: "17",
      month: "June",
    },
    title:
      "TSG Wellness Webinar - The Silent Storm: Spotting Metabolic Syndrome Early",
    description: "Join the TSG monthly wellness webinar for June 2026.",
    linkHref: "/wellness/June_2026/June Wellness 2026 Webinars TSG_06.pdf",
    linkText: "View flyer",
  },
  // Nutrition and Heart Health - June 17
  {
    date: {
      day: "17",
      month: "June",
    },
    title: "Nutrition and Heart Health",
    description:
      "Join us for a wellness webinar on nutrition and heart health.",
    linkHref: "/wellness/June_2026/Nutrition and Heart Health.pdf",
    linkText: "View flyer",
  },
  // Trending in Nutrition - June 22
  {
    date: {
      day: "22",
      month: "June",
    },
    title: "Webinar - Trending in Nutrition",
    description:
      "Join us for a wellness webinar on the latest trends in nutrition.",
    linkHref: "/wellness/June_2026/Trending in Nutrition.pdf",
    linkText: "View flyer",
  },
  // June 2026 Cooking Show - June 25
  {
    date: {
      day: "25",
      month: "June",
    },
    title:
      "June 2026 Cooking Show - Stacking Pancakes and Sipping Smarts: Fuel for Muscles and Minds",
    description: "Join us for the June 2026 wellness cooking show.",
    linkHref: "/wellness/June_2026/06_June Cooking Show_2026.pdf",
    linkText: "View flyer",
  },
  // Ongoing wellness promotions
  {
    date: {
      day: "",
      month: "",
    },
    title: "The Mindful Center - Mindful Blood Pressure Reduction Program",
    description:
      "Learn about the Mindful Blood Pressure Reduction Program offered through The Mindful Center.",
    linkHref:
      "/wellness/June_2026/Mindful Blood Pressure Reduction - NMPSIA.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "Feeling Stiff? Full Body Workplace Stretching 6-Week Program",
    description:
      "Join the 6-week full body workplace stretching program to improve flexibility and reduce stiffness.",
    linkHref: "/wellness/June_2026/Full Body Workplace Stretching Program.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "Find the Right Nutrition Program for You - Presbyterian",
    description:
      "Take the Presbyterian survey to find the right nutrition program for you.",
    linkHref: "/wellness/June_2026/Qualtrics Survey- Presbyterian.pdf",
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
