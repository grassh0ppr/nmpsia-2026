// object holding news items to be rendered to the page
const homepageNews = [
  // notice of public meetings - JULY 20 & 21, 2026
  {
    date: {
      day: "15",
      month: "July",
    },
    title: "Notice of Public Meetings July 20 & 21, 2026",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
    linkHref:
      "https://nmpsia.com/nmpsiadownload/202607/notice_of_public_meetings.pdf",
    linkText: "View notice",
  },
  // BAC Meeting
  // {
  //   date: {
  //     day: "03",
  //     month: "June",
  //   },
  //   title: "Benefits Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202606/BAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // RAC meeting
  // {
  //   date: {
  //     day: "03",
  //     month: "June",
  //   },
  //   title: "Risk Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202606/RAC_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // IFR meeting
  // {
  //   date: {
  //     day: "04",
  //     month: "June",
  //   },
  //   title: "Internal Fiscal Review Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202606/IFR_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // Board meeting
  // {
  //   date: {
  //     day: "04",
  //     month: "June",
  //   },
  //   title: "Board of Directors Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202606/Board_Meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },

  //Wellness events go here

  // Webinar - Sugar Smarts: Modern Strategies to Outsmart Diabetes - July 15
  {
    date: {
      day: "15",
      month: "July",
    },
    title:
      "July 15, 2026: Webinar - Sugar Smarts: Modern Strategies to Outsmart Diabetes",
    description:
      "Diabetes prevention is about so much more than sugar. This session reveals the hidden drivers of blood sugar imbalance—including low muscle mass, poor sleep, and chronic stress—and demonstrates how small, consistent changes can have a significant impact. Participants will leave with real-world strategies for building resilience against diabetes.",
    linkHref:
      "/wellness/july_2026/TSG_Wellness_Webinar_Sugar_Smarts_Diabetes.pdf",
    linkText: "View flyer",
  },
  // Webinar - Diabetes 101 - July 21
  {
    date: {
      day: "21",
      month: "July",
    },
    title: "July 21, 2026: Webinar - Diabetes 101",
    description:
      "Join BCBS for a wellness webinar on understanding diabetes. We will learn about the basics of diabetes, the different types of diabetes, the symptoms of diabetes, and daily steps you can take for prevention and management.",
    linkHref: "/wellness/july_2026/BCBS_Webinar_Diabetes_101.pdf",
    linkText: "View flyer",
  },
  // Cooking Show - Grillin' and Chillin' - July 23
  {
    date: {
      day: "23",
      month: "July",
    },
    title:
      "July 23, 2026: Cooking Show - Grillin' and Chillin' for Heart Healthy Thrills",
    description:
      "July is grilling season, and these recipes prove that summer flavors can be both bold and nourishing. With lean proteins, antioxidant-rich vegetables, and heart-healthy fats, this month celebrates vitality and safe sun living. Each dish is designed to fuel long summer days while keeping wellness at the forefront",
    linkHref: "/wellness/july_2026/07_July_Cooking_Show_2026.pdf",
    linkText: "View flyer",
  },
  // Webinar - Living Well with Diabetes - July 27
  {
    date: {
      day: "27",
      month: "July",
    },
    title: "July 27, 2026: Webinar - Living Well with Diabetes",
    description:
      "Learn about symptoms of diabetes, various medications, and lifestyle changes to manage diabetes.",
    linkHref: "/wellness/july_2026/BCBS_Webinar_Living_Well_with_Diabetes.pdf",
    linkText: "View flyer",
  },
  // Webinar - Nutrition and Diabetes - July 29
  {
    date: {
      day: "29",
      month: "July",
    },
    title: "July 29, 2026: Webinar - Nutrition and Diabetes",
    description:
      "Learn about how nutition affects diabetes, how to set up a healthy plate, the best carbs to consume, and healthy snacking ideas.",
    linkHref: "/wellness/july_2026/BCBS_Nutrition_and_Diabetes_Webinar.pdf",
    linkText: "View flyer",
  },
  // Ongoing wellness promotions
  {
    date: {
      day: "",
      month: "",
    },
    title: "Presbyterian Fitness Pass",
    description:
      "Learn about the Presbyterian Fitness Pass and how to access participating fitness facilities.",
    linkHref: "/wellness/july_2026/Presbyterian_Fitness_Pass.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "Life on Mindfulness Program",
    description:
      "Explore guided meditations, teachings, and mindfulness practices through the Life on Mindfulness program.",
    linkHref: "/wellness/july_2026/Life_on_Mindfulness_2026_NMPSIA.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "Mindful Eating Program",
    description:
      "Learn about the NMPSIA Mindful Eating Program and how to enroll.",
    linkHref: "/wellness/july_2026/NMPSIA_Mindful_Eating_Program.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "Welcoa WellBalanced Diabetes Prevention Program",
    description:
      "Learn about the Welcoa WellBalanced Diabetes Prevention Program.",
    linkHref: "/wellness/july_2026/Welcoa_WellBalanced_Diabetes_Prevention.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "",
      month: "",
    },
    title: "NMPSIA Wellness Ambassador Program 2026-27",
    description:
      "Learn about the NMPSIA Wellness Ambassador Program for 2026-27 and how to get involved.",
    linkHref: "/wellness/july_2026/NMPSIA_Wellness_Ambassador_Flyer_26_27.pdf",
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
    linkHref: "/wellness/july_2026/Full_Body_Workplace_Stretching_Program.pdf",
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
