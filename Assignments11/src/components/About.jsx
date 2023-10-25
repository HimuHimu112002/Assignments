import React from "react";

const About = () => {
  const loggedIn = true;
  
  return (
    <>

      <div className="aboutHeader">

        <h2>This is the About component and usign ternary operator</h2>
        {loggedIn ? (
          <p style={{marginTop: "10px"}}>Welcome to our website!</p>
        ) : (
          <p style={{marginTop: "10px"}}>Please login to access the content.</p>
        )}
      </div>

    </>
  );
};

export default About;
