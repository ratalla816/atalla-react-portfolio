// DONE //
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const element = <FontAwesomeIcon icon={faFileDownload} />


function Resume() {
  return (
    <section className="my-5">
      <div className="resume">
        <h2>Resume</h2>
        
        <a className="button-success" href={process.env.PUBLIC_URL + "/atalla-resume-cs.pdf"} target="_blank" rel="noopener">
          {/* <span className="icon"><i className="fas fa-file-download">Click to download</i></span> */}
          <span className="icon"><i className="f56d">Click to download</i></span>
          {/* <FontAwsomeIcon icon={faFileDownload} size="2x"/>Click to download</a> */}
          </a>
      </div>
     </section>
     );
}

export default Resume;