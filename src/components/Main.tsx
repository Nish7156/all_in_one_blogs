import React from "react";

function Main() {
  return (
    <div>
      <>
        <main id="home" className="main">
          {/* start: .content-wrapper */}
          <div className="content-wrapper">
            {/* start: .intro-text */}
            <div className="intro-text large-section np-bottom grid-container np-mobile epcl-flex">
              <div className="left grid-50 tablet-grid-55">
                <div className="text">
                  {/*kg-card-begin: html*/}
                  <h1 className="title ularge fw-medium">
                    Hi, I'm <span className="highlight">Jonathan Doe</span> 👋
                  </h1>
                  {/*kg-card-end: html*/}
                  <p>
                    I'm a&nbsp;<strong>design technologist</strong>&nbsp;in
                    Atlanta. I like working on the front-end of the web. This is
                    my site,&nbsp;
                    <strong>Zento</strong>&nbsp;where I blog, share and write
                    tutorials...
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
                      required
                      placeholder="Enter your email address"
                      data-members-email=""
                    />
                    <button
                      className="epcl-button submit absolute"
                      type="submit"
                    >
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
              </div>
              <div className="right grid-45 tablet-grid-45 mobile-grid-60">
                <img
                  src="/zento/content/images/size/w1024h1024/2024/02/about.webp"
                  decoding="async"
                  alt=""
                  className="hero-image fullwidth"
                  width={442}
                  height={442}
                />
              </div>
            </div>
            {/* end: .intro-text */}
            <div className="section section np-bottom">
              {/* start: .epcl-popular-categories */}
              <section className="epcl-popular-categories">
                <div className="grid-container grid-medium np-mobile">
                  <h2 className="title bordered medium textcenter">
                    <svg className="icon large secondary-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#trending-icon" />
                    </svg>
                    Trending Topics
                  </h2>
                  <div className="epcl-flex bg-box section">
                    <div className="left epcl-flex grid-60 np-mobile">
                      <div className="item grid-20 mobile-grid-33 ctag-2-html overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-2-html">
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/html-icon.svg"
                              alt="HTML"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">7</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">HTML</h3>
                        <a href="/zento/tag/2-html/" className="full-link">
                          <span className="screen-reader-text">HTML</span>
                        </a>
                      </div>
                      <div className="item grid-20 mobile-grid-33 ctag-1-fundamentals overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-1-fundamentals">
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/code-icon.svg"
                              alt="Fundamentals"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">4</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">Fundamentals</h3>
                        <a
                          href="/zento/tag/1-fundamentals/"
                          className="full-link"
                        >
                          <span className="screen-reader-text">
                            Fundamentals
                          </span>
                        </a>
                      </div>
                      <div className="item grid-20 mobile-grid-33 ctag-3-css overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-3-css">
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/css-icon.svg"
                              alt="CSS"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">3</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">CSS</h3>
                        <a href="/zento/tag/3-css/" className="full-link">
                          <span className="screen-reader-text">CSS</span>
                        </a>
                      </div>
                      <div className="item grid-20 mobile-grid-33 ctag-6-deployment overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-6-deployment">
                            <img
                              
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/deploy-icon.svg"
                              alt="Deployment"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">2</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">Deployment</h3>
                        <a
                          href="/zento/tag/6-deployment/"
                          className="full-link"
                        >
                          <span className="screen-reader-text">Deployment</span>
                        </a>
                      </div>
                      <div className="item grid-20 mobile-grid-33 ctag-5-databases overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-5-databases">
                            <img
                              
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/database-icon.svg"
                              alt="Databases"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">2</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">Databases</h3>
                        <a href="/zento/tag/5-databases/" className="full-link">
                          <span className="screen-reader-text">Databases</span>
                        </a>
                      </div>
                      <div className="item grid-20 mobile-grid-33 ctag-4-javascript overlay-effect">
                        <div className="image-container">
                          <span className="category-image ctag-4-javascript">
                            <img
                              
                              decoding="async"
                              loading="lazy"
                              src="/zento/content/images/size/w300h300/2024/02/js02-svgrepo-com--1-.svg"
                              alt="Javascript"
                              className="cover"
                            />
                          </span>
                          <span className="epcl-decoration-counter">2</span>
                          <span className="overlay" />
                        </div>
                        <h3 className="title usmall">Javascript</h3>
                        <a
                          href="/zento/tag/4-javascript/"
                          className="full-link"
                        >
                          <span className="screen-reader-text">Javascript</span>
                        </a>
                      </div>
                    </div>
                    <div className="right grid-40 hide-on-mobile hide-on-tablet">
                      <span className="fw-bold">or...</span>
                      <a
                        href="https://ghost.estudiopatagon.com/zento/explore-our-tags"
                        className="epcl-button"
                      >
                        Explore All
                      </a>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </section>
              {/* end: .epcl-popular-categories */}
            </div>
            <div className="sticky-container large-section np-bottom grid-container">
              {/* start: #sidebar */}
              <aside
                id="sidebar"
                className="enable-sticky grid-30 tablet-grid-30 hide-on-tablet hide-on-mobile"
              >
                {/* start: .widget-tag-cloud */}
                <div className="widget widget_epcl_tag_list grid-33 tablet-grid-50 mobile-grid-100">
                  <h3 className="widget-title title medium bordered">
                    <svg className="decoration">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
                    </svg>
                    <span>Topics Index</span>
                  </h3>
                  <div className="clear" />
                  <div className="item item-1 open">
                    <h4 className="toggle-title underline-effect ctag ctag-1-fundamentals">
                      <span className="epcl-number">1</span>
                      <a
                        href="/zento/tag/1-fundamentals/"
                        className="title small"
                        data-id="ctag-1-fundamentals"
                      >
                        Fundamentals
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a href="/zento/fullwidth/" data-id="fullwidth">
                          Unveiling the Web Browser: Gateway to the World Wide
                          Web
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a href="/zento/nosidebar/" data-id="nosidebar">
                          HTTP, Web Browsers, and Web Servers
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">3.</span>
                        <a href="/zento/vertical/" data-id="vertical">
                          Understanding how links works 🚀
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div className="item item-2">
                    <h4 className="toggle-title underline-effect ctag ctag-2-html">
                      <span className="epcl-number">2</span>
                      <a
                        href="/zento/tag/2-html/"
                        className="title small"
                        data-id="ctag-2-html"
                      >
                        HTML
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a
                          href="/zento/introduction-to-html/"
                          data-id="introduction-to-html"
                        >
                          Introduction to HTML 📖
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a
                          href="/zento/understanding-html-the-foundation-of-the-web/"
                          data-id="understanding-html-the-foundation-of-the-web"
                        >
                          Creating your first web page 🎉
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">3.</span>
                        <a
                          href="/zento/html-text-tags-understanding-blocks-and-inlines/"
                          data-id="html-text-tags-understanding-blocks-and-inlines"
                        >
                          Text Tags: Blocks, headings and Inlines a quick start
                          ✍
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">4.</span>
                        <a
                          href="/zento/displaying-images-in-html-the-img-tag/"
                          data-id="displaying-images-in-html-the-img-tag"
                        >
                          Displaying Images in HTML: The img tag a masterclass
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">5.</span>
                        <a
                          href="/zento/mastering-html-essentials-for-your-tech-blog/"
                          data-id="mastering-html-essentials-for-your-tech-blog"
                        >
                          Mastering HTML Essentials to start your Tech Blog 🔥
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div className="item item-3">
                    <h4 className="toggle-title underline-effect ctag ctag-3-css">
                      <span className="epcl-number">3</span>
                      <a
                        href="/zento/tag/3-css/"
                        className="title small"
                        data-id="ctag-3-css"
                      >
                        CSS
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a href="/zento/css-basics/" data-id="css-basics">
                          Introduction to CSS 🚀
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a
                          href="/zento/advanced-css-selectors-class-and-id/"
                          data-id="advanced-css-selectors-class-and-id"
                        >
                          CSS Selectors: Class and ID basic filtering for HTML
                          elements
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">3.</span>
                        <a href="/zento/text-only/" data-id="text-only">
                          Crafting Engaging CSS Animations step by step guide
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div className="item item-4">
                    <h4 className="toggle-title underline-effect ctag ctag-4-javascript">
                      <span className="epcl-number">4</span>
                      <a
                        href="/zento/tag/4-javascript/"
                        className="title small"
                        data-id="ctag-4-javascript"
                      >
                        Javascript
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a
                          href="/zento/javascript-basics-literals-identifiers-and-variables/"
                          data-id="javascript-basics-literals-identifiers-and-variables"
                        >
                          JavaScript Basics: Literals, Identifiers, and
                          Variables
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a href="/zento/classic/" data-id="classic">
                          Unleashing the Power of JavaScript: multiple event
                          techniques
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div className="item item-5">
                    <h4 className="toggle-title underline-effect ctag ctag-5-databases">
                      <span className="epcl-number">5</span>
                      <a
                        href="/zento/tag/5-databases/"
                        className="title small"
                        data-id="ctag-5-databases"
                      >
                        Databases
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a
                          href="/zento/introduction-to-dbms-and-sql/"
                          data-id="introduction-to-dbms-and-sql"
                        >
                          Introduction to DBMS and SQL
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a
                          href="/zento/how-to-insert-data-into-your-table/"
                          data-id="how-to-insert-data-into-your-table"
                        >
                          How to insert data into your Table, the correct way
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div className="item item-6">
                    <h4 className="toggle-title underline-effect ctag ctag-6-deployment">
                      <span className="epcl-number">6</span>
                      <a
                        href="/zento/tag/6-deployment/"
                        className="title small"
                        data-id="ctag-6-deployment"
                      >
                        Deployment
                      </a>
                    </h4>
                    <span className="toggle-icon">
                      <svg
                        className="icon small"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <ul className="post-list">
                      <li>
                        <span className="fw-semibold">1.</span>
                        <a
                          href="/zento/getting-started-with-netlify-deployment/"
                          data-id="getting-started-with-netlify-deployment"
                        >
                          Getting Started with Netlify Deployment
                        </a>
                      </li>
                      <li>
                        <span className="fw-semibold">2.</span>
                        <a
                          href="/zento/netlify-deploy-to-netlify/"
                          data-id="netlify-deploy-to-netlify"
                        >
                          Final steps to Deploy on Netlify
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end: .widget-tag-cloud */}
              </aside>
              {/* end: #sidebar */}
              <div className="center left-content grid-70">
                {/* start: .articles */}
                <div className="articles classic">
                  <article className="default classic-large bg-box ctag ctag-3-css no-image post-access-public">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/3-css/"
                            className="primary-tag ctag ctag-3-css"
                            data-id="ctag-3-css"
                          >
                            CSS
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-19">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 19, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          2 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-3">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/text-only/">
                              Crafting Engaging CSS Animations step by step
                              guide
                            </a>
                          </h2>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            In the realm of technology blogging, captivating
                            your audience goes beyond just the written word.
                            Incorporating eye-catching CSS animations can
                            elevate your content and provide a dynamic...
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/code/"
                                className="ctag ctag-code"
                                data-id="ctag-code"
                              >
                                Code
                              </a>
                              <a
                                href="/zento/tag/guides/"
                                className="ctag ctag-guides"
                                data-id="ctag-guides"
                              >
                                Guides
                              </a>
                              <a
                                href="/zento/tag/tech/"
                                className="ctag ctag-tech"
                                data-id="ctag-tech"
                              >
                                Tech
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              2 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                  <article className="default classic-large bg-box ctag ctag-1-fundamentals post-access-public featured">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/1-fundamentals/"
                            className="primary-tag ctag ctag-1-fundamentals"
                            data-id="ctag-1-fundamentals"
                          >
                            Fundamentals
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-18">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 18, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          2 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-1">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/vertical/">
                              Understanding how links works 🚀
                            </a>
                          </h2>
                          <a
                            href="/zento/vertical/"
                            className="access-icon visibility-members meta-info tooltip hide-on-mobile"
                            data-title="Featured Article"
                            aria-label="Featured Article"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z" />
                            </svg>
                          </a>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            Within a web browser, the ability to move from one
                            document to another is facilitated by links. These
                            links consist of two main parts: the protocol and
                            server address, followed by the document path....
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/tech/"
                                className="ctag ctag-tech"
                                data-id="ctag-tech"
                              >
                                Tech
                              </a>
                              <a
                                href="/zento/tag/code/"
                                className="ctag ctag-code"
                                data-id="ctag-code"
                              >
                                Code
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              2 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                  <article className="default classic-large bg-box ctag ctag-4-javascript post-access-public">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/4-javascript/"
                            className="primary-tag ctag ctag-4-javascript"
                            data-id="ctag-4-javascript"
                          >
                            Javascript
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-18">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 18, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          2 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-3">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/classic/">
                              Unleashing the Power of JavaScript: multiple event
                              techniques
                            </a>
                          </h2>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            Incorporating dynamic and interactive elements into
                            your content can significantly elevate the user
                            experience. In this tutorial, we'll explore the...
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/code/"
                                className="ctag ctag-code"
                                data-id="ctag-code"
                              >
                                Code
                              </a>
                              <a
                                href="/zento/tag/2-html/"
                                className="ctag ctag-2-html"
                                data-id="ctag-2-html"
                              >
                                HTML
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              2 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                  <article className="default classic-large bg-box ctag ctag-1-fundamentals post-access-public">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/1-fundamentals/"
                            className="primary-tag ctag ctag-1-fundamentals"
                            data-id="ctag-1-fundamentals"
                          >
                            Fundamentals
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-18">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 18, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          2 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-2">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/nosidebar/">
                              HTTP, Web Browsers, and Web Servers
                            </a>
                          </h2>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            At the core of the internet lies a complex yet
                            fascinating ecosystem known as the World Wide Web.
                            To unravel its workings, we need to explore key
                            concepts such as HTTP, web browsers...
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/tech/"
                                className="ctag ctag-tech"
                                data-id="ctag-tech"
                              >
                                Tech
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              2 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                  <article className="default classic-large bg-box ctag ctag-2-html no-image post-access-public">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/2-html/"
                            className="primary-tag ctag ctag-2-html"
                            data-id="ctag-2-html"
                          >
                            HTML
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-18">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 18, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          2 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-3">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/mastering-html-essentials-for-your-tech-blog/">
                              Mastering HTML Essentials to start your Tech Blog
                              🔥
                            </a>
                          </h2>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            As a technology blogger, having a strong foundation
                            in HTML is fundamental for crafting engaging and
                            well-structured content. In this tutorial, we'll
                            delve into the key HTML...
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/code/"
                                className="ctag ctag-code"
                                data-id="ctag-code"
                              >
                                Code
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              2 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                  <article className="default classic-large bg-box ctag ctag-2-html no-image post-access-members">
                    <div className="post-format-image epcl-flex">
                      <div className="meta meta-data">
                        <div className="tags fill-color">
                          <a
                            href="/zento/tag/2-html/"
                            className="primary-tag ctag ctag-2-html"
                            data-id="ctag-2-html"
                          >
                            HTML
                          </a>
                        </div>
                        <time className="meta-info" dateTime="2024-01-18">
                          <svg className="icon main-color small">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                          </svg>
                          Jan 18, 2024
                        </time>
                        <div className="min-read meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                          </svg>
                          1 min read
                        </div>
                        <div className="difficulty meta-info">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                          </svg>
                          <span className="name">Difficulty:</span>
                          <div className="rating star-1">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                          </div>
                        </div>
                      </div>
                      <div className="info">
                        <header>
                          <h2 className="main-title title underline-effect">
                            <a href="/zento/displaying-images-in-html-the-img-tag/">
                              Displaying Images in HTML: The img tag a
                              masterclass
                            </a>
                          </h2>
                          <a
                            href="/zento/displaying-images-in-html-the-img-tag/"
                            className="access-icon visibility-members meta-info tooltip hide-on-mobile"
                            data-title="Members Article"
                            aria-label="Members Article"
                          >
                            <svg>
                              <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#locked" />
                            </svg>
                          </a>
                        </header>
                        <div className="post-excerpt">
                          <p>
                            Images play a crucial role in enhancing the visual
                            appeal of a website, and in HTML, the img tag is the
                            key to incorporating images into your web pages.
                            This tag is straightforward yet powerful...
                          </p>
                          <div className="clear" />
                        </div>
                        <footer className="bottom">
                          <div className="meta bottom epcl-flex">
                            <div className="tags">
                              <a
                                href="/zento/tag/code/"
                                className="ctag ctag-code"
                                data-id="ctag-code"
                              >
                                Code
                              </a>
                            </div>
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                          </div>
                          <div className="meta inline hide-on-tablet hide-on-desktop">
                            <a
                              href="/zento/author/jonathan-doe/"
                              className="author"
                            >
                              <img
                                className="author-image cover"
                                loading="lazy"
                                
                                decoding="async"
                                src="/zento/content/images/size/w120h120/2024/02/a-hiker-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-1-65c0389ba903a-4.webp"
                                alt="Image of: Jonathan Doe"
                              />
                              <span className="author-name">Jonathan Doe</span>
                            </a>
                            <div className="min-read meta-info">
                              <svg className="icon main-color">
                                <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                              </svg>
                              1 min read
                            </div>
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div className="clear" />
                  </article>
                </div>
                {/* end: .articles */}
                <nav className="epcl-pagination section np-bottom">
                  <div className="nav">
                    <span className="page-number">Page 1 of 3</span>
                    <a className="next epcl-button" href="/zento/page/2/">
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* end: .content-wrapper */}
        </main>
        Copied
      </>
      <div className="clear"></div>
    </div>
  );
}

export default Main;
