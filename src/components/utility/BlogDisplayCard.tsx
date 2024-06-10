import React from "react";

function BlogDisplayCard() {
  return (
    <>
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
                  <time className="meta-info" dateTime="2023-03-19">
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
              {/* <a
                href="/zento-personal/customizing-your-brand-and-design-settings/"
                className="access-icon visibility-members meta-info tooltip hide-on-mobile"
                data-title="Members Article"
                aria-label="Members Article"
              >
                <svg>
                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#locked" />
                </svg>
              </a> */}
              {/* <a
                href="/zento-personal/sell/"
                className="access-icon visibility-paid meta-info tooltip hide-on-mobile"
                data-title="Premium Article"
                aria-label="Premium Article"
              >
                <svg>
                  <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#vip" />
                </svg>
              </a> */}
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
                Hey there, welcome to your new home on the web! Unlike social
                networks, this one is all yours. Publish your...
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
                  <span className="author-name">Jonathan Doe</span>
                </a>
              </div>
              <div className="clear" />
              {/* <span
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
              </span> */}
            </footer>
          </div>
        </div>
        <div className="clear" />
      </article>
    </>
  );
}

export default BlogDisplayCard;
