// object holding news items to be rendered to the page
const homepageNews = [
  // Well onTarget Health Assessment
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

  // notice of public meetings - MARCH 2026
  {
    date: {
      day: "27",
      month: "Feb",
    },
    title: "Notice of Public Meetings March 4 & 5, 2026",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
    linkHref:
      "https://nmpsia.com/nmpsiadownload/202603/notice_of_public_meetings.pdf",
    linkText: "View notice",
  },
  // BAC Meeting
  {
    date: {
      day: "04",
      month: "Mar",
    },
    title: "Benefits Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202603/BAC_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },
  // RAC meeting
  {
    date: {
      day: "04",
      month: "Mar",
    },
    title: "Risk Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202603/RAC_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },
  // IFR meeting
  {
    date: {
      day: "05",
      month: "Mar",
    },
    title: "Internal Fiscal Review Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202603/IFR_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },
  // Board meeting
  {
    date: {
      day: "05",
      month: "Mar",
    },
    title: "Board of Directors Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202603/Board_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },
  // March 2026 Wellness Webinars & Events
  {
    date: {
      day: "17",
      month: "Mar",
    },
    title: "March 17, 2026 Webinar – Trending in Nutrition",
    description:
      "Learn about the latest trends in nutrition and how to apply them to your daily routine.",
    linkHref:
      "/wellness/march_2026/3-17-2026 Webinar Trending in Nutrition.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "18",
      month: "Mar",
    },
    title: "March 18, 2026 Webinar – TheSolutionsGroup Well-Being 2026",
    description:
      "Join The Solutions Group for a well-being webinar focused on supporting your health in 2026.",
    linkHref:
      "/wellness/march_2026/3-18-2026 TheSolutionsGroup Well-Being 2026 Webinars.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "25",
      month: "Mar",
    },
    title: "March 25, 2026 Webinar – The Power of Prevention",
    description:
      "Discover practical strategies to prevent illness and support long-term wellness.",
    linkHref:
      "/wellness/march_2026/3-25-2026 Webinar - The Power of Prevention.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "26",
      month: "Mar",
    },
    title:
      "March 26, 2026 Cooking Show – Noodle Your Way to a Balanced Plate",
    description:
      "Watch a live cooking show and learn how to build a balanced plate with noodle-based recipes.",
    linkHref:
      "/wellness/march_2026/3-26-2026 Cooking Show - Noodle Your Way to a Balanced Plate.pdf",
    linkText: "View flyer",
  },
  {
    date: {
      day: "30",
      month: "Mar",
    },
    title: "March 30, 2026 Webinar – Colorectal Cancer Awareness",
    description:
      "Learn important information about colorectal cancer prevention, screening, and early detection.",
    linkHref:
      "/wellness/march_2026/3-30-2026 Webinar - Colorectal Cancer Awareness.pdf",
    linkText: "View flyer",
  },

  // Kitchen Confidence (4-week email series)
  {
    date: {
      day: "",
      month: "",
    },
    title: "Kitchen Confidence (4-week email series)",
    description:
      "Register to receive weekly emails with video demonstrations, recipes, a challenge, practical tips, and resources to level up your kitchen skills for you and your family.",
    linkHref:
      "https://solutionsbiz.us7.list-manage.com/subscribe?u=2329664a7d85671709714e0d4&id=d23bdf9f19",
    linkText: "Register",
  },

  // Life on Mindfulness
  {
    date: {
      day: "",
      month: "",
    },
    title: "Life on Mindfulness (On-demand platform)",
    description:
      "On-demand, online platform that gives users a clear and dynamic roadmap toward a life of greater health, well-being and a lot less stress through mindfulness. Access daily live drop-in meditations with Michelle DuVal, MA, plus a 300+ library of guided meditations.",
    linkHref: "https://nmspiaregistration1.themindfulcenter.com",
    linkText: "Register",
  },

  // On-Demand Mindfulness Program: 21-Day Meditation Challenge
  {
    date: {
      day: "",
      month: "",
    },
    title: "On-Demand Mindfulness: 21-Day Meditation Challenge",
    description:
      "A 3-week online challenge with short daily video teachings from Michelle DuVal to guide you through a curated order of meditations and work through common obstacles.",
    linkHref:
      "https://themindful-e-center.com/courses/0000009d-000b-4489-52b1-00000000014c/checkout/price-2HJLm5wNyLDRVJ-vfynYjA",
    linkText: "Start challenge",
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
