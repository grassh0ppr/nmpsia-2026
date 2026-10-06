// object holding news items to be rendered to the page
const homepageNews = [
  // notice of public meetings - OCTOBER 14 & 15, 2026
  // {
  //   date: {
  //     day: "10",
  //     month: "October",
  //   },
  //   title: "Notice of Public Meetings October 14 & 15, 2026",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202610/notice_of_public_meetings.pdf",
  //   linkText: "View notice",
  // },
  // BAC Meeting
  // {
  //   date: {
  //     day: "14",
  //     month: "October",
  //   },
  //   title: "Benefits Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202610/BAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // RAC meeting
  // {
  //   date: {
  //     day: "14",
  //     month: "October",
  //   },
  //   title: "Risk Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202610/RAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // IFR meeting
  // {
  //   date: {
  //     day: "15",
  //     month: "October",
  //   },
  //   title: "Internal Fiscal Review Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202610/IFR_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // Board meeting
  // {
  //   date: {
  //     day: "15",
  //     month: "October",
  //   },
  //   title: "Board of Directors Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202610/Board_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },

  //Wellness events and flyer materials go here

  // October wellness webinars
  {
    date: {
      day: "20",
      month: "October",
    },
    title: "Webinar - Healthy Bones and Joints",
    description:
      "Learn how to keep your bones and joints strong and healthy. View the flyer for details and registration information.",
    linkHref: "/wellness/october_2026/Healthy_Bones_and_Joints.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "21",
      month: "October",
    },
    title: "TSG Webinar - Chair Repair: Undoing the Damage of Sitting",
    description:
      "Join The Solutions Group for a wellness webinar on reversing the effects of prolonged sitting on your body. View the flyer for details and registration information.",
    linkHref:
      "/wellness/october_2026/October_Wellness_2026_Webinars_TSG_10.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "22",
      month: "October",
    },
    title:
      "TSG Cooking Show - Chili Today, Calm Tomorrow: Foods for Body & Soul",
    description:
      "Join The Solutions Group for this month's wellness cooking show featuring foods that nourish both body and mind. View the flyer for details.",
    linkHref: "/wellness/october_2026/10_October_Cooking_Show_2026.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "26",
      month: "October",
    },
    title: "Webinar - Hydration and Exercise",
    description:
      "Learn how proper hydration supports your workout performance and recovery. View the flyer for details and registration information.",
    linkHref: "/wellness/october_2026/Hydration_and_Outdoor_Exercise.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "28",
      month: "October",
    },
    title: "Webinar - Exercise for a Healthier You",
    description:
      "Discover practical strategies for building an exercise routine that improves your overall health and well-being. View the flyer for details and registration information.",
    linkHref: "/wellness/october_2026/Exercise_for_a_Healthier_You.pdf",
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
