import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <img src="./images/logo.svg" alt="easybank logo" />
      <div className="links-row">
        <img src="./images/facebook.svg" alt="d" />
        <img src="./images/icon-youtube.svg" alt="d" />
        <img src="./images/icon-twitter.svg" alt="d" />
        <img src="./images/icon-pinterest.svg" alt="d" />
        <img src="./images/icon-instagram.svg" alt="d" />
      </div>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <button className="req-btn">Request Invite</button>
      <p>© Easybank. All Rights Reserved</p>
    </footer>
  );
}
