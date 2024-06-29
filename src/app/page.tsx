"use client";
import BottomTagLine from "@/components/pages/Home/BottomTagLine";
import HeroSection from "@/components/pages/Home/HeroSection";
import TrandingTopic from "@/components/pages/Home/TrandingTopic";
import { Button } from "@/components/ui/button";
import BlogDisplayCard from "@/components/utility/BlogDisplayCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const categoryClassArr = [
    "ctag-inspiration",
    "ctag-lifestyle",
    "ctag-travel",
    "ctag-technology",
    "ctag-news",
  ];

  const onGetBLogs = async () => {
    try {
      const response = await axios.get("/api/blogs", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setBlogs(response.data);
        console.log("Data saved successfully!", response.data);
      } else {
        console.error("Error saving data to MongoDB");
      }
    } catch (error) {
      console.error("Error saving data to MongoDB:", error);
    }
  };

  useEffect(() => {
    onGetBLogs();
  }, []);

  return (
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
                  Hey, I'm <span className="highlight">Jonathan Doe</span> 👋{" "}
                </h1>
                {/*kg-card-end: html*/}
                <p>
                  I'm a&nbsp;<strong>design technologist</strong>&nbsp;in
                  Atlanta. I like working on the front-end of the web. This is
                  my site,&nbsp;<strong>Zento</strong>&nbsp;where I blog, share
                  and write about my personal projects..
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
                        <span className="screen-reader-text">Lifestyle</span>
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
                        <span className="screen-reader-text">Inspiration</span>
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
                        <span className="screen-reader-text">Technology</span>
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
                      <a href="/zento-personal/tag/news/" className="full-link">
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
                        articles for this website. I really like tutorials and
                        illustrations, so stay alert for my next tutorials.
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
                {blogs.map((data: any, index: number) => {
                  return (
                    <div key={index}>
                      <BlogDisplayCard data={data} />
                    </div>
                  );
                })}
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
        <BottomTagLine />
      </main>
    </>
  );
}
