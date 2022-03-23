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
    </div>
  );
}
