// image imports to avoid StaticImage limitations

// import leads from "../static/images/teams/leads.jpg";
// import creative from "../static/images/teams/creative.jpg";
// import content from "../static/images/teams/content.jpg";
// import events from "../static/images/teams/events.jpg";
// import internal from "../static/images/teams/internal.jpg";
// import marketing from "../static/images/teams/marketing.jpg";
// import pr from "../static/images/teams/pr.jpg";

// const leads = require("../static/images/teams/leads.jpg");
// const creative = require("../static/images/teams/creative.jpg");
// const content = require("../static/images/teams/content.jpg");
// const events = require("../static/images/teams/events.jpg");
// const internal = require("../static/images/teams/internal.jpg");
// const marketing = require("../static/images/teams/marketing.jpg");
// const pr = require("../static/images/teams/pr.jpg");

const leads = "/images/teams/project-lead.jpg";
const creative = "/images/teams/creative-team.jpg";
const content = "/images/teams/content-team.jpg";
const events = "/images/teams/events-team.jpg";
const internal = "/images/teams/internal-team.jpg";
const marketing = "/images/teams/marketing-team.jpg";
const pr = "/images/teams/pr-team.jpg";
const speakerCoach = "/images/teams/speaker-coach.jpg";
const licenseHolder = "/images/teams/license-holder.jpg";

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
        img: "/images/teambio/sara.jpg",
        imgWide: true,
        bio:
          "Sara is a recent SFU alumni who studied Interactive Arts and Technology, with a concentration in Interactive Systems. She is passionate about UX/UI design, interaction design, and animation and will be returning to school to study Compositing. She has worked for companies such as SFU and Fraser Health. What makes Sara bloom? Sara loves reading, traveling, and meeting new people to expand her mindset and push herself out of her comfort zone. Fun fact: Sara used to be a competitive ballroom dancer!",
        role: "Project Lead",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/saramilosavic/",
          linked: "https://www.linkedin.com/in/saramilosavic/",
        },
      },
      {
        name: "Vivian Wong",
        img: "/images/teambio/vivian.jpg",
        bio:
          "Vivian is one of the Project Leads for TEDxSFU 2021 and she is a 5th Year Health Sciences Student and is completing the Certificate of Entrepreneurship & Innovation Certificate. Within this past year, learning how to virtually communicate, organize, and solve problems has allowed her to bloom into a stronger individual and has pushed her beyond her limits. A fun fact about Vivian is that she’s a huge fan of Formula 1 Racing and has never drank coffee.",
        role: "Project Lead",
        pro: "She/Her",
        socials: {
          linked: "https://www.linkedin.com/in/vivian-wong-114032164",
        },
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
        img: "/images/teambio/palak.jpg",
        bio:
          "With the passion of helping people out and wanting to be a criminal lawyer, Palak is a third year student majoring in Criminology with a minor in business. She loves to read novels, meet new people, explore downtown and make more connections. Having a strong work ethic and helping people around her achieve their best ability makes her BLOOM. A fun fact about her is once she reads something, she will never forget it.",
        role: "Director",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/palaaakkkk/",
          linked: "https://www.linkedin.com/in/palak-jain-621442206",
        },
      },
      {
        name: "Rohina Gandhi",
        img: "/images/teambio/rohina.jpg",
        imgWide: true,
        bio:
          "This is Rohina and she is in her second year studying at Beedie. She intends to concentrate in Finance & International Business. Something that makes her Bloom is dancing and being on stage! And a fun fact about her - she can solve the 3x3 Rubik's cube!",
        role: "Coordinator",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/rohina777/",
          linked: "https://www.linkedin.com/in/rohina-gandhi-79026b1b8/",
        },
      },
      {
        name: "Teresa Li",
        img: "/images/teambio/teresa.jpg",
        imgWide: true,
        bio:
          "Teresa is a third-year Business Administration student concentrating in Accounting. Something that makes her Bloom is spending quality time with her friends and family. A fun fact is that she has travelled to 20 countries, with her favourite city being Tokyo, Japan, because of the delicious food and matcha desserts.",
        role: "Coordinator",
        pro: "She/Her",
        socials: {
          linked: "https://www.linkedin.com/in/teresa-li/",
        },
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
        img: "/images/teambio/naghmi.jpg",
        bio:
          "Naghmi is a lecturer, a researcher, a designer, and an entrepreneur. She is a recent PhD graduate from SFU. Her research work involves studying the designers’ use of digital media in design exploration. Apart from working as a Content Director at TEDxSFU, she works as a CEO of Making HER Future!, StudioXplor and runs her own podcast called Make Change Studio. What makes her Bloom is socializing with like-minded people.",
        role: "Director",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/nshireen/",
          linked: "https://www.linkedin.com/in/naghmi-shireen/",
        },
      },
      {
        name: "Bomin Keum",
        img: "/images/teambio/bomin.jpg",
        imgWide: true,
        bio:
          'A common question of “where are you from?” doesn’t really work for Bomin, because she is from China, Bangladesh, Thailand, Korea, and Canada. Double majoring in Criminology and International Relations, Bomin blooms when she finds herself engaged in the topics of international security, identity politics, and state terrorism. Her life is going pretty okay, but when things go downhill, she likes to go karaoke, eat Ma-La hotpot, or sob while watching the TV series "This is Us." And of course.... MATCHA🍵',
        role: "Coordinator",
        pro: "She/Her",
        socials: {},
      },
      {
        name: "Nimra Askari",
        img: "/images/teambio/nimra.jpg",
        bio:
          "Nimra is currently a second-year undergraduate student at SFU. She is studying Psychology and Minoring in Counselling and Human Development. In Nimra’s free time she enjoys writing poetry. Writing is one of the things that makes her Bloom, as well as her supportive friends, her love for hiking, and painting. One fun fact about Nimra is that her favorite comfort food is popcorn or noodles!",
        role: "Coordinator",
        pro: "She/Her",
        socials: {
          facebook: "https://www.facebook.com/nimra.askari.18/",
        },
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
        name: "Lauren Mok",
        img: "/images/teambio/lauren.jpg",
        imgWide: true,
        bio:
          "With a love for coffee and Studio Ghibli films, Lauren is a third-year Interactive Arts and Technology student concentrating in design. They are passionate about creating accessible design as a future UX designer. Expressing themselves through art, bullet journaling, and baking as many kinds of dessert as she can makes her Bloom. A fun fact about Lauren is that they’ve dyed their hair four different colours as of recently!",
        role: "Director",
        pro: "She/They",
        socials: {
          linked: "https://www.linkedin.com/in/lauren-mok-0716631ba/",
        },
      },
      {
        name: "Alvin Leung",
        img: "/images/teambio/alvin.jpg",
        bio:
          "Alvin is a 5th year student studying Interactive Arts and Technology with a design concentration. Caffeine makes him bloom. Fun fact about Alvin is that he used to compose music before he decided to pursue design.",
        role: "Coordinator",
        pro: "He/Him",
        socials: {
          instagram: "https://www.instagram.com/alvinn.design/",
        },
      },
      {
        name: "Sneha Shah",
        img: "/images/teambio/sneha.jpg",
        bio:
          "Sneha is a International Studies student concentrating in International Development, Economic, and Environmental Issues. She is currently unsure what year of study she is in but is somewhere between her third to fifth year of study. Something that makes her bloom is trying new restaurants in Vancouver with her friends as well as playing board games and games on her switch. A fun fact about her is that she knows 4 languages including, Hindi, Korean, and Japanese.",
        role: "Coordinator",
        pro: "She/They",
        socials: {
          instagram: "https://www.instagram.com/n_kyaaj.s/",
        },
      },
      {
        name: "Gracie Gu",
        img: "/images/teambio/gracie.jpg",
        imgWide: true,
        bio:
          "Gracie is a second year student studying Design in SFU's School of Interactive Arts and Technology. She's a pixel-pusher on Figma who loves all drinks caffeinated and over-playing songs until they're ruined. Working with this year's passionate OC Team to make the TEDxSFU conference a success is what makes her Bloom!",
        role: "Coordinator",
        pro: "She/They",
        socials: {
          linked: "https://www.linkedin.com/in/gugracie/",
        },
      },
      {
        name: "Matteo Miceli",
        img: "/images/teambio/matteo.jpg",
        imgWide: true,
        bio:
          "Matteo is a developer and student with a penchant for tinkering. Technology and books make him bloom!",
        role: "Web Developer",
        pro: "He/Him",
        socials: {
          linked: "https://www.linkedin.com/in/omatteomiceli/",
        },
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
        img: "/images/teambio/diana.jpg",
        bio:
          "Diana is the Marketing Director this year. She was a Partner Relations Coordinator last year and this is her 2nd year with TEDxSFU. She is a 4th-year SFU Beedie student concentrating in Marketing and Finance. Something that makes her Bloom is meeting new people and exploring new places.A fun fact about Diana is that she loves photography and enjoys spending hours doing it.",
        role: "Director",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/_dianakulikova",
          linked: "https://www.linkedin.com/in/diana-kulikova",
        },
      },
      {
        name: "Manreet Mahal",
        img: "/images/teambio/manreet.jpg",
        imgWide: true,
        bio:
          "Manreet is a fourth year Business student concentrating in Marketing and International Business. Something that makes her Bloom is appreciating the little joys in life and living in the moment. A fun fact about her is that she loves to document her life through mini vlogs!",
        role: "Coordinator",
        pro: "She/Her",
        socials: {
          instagram: "https://www.instagram.com/Manreetmahalx",
          linked: "https://www.linkedin.com/in/manreet-mahal",
        },
      },
      {
        name: "Carlos Lopez Sandoval",
        img: "/images/teambio/carlos.jpg",
        imgWide: true,
        bio:
          "My name is Carlos López and I’m a full-time MBA student at the Beedie School of Business. I got my undergraduate degree in International Business and Marketing at John Brown University in 2016. Prior to moving to Vancouver, I worked in sales and marketing for a multinational company in my home country of El Salvador and led several social impact initiatives related to entrepreneurship and education. This year’s TEDxSFU Bloom reminds me of the challenges and learning process that have taken me to where I am today. A fun fact about myself is that I have a very loud laugh – which hopefully cracks people up.",
        role: "Coordinator",
        pro: "He/Him",
        socials: {
          instagram: "https://www.instagram.com/carloslopezs94/",
          linked: "https://www.linkedin.com/in/carloslopezs94/",
        },
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
        img: "/images/teambio/shabnam.jpg",
        imgWide: true,
        bio:
          "Shabnam will be entering her fifth year this fall pursuing a BSc in Health Sciences with a concentration in Population and Quantitative Health Sciences. With the theme of the conference being Bloom this year, Shabnam loves to go on picnics with her friends, especially sunrise picnics to make her Bloom. A fun fact about Shabnam is that she loves listening to podcasts - her favourite is Serial Season 1.",
        role: "Director",
        pro: "She/Her",
        socials: {
          linked: "https://www.linkedin.com/in/shabnam-raufi-164419153/",
        },
      },
      {
        name: "Isaac Maulana",
        img: "/images/teambio/isaac.jpg",
        imgWide: true,
        bio:
          "Isaac Maulana is a recent graduate who majored in Psychology till Spring 2021. Watching an Arsenal game early weekend mornings makes him happy and he plays some soccer himself at his nearest neighbourhood park.",
        role: "Coordinator",
        pro: "He/Him",
        socials: {},
      },
      {
        name: "Ivy Lu",
        img: "/images/teambio/ivy.jpg",
        bio:
          "Ivy is a 3rd year student studying at SFU's Beedie School of Business, concentrating in Operations Management and Management Information Systems. She plans to obtain a certificate in Business Analytics and Decision Making as well. She is currently a Partner Relations Coordinator at TEDxSFU. Spending time with her friends, exploring new places, and trying new foods are what makes her Bloom.",
        role: "Coordinator",
        pro: "She/Her",
        socials: {
          linked: "https://www.linkedin.com/in/luivy",
        },
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
        img: "/images/teambio/christina.jpg",
        imgWide: true,
        bio:
          "Christina is a third-year Biological Sciences student with a mission to create an impact, wherever her path may take her! As a frequent worker with kids, inspiring future generations is something that truly makes her Bloom. In Christina's spare time, you can frequently find her working on earning her third degree black belt, or getting lost in a good fantasy book.",
        role: "Director",
        pro: "She/Her",
        socials: {
          linked: "https://www.linkedin.com/in/cs-walker/",
        },
      },
      {
        name: "Angela Sheenmar",
        img: "/images/teambio/angela.jpg",
        bio:
          "Angela is a third-year student at SFUs Beedie School of Business. Something that makes Angela “Bloom” is when people realize their potential and live the life they used to dream of. Angela also “Blooms” when she sees people happily tapping their feet to music in public. A fun fact about Angela is that she writes a lot and will probably never stop putting a pen to paper as long as ideas run through her mind -- and they always do!",
        role: "Coordinator",
        pro: "She/Her",
        socials: {},
      },
      {
        name: "Ronak Salamat",
        img: "/images/teambio/ronak.jpg",
        bio:
          "Ronak is a third year Biology student hoping to concentrate in cells, molecules, and physiology. Being in an environment surrounded by supportive, hard working and kind people like the TEDxSFU team encourages her and makes her bloom. A fun fact about Ronak is that she can speak 4 languages!",
        role: "Coordinator",
        pro: "She/Her",
        socials: {},
      },
    ],
  },
  {
    i: 8,
    href: "coaches",
    team: "Speaker Coach",
    teamBio:
      "TEDxSFU Speaker Coaches work closely with the TEDxSFU Content Development Team, Project Leads, and with each other. Their primary responsibility is to prepare a detailed lesson plan for a minimum of five total speaker coaching sessions. Throughout these sessions, they support each of the TEDxSFU Speakers by helping their talks come to fruition.",
    img: speakerCoach,
    members: [
      {
        name: "Roshan Noronha",
        img: "/images/teambio/roshan.jpg",
        imgWide: true,
        bio:
          "As a previous TEDxSFU speaker and speaker coach, Roshan knows what it takes to deliver an inspiring TED talk. Bringing a wealth of academic and life experiences, he's passionate about using story to communicate exciting ideas! When he’s not in a lab, Roshan enjoys exploring BC, trying new restaurants and talking about himself in third person.",
        role: "Speaker Coach",
        pro: "He/Him",
        socials: {},
      },
      {
        name: "Rose Anza-Burgess",
        img: "/images/teambio/rose.jpg",
        bio:
          "Rosie is an emerging scholar, interdisciplinary writer, and artist. She earned her MA from the School for the Contemporary Arts, and was a TEDxSFU Speaker taking stage at the Vancouver Playhouse in 2019. She has a strong history of academic and public engagement, sharing her ongoing research at academic conferences in colleges and universities in the northwest coast of Canada and the United States. She is a professional in higher education, serves as Vice-President for the Arts Council of New Westminster, and above all a dedicated spouse.",
        role: "Speaker Coach",
        pro: "She/They",
        socials: {},
      },
    ],
  },
  {
    i:9,
    href: 'license',
    team: 'License Holder',
    teamBio: 'Special thanks to our License Holder who have also helped us in organizing this event. We couldn’t have done it without them!',
    img: licenseHolder,
    members: [
      {
        name: 'Bernhard Riecke',
        img: licenseHolder,
        bio: "Bernhard is a Professor and directs the iSpace Lab at SFU’s School of Interactive Arts and Technology (SIAT). He likes to go beyond traditional disciplinary boundaries, combining natural sciences approaches (being a physicist by training) with human-centered and creative approaches (drawing from Psychology, Cognitive Science, Meditation, HCI, Design, and Art) using immersive Virtual Reality (VR). Bernhard currently teaches classes on immersive environments/Virtual Reality, game design, and research methods. Fun fact: While speaker coaching for TEDxSFU he also gave a TEDx talk on “Could Virtual Reality make us more human?” at TEDxEastVan to experience the speaker coaching process from both sides.",
        role: 'License Holder',
        pro: 'He/Him',
        socials: {}
      }
    ]
  }
];

module.exports = teams;
