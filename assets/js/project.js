/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Edumark.lk",
    cardImage: "assets/images/project-page/edumarknew.png",
    description: "This is an advanced realtime Full Stack React.JS project which won the Best Techincal Award in Regional Techcamp in Nepal.",
    Previewlink: "https://edumark.lk/",
    Githublink: "",
  },
  {
    title: "Portfolio Site",
    cardImage: "assets/images/project-page/portfolionew.png",
    description: "This project uses HTML,CSS,JS and React. It is hosted using Github pages and SEO optimized for better ranking",
    Previewlink: "https://buddhikaweerasinghe.live/",
    Githublink: "https://github.com/TurboJapuraEfac/portfoliofinal",
  },
  {
    title: "Natural Language Processing Project",
    cardImage: "assets/images/project-page/NLPc.png",
    description: "Analyzed how the Covid19 has boosted depression around the world using Natural Language Processing methods ",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Research Design Project",
    cardImage: "assets/images/project-page/research1.png",
    description: "This research proposes a method to combine the Coarse to Fine Algorithm  with the depth estimation algorithm to address the problem of creating inaccurate depth estimations.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://www.canva.com/design/DAEfEnriqN0/BIfLQpFaXC5S38j3nUOTCA/view?utm_content=DAEfEnriqN0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    Githublink: "",
  },
  {
    title: "DR DELIVERY",
    cardImage: "assets/images/project-page/ecom1.png",
    description: "This is a REACTJS full-stack , real time , web platform which allows people to do their shopping online while still having the freedom to choose where there grocery is brought from.",
    tagimg: "",
    Previewlink: "https://github.com/TurboJapuraEfac/3rdyearSEproject/blob/main/Software%20Engineering%20Project/17_ENG_113%20Final%20Report/17_ENG_113_FinalReport.pdf",
    Githublink: "https://github.com/TurboJapuraEfac/3rdyearSEproject/blob/main/Software%20Engineering%20Project/17_ENG_113%20Final%20Report/17_ENG_113_FinalReport.pdf",
  },
  {
    title: "ExhibitIT video conferencing",
    cardImage: "assets/images/project-page/video1.png",
    description: "ExhibitIt Video Conferencing is a Fast, Secure, Easy to use web app that Directly connect with exhibitors with no downloading built with WebRTC. ",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Sudoku Solving Algorithm using Advanced Algos",
    cardImage: "assets/images/project-page/sudokuAA1.png",
    description:
      "In this project , Exact Cover method has been used with Knuth’s algorithm X. This algorithm can solve 9*9 and 16*16 algorithms in miliseconds",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/TurboJapuraEfac/Sudoku-exact-cover-",
    Githublink: "https://github.com/TurboJapuraEfac/Sudoku-exact-cover-",
  },
  {
    title: "Sudoku Solving Algorithm using Computer Vision",
    cardImage: "assets/images/project-page/sudokuCV1.png",
    description: "In this project , Computer Vision character recognition and Backtracking Algortihm have been used. Can solve 9*9 sudoku puzzle real time ",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Distributed Systems Mini Project",
    cardImage: "assets/images/project-page/dss1.png",
    description:
      "Online Shopping Store designed using Micro service architecture. Spring Boot, Eureaka server, SQL, and RabbitMQ is used in the backend ",
    tagimg: "",
    Previewlink: "https://www.canva.com/design/DAEnba51kgg/OcNzvdrfRuJvOTM_YDxGFg/view?utm_content=DAEnba51kgg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
                 <p class="copy">${description}</p></div>
                </div>
            
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}

