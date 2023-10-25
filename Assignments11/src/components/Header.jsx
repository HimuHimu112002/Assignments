import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div style={{ textAlign: "center" }}>
          <ul style={{ listStyleType: "none", display: "flex", justifyContent:"center"}}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
