import { useState } from "react";
import "./header.css";
import Nav from "./Nav";
export default function Header(props) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prevClick) => !prevClick);
    props.toggleNav();
  }
  let icon = "";
  clicked
    ? (icon = "./images/icon-close.svg")
    : (icon = "./images/icon-hamburger.svg");
  return (
    <div id="header-container">
      <header>
        <img src="./images/logo.svg" alt="easybank logo" />
        <img onClick={() => handleClick()} src={icon} alt="nav-drop-down" />
      </header>
      <Nav />
    </div>
  );
}
