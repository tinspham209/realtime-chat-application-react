import React from "react";
import "./TextContainer.css";
import onlineIcon from "../../icons/onlineIcon.png";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application</h1>
      <h2>Created with React, Express, Node & Socket.IO</h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting: </h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div className="activeItem" key={name}>
                {name}
                <img alt="online icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
