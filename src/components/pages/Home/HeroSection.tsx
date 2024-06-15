import React from "react";

function HeroSection() {
  return (
    <>
      <div className="intro-text large-section np-bottom grid-container np-mobile epcl-flex">
        <div className="left grid-50 tablet-grid-55">
          <div className="text">
            {/*kg-card-begin: html*/}
            <h1 className="title ularge fw-medium">
              Hey, I'm <span className="highlight">Jonathan Doe</span> 👋{" "}
            </h1>
            {/*kg-card-end: html*/}
            <p>
              I'm a&nbsp;<strong>design technologist</strong>&nbsp;in Atlanta. I
              like working on the front-end of the web. This is my site,&nbsp;
              <strong>Zento</strong>&nbsp;where I blog, share and write about my
              personal projects..
            </p>
          </div>
          <form className="subscribe-form" data-members-form="subscribe">
            <label className="title small" htmlFor="subscribe-email">
              Let's connect
            </label>
            <div className="form-group">
              <input
                id="subscribe-email"
                type="email"
                name="email"
                className="inputbox large"
                placeholder="Enter your email address"
                data-members-email=""
              />
              <button className="epcl-button submit absolute" type="submit">
                Get Started
                <span className="loader" />
              </button>
            </div>
            <p className="error-detail" data-members-error="" />
            <p className="success-message">
              Subscription was sent successfully, check your email{" "}
              <i className="fa fa-envelope-o" />
            </p>
          </form>
        </div>
        <div className="right grid-45 tablet-grid-45 mobile-grid-60">
          <img
            src="https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1024h1024/2024/02/Rectangle-660-2.jpg"
            
            decoding="async"
            alt=""
            className="hero-image fullwidth"
            width={442}
            height={442}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
