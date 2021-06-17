import React, { useState } from "react";

import "./OngoingCallWindow.css";
import BuffDoge from "./OngoingCallImages/buff_doge_profile_pic.jpg";
import MicIcon from "./OngoingCallImages/mic.png";
import RecordIcon from "./OngoingCallImages/record.png";
import KeyPadIcon from "./OngoingCallImages/key-pad.png";
import SettingIcon from "./OngoingCallImages/setting.png";
import RightArrow from "./OngoingCallImages/right-arrow.png";
import DeclinePhone from "./OngoingCallImages/decline.png";

const OngoingCallWindow = (props) => {
  const {
    endCallHandler,
    keyPadHandler,
    muteHandler,
    recordHandler,
    settingsHandler,
    arrowHandler,
    callerNum,
    callerName,
  } = props;
  const [callerImage, setCallerImage] = useState(BuffDoge);

  // let formattedCallerNumber =
  //   callerNum.substring(1, 2) +
  //   " (" +
  //   callerNum.substring(2, 5) +
  //   ") " +
  //   callerNum.substring(5, 8) +
  //   " - " +
  //   callerNum.substring(8, 11);

  return (
    <div className="onGoingCallWindow-container">
      <div className="call-middle-box">
        <div>
          <img
            className="caller-img"
            src={callerImage}
            width="34px"
            height="34px"
            alt="callerImage"
          ></img>
        </div>

        <div className="caller-info-box">
          <p className="caller-name">Caller Name</p>
          <p className="caller-number">(123) 456-7899</p>
        </div>
      </div>

      <div className="call-bottom-box">
        <span onClick={muteHandler}>
          <img className="img" src={MicIcon} alt="mic-img"></img>
        </span>
        <span onClick={recordHandler}>
          <img className="img" src={RecordIcon} alt="record-img"></img>
        </span>
        <span onClick={keyPadHandler}>
          <img className="img" src={KeyPadIcon} alt="keypad-img"></img>
        </span>
        <span onClick={settingsHandler}>
          <img className="img" src={SettingIcon} alt="setting-img"></img>
        </span>
        <span onClick={arrowHandler}>
          <img className="arrow-img" src={RightArrow} alt="right-arrow-img"></img>
        </span>
        <span onClick={endCallHandler}>
          <img
            className="decline-phone-img"
            src={DeclinePhone}
            alt="decline-phone-img"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default OngoingCallWindow;
