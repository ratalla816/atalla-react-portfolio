// DONE //

import React from "react";

function Footer() {
  return (
    <footer class="mt-auto">
      <p>Come see the rest of the cool stuff I'm working on ⇒ <a href="https://github.com/ratalla816" target="_blank"> <img src={process.env.PUBLIC_URL + "/assets/images/githublogo.png"} alt="Silver GitHub logo featuring a silouette of the OctoCat mascot"/></a></p>
      <a href="https://www.linkedin.com/in/ratalla816/" target="_blank"> <img src={process.env.PUBLIC_URL + "/assets/images/linked.svg"} alt="Blue Linkedin logo with copyright mark" /></a>
    </footer>
  );
}

export default Footer;