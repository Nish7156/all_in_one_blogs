import React from 'react'

function Author() {
  return (
    <div>
        <main id="archives" className="main">
  {/* start: .content-wrapper */}
  <div className="content-wrapper">
    <div className="grid-container grid-medium">
      {/* start: .author */}
      <section id="author" className="author epcl-flex  with-avatar">
        <div className="left">
          <h4 className="title author-name large">Jonathan Doe</h4>
          <div className="info">
            <p>
              Hello! My name is Jonathan Doe!, Actively writing articles for
              this website. I really like tutorials and illustrations, so stay
              alert for my next tutorials.
            </p>
          </div>
          <div className="social">
            <a
              href="https://twitter.com/envato"
              className="twitter tooltip"
              data-title="Follow me on Twitter"
              target="_blank"
            >
              <svg className="icon">
                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#twitter-icon" />
              </svg>
              Twitter
            </a>
            <a
              href="https://www.facebook.com/envato"
              className="facebook tooltip"
              data-title="Follow me on Facebook"
              target="_blank"
            >
              <svg className="icon">
                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#facebook-icon" />
              </svg>
              Facebook
            </a>
            <a
              href="https://estudiopatagon.com"
              className="website tooltip"
              data-title="Website: https://estudiopatagon.com"
              target="_blank"
            >
              <svg className="icon main-color">
                <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#website-icon" />
              </svg>
              Website
            </a>
          </div>
        </div>
        <div className="right">
          <span className="author-avatar">
            <img
              className="author-image cover"
              fetchpriority="high"
              decoding="async"
              src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/Rectangle-660-3.jpg"
            />
          </span>
        </div>
      </section>
      {/* end: .author */}
    </div>
    <div className="clear" />
  </div>
  {/* end: .content-wrapper */}
  <div className="grid-container content">
    {/* start: .content-wrapper */}
    <div className="content-wrapper" id="post-list">
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
                          "url( /zento-personal/content/images/size/w300h300/2024/02/Rectangle-660-3.jpg )"
                      }}
                    />{" "}
                    <span className="screen-reader-text">Jonathan Doe</span>
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
                  Hello! My name is Jonathan Doe!, Actively writing articles for
                  this website. I really like tutorials and illustrations, so
                  stay alert for my next tutorials.
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
                  </time>{" "}
                </div>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                  </time>{" "}
                </div>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                  </time>{" "}
                </div>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                    fetchpriority="high"
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
                      </svg>{" "}
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
                    Hey there, welcome to your new home on the web! Unlike
                    social networks, this one is all yours. Publish your...
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
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
                    </a>
                  </div>
                  <div className="clear" />
                </footer>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                    fetchpriority="low"
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
                      <time className="meta-info" dateTime="2022-07-25">
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
                      </svg>{" "}
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
                    How Ghost allows you to turn anonymous readers into an
                    audience of active subscribers, so you know what's working
                    and what isn't....
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
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
                    </a>
                  </div>
                  <div className="clear" />
                </footer>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                    fetchpriority="low"
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
                      <time className="meta-info" dateTime="2021-03-16">
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
                      </svg>{" "}
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
                    For creators and aspiring entrepreneurs looking to generate
                    a sustainable recurring revenue stream from their creative
                    work, Ghost has built-in payments...
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
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
                    </a>
                  </div>
                  <div className="clear" />
                </footer>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
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
                    fetchpriority="low"
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
                      <time className="meta-info" dateTime="2021-03-16">
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
                      </svg>{" "}
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
                    It's possible to extend your Ghost site and connect it with
                    hundreds of the most popular apps and...
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
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
                    </a>
                  </div>
                  <div className="clear" />
                </footer>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
          <article className="default classic-large bg-box ctag ctag-technology  post-access-public">
            <div className="post-format-image epcl-flex">
              <div className="featured-image">
                <a
                  href="/zento-personal/writing-apps/"
                  className="thumb epcl-loader opacity-effect"
                >
                  <img
                    className="fullimage cover"
                    loading="lazy"
                    fetchpriority="low"
                    decoding="async"
                    src="/zento-personal/content/images/size/w660h660/2024/02/eaa6617d-6c7b-42a7-826e-d04d3242ff2a.webp"
                    alt="Image of: Writing and managing content in Ghost"
                  />
                  <span className="screen-reader-text">
                    Writing and managing content in Ghost
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
                      <time className="meta-info" dateTime="2021-01-06">
                        <svg className="icon main-color small">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                        </svg>
                        Jan 06, 2021
                      </time>
                    </span>
                    <div className="min-read meta-info">
                      <svg className="icon main-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                      </svg>
                      4 min read
                    </div>
                  </div>
                  <h2 className="main-title title underline-effect">
                    <a href="/zento-personal/writing-apps/">
                      Writing and managing content in Ghost
                    </a>
                  </h2>
                </header>
                <div className="post-excerpt">
                  <p>
                    Ghost comes with a best-in-class editor which does its very
                    best to get out of the way, and let you...
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
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
                    </a>
                  </div>
                  <div className="clear" />
                </footer>
              </div>
            </div>
            <div className="clear" />
          </article>{" "}
          <article className="default classic-large bg-box ctag ctag-news  post-access-public">
            <div className="post-format-image epcl-flex">
              <div className="featured-image">
                <a
                  href="/zento-personal/the-spectacle-before-us-was-indeed-sublime/"
                  className="thumb epcl-loader opacity-effect"
                >
                  <img
                    className="fullimage cover"
                    loading="lazy"
                    fetchpriority="low"
                    decoding="async"
                    src="/zento-personal/content/images/size/w660h660/2024/02/Man-on-a-pink-background--in-the-style-of-minimalist-sets--vector--chrome-plated--subtle-color-variations--kinuko-y.-craft--dan-matutina--realistic-forms--everyday-life.png"
                    alt="Image of: The spectacle before us was indeed sublime"
                  />
                  <span className="screen-reader-text">
                    The spectacle before us was indeed sublime
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
                      <time className="meta-info" dateTime="2019-04-26">
                        <svg className="icon main-color small">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                        </svg>
                        Apr 26, 2019
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
                      </svg>{" "}
                      <span className="name">Rating</span>
                      <div className="rating   star-3">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="main-title title underline-effect">
                    <a href="/zento-personal/the-spectacle-before-us-was-indeed-sublime/">
                      The spectacle before us was indeed sublime
                    </a>
                  </h2>
                  <a
                    href="/zento-personal/the-spectacle-before-us-was-indeed-sublime/"
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
                    Welcome, it's great to have you here. We know that first
                    impressions are important, so we've...
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
                      href="/zento-personal/author/jonathan-doe/"
                      className="author"
                    >
                      <img
                        className="author-image cover"
                        loading="lazy"
                        fetchpriority="low"
                        decoding="async"
                        src="/zento-personal/content/images/size/w120h120/2024/02/Rectangle-660-3.jpg"
                        alt="Image of: Jonathan Doe"
                      />
                      <span className="author-name">Jonathan Doe</span>
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
              href="/zento-personal/author/jonathan-doe/page/2/"
            >
              Next
            </a>
          </div>
        </nav>
      </div>{" "}
      <div className="clear" />
    </div>
    {/* end: .content-wrapper */}
  </div>
</main>

    </div>
  )
}

export default Author