import React from 'react';
import './Notification.css';
import tick from './tick.png';
import cross from './error.png';

function Notification({ text, isError }) {
  return (
    <li className="notification">
      <div className="notification__inner">
        <span className="notification__text">{text}</span>
        { isError ?
          <img className="notification__icon" height="20" width="20" src={cross} alt="" /> :
          <img className="notification__icon" height="20" width="20" src={tick} alt="" />
        }
      </div>
    </li>
  );
}

export default Notification;
