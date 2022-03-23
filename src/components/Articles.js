import "./articles.css";
export default function Articles() {
  return (
    <div id="articles-container">
      <h1>Latest Articles</h1>
      <div className="article-card">
        <img src="./images/image-currency.jpg" alt="" />
        <div className="card-desc">
          <p>By Claire Robinson</p>
          <h3>Receive money in any currency with no fees</h3>
          <p>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single...
          </p>
        </div>
      </div>
      <div className="article-card">
        <img src="./images/image-restaurant.jpg" alt="" />
        <div className="card-desc">
          <p>By Wilson Hutton</p>
          <h3>Treat yourself without worrying about money</h3>
          <p>
            Our simple budgeting feature allows you to seperate out your
            spending and set realistic limits each month That means you...
          </p>
        </div>
      </div>
      <div className="article-card">
        <img src="./images/image-plane.jpg" alt="" />
        <div className="card-desc">
          <p>By Wilson Hutton</p>
          <h3>Take your Easybank card wherever you go</h3>
          <p>
            We want you to enjoy your travels. This is why we don't charge nay
            fees on purchases while you're aborad. We'll even show you....
          </p>
        </div>
      </div>
      <div className="article-card">
        <img src="./images/image-confetti.jpg" alt="" />
        <div className="card-desc">
          <p>By Claire Robinson</p>
          <h3>Our invite-only Beta accounts are now live!</h3>
          <p>
            After a lot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite throught the site...
          </p>
        </div>
      </div>
    </div>
  );
}
