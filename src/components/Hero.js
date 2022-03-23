import "./hero.css";
export default function Hero() {
  return (
    <div id="hero-container">
      <div id="hero-img-container">
        <img
          id="hero-bg"
          src="./images/bg-intro-mobile.svg"
          alt="background for phones"
        />
        <img
          id="hero-img"
          src="./images/image-mockups.png"
          alt="phones using our easy to use mobile app"
        />
      </div>
      <div id="hero-desc-container">
        <h1>
          Next generation <br /> digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="req-btn">Request Invite</button>
      </div>
    </div>
  );
}
