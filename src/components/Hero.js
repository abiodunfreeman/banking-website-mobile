import "./hero.css";
export default function Hero() {
  return (
    <div id="hero-container">
      <div id="hero-img-container">
        <img
          id="hero-bg"
          src="./images/bg-intro-mobile.svg"
          alt="phones using our easy to use mobile app"
        />
        <img
          id="hero-img"
          src="./images/image-mockups.png"
          alt="phones using our easy to use mobile app"
        />
      </div>
      <div id="hero-desc-container">
        <h1>Next generation digital banking</h1>
      </div>
    </div>
  );
}
