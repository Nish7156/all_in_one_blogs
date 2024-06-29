import React from 'react'

function tt() {
  return (
    <div>
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
  )
}

export default tt