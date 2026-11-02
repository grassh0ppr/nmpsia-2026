// object holding news items to be rendered to the page
const homepageNews = [
  // notice of public meetings - OCTOBER 14 & 15, 2026
  {
    date: {
      day: "30",
      month: "October",
    },
    title: "Notice of Public Meetings November 4 & 5, 2026",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
    linkHref: "/nmpsiadownload/202611/notice_of_public_meetings.pdf",
    linkText: "View notice",
  },
  // BAC Meeting
  {
    date: {
      day: "4",
      month: "November",
    },
    title: "Benefits Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202611/BAC_Meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // RAC meeting
  {
    date: {
      day: "4",
      month: "November",
    },
    title: "Risk Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202611/RAC_Meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // IFR meeting
  {
    date: {
      day: "5",
      month: "November",
    },
    title: "Internal Fiscal Review Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202611/IFR_Meeting_agenda.pdf?v=2",
    linkText: "View agenda",
  },
  // Board meeting
  {
    date: {
      day: "5",
      month: "November",
    },
    title: "Board of Directors Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202611/Board_Meeting_agenda.pdf?v=3",
    linkText: "View agenda",
  },

  //Wellness events and flyer materials go here

  // November wellness webinars and cooking show
  {
    date: {
      day: "10",
      month: "November",
    },
    title: "Webinar - Stress Less; Live More",
    description:
      "Join to learn the causes and effects of stress, how your mood and food can affect stress, and stress management tips and techniques to control your stress this holiday season. Tuesday, November 10 at 3:30 p.m. View the flyer for details and registration information.",
    linkHref: "/wellness/november_2026/Webinar - Stress Less-Live More.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "16",
      month: "November",
    },
    title: "Webinar - Setting the Table for Healthy Eating",
    description:
      "Join to learn how to read nutrition facts labels, ways to shop smarter and make healthier choices, and making healthier food choices at home and while eating out during the holiday season. Monday, November 16 at 8:30 a.m. and 3:45 p.m. (only 15 minutes!). View the flyer for details and registration information.",
    linkHref:
      "/wellness/november_2026/Webinar - Setting the Table for Healthy Eating.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "18",
      month: "November",
    },
    title: "TSG Webinar - Pain, Pain, Go Away: Injury Insights",
    description:
      "Pain is one of the most common health complaints, but it doesn't have to be a life sentence. Join for practical strategies to strengthen common areas to reduce risk of injury, healthy movement habits, body awareness, lifestyle factors that influence pain, and when to seek guidance from healthcare professionals. Wednesday, November 18, Noon–1:00 PM. View the flyer for details and registration information.",
    linkHref: "/wellness/november_2026/November Wellness 2026 Webinars TSG.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "19",
      month: "November",
    },
    title: "TSG Cooking Show - Gobble Up Goodness: Carbs That Care for You",
    description:
      "November celebrates the grounding power of sweet potatoes while honoring steady blood sugar during Diabetes Awareness Month. These dishes show how complex carbs can be satisfying, stabilizing, and packed with nutrients. Comfort and nourishment come together in recipes that fuel resilience. Thursday, November 19, Noon–1:00 PM. View the flyer for details.",
    linkHref: "/wellness/november_2026/11_November Cooking Show_2026.pdf",
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
