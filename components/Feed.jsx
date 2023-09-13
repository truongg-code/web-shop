import "@styles/feed.css";

const Feed = () => {
  return (
    <div className="feed-nav-bar">
      <div className="option">
        <span className="material-symbols-outlined">view_comfy_alt</span>
        <p>Shop</p>
      </div>
      <div className="option">
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>Cart</p>
      </div>
      <div className="option">
        <span className="material-symbols-outlined">person</span>
        <p>Account</p>
      </div>
      <div className="option">
        <span className="material-symbols-outlined">search</span>
        <p>Search</p>
      </div>
    </div>
  );
};

export default Feed;
