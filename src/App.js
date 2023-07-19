import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", height: "95vh" }}>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          focusActiveItemOnLoad
          activeItemIndex={7}
          cardHeight={320}
          slideShow
          enableDarkToggle
        >
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/about.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/idea.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/sun.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/info.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/calendar.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/facebook.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/stumbleupon.png"
              alt="reddit"
            />
          </div>
        </Chrono>
      </div>
    </div>
  );
}
