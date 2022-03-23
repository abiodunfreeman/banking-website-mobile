import "./info.css";
export default function Info() {
  return (
    <div id="info-container">
      <div id="info-header" className="info-card">
        <h1>
          Why choose <br />
          Easybank?
        </h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="info-card">
        <img src="./images/icon-online.svg" alt="" />
        <h2>Online Banking</h2>
        <p>
          Our modern web and mobile applications allow you to keep track of your
          finances where you are in the world.
        </p>
      </div>
      <div className="info-card">
        <img src="./images/icon-budgeting.svg" alt="" />
        <h2>Simple Budgeting</h2>
        <p>
          See exactly where your money goes each month. Receive notifications
          when you're close to your hitting limits.
        </p>
      </div>
      <div className="info-card">
        <img src="./images/icon-onboarding.svg" alt="" />
        <h2>Fast Onboarding</h2>
        <p>
          We don't do branches. Open your account in minuets online and start
          taking control of your finances right away.
        </p>
      </div>
      <div className="info-card">
        <img src="./images/icon-api.svg" alt="" />
        <h2>Open API</h2>
        <p>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier
        </p>
      </div>
    </div>
  );
}
