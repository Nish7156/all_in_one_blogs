import React from 'react'

function Footer() {
  return (
    <div>
        <>
  <footer id="footer">
    <div className="widgets grid-container">
      <div className="desktop-footer hide-on-mobile hide-on-tablet">
        {/* start: .widget-social */}
        <div className="widget widget_epcl_social widget_menu grid-33 tablet-grid-50 mobile-grid-100">
          <h3 className="widget-title title medium bordered">
            <svg className="decoration">
              <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
            </svg>
            <span>Follow Us</span>
          </h3>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/estudiopatagon"
                className="github"
                target="_blank"
              >
                <span className="name">
                  Contribute on <b>Github</b>
                </span>
                <span className="icon">
                  <svg className="icon">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#github-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/estudiopatagon/"
                className="whatsapp"
                target="_blank"
              >
                <span className="name">
                  Let's talk on <b>WhatsApp</b>
                </span>
                <span className="icon">
                  <svg className="icon">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#whatsapp-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/estudiopatagon/"
                className="instagram"
                target="_blank"
              >
                <span className="name">
                  Follow on <b>Instagram</b>
                </span>
                <span className="icon">
                  <svg className="icon">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#instagram-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/envato"
                className="facebook"
                target="_blank"
                rel="nofollow noopener"
              >
                <span className="name">
                  Follow on <b>Facebook</b>
                </span>
                <span className="icon">
                  <svg className="icon small">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#facebook-icon" />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/envato"
                className="twitter"
                target="_blank"
                rel="nofollow noopener"
              >
                <span className="name">
                  Follow on <b>Twitter</b>
                </span>
                <span className="icon">
                  <svg className="icon small">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#twitter-icon" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* end: .widget-social*/}
        {/* start: .widget */}
        <section className="widget widget_menu grid-33 tablet-grid-50 mobile-grid-100">
          <h2 className="widget-title title medium bordered">
            <svg className="decoration">
              <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
            </svg>
            <span>Quick Links</span>
          </h2>
          <nav className="secondary-nav grid-container grid-small textcenter">
            <ul className="menu">
              <li className="nav-membership">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/membership/">
                  Membership
                </a>
              </li>
              <li className="nav-author-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/author/jonathan-doe/">
                  Author Page
                </a>
              </li>
              <li className="nav-sign-in">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/signin/">
                  Sign In
                </a>
              </li>
              <li className="nav-subscribe-sign-up">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/subscribe/">
                  Subscribe / Sign Up
                </a>
              </li>
              <li className="nav-tag-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/tag/1-fundamentals/">
                  #Tag page
                </a>
              </li>
              <li className="nav-404-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/404/">
                  404 Page
                </a>
              </li>
            </ul>
          </nav>
          <div className="clear" />
        </section>
        {/* end: .widget */}
        {/* start: .widget */}
        <section className="widget widget_text grid-33 tablet-grid-50 mobile-grid-100">
          <div className="logo">
            <a href="https://ghost.estudiopatagon.com/zento">
              <img
                src="https://ghost.estudiopatagon.com/zento/content/images/2024/01/logo-zento.svg"
                alt="Zento"
                width={170}
                height={60}
                decoding="async"
              />
            </a>
          </div>
          <div className="textwidget">
            <p>
              Subscribe to our email newsletter and unlock access to
              <b>members-only</b> content and <b>exclusive updates.</b>
            </p>
          </div>
          <br />
          <form className="subscribe-form" data-members-form="subscribe">
            <label className="title small">Let's connect</label>
            <div className="form-group">
              <input
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
              Subscription was sent successfully, check your email
              <i className="fa fa-envelope-o" />
            </p>
          </form>
          <div className="clear" />
        </section>
        {/* end: .widget */}
        <div className="clear" />
      </div>
      <div className="mobile-footer hide-on-desktop">
        {/* start: .widget */}
        <section className="widget widget_menu grid-33 tablet-grid-50 mobile-grid-100">
          <h2 className="widget-title title medium bordered">
            <svg className="decoration">
              <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
            </svg>
            <span>Quick Links</span>
          </h2>
          <nav className="secondary-nav grid-container grid-small textcenter">
            <ul className="menu">
              <li className="nav-membership">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/membership/">
                  Membership
                </a>
              </li>
              <li className="nav-author-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/author/jonathan-doe/">
                  Author Page
                </a>
              </li>
              <li className="nav-sign-in">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/signin/">
                  Sign In
                </a>
              </li>
              <li className="nav-subscribe-sign-up">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/subscribe/">
                  Subscribe / Sign Up
                </a>
              </li>
              <li className="nav-tag-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/tag/1-fundamentals/">
                  #Tag page
                </a>
              </li>
              <li className="nav-404-page">
                <span className="sep" />
                <a href="https://ghost.estudiopatagon.com/zento/404/">
                  404 Page
                </a>
              </li>
            </ul>
          </nav>
          <div className="clear" />
        </section>
        {/* end: .widget */}
        {/* start: .widget */}
        <section className="widget widget_text grid-33 tablet-grid-50 mobile-grid-100">
          <div className="logo">
            <a href="https://ghost.estudiopatagon.com/zento">
              <img
                src="https://ghost.estudiopatagon.com/zento/content/images/2024/01/logo-zento.svg"
                alt="Zento"
                width={170}
                height={60}
                decoding="async"
              />
            </a>
          </div>
          <div className="textwidget">
            <p>
              Subscribe to our email newsletter and unlock access to
              <b>members-only</b> content and <b>exclusive updates.</b>
            </p>
          </div>
          <br />
          <form className="subscribe-form" data-members-form="subscribe">
            <label className="title small">Let's connect</label>
            <div className="form-group">
              <input
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
              Subscription was sent successfully, check your email
              <i className="fa fa-envelope-o" />
            </p>
          </form>
          <div className="clear" />
        </section>
        {/* end: .widget */}
      </div>
    </div>
    <p className="published underline-effect">
      <a
        href="https://estudiopatagon.com/projects/zento-for-ghost/"
        target="_blank"
      >
        Zento
      </a>
      Theme by
      <a href="https://estudiopatagon.com" target="_blank">
        EstudioPatagon
      </a>
      <span className="dot" /> Powered by
      <a href="https://ghost.org/" target="_blank">
        Ghost
      </a>
    </p>
    <div className="clear" />
    <span id="back-to-top" className="epcl-button">
      <svg
        className="icon large"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m12 5l6 6m-6-6l-6 6m6-6v14"
        />
      </svg>
    </span>
  </footer>
  Copied
</>

    </div>
  )
}

export default Footer