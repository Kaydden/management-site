import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./Nav.css";
import { Container, Row, Col } from "reactstrap";

function Nav() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div className="Nav">
      <Container>
        <div className="Logo">
          <span className="Logo__name">Wise</span>
        </div>
        <div className="Profile__icon">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
          <div className="Profile__name">
            <span>Kaydden</span>
          </div>
          <button className="Profile__edit">Edit</button>
        </div>
        <div className="Nav__items">
          <row>
            <ul>
              <li>
                <span>Dashboard</span>
              </li>
              <li>
                <span>Activity</span>
              </li>
              <li>
                <span>Schedule</span>
              </li>
              <li>
                <span>Settings</span>
              </li>
            </ul>
          </row>
          <div className="box">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
