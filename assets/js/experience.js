AOS.init();

//  Work experience cards

/*
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Flipkart",
    time: "(May, 2020 - present)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
*/

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Regional Techcamp on Good Governance",
    cardImage: "assets/images/experience-page/ideationkll.PNG",
    description:
      "Got selected to represent SL in the Regional Techcamp which was organized by American Embassy Nepal (a fully paid 4 day tour to Nepal)",
  },
  {
    title: "Regional Techcamp on Good Governance ",
    cardImage: "assets/images/experience-page/techcamp.PNG",
    description:
      "Won the best Technology Award for edumark.lk & 500 USD Prize & Worked with other members for about an year ",
  },
  {
    title: "Microsoft Cloud Skills Challenge 2021 - USJ",
    cardImage: "assets/images/experience-page/CSC2.jpeg",
    description:
      "Organizing Committee Leader in University of Sri Jayewardanepura and the Moderator for the launching event.",
  },
  {
    title: "Innovate Sri Lanka Award Ceromony ",
    cardImage: "assets/images/experience-page/innovatesl.jpg",
    description:
      "Was a member of the team that won the 2nd place in Robotics Category",
  },
  {
    title: "Microsoft Cloud skills Challenge",
    cardImage: "assets/images/experience-page/csc.jpeg",
    description:
      "Finished Microsoft Cloud Skills Challenge in top 20 in the University and won SWAGS, 100 USD voucher to face Azure Fundamentals exam.",
  },
  {
    title: "Best Winter Project - Tribute Award Ceremony",
    cardImage: "assets/images/experience-page/trib.jpeg",
    description:
      "We won the best winter project award in 2019 for Project Inzpire 11.00 which was held in KDU Auditorium",
  },
  ,
  {
    title: "Project Inzpire 13.0 - AIESEC USJ 2019",
    cardImage: "assets/images/experience-page/inz13.jpeg",
    description:
      "Organizing Committee President for the Project inzpire 13.0.",
  },
  {
    title: "World Health Day - 2019 Sri Lanka",
    cardImage: "assets/images/experience-page/whd2.jpeg",
    description:
      "Was an active member in the Organizing Commitee (Volunteered for the event for 4 days from the beginning to execution).",
  },
  {
    title: "Project Inzpire 11.0 - AIESEC USJ 2018",
    cardImage: "assets/images/experience-page/inzpire11.PNG",
    description:
      "Was responsible for organizing project events : interviews ,Factory visits, working with 7 exchange participants from India.",
  },
  {
    title: "Project Be Sri Lankan - AIESEC USJ 2020",
    cardImage: "assets/images/experience-page/besri.PNG",
    description:
      "Organized the project Be Sri Lankan in line with the SDG goal 8 : Decent work & Economic Growth & Actively engaged.",
  },
  {
    title: "Project WeGo Lanka - AIESEC USJ 2019",
    cardImage: "assets/images/experience-page/wegol.PNG",
    description:
      "Organized the project WeGo Lanka inline with the SDG goal 8 : Decent work & Economic Growth & Actively engaged.",
  },
  {
    title: "JXLDS - AIESEC USJ 2018",
    cardImage: "assets/images/experience-page/jxlds.jpg",
    description:
      "Participated in the 3 day Leadership Development Seminar which was conducted by AIESEC in USJ.",
  },
  {
    title: "NLDS - AIESEC Sri Lanka 2019",
    cardImage: "assets/images/experience-page/nlds1.jpeg",
    description:
      "Participated in the 4 day National Leadership Development Seminar representing AIESEC In USJ which was organized by AIESEC Sri Lanka.",
  },
  ,
  {
    title: "Business Development Bootcamp - 2019",
    cardImage: "assets/images/experience-page/BD.PNG",
    description:
      "Participated in Business Development Bootcamp which was conducted by Linda Marik (CEO of Likuid Spaces).",
  },
   ,
  {
    title: "CSR events under Project INZPIRE 11.0",
    cardImage: "assets/images/experience-page/visaka.jpeg",
    description:
      "Arranged and conducted school sessions in Visaka Vidyalaya and Royal College with the help of Sasnaka Sansada .",
  },
  {
    title: "Inter Faculty Sports - Basket Ball",
    cardImage: "assets/images/experience-page/basket.jpeg",
    description:
      "Represented Faculty of Engineering in inter faculty sportsmeet against Faculty of Medicine ",
  },
  {
    title: "Japura Premier League - Cricket",
    cardImage: "assets/images/experience-page/jpl.jpeg",
    description:
      "Represented Faculty of Engineering in Japura Premier League tournement which was organized by BA department ",
  }
  ,
  {
    title: "E-ZAGA 19 Sports Festival - Cricket",
    cardImage: "assets/images/experience-page/ezaga.jpeg",
    description:
      "Was a member of the team that won the intra batch cricket challenge <br> ( I took 5 wickets in 3 matches)  ",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:600px">
      
      <img src="${cardImage}" height="300" width="100" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card

/*
const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
*/
