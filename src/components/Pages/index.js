
import React, { useState } from 'react';
import Modal from '../Modal';
// import images from "./assets/images";

const Pages = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  const [works] = useState([
    {
    name: "FORGE",
    category: 'portfolio',
    languages: "HTML / CSS / Javascript / Handlebars / server-side APIs / SQL / Express.js / user authentication / bcrypt / MVC / AOS - Animate on scroll library",
    image: "/assets/images/forgevid.gif",
    description: "Full stack social-media application that provides technology bootcamp students with an opportunity to share experiences, even request and provide feedback on code!",
    gitHub: "https://github.com/ratalla816/forge",
    deployment: "https://forge-team.herokuapp.com/splash",
    },

    {
      name: 'Animal Explorer',
      category: 'portfolio',
      languages: "HTML / Bulma / jQuery / third-party APIs / dynamic HTML",
      image: "/assets/images/animal-app.gif",
      description: 'Web application with a simple, yet playful user interface that gets children, age 2 and above, excited to learn about the animal kingdom and interacting with technology.',
      gitHub: "https://github.com/ratalla816/animal-app",
      deployment:"https://ratalla816.github.io/animal-app",
    },

    {
      name: 'Workday Scheduler',
      category: 'Portfolio',
      languages:"HTML / CSS / Javascript / Moment.js / Local storage",
      image: "/assets/images/workdayvid.gif",
      description: 'Web based day planner When the planner is opened, the current day is displayed at the top of the calendar, When the user views the time blocks for that day, each block is color-coded to indicate whether it is in the past, present, or future, When the user clicks a time block they are able to enter text that can be saved, Saved text persists when the browser is refreshed',
      gitHub: "https://github.com/ratalla816/workday-scheduler",
      deployment: "https://ratalla816.github.io/workday-scheduler",
    },

    {
      name: 'MVC Tech Blog',
      category: 'portfolio',
      languages: "HTML / CSS / Javascript / Handlebars / server-side APIs / SQL / Express.js / user authentication / bcrypt / MVC",
      image: "/assets/images/tech-blog-vid.gif",
      description: 'A CMS-style blog site built using the model-view-controller design pattern. Users have the ability to sign up for an account, then they are able to sign in and sign out securely.Once logged in, users can create blog posts which they can later edit and or delete. Users are also able to leave comments on their own posts and other users posts.',
      gitHub: "https://github.com/ratalla816/mvc-tech-blog",
      deployment: "https://robs-tech-talk-emporium.herokuapp.com",
    },

    {
      name: 'Note Taker',
      category: 'portfolio',
      languages: "Node.js / SQL / Express.js",
      image: "/assets/images/notetakervidtoo.gif",
      description: 'Full stack web application that allows users to create, save, and delete notes.',
      gitHub: "https://github.com/ratalla816/note-taker",
      deployment: "https://ratalla816-note-taker.herokuapp.com",
    },

    {
      name: 'Password Generator',
      category: 'portfolio',
      languages: "HTML / CSS / Javascript",
      image: "/assets/images/password-generator-vid.gif",
      description: 'Application randomly generates a strong password that meets criteria determined by the user.',
      gitHub: "https://github.com/ratalla816/password-generator",
      deployment: "https://ratalla816.github.io/password-generator",
    },

  ]);

  // setCurrentPage(Page.filter(id => id.name))

  const toggleModal = (image, i) => {
    // setCurrentWork({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPage={currentPage} />}
      <div className="flex-direction: row">
        {works.map((page) => (
          <div className="works">
            <span>{page.name}</span>
            <br></br>
          <img
            src={process.env.PUBLIC_URL + page.image}
            alt={page.name}
            className="page.name mx-1"
            onClick={() => toggleModal(page)}
            key={page.name}
            
                      />
                      <br></br>
          <span><a href={page.gitHub} target="_blank" rel="noopener noreferrer">
            GitHub Repo
            </a>
            <br></br>
            <a href={page.deployment} target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a></span>
          <br></br>
          <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pages;

