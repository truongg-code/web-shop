import "@styles/footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="footer">
        <div className="infor">
          <p>Get in touch</p>
          <span>+</span>
        </div>
        <div className="infor">
          <p>Categories</p>
          <span>+</span>
        </div>
        <div className="infor">
          <p>Information</p>
          <span>+</span>
        </div>
        <div className="infor">
          <p>Useful Links</p>
          <span>+</span>
        </div>
        <div className="infor">
          <p>Newsletter Signup</p>
          <span>+</span>
        </div>
      </div> */}

      <div className="footer-large">
        <div id="footer-infor">
          <div className="communications">
            <span class="material-symbols-outlined">distance</span>
            Dreamparty.pk
          </div>
          <div className="communications">
            <span class="material-symbols-outlined">mail</span>
            infor@dreamparty.pk
          </div>
          <div className="communications">
            <span class="material-symbols-outlined">call</span>
            0332908528
          </div>
        </div>

        <div id="footer-infor">
          <h6>Category</h6>
          <p>search</p>
        </div>

        <div id="footer-infor">
          <h6>Information</h6>
        </div>

        <div id="footer-infor">
          <h6>Useful links</h6>
        </div>

        <div id="footer-infor">
          <h6>Newletter Signup</h6>
          <p>
            Subscribe to our newsletter and get latest update about our products
          </p>
          <form className="footer-email-form">
            <input
              type="mail"
              placeholder="Your email address"
              id="footer-email"
            />
            <input type="submit" value="Subcribe" id="footer-email-btn" />
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2023 <span>Dream Party</span> all rights reserve
        </p>
      </div>
    </>
  );
};

export default Footer;
