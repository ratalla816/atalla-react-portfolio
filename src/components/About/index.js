// Layout from Oh Snap!/Photo-Port //

// DONE //

import React from 'react';
// import coverImage from './assets/images/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Just who IS Rob Atalla?</h1>
      <img src={process.env.PUBLIC_URL + "/assets/images/cover-image.jpg"} className="my-2" style={{ width: "80%" }} alt="cover" />
      <div className="my-2">
        <p>
        Before software engineering swept me off my feet I was fortunate enough to spend nearly a decade working in solutions-based sales.
        Now I get to use the soft skills and business expertise gained from my previous role to help companies
        bridge the gap between marketing and application development.
        I'm comfortable assisting the sales team during any step of the sales cycle, and once the deal is closed I'll go back to my desk and code it up for them.
        My three favorite things are mac n' cheese with maple syrup, pizza with pineapple... and CSS.
        If there is anything else you would like to know please feel free to reach out.
        <br/>
        <br/>
        Cheers!       
        </p>
      </div>
    </section>
  );
}

export default About;
