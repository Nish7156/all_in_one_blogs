"use client";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    const handleScroll = () => {
      const header: any = document.getElementById("header");
      if (window.scrollY > 10) {
        header.setAttribute("data-stuck", "true");
      } else {
        header.removeAttribute("data-stuck");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <>
        <div id="wrapper">
          {/* start: #header */}
          <header
            id="header"
            className="minimalist enable-sticky "
            style={{ height: "75.9922px" }}
            data-stuck
          >
            {/* start: .menu-wrapper */}
            <div className="menu-wrapper">
              <div className="grid-container">
                <div className="epcl-flex grid-wrapper">
                  {/* start: .main-nav */}
                  <nav className="main-nav">
                    <ul className="menu">
                      <li className="search-menu-item">
                        <span className="link" data-ghost-search="">
                          <svg className="icon main-color large">
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#search-icon" />
                          </svg>
                          <span className="hide-on-mobile">
                            Quick Search...
                          </span>
                        </span>
                      </li>
                    </ul>
                  </nav>
                  {/* end: .main-nav */}
                  <div className="logo">
                    <a href="https://ghost.estudiopatagon.com/zento-personal">
                      <img
                        src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/logo-zento-personal-1.svg"
                        alt="Zento"
                        width={170}
                        height={60}
                        decoding="async"
                      />
                    </a>
                  </div>
                  <div className="account underline-effect hide-on-mobile hide-on-tablet hide-on-desktop-sm">
                    <a
                      href="https://ghost.estudiopatagon.com/zento-personal/signin"
                      className="link-button epcl-login"
                    >
                      Login
                    </a>
                    <a
                      href="https://ghost.estudiopatagon.com/zento-personal/subscribe"
                      className="epcl-button"
                    >
                      Subscribe
                    </a>
                  </div>
                  <div className="open-menu">
                    <svg className="open icon ularge">
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#menu-icon" />
                    </svg>
                  </div>
                  <div className="clear" />
                </div>
                <div className="clear" />
              </div>
            </div>
            {/* end: .menu-wrapper */}
            <div className="clear" />
          </header>
          {/* end: #header */}
          <main id="home" className="main">
            {/* start: .content-wrapper */}
            <div className="content-wrapper">
              {/* start: .intro-text */}
              <div className="intro-text large-section np-bottom grid-container np-mobile epcl-flex">
                <div className="left grid-50 tablet-grid-55">
                  <div className="text">
                    {/*kg-card-begin: html*/}
                    <h1 className="title ularge fw-medium">
                      Hey, I'm <span className="highlight">Jonathan Doe</span>{" "}
                      👋{" "}
                    </h1>
                    {/*kg-card-end: html*/}
                    <p>
                      I'm a&nbsp;<strong>design technologist</strong>&nbsp;in
                      Atlanta. I like working on the front-end of the web. This
                      is my site,&nbsp;<strong>Zento</strong>&nbsp;where I blog,
                      share and write about my personal projects..
                    </p>
                  </div>
                  <form
                    className="subscribe-form"
                    data-members-form="subscribe"
                  >
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
              {/* end: .intro-text */}
              <div className="section section np-bottom">
                {/* start: .epcl-popular-categories */}
                <section className="epcl-popular-categories">
                  <div className="grid-container grid-medium np-mobile">
                    <h2 className="title bordered medium textcenter">
                      <svg className="icon large secondary-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#trending-icon" />
                      </svg>
                      Trending Topics
                    </h2>
                    <div className="epcl-flex bg-box section">
                      <div className="left epcl-flex grid-60 np-mobile">
                        <div className="item grid-20 mobile-grid-33 ctag-lifestyle overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-lifestyle">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69.webp"
                                alt="Lifestyle"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">7</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">Lifestyle</h3>
                          <a
                            href="/zento-personal/tag/lifestyle/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">
                              Lifestyle
                            </span>
                          </a>
                        </div>
                        <div className="item grid-20 mobile-grid-33 ctag-inspiration overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-inspiration">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/surfer-on-a-pink-background-in-the-style-of-minimalist-sets-vector-chrome-plated-subtle-color-variations-kinuko-y-craft-dan-matutina-realistic-forms-everyday-life-65c038a134d5d-4.webp"
                                alt="Inspiration"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">5</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">Inspiration</h3>
                          <a
                            href="/zento-personal/tag/inspiration/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">
                              Inspiration
                            </span>
                          </a>
                        </div>
                        <div className="item grid-20 mobile-grid-33 ctag-technology overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-technology">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042.webp"
                                alt="Technology"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">5</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">Technology</h3>
                          <a
                            href="/zento-personal/tag/technology/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">
                              Technology
                            </span>
                          </a>
                        </div>
                        <div className="item grid-20 mobile-grid-33 ctag-travel overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-travel">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/f524ef6f-944b-464d-ab70-19890cc29a97.webp"
                                alt="Travel"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">5</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">Travel</h3>
                          <a
                            href="/zento-personal/tag/travel/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">Travel</span>
                          </a>
                        </div>
                        <div className="item grid-20 mobile-grid-33 ctag-news overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-news">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/9a69a237-3f65-487f-bcb7-994a98d42cda.webp"
                                alt="News"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">3</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">News</h3>
                          <a
                            href="/zento-personal/tag/news/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">News</span>
                          </a>
                        </div>
                        <div className="item grid-20 mobile-grid-33 ctag-music overlay-effect">
                          <div className="image-container">
                            <span className="category-image ctag-music">
                              <img
                                
                                decoding="async"
                                loading="lazy"
                                src="/zento-personal/content/images/size/w300h300/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1.webp"
                                alt="Music"
                                className="cover"
                              />
                            </span>
                            <span className="epcl-decoration-counter">1</span>
                            <span className="overlay" />
                          </div>
                          <h3 className="title usmall">Music</h3>
                          <a
                            href="/zento-personal/tag/music/"
                            className="full-link"
                          >
                            <span className="screen-reader-text">Music</span>
                          </a>
                        </div>
                      </div>
                      <div className="right grid-40 hide-on-mobile hide-on-tablet">
                        <span className="fw-bold">or...</span>
                        <a
                          href="https://ghost.estudiopatagon.com/zento-personal/explore-our-tags"
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
                  {/* start: .widget-text*/}
                  <div className="widget widget_epcl_about grid-33 tablet-grid-50 mobile-grid-100">
                    <div className="widget-content">
                      <h3 className="widget-title title medium bordered">
                        <svg className="decoration">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                        </svg>
                        <span>About Me</span>
                      </h3>
                      <div className="bg-box section">
                        <div className="epcl-flex">
                          <div className="avatar">
                            <a
                              href="/zento-personal/author/jonathan-doe/"
                              className="thumb"
                            >
                              <span
                                className="fullimage cover"
                                style={{
                                  backgroundImage:
                                    "url( /zento-personal/content/images/size/w300h300/2024/02/Rectangle-660-3.jpg )",
                                }}
                              />{" "}
                              <span className="screen-reader-text">
                                Jonathan Doe
                              </span>
                            </a>
                          </div>
                          <div className="info">
                            <h3 className="title usmall author-name underline-effect no-margin">
                              <a href="/zento-personal/author/jonathan-doe/">
                                Jonathan Doe
                              </a>
                            </h3>
                            <p className="founder">Canada</p>
                          </div>
                        </div>
                        <div className="bio">
                          <p>
                            Hello! My name is Jonathan Doe!, Actively writing
                            articles for this website. I really like tutorials
                            and illustrations, so stay alert for my next
                            tutorials.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end: .widget-text */}
                  {/* start: .widget-tag-cloud */}
                  <div className="widget widget_epcl_tag_cloud grid-25 tablet-grid-50 mobile-grid-100">
                    <h3 className="widget-title title medium bordered">
                      <svg className="decoration">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                      </svg>
                      <span>Tag Cloud</span>
                    </h3>
                    <div className="tags">
                      <a
                        href="/zento-personal/tag/inspiration/"
                        className="ctag ctag-inspiration"
                        data-id="ctag-inspiration"
                      >
                        Inspiration <span className="count">(5)</span>
                      </a>
                      <a
                        href="/zento-personal/tag/lifestyle/"
                        className="ctag ctag-lifestyle"
                        data-id="ctag-lifestyle"
                      >
                        Lifestyle <span className="count">(7)</span>
                      </a>
                      <a
                        href="/zento-personal/tag/music/"
                        className="ctag ctag-music"
                        data-id="ctag-music"
                      >
                        Music <span className="count">(1)</span>
                      </a>
                      <a
                        href="/zento-personal/tag/news/"
                        className="ctag ctag-news"
                        data-id="ctag-news"
                      >
                        News <span className="count">(3)</span>
                      </a>
                      <a
                        href="/zento-personal/tag/technology/"
                        className="ctag ctag-technology"
                        data-id="ctag-technology"
                      >
                        Technology <span className="count">(5)</span>
                      </a>
                      <a
                        href="/zento-personal/tag/travel/"
                        className="ctag ctag-travel"
                        data-id="ctag-travel"
                      >
                        Travel <span className="count">(5)</span>
                      </a>
                    </div>
                  </div>
                  {/* end: .widget-tag-cloud */}
                  {/* start: .recent-articles */}
                  <div className="widget widget_epcl_posts_thumbs grid-33 tablet-grid-50 mobile-grid-100">
                    <h3 className="widget-title title medium bordered">
                      <svg className="decoration">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                      </svg>
                      <span>Latest Articles</span>
                    </h3>
                    <article className="post tag-inspiration tag-travel tag-hash-rating-2 tag-lifestyle item ctag-inspiration ">
                      <div className="info epcl-flex">
                        <a
                          href="/zento-personal/classic/"
                          className="thumb translate-effect epcl-loader"
                        >
                          <img
                            className="fullimage cover lazy loaded"
                            alt="Image of: Far far away, behind the word mountains"
                            src="/zento-personal/content/images/size/w300h300/2024/02/66017f14-c1b4-4033-a177-8615bbfc184a-1.webp"
                          />
                          <span className="screen-reader-text">
                            Far far away, behind the word mountains
                          </span>
                        </a>
                        <div className="right">
                          <h4 className="title usmall underline-effect">
                            <a href="/zento-personal/classic/">
                              Far far away, behind the word mountains
                            </a>
                          </h4>
                          <div className="meta small">
                            <time className="meta-info" dateTime="2023-03-19">
                              <svg className="icon main-color small">
                                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                              </svg>
                              Mar 19, 2023
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="post tag-lifestyle tag-technology tag-news tag-hash-rating-3 item ctag-lifestyle ">
                      <div className="info epcl-flex">
                        <a
                          href="/zento-personal/vertical/"
                          className="thumb translate-effect epcl-loader"
                        >
                          <img
                            className="fullimage cover lazy loaded"
                            alt="Image of: Building your audience with subscriber signups"
                            src="/zento-personal/content/images/size/w300h300/2024/02/af4c0655-3360-41c5-997f-54b03ad540c9.webp"
                          />
                          <span className="screen-reader-text">
                            Building your audience with subscriber signups
                          </span>
                        </a>
                        <div className="right">
                          <h4 className="title usmall underline-effect">
                            <a href="/zento-personal/vertical/">
                              Building your audience with subscriber signups
                            </a>
                          </h4>
                          <div className="meta small">
                            <time className="meta-info" dateTime="2022-07-25">
                              <svg className="icon main-color small">
                                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                              </svg>
                              Jul 25, 2022
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="post tag-travel tag-lifestyle item ctag-travel ">
                      <div className="info epcl-flex">
                        <a
                          href="/zento-personal/customizing-your-brand-and-design-settings/"
                          className="thumb translate-effect epcl-loader"
                        >
                          <img
                            className="fullimage cover lazy loaded"
                            alt="Image of: Customizing your brand and design settings"
                            src="/zento-personal/content/images/size/w300h300/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-3.webp"
                          />
                          <span className="screen-reader-text">
                            Customizing your brand and design settings
                          </span>
                        </a>
                        <div className="right">
                          <h4 className="title usmall underline-effect">
                            <a href="/zento-personal/customizing-your-brand-and-design-settings/">
                              Customizing your brand and design settings
                            </a>
                          </h4>
                          <div className="meta small">
                            <time className="meta-info" dateTime="2022-07-20">
                              <svg className="icon main-color small">
                                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                              </svg>
                              Jul 20, 2022
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                  </div>
                  {/* end: .recent-articles */}
                </aside>
                {/* end: #sidebar */}
                <div className="center left-content grid-70">
                  {/* start: .articles */}
                  <div className="articles classic classic-image">
                    <article className="default classic-large bg-box ctag ctag-inspiration  post-access-public">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/classic/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="eager"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/66017f14-c1b4-4033-a177-8615bbfc184a-1.webp"
                              alt="Image of: Far far away, behind the word mountains"
                            />
                            <span className="screen-reader-text">
                              Far far away, behind the word mountains
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/inspiration/"
                              className="primary-tag ctag ctag-inspiration"
                              data-id="ctag-inspiration"
                            >
                              Inspiration
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2023-03-19"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Mar 19, 2023
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                2 min read
                              </div>
                              <div className="difficulty meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#medal-icon" />
                                </svg>
                                <span className="name">Rating</span>
                                <div className="rating  star-2 ">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/classic/">
                                Far far away, behind the word mountains
                              </a>
                            </h2>
                          </header>
                          <div className="post-excerpt">
                            <p>
                              Hey there, welcome to your new home on the web!
                              Unlike social networks, this one is all yours.
                              Publish your...
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/travel/"
                                  className="ctag ctag-travel"
                                  data-id="ctag-travel"
                                >
                                  Travel
                                </a>
                                <a
                                  href="/zento-personal/tag/lifestyle/"
                                  className="ctag ctag-lifestyle"
                                  data-id="ctag-lifestyle"
                                >
                                  Lifestyle
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/jonathan-doe/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                                  alt="Image of: Jonathan Doe"
                                />
                                <span className="author-name">
                                  Jonathan Doe
                                </span>
                              </a>
                            </div>
                            <div className="clear" />
                            <span
                              id="back-to-top"
                              className="epcl-button visible"
                              style={{ opacity: 1 }}
                            >
                              <svg
                                className="icon large"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m12 5l6 6m-6-6l-6 6m6-6v14"
                                ></path>
                              </svg>
                            </span>
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="default classic-large bg-box ctag ctag-lifestyle  post-access-public">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/vertical/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="lazy"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/af4c0655-3360-41c5-997f-54b03ad540c9.webp"
                              alt="Image of: Building your audience with subscriber signups"
                            />
                            <span className="screen-reader-text">
                              Building your audience with subscriber signups
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/lifestyle/"
                              className="primary-tag ctag ctag-lifestyle"
                              data-id="ctag-lifestyle"
                            >
                              Lifestyle
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2022-07-25"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Jul 25, 2022
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                3 min read
                              </div>
                              <div className="difficulty meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#medal-icon" />
                                </svg>
                                <span className="name">Rating</span>
                                <div className="rating   star-3">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/vertical/">
                                Building your audience with subscriber signups
                              </a>
                            </h2>
                          </header>
                          <div className="post-excerpt">
                            <p>
                              How Ghost allows you to turn anonymous readers
                              into an audience of active subscribers, so you
                              know what's working and what isn't....
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/technology/"
                                  className="ctag ctag-technology"
                                  data-id="ctag-technology"
                                >
                                  Technology
                                </a>
                                <a
                                  href="/zento-personal/tag/news/"
                                  className="ctag ctag-news"
                                  data-id="ctag-news"
                                >
                                  News
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/jonathan-doe/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                                  alt="Image of: Jonathan Doe"
                                />
                                <span className="author-name">
                                  Jonathan Doe
                                </span>
                              </a>
                            </div>
                            <div className="clear" />
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="default classic-large bg-box ctag ctag-travel  post-access-members">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/customizing-your-brand-and-design-settings/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="lazy"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-3.webp"
                              alt="Image of: Customizing your brand and design settings"
                            />
                            <span className="screen-reader-text">
                              Customizing your brand and design settings
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/travel/"
                              className="primary-tag ctag ctag-travel"
                              data-id="ctag-travel"
                            >
                              Travel
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2022-07-20"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Jul 20, 2022
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                3 min read
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/customizing-your-brand-and-design-settings/">
                                Customizing your brand and design settings
                              </a>
                            </h2>
                            <a
                              href="/zento-personal/customizing-your-brand-and-design-settings/"
                              className="access-icon visibility-members meta-info tooltip hide-on-mobile"
                              data-title="Members Article"
                              aria-label="Members Article"
                            >
                              <svg>
                                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#locked" />
                              </svg>
                            </a>
                          </header>
                          <div className="post-excerpt">
                            <p>
                              As discussed in the introduction post, one of the
                              best things about Ghost is just how much you can
                              customize to turn your site into something
                              unique....
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/lifestyle/"
                                  className="ctag ctag-lifestyle"
                                  data-id="ctag-lifestyle"
                                >
                                  Lifestyle
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/mary-buzard/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/a-woman-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-65c0389d7f54e-2.webp"
                                  alt="Image of: Mary Buzard"
                                />
                                <span className="author-name">Mary Buzard</span>
                              </a>
                            </div>
                            <div className="clear" />
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="default classic-large bg-box ctag ctag-lifestyle  post-access-tiers">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/sell/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="lazy"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/Canoe--in-the-style-of-psychedelic-manga--rococo-pastel-hues--geometric-shapes---patterns--anime-aesthetic--ornate-embroidery--digital-print--kawaii-aesthetic.webp"
                              alt="Image of: Selling memberships with recurring revenue"
                            />
                            <span className="screen-reader-text">
                              Selling memberships with recurring revenue
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/lifestyle/"
                              className="primary-tag ctag ctag-lifestyle"
                              data-id="ctag-lifestyle"
                            >
                              Lifestyle
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2021-03-16"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Mar 16, 2021
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                1 min read
                              </div>
                              <div className="difficulty meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#medal-icon" />
                                </svg>
                                <span className="name">Rating</span>
                                <div className="rating star-1  ">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/sell/">
                                Selling memberships with recurring revenue
                              </a>
                            </h2>
                            <a
                              href="/zento-personal/sell/"
                              className="access-icon visibility-paid meta-info tooltip hide-on-mobile"
                              data-title="Premium Article"
                              aria-label="Premium Article"
                            >
                              <svg>
                                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#vip" />
                              </svg>
                            </a>
                            <a
                              href="/zento-personal/sell/"
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
                              For creators and aspiring entrepreneurs looking to
                              generate a sustainable recurring revenue stream
                              from their creative work, Ghost has built-in
                              payments...
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/inspiration/"
                                  className="ctag ctag-inspiration"
                                  data-id="ctag-inspiration"
                                >
                                  Inspiration
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/jonathan-doe/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                                  alt="Image of: Jonathan Doe"
                                />
                                <span className="author-name">
                                  Jonathan Doe
                                </span>
                              </a>
                            </div>
                            <div className="clear" />
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="default classic-large bg-box ctag ctag-technology  post-access-public">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/publishing-options/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="lazy"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/eaa6617d-6c7b-42a7-826e-d04d3242ff2a-1.webp"
                              alt="Image of: What you need to know about Ghost Editor"
                            />
                            <span className="screen-reader-text">
                              What you need to know about Ghost Editor
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/technology/"
                              className="primary-tag ctag ctag-technology"
                              data-id="ctag-technology"
                            >
                              Technology
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2021-03-16"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Mar 16, 2021
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                2 min read
                              </div>
                              <div className="difficulty meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#medal-icon" />
                                </svg>
                                <span className="name">Rating</span>
                                <div className="rating  star-2 ">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/publishing-options/">
                                What you need to know about Ghost Editor
                              </a>
                            </h2>
                          </header>
                          <div className="post-excerpt">
                            <p>
                              The Ghost editor has everything you need to fully
                              optimise your content. This is where you can add
                              tags and...
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/travel/"
                                  className="ctag ctag-travel"
                                  data-id="ctag-travel"
                                >
                                  Travel
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/mary-buzard/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/a-woman-in-the-style-of-vibrant-illustrations-florianne-becker-light-violet-and-orange-deconstructed-tailoring-fauvismcore-minimal-65c0389d7f54e-2.webp"
                                  alt="Image of: Mary Buzard"
                                />
                                <span className="author-name">Mary Buzard</span>
                              </a>
                            </div>
                            <div className="clear" />
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                    <article className="default classic-large bg-box ctag ctag-news  post-access-public">
                      <div className="post-format-image epcl-flex">
                        <div className="featured-image">
                          <a
                            href="/zento-personal/integrations/"
                            className="thumb epcl-loader opacity-effect"
                          >
                            <img
                              className="fullimage cover"
                              loading="lazy"
                              
                              decoding="async"
                              src="/zento-personal/content/images/size/w660h660/2024/02/Candlelight-on-a-pink-background--in-the-style-of-minimalist-sets--vector--chrome-plated--subtle-color-variations--kinuko-y.-craft--dan-matutina--realistic-forms--everyday-life.webp"
                              alt="Image of: Setting up apps and custom integrations"
                            />
                            <span className="screen-reader-text">
                              Setting up apps and custom integrations
                            </span>
                          </a>
                          <div className="tags fill-color absolute">
                            <a
                              href="/zento-personal/tag/news/"
                              className="primary-tag ctag ctag-news"
                              data-id="ctag-news"
                            >
                              News
                            </a>
                          </div>
                        </div>
                        <div className="info">
                          <header>
                            <div className="meta inline small">
                              <span className="hide-on-desktop-sm hide-on-tablet hide-on-mobile">
                                <time
                                  className="meta-info"
                                  dateTime="2021-03-16"
                                >
                                  <svg className="icon main-color small">
                                    <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                                  </svg>
                                  Mar 16, 2021
                                </time>
                              </span>
                              <div className="min-read meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                                </svg>
                                1 min read
                              </div>
                              <div className="difficulty meta-info">
                                <svg className="icon main-color">
                                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#medal-icon" />
                                </svg>
                                <span className="name">Rating</span>
                                <div className="rating star-1  ">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>
                            </div>
                            <h2 className="main-title title underline-effect">
                              <a href="/zento-personal/integrations/">
                                Setting up apps and custom integrations
                              </a>
                            </h2>
                          </header>
                          <div className="post-excerpt">
                            <p>
                              It's possible to extend your Ghost site and
                              connect it with hundreds of the most popular apps
                              and...
                            </p>
                            <div className="clear" />
                          </div>
                          <footer className="bottom">
                            <div className="meta bottom epcl-flex">
                              <div className="tags">
                                <a
                                  href="/zento-personal/tag/technology/"
                                  className="ctag ctag-technology"
                                  data-id="ctag-technology"
                                >
                                  Technology
                                </a>
                              </div>
                              <a
                                href="/zento-personal/author/jonathan-doe/"
                                className="author"
                              >
                                <img
                                  className="author-image cover"
                                  loading="lazy"
                                  
                                  decoding="async"
                                  src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                                  alt="Image of: Jonathan Doe"
                                />
                                <span className="author-name">
                                  Jonathan Doe
                                </span>
                              </a>
                            </div>
                            <div className="clear" />
                          </footer>
                        </div>
                      </div>
                      <div className="clear" />
                    </article>
                  </div>
                  {/* end: .articles */}
                  <nav className="epcl-pagination section np-bottom">
                    <div className="nav">
                      <span className="page-number">Page 1 of 2</span>
                      <a
                        className="next epcl-button"
                        href="/zento-personal/page/2/"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* end: .content-wrapper */}
          </main>
          <div className="clear" />
          {/* start: .epcl-cta */}
          <div className="epcl-cta bg-box no-border-radius">
            <div className="grid-container epcl-flex">
              <div className="left grid-50 tablet-grid-50 np-mobile">
                <h2 className="title ularge no-margin">
                  Join to our community 👋
                </h2>
                <p>
                  Unlock full access to <b>Zento</b> and see the entire library
                  of <b>paid-members</b> only posts.
                </p>
              </div>
              <div className="right grid-50 tablet-grid-50 textcenter np-mobile">
                <p>
                  Try it for free for <b>7 days</b>, cancel at <b>anytime.</b>
                </p>
                <a
                  href="https://ghost.estudiopatagon.com/zento-personal/membership"
                  className="epcl-button black large"
                >
                  See our plans
                </a>
              </div>
            </div>
            <div className="clear" />
            <svg
              className="bg"
              width={284}
              height={453}
              viewBox="0 0 284 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="main-color"
                d="M100.795 7.49467C105.015 -1.99852 118.025 -2.47329 123.123 6.07068L123.86 7.49467L136.88 36.7886C148.263 62.3995 167.185 83.8837 191.069 98.4068L195.095 100.762L218.221 113.77C226.323 118.328 226.773 129.596 219.571 134.898L218.221 135.769L195.095 148.778C170.668 162.518 151.059 183.378 138.846 208.521L136.88 212.751L123.86 242.045C119.641 251.538 106.63 252.013 101.531 243.469L100.795 242.045L87.7754 212.751C76.3928 187.141 57.4695 165.656 33.5855 151.133L29.5593 148.778L6.43298 135.769C-1.66775 131.213 -2.1179 119.945 5.08284 114.641L6.43298 113.77L29.5593 100.762C53.9866 87.0215 73.5964 66.162 85.8089 41.0183L87.7754 36.7886L100.795 7.49467Z"
                fill="currentColor"
              />
              <path
                className="secondary-color"
                d="M159.795 210.495C164.015 201.001 177.025 200.527 182.123 209.071L182.86 210.495L195.88 239.789C207.263 265.399 226.185 286.884 250.069 301.407L254.095 303.762L277.221 316.77C285.323 321.328 285.773 332.596 278.571 337.898L277.221 338.769L254.095 351.778C229.668 365.518 210.059 386.378 197.846 411.521L195.88 415.751L182.86 445.045C178.641 454.538 165.63 455.013 160.531 446.469L159.795 445.045L146.775 415.751C135.393 390.141 116.47 368.656 92.5855 354.133L88.5593 351.778L65.433 338.769C57.3322 334.213 56.8821 322.945 64.0828 317.641L65.433 316.77L88.5593 303.762C112.987 290.022 132.596 269.162 144.809 244.018L146.775 239.789L159.795 210.495Z"
                fill="currentColor"
              />
            </svg>
            <svg
              className="bg2"
              width={284}
              height={453}
              viewBox="0 0 284 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="main-color"
                d="M100.795 445.045C105.015 454.538 118.025 455.013 123.123 446.469L123.86 445.045L136.88 415.751C148.263 390.14 167.185 368.656 191.069 354.133L195.095 351.777L218.221 338.77C226.323 334.212 226.773 322.944 219.571 317.642L218.221 316.77L195.095 303.762C170.668 290.022 151.059 269.162 138.846 244.018L136.88 239.788L123.86 210.494C119.641 201.002 106.63 200.527 101.531 209.071L100.795 210.494L87.7754 239.788C76.3928 265.399 57.4695 286.884 33.5855 301.406L29.5593 303.762L6.43298 316.77C-1.66775 321.327 -2.1179 332.595 5.08284 337.898L6.43298 338.77L29.5593 351.777C53.9866 365.518 73.5964 386.378 85.8089 411.521L87.7754 415.751L100.795 445.045Z"
                fill="currentColor"
              />
              <path
                className="secondary-color"
                d="M159.795 242.045C164.015 251.538 177.025 252.013 182.123 243.469L182.86 242.045L195.88 212.751C207.263 187.14 226.185 165.656 250.069 151.133L254.095 148.777L277.221 135.77C285.323 131.212 285.773 119.944 278.571 114.642L277.221 113.77L254.095 100.762C229.668 87.0217 210.059 66.1616 197.846 41.0181L195.88 36.7884L182.86 7.49449C178.641 -1.99834 165.63 -2.473 160.531 6.07056L159.795 7.49449L146.775 36.7884C135.393 62.399 116.47 83.8839 92.5855 98.4062L88.5593 100.762L65.433 113.77C57.3322 118.327 56.8821 129.595 64.0828 134.898L65.433 135.77L88.5593 148.777C112.987 162.518 132.596 183.378 144.809 208.521L146.775 212.751L159.795 242.045Z"
                fill="currentColor"
              />
            </svg>
          </div>
          {/* end: .epcl-cta */}
          {/* start: #footer */}
          <footer id="footer">
            <div className="widgets grid-container">
              <div className="desktop-footer hide-on-mobile hide-on-tablet">
                {/* start: .widget-social */}
                <div className="widget widget_epcl_social widget_menu grid-33 tablet-grid-50 mobile-grid-100">
                  <h3 className="widget-title title medium bordered">
                    <svg className="decoration">
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                    </svg>
                    <span>Follow Us</span>
                  </h3>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://wa.me/5492996155777"
                        className="whatsapp"
                        target="_blank"
                      >
                        <span className="name">
                          Let's talk on <b>WhatsApp</b>
                        </span>
                        <span className="icon">
                          <svg className="icon">
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#whatsapp-icon" />
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
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#instagram-icon" />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/ghost"
                        className="facebook"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <span className="name">
                          Follow on <b>Facebook</b>
                        </span>
                        <span className="icon">
                          <svg className="icon small">
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#facebook-icon" />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/tryghost"
                        className="twitter"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <span className="name">
                          Follow on <b>Twitter</b>
                        </span>
                        <span className="icon">
                          <svg className="icon small">
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#twitter-icon" />
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
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                    </svg>
                    <span>Quick Links</span>
                  </h2>
                  <nav className="secondary-nav grid-container grid-small textcenter">
                    <ul className="menu">
                      <li className="nav-membership">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/membership/">
                          Membership
                        </a>
                      </li>
                      <li className="nav-author-page">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/author/jonathan-doe/">
                          Author Page
                        </a>
                      </li>
                      <li className="nav-sign-in">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/signin/">
                          Sign In
                        </a>
                      </li>
                      <li className="nav-subscribe-sign-up">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/subscribe/">
                          Subscribe / Sign Up
                        </a>
                      </li>
                      <li className="nav-404-page">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/404/">
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
                    <a href="https://ghost.estudiopatagon.com/zento-personal">
                      <img
                        src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/logo-zento-personal-1.svg"
                        alt="Zento"
                        width={170}
                        height={60}
                        decoding="async"
                      />
                    </a>
                  </div>
                  <div className="textwidget">
                    <p>
                      Subscribe to our email newsletter and unlock access to{" "}
                      <b>members-only</b> content and <b>exclusive updates.</b>
                    </p>
                  </div>
                  <br />
                  <form
                    className="subscribe-form"
                    data-members-form="subscribe"
                  >
                    <label className="title small">Let's connect</label>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="inputbox large"
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
                      Subscription was sent successfully, check your email{" "}
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
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                    </svg>
                    <span>Quick Links</span>
                  </h2>
                  <nav className="secondary-nav grid-container grid-small textcenter">
                    <ul className="menu">
                      <li className="nav-membership">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/membership/">
                          Membership
                        </a>
                      </li>
                      <li className="nav-author-page">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/author/jonathan-doe/">
                          Author Page
                        </a>
                      </li>
                      <li className="nav-sign-in">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/signin/">
                          Sign In
                        </a>
                      </li>
                      <li className="nav-subscribe-sign-up">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/subscribe/">
                          Subscribe / Sign Up
                        </a>
                      </li>
                      <li className="nav-404-page">
                        <span className="sep" />
                        <a href="https://ghost.estudiopatagon.com/zento-personal/404/">
                          404 Page
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="clear" />
                </section>
                {/* end: .widget */} {/* start: .widget */}
                <section className="widget widget_text grid-33 tablet-grid-50 mobile-grid-100">
                  <div className="logo">
                    <a href="https://ghost.estudiopatagon.com/zento-personal">
                      <img
                        src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/logo-zento-personal-1.svg"
                        alt="Zento"
                        width={170}
                        height={60}
                        decoding="async"
                      />
                    </a>
                  </div>
                  <div className="textwidget">
                    <p>
                      Subscribe to our email newsletter and unlock access to{" "}
                      <b>members-only</b> content and <b>exclusive updates.</b>
                    </p>
                  </div>
                  <br />
                  <form
                    className="subscribe-form"
                    data-members-form="subscribe"
                  >
                    <label className="title small">Let's connect</label>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="inputbox large"
                        
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
                      Subscription was sent successfully, check your email{" "}
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
              </a>{" "}
              Theme by{" "}
              <a href="https://estudiopatagon.com" target="_blank">
                EstudioPatagon
              </a>{" "}
              <span className="dot" /> Powered by{" "}
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
          {/* end: #footer */}
        </div>
      </>
    </div>
  );
}

export default page;
