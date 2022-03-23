import Nav from "./components/Nav";

import "./styles.css";
import Header from "./components/Header";
export default function App() {
  function toggleNav() {
    const navContainer = document.getElementById("nav-container");
    navContainer.classList.toggle("show-nav");
  }
  return (
    <div className="App">
      <Header toggleNav={toggleNav} />
      <Nav />
    </div>
  );
}
