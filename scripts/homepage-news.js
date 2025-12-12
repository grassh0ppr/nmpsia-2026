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
  {
    date: {
      day: "26",
      month: "Nov",
    },
    title: "Notice of Public Meetings December 3 & 4, 2025",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Monthly Meetings held in person and virtually...",
    linkHref:
      "https://nmpsia.com/nmpsiadownload/202512/notice_of_public_meetings.pdf",
    linkText: "View notice",
  },
  // BAC Meeting
  {
    date: {
      day: "03",
      month: "Dec",
    },
    title: "Benefits Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Benefits Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202512/BAC_meeting_agenda.pdf",
    linkText: "View agenda",
  },
  // RAC meeting
  {
    date: {
      day: "03",
      month: "Dec",
    },
    title: "Risk Advisory Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Risk Advisory Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202512/RAC_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },

  // IFR meeting
  {
    date: {
      day: "04",
      month: "Dec",
    },
    title: "Internal Fiscal Review Committee Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's IFR Committee Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202512/IFR_Meeting_Agenda.pdf",
    linkText: "View agenda",
  },

  // Board meeting
  {
    date: {
      day: "04",
      month: "Dec",
    },
    title: "Board of Directors Meeting",
    description:
      "Notice is hereby given of the New Mexico Public Schools Insurance Authority's Board of Directors Meeting held in person and virtually...",
    linkHref: "/nmpsiadownload/202512/Board_Meeting_Agenda_r.pdf",
    linkText: "View agenda",
  },

  // December 2025 Event Calendar
  {
    date: {
      day: "",
      month: "",
    },
    title: "2025 December Event Calendar",
    description:
      "View the complete calendar of wellness events, webinars, and activities scheduled for December 2025.",
    linkHref:
      "https://nmpsia.com/wellness/december_2025/2025 December Event Calendar.pdf",
    linkText: "View calendar",
  },

  // December Observance Poster - Understanding Compassion Fatigue
  {
    date: {
      day: "",
      month: "",
    },
    title: "December 2025 Poster - Understanding Compassion Fatigue",
    description:
      "Learn about compassion fatigue and how to recognize and manage emotional exhaustion during the holiday season.",
    linkHref:
      "https://nmpsia.com/wellness/december_2025/12_December Poster_2025.pdf",
    linkText: "View poster",
  },

  // December Observance Poster - Understanding Compassion Fatigue (Spanish)
  {
    date: {
      day: "",
      month: "",
    },
    title: "December 2025 Poster - Understanding Compassion Fatigue (Español)",
    description:
      "Aprenda sobre la fatiga por compasión y cómo reconocer y manejar el agotamiento emocional durante la temporada navideña.",
    linkHref:
      "https://nmpsia.com/wellness/december_2025/12_December Poster_2025 SP.pdf",
    linkText: "Ver póster",
  },

  // 10-Day Workplace Gratitude Challenge
  {
    date: {
      day: "08",
      month: "Dec",
    },
    title: "10-Day Workplace Gratitude Challenge",
    description:
      "NMPSIA Wellness invites you to join a 10-day gratitude challenge designed to cultivate a positive workplace atmosphere before the holiday break. Challenge runs December 8-19. Submit Challenge Tracker by December 23, 2025.",
    linkHref:
      "https://nmpsia.com/wellness/december_2025/NMPSIA Winter Gratitude Challenge.pdf",
    linkText: "Learn more",
  },

  // BCBS Programming - The Power of Social Connection
  {
    date: {
      day: "09",
      month: "Dec",
    },
    title: "Health Education Webinar - The Power of Social Connection",
    description:
      "Tuesday, December 9, 2025, 3:30 – 4:00 p.m. We will learn why social well-being is important, how it is linked to our overall well-being, three vital components to social well-being, and strategies to improve your social well-being.",
    linkHref:
      "https://web.cvent.com/event/9be91499-5c9c-4ff8-94bd-94b164b4e3ba/summary?environment=P2",
    linkText: "Register Here",
  },

  // TSG Monthly Webinar - The Heart of Caring
  {
    date: {
      day: "17",
      month: "Dec",
    },
    title:
      "TSG Monthly Webinar: The Heart of Caring: Managing Compassion Fatigue During the Holidays",
    description:
      "Wednesday, December 17, NOON – 1:00 PM. Explore compassion fatigue and how to recognize and manage emotional exhaustion. This webinar will equip you with tools for building resilience and staying balanced in times of high stress, especially during the hectic holiday season. Recording available after registration.",
    linkHref:
      "https://phs-org-corp.zoom.us/webinar/register/WN_ivMhnmYoQNWgoriv6_qsSA#/registration",
    linkText: "Click here to Register",
  },

  // TSG Monthly Cooking Show - Soul-Soothing Sips and Citrus Bliss
  {
    date: {
      day: "18",
      month: "Dec",
    },
    title: "TSG Monthly Cooking Show: Soul-Soothing Sips and Citrus Bliss",
    description:
      "Thursday, December 18, NOON – 1:00 PM. Get ready for a warm hug in a bowl that revives your spirit, followed by a bright, tangy treat perfect for any moment. Whether you're craving comfort or a little sweetness, these recipes will bring joy to your table with every spoonful and slice. Recording available after registration.",
    linkHref:
      "https://phs-org-corp.zoom.us/webinar/register/WN_m4qOFtA-Tlu1F5WRcFlhmw",
    linkText: "Click here to Register",
  },

  // Well Balanced: Navigating Holiday Stress
  {
    date: {
      day: "",
      month: "",
    },
    title: "Well Balanced: Navigating Holiday Stress",
    description:
      "The holiday season can be a complex time for many. Learn strategies to practice gratitude, manage stress, and navigate the holidays with greater ease.",
    linkHref:
      "https://nmpsia.com/wellness/december_2025/WA2512905-Well-Balanced-Dec-25_FNL.pdf",
    linkText: "Read newsletter",
  },

  // On-Demand Mindfulness Program: Walking into Mindfulness - FINAL MONTH
  {
    date: {
      day: "",
      month: "",
    },
    title: "On-Demand Mindfulness: Walking into Mindfulness - FINAL MONTH!",
    description:
      "Discover the art of turning each step into a practice of presence. In this 3-part online program, you'll explore the many benefits of walking meditation and mindfulness — from calming the nervous system and reducing stress, to increasing focus, clarity, and a felt sense of connection with your body and surroundings.",
    linkHref:
      "https://themindful-e-center.com/courses/c85ad140-db61-4bd8-a209-c5b1c5ea4abd/checkout/price-MAJe_cujbq9SYnxtFEZUbw",
    linkText: "Register now",
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
