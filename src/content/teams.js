// image imports to avoid StaticImage limitations
import leads from "../static/images/teams/leads.jpg";
import creative from "../static/images/teams/creative.jpg";
import content from "../static/images/teams/content.jpg";
import events from "../static/images/teams/events.jpg";
import internal from "../static/images/teams/internal.jpg";
import marketing from "../static/images/teams/marketing.jpg";
import pr from "../static/images/teams/pr.jpg";

const teams = [
  {
    i: 1,
    href: "leads",
    team: "Project Leads",
    teamBio:
      "Project Leads oversee TEDxSFU’s committees who are tasked with creating the 2021 event from top to bottom. They support all teams with their tasks as well as their personal development and team culture. They are also dedicated to bringing TEDxSFU back to life after the challenges of COVID-19.",
    img: leads,
    members: [
      {
        name: "Sara Milosavic",
        bio: "Sara is a recent SFU alumni who studied Interactive Arts and Technology, with a concentration in Interactive Systems. She is passionate about UX/UI design, interaction design, and animation and will be returning to school to study Compositing. She has worked for companies such as SFU and Fraser Health. What makes Sara bloom? Sara loves reading, traveling, and meeting new people to expand her mindset and push herself out of her comfort zone. Fun fact: Sara used to be a competitive ballroom dancer!",
        role: "Project Lead",
        pro: "She/Her",
        socials: {

        }
      },
      {
        name: "Vivian Wong",
        bio: "Vivian is one of the Project Leads for TEDxSFU 2021 and she is a 5th Year Health Sciences Student and is completing the Certificate of Entrepreneurship & Innovation Certificate. Within this past year, learning how to virtually communicate, organize, and solve problems has allowed her to bloom into a stronger individual and has pushed her beyond her limits. A fun fact about Vivian is that she’s a huge fan of Formula 1 Racing and has never drank coffee.",
        role: "Project Lead",
        pro: "She/Her",
        socials: {

        }
      },
    ],
  },
  {
    i: 2,
    href: "events",
    team: "Events",
    teamBio:
      "The Events Committee manages TEDxSFU's day-of logistics and helps bring the ‘TEDx experience’ to life for our audience! They coordinate with the entire team regarding day-of conference activities. They also manage a team of General Ambassadors, who help with engaging with our audience, planning small-scale events, and other responsibilities.",
    img: events,
    members: [
      {
        name: "Palak Jain",
        role: "Director",
        pro: "She/Her",
      },
      {
        name: "Rohina Gandhi",
        role: "Coordinator",
        pro: "She/Her",
      },
      {
        name: "Teresa Li",
        role: "Coordinator",
        pro: "She/Her",
      },
    ],
  },
  {
    i: 3,
    href: "content",
    team: "Content",
    teamBio:
      "TEDxSFU’s Content Development Committee looks to unearth local voices that have yet to be discovered. They are responsible for recruiting and working closely with the talent for the conference, including speakers, coaches, performers, and the master of ceremonies. They were also responsible for developing the “Bloom” theme for this year’s conference.",
    img: content,
    members: [
      {
        name: "Naghmi Shireen",
        role: "Director",
        pro: "She/Her",
      },
      {
        name: "Bomin Keum",
        role: "Coordinator",
        pro: "She/Her",
      },
      {
        name: "Nimra Askari",
        role: "Coordinator",
        pro: "She/Her",
      },
    ],
  },
  {
    i: 4,
    href: "creative",
    team: "Creative",
    teamBio:
      "The Creative Committee is in charge of all branding and visuals for the TEDxSFU brand and theme. They brought the TEDxSFU website to life and they design social media content and much more.",
    img: creative,
    members: [
      {
        name: "Alvin Leung",
        role: "Director",
        pro: "He/Him",
      },
      {
        name: "Lauren Mok",
        role: "Coordinator",
        pro: "She/They",
      },
      {
        name: "Sneha Shah",
        role: "Coordinator",
        pro: "She/They",
      },
      {
        name: "Gracie Gu",
        role: "Coordinator",
        pro: "She/They",
      },
      {
        name: "Matteo Miceli",
        role: "Web Developer",
        pro: "He/Him",
      },
    ],
  },
  {
    i: 5,
    href: "marketing",
    team: "Marketing",
    teamBio:
      "Marketing Committee develops and implements comprehensive marketing strategies to drive attendance to TEDxSFU 2021. They generate widespread awareness of the TEDxSFU brand, as well as increase attendee engagement to foster a positive experience for all through the ideation and implementation of creative marketing campaigns and speaker spotlights.",
    img: marketing,
    members: [
      {
        name: "Diana Kulikova",
        role: "Director",
        pro: "She/Her",
      },
      {
        name: "Manreet Mahal",
        role: "Coordinator",
        pro: "She/Her",
      },
      {
        name: "Carlos Lopez Sandoval",
        role: "Coordinator",
        pro: "He/Him",
      },
    ],
  },
  {
    i: 6,
    href: "pr",
    team: "Partner Relations",
    teamBio:
      "The Partner Relations Committee is responsible for reaching out and securing partners that will advance the conference, as well as align closely with TEDxSFU branding and values. They deliver persuasive pitches, negotiate strategically with potential partners, and maintain strong relationships with existing partners.",
    img: pr,
    members: [
      {
        name: "Shabnam Raufi",
        role: "Director",
        pro: "She/Her",
      },
      {
        name: "Isaac Maulana",
        role: "Coordinator",
        pro: "He/Him",
      },
      {
        name: "Ivy Lu",
        role: "Coordinator",
        pro: "She/Her",
      },
    ],
  },
  {
    i: 7,
    href: "internal",
    team: "Internal Relations",
    teamBio:
      "The Internal Committee ensures connectedness and inclusivity by creating a warm and welcoming environment for the entire OC. They focus on supporting everyone's growth through the team's Development Plan as well as making everyone feel connected during socials and icebreakers.",
    img: internal,
    members: [
      {
        name: "Christina Walker",
        role: "Director",
        pro: "She/Her",
      },
      {
        name: "Angela Sheenmar",
        role: "Coordinator",
        pro: "She/Her",
      },
      {
        name: "Ronak Salamat",
        role: "Coordinator",
        pro: "She/Her",
      },
    ],
  },
];

export default teams;
