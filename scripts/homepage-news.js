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

  // notice of public meetings - DECEMBER MEETINGS
  // {
  //   date: {
  //     day: "26",
  //     month: "Nov",
  //   },
  //   title: "Notice of Public Meetings December 3 & 4, 2025",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
  //   linkHref:
  //     "https://nmpsia.com/nmpsiadownload/202512/notice_of_public_meetings.pdf",
  //   linkText: "View notice",
  // },
  // BAC Meeting
  // {
  //   date: {
  //     day: "03",
  //     month: "Dec",
  //   },
  //   title: "Benefits Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202512/BAC_meeting_agenda.pdf",
  //   linkText: "View agenda",
  // },
  // RAC meeting
  // {
  //   date: {
  //     day: "03",
  //     month: "Dec",
  //   },
  //   title: "Risk Advisory Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202512/RAC_Meeting_Agenda.pdf",
  //   linkText: "View agenda",
  // },

  // IFR meeting
  // {
  //   date: {
  //     day: "04",
  //     month: "Dec",
  //   },
  //   title: "Internal Fiscal Review Committee Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202512/IFR_Meeting_Agenda.pdf",
  //   linkText: "View agenda",
  // },

  // Board meeting
  // {
  //   date: {
  //     day: "04",
  //     month: "Dec",
  //   },
  //   title: "Board of Directors Meeting",
  //   description:
  //     "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
  //   linkHref: "/nmpsiadownload/202512/Board_Meeting_Agenda_r.pdf",
  //   linkText: "View agenda",
  // },

  // BCBS Webinar - Trending in Nutrition
  {
    date: {
      day: "20",
      month: "Jan",
    },
    title: "BCBS Health Education Webinar - Trending in Nutrition",
    description:
      "Tuesday, January 20, 2026. Explore the latest trends in nutrition and learn how to make informed choices for your health and wellness.",
    linkHref: "/wellness/january_2026/Trending in Nutrition BCBSNM.pdf",
    linkText: "Register",
  },

  // TSG Monthly Webinar - The Energy Trifecta
  {
    date: {
      day: "21",
      month: "Jan",
    },
    title: "TSG Monthly Webinar: The Energy Trifecta: Eat, Move, Sleep, Repeat",
    description:
      "Wednesday, January 21, 2026. Discover how the interconnected elements of nutrition, movement, and sleep work together to optimize your energy levels and overall well-being.",
    linkHref: "/wellness/january_2026/TSG Well-Being 2026 Webinars_01 (1).pdf",
    linkText: "Register",
  },

  // TSG Monthly Cooking Show - Nourish Your Immunity
  {
    date: {
      day: "22",
      month: "Jan",
    },
    title:
      "TSG Monthly Cooking Show: Nourish Your Immunity, Energize Your Year",
    description:
      "Thursday, January 22, 2026. Learn how to prepare immune-boosting recipes that will help you start the year strong and maintain your energy throughout the seasons.",
    linkHref: "/wellness/january_2026/01_Cooking Show_January 2026.pdf",
    linkText: "Register",
  },

  // BCBS Webinar - Weaving Well-Being Into Our Lives
  {
    date: {
      day: "26",
      month: "Jan",
    },
    title: "BCBS Health Education Webinar - Weaving Well-Being Into Our Lives",
    description:
      "Monday, January 26, 2026. Learn practical strategies for integrating wellness practices into your daily routine to create a more balanced and fulfilling life.",
    linkHref:
      "/wellness/january_2026/Weaving Wellbeing into Our Lives BCBSNM.pdf",
    linkText: "Register",
  },

  // BCBS Webinar - New Year, New You
  {
    date: {
      day: "28",
      month: "Jan",
    },
    title: "BCBS Health Education Webinar - New Year, New You",
    description:
      "Wednesday, January 28, 2026. Start the year with intention and discover actionable steps to achieve your health and wellness goals for 2026.",
    linkHref: "/wellness/january_2026/New Year, New You BCBSNM.pdf",
    linkText: "Register",
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

// function to render news items to the page
// function renderNews() {
//   const newsContainer = document.getElementById("news-container");
//   let newsHTML = "";

//   for (let i = 0; i < homepageNews.length; i++) {
//     const newsItem = homepageNews[i];
//     newsHTML += /*html*/ `
//       <div class="swiper-slide">
//         <div class="happHeading">
//           ${
//             newsItem.date
//               ? `<div class="happDate mb-2 text-light">
// 						<span>${newsItem.date.day}</span>
// 						<span>${newsItem.date.month}</span>
// 						</div>`
//               : `<div class="happDate" style="max-width: 12px"></div>`
//           }
//           <div class="happTitle">
//           <a href="${newsItem.linkHref}" ${
//       newsItem.modalTrigger
//         ? 'data-bs-toggle="modal" data-bs-target="' + newsItem.linkHref + '"'
//         : 'target="_blank"'
//     }">
//             <h3>${newsItem.title}</h3>
//             </a>
//           </div>
//         </div>
//         <div class="lower">
//             <div class="happContent">${newsItem.description}</div>

//         </div>
//       </div>
//     `;
//   }

//   newsContainer.innerHTML = newsHTML;
// }

// renderNews();

// Swiper initialization is now handled in index.html
