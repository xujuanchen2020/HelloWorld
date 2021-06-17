import React, {useState} from "react";
import "./IncomingCallWindow.css";
import BuffDoge from "./IncomingCallImages/buff_doge_profile_pic.jpg";
import AnswerPhone from "./IncomingCallImages/answer-phone.png";
import AnswerText from "./IncomingCallImages/answer-text.png";
import DeclinePhone from "./IncomingCallImages/decline-phone.png";
import DeclineText from "./IncomingCallImages/decline-text.png";

const IncomingCallWindow = (props) => {
  const { answerCallHandler, declineCallHandler, callerNum, callerName } =
    props;
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
    <div className="incomingCallWindow-container">
      <div className="call-top-box">Incoming Call</div>

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
          {/* <p className="caller-number">{formattedCallerNumber}</p> */}
          <p className="caller-number">(123) 456-7899</p>
        </div>
      </div>

      <div className="call-bottom-box">
        <div className="answer-box" onClick={answerCallHandler}>
          <img
            className="answer-phone-img"
            src={AnswerPhone}
            alt="answer-phone-img"
          ></img>
          <img
            className="answer-text-img"
            src={AnswerText}
            alt="answer-text-img"
          ></img>
        </div>
        <div className="decline-box" onClick={declineCallHandler}>
          <img
            className="decline-phone-img"
            src={DeclinePhone}
            alt="decline-phone-img"
          ></img>
          <img
            className="decline-text-img"
            src={DeclineText}
            alt="decline-text-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallWindow;
