import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from 'process.env.PUBLIC_URL + ../../utils/helpers';
import Portfolio from '../Portfolio';
// import ReactIcon from './assets/images/react-icon.jpg';



function Nav(props) {
  const {
    tabs, 
    setCurrentTab,
    contactSelected,
    currentTab,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentTab.name);
  // }, [currentTab]);

  return (
    <header className="flex-row px-1">
      <h4>
        <a data-testid="link" href="/">
          <span role="text" aria-label="moi"></span>
          Rob Christopher Atalla
        </a>
      </h4>
      <div>
        <br></br>
        <br></br>
        <h1>Welcome to my portfolio</h1>
          <br></br>
          <h1>The React Edition!</h1>
          <img className="react" src={process.env.PUBLIC_URL + "/assets/images/react-icon.png"} alt="Black Tile with blue React Icon" />
          <br></br>
          <br></br>
          <br></br>
       </div>
      <nav>
        <ul className="flex-shrink">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a data-testid="contact" href="#contact" onClick={() =>setContactSelected(true)}>
              Contact
              </a>
          </li>
      
          {tabs.map((tab) => 
           
           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a data-testid={tab.name} href={`#${tab.name}`} onClick={() =>setContactSelected(false)}>
              {tab.name}
              </a>
              </li>
          )}
        
        </ul>
      </nav>
    </header>
  );
}
export default Nav;


