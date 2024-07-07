import axios from "axios";
import React from "react";

const getBlogBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlogBySlug?slug=${slug}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error ");
    }
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
  }
};

async function SingleBlog({ params }: any) {

  const blogData = await getBlogBySlug(params?.slug || "");

  return (
    <>
      <div>
        <>
          <main
            id="single"
            className="main grid-container classic epcl-vertical"
          >
            {/* start: .center */}
            <div className="center content">
              {/* start: #sidebar */}
              <aside
                id="sidebar"
                className="enable-sticky grid-30 tablet-grid-30 hide-on-tablet hide-on-mobile"
              >
                {/* start: .widget-tag-cloud */}
                <div className="widget widget_epcl_article_info grid-25 tablet-grid-50 mobile-grid-100">
                  <h3 className="widget-title title medium bordered">
                    <svg className="decoration">
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                    </svg>
                    <span>Article Information</span>
                  </h3>
                  <div className="info meta bg-box">
                    <div className="item meta-info">
                      <svg className="icon main-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#tag-icon" />
                      </svg>
                      <span className="fw-semibold">Category:</span>
                      <a
                        href="/zento-personal/tag/lifestyle/"
                        className="tag-name"
                      >
                        Lifestyle
                      </a>
                    </div>
                    <time className="meta-info" dateTime="2022-07-25">
                      <svg className="icon main-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#clock-icon" />
                      </svg>
                      <span className="name">Updated:</span>
                      Feb 18, 2024
                    </time>
                    <div className="item meta-info">
                      <svg className="icon main-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#author-icon" />
                      </svg>
                      <span className="fw-semibold">Author:</span>
                      <a
                        href="/zento-personal/author/jonathan-doe/"
                        className="author-name"
                      >
                        Jonathan Doe
                      </a>
                    </div>
                    <div className="min-read meta-info">
                      <svg className="icon main-color">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#reading-icon" />
                      </svg>
                      <span className="fw-semibold">Reading time:</span>3 min
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
                </div>
                {/* end: .widget-tag-cloud */}
                <div className="widget widget_epcl_toc">
                  <h3 className="widget-title title medium bordered">
                    <svg className="decoration">
                      <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#title-decoration" />
                    </svg>
                    <span>Table of Contents</span>
                  </h3>
                  <div className="toc">
                    <ol className="toc-list ">
                      <li className="toc-list-item is-active-li">
                        <a
                          href="#portal-settings"
                          className="toc-link node-name--H3  is-active-link"
                        >
                          Portal Settings
                        </a>
                      </li>
                      <li className="toc-list-item">
                        <a
                          href="#ghost-members"
                          className="toc-link node-name--H3 "
                        >
                          Ghost Members
                        </a>
                      </li>
                      <li className="toc-list-item">
                        <a
                          href="#conclusion"
                          className="toc-link node-name--H3 "
                        >
                          Conclusion
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
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
                          {blogData?.title}
                        </span>
                      </a>
                      <div className="right">
                        <h4 className="title usmall underline-effect">
                          <a href="/zento-personal/vertical/">
                            {blogData?.title}ddddd
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
              {/* start: .content */}
              <div className="left-content grid-70 np-mobile">
                <article className="main-article bg-box section post-access-public primary-tag-lifestyle post tag-lifestyle tag-technology tag-news tag-hash-rating-3">
                  <header>
                    <div className="info textcenter">
                      <h1 className="main-title title">{blogData?.title}</h1>
                      {/* start: .meta */}
                      <div className="meta small">
                        <time className="fw-semibold" dateTime="2022-07-25">
                          <svg className="icon main-color">
                            <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#calendar-icon" />
                          </svg>
                          Published: July 25, 2022
                        </time>
                        <div className="clear" />
                      </div>
                      {/* end: .meta */}
                    </div>
                    <div className="featured-image">
                      <img
                        className="fullwidth"
                        width={300}
                        height={380}
                        src="/zento-personal/content/images/size/w660h660/2024/02/af4c0655-3360-41c5-997f-54b03ad540c9.webp"
                        decoding="async"
                        alt="Building your audience with subscriber signups"
                      />
                      <p className="featured-image-caption textcenter border-effect" />
                    </div>
                    <div className="clear" />
                  </header>
                  <section className="post-content">
                    {/* <div className="text">
              <p>
                What sets Ghost apart from other products is that you can
                publish content and grow your audience using the same platform.
                Rather than just endlessly posting and hoping someone is
                listening, you can track real signups against your work and have
                them subscribe to be notified of future posts. The feature that
                makes all this possible is called <em>Portal</em>.
              </p>
              <h3 id="portal-settings">Portal Settings</h3>
              <p>
                Portal is an embedded interface for your audience to sign up to
                your site. It works on every Ghost site, with every theme, and
                for any type of publisher.{" "}
              </p>
              <p>
                You can customize the design, content and settings of Portal to
                suit your site, whether you just want people to sign up to your
                newsletter — or you're running a full premium publication with
                user sign-ins and private content.
              </p>
              <figure className="kg-card kg-image-card kg-card-hascaption">
                <img
                  src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/7e6d4245-a04c-45a1-b7de-df8f2ba0f3f5-1.webp"
                  className="kg-image"
                  alt=""
                  loading="lazy"
                  width={2000}
                  height={2000}
                  srcSet="https://ghost.estudiopatagon.com/zento-personal/content/images/size/w600/2024/02/7e6d4245-a04c-45a1-b7de-df8f2ba0f3f5-1.webp 600w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1000/2024/02/7e6d4245-a04c-45a1-b7de-df8f2ba0f3f5-1.webp 1000w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1600/2024/02/7e6d4245-a04c-45a1-b7de-df8f2ba0f3f5-1.webp 1600w, https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/7e6d4245-a04c-45a1-b7de-df8f2ba0f3f5-1.webp 2000w"
                  sizes="(min-width: 720px) 720px"
                />
                <figcaption>
                  <span style={{ whiteSpace: "pre-wrap" }}>Image caption</span>
                </figcaption>
              </figure>
              <p>
                Once people sign up to your site, they'll receive an email
                confirmation with a link to click. The link acts as an automatic
                sign-in, so subscribers will be automatically signed-in to your
                site when they click on it. There are a couple of interesting
                angles to this:
              </p>
              <p>
                Because subscribers are automatically able to sign in and out of
                your site as registered members: You can (optionally) restrict
                access to posts and pages depending on whether people are
                signed-in or not. So if you want to publish some posts for free,
                but keep some really great stuff for members-only, this can be a
                great draw to encourage people to sign up!
              </p>
              <h3 id="ghost-members">Ghost Members</h3>
              <p>
                Ghost members sign in using email authentication links, so there
                are no passwords for people to set or forget. You can turn any
                list of email subscribers into a database of registered members
                who can sign in to your site. Like magic.
              </p>
              <figure className="kg-card kg-gallery-card kg-width-wide kg-card-hascaption">
                <div className="kg-gallery-container">
                  <div className="kg-gallery-row">
                    <div
                      className="kg-gallery-image"
                      style={{ flex: "1 1 0%" }}
                    >
                      <a
                        href="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp"
                        className="hover-effect"
                        rel="gallery"
                      >
                        <img
                          src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp"
                          width={2000}
                          height={2000}
                          loading="lazy"
                          alt=""
                          srcSet="https://ghost.estudiopatagon.com/zento-personal/content/images/size/w600/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp 600w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1000/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp 1000w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1600/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp 1600w, https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/fae9a49c-2b52-4e0e-93fe-e071feb02042-1.webp 2048w"
                          sizes="(min-width: 720px) 720px"
                        />
                      </a>
                    </div>
                    <div
                      className="kg-gallery-image"
                      style={{ flex: "1 1 0%" }}
                    >
                      <a
                        href="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp"
                        className="hover-effect"
                        rel="gallery"
                      >
                        <img
                          src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp"
                          width={2000}
                          height={2000}
                          loading="lazy"
                          alt=""
                          srcSet="https://ghost.estudiopatagon.com/zento-personal/content/images/size/w600/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp 600w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1000/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp 1000w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1600/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp 1600w, https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69-1.webp 2048w"
                          sizes="(min-width: 720px) 720px"
                        />
                      </a>
                    </div>
                    <div
                      className="kg-gallery-image"
                      style={{ flex: "1 1 0%" }}
                    >
                      <a
                        href="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp"
                        className="hover-effect"
                        rel="gallery"
                      >
                        <img
                          src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp"
                          width={2000}
                          height={2000}
                          loading="lazy"
                          alt=""
                          srcSet="https://ghost.estudiopatagon.com/zento-personal/content/images/size/w600/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp 600w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1000/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp 1000w, https://ghost.estudiopatagon.com/zento-personal/content/images/size/w1600/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp 1600w, https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/ebd97452-e5b5-4423-b362-a5f493f80bc1-1.webp 2048w"
                          sizes="(min-width: 720px) 720px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <figcaption>
                  <p>
                    <span style={{ whiteSpace: "pre-wrap" }}>Gallery Card</span>
                  </p>
                </figcaption>
              </figure>
              <p>
                Portal makes all of this possible, and it appears by default as
                a floating button in the bottom-right corner of your site. When
                people are logged out, clicking it will open a sign-up/sign-in
                window. When members are logged in, clicking the Portal button
                will open the account menu where they can edit their name,
                email, and subscription settings.
              </p>
              <h3 id="conclusion">Conclusion</h3>
              <p>
                The floating Portal button is completely optional. If you
                prefer, you can add manual links to your content, navigation, or
                theme to trigger it instead.
              </p>
              <p>
                Like this! <a href="#/portal">Sign up here</a>
              </p>
              <hr />
              <p>
                As you start to grow your registered audience, you'll be able to
                get a sense of who you're publishing <em>for</em> and where
                those people are coming <em>from</em>. Best of all: You'll have
                a straightforward, reliable way to connect with people who enjoy
                your work.
              </p>
              <p>
                Social networks go in and out of fashion all the time. Email
                addresses are timeless.
              </p>
              <p>
                Growing your audience is valuable no matter what type of site
                you run, but if your content <em>is</em> your business, then you
                might also be interested in{" "}
                <a href="https://ghost.estudiopatagon.com/zento-personal/sell/">
                  setting up premium subscriptions
                </a>
                .
              </p>
            </div> */}
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{ __html: blogData?.content }}
                    ></div>
                    {/* start: .share-buttons */}
                    <div className="share-buttons epcl-social-buttons fill-color">
                      <h5 className="title usmall fw-semibold">
                        Share Article:
                      </h5>
                      <a
                        className="facebook"
                        href="https://www.facebook.com/sharer/sharer.php?u=https://ghost.estudiopatagon.com/zento-personal/vertical/"
                        target="_blank"
                      >
                        <svg className="icon">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#facebook-icon" />
                        </svg>
                      </a>
                      <a
                        className="twitter"
                        href="http://twitter.com/share?text=Building%20your%20audience%20with%20subscriber%20signups&url=https://ghost.estudiopatagon.com/zento-personal/vertical/"
                        target="_blank"
                      >
                        <svg className="icon">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#twitter-icon" />
                        </svg>
                      </a>
                      <a
                        className="whatsapp"
                        href="https://api.whatsapp.com/send?text=https://ghost.estudiopatagon.com/zento-personal/vertical/"
                        target="_blank"
                        data-action="share/whatsapp/share"
                      >
                        <svg className="icon">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#whatsapp-icon" />
                        </svg>
                      </a>
                      <a
                        className="email"
                        href="mailto:?subject=Building%20your%20audience%20with%20subscriber%20signups&body=https://ghost.estudiopatagon.com/zento-personal/vertical/"
                        target="_blank"
                      >
                        <svg className="icon">
                          <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#email-icon" />
                        </svg>
                      </a>
                      <div className="clear" />
                      <div className="permalink">
                        <div className="form-group">
                          <input
                            type="text"
                            name="shortlink"
                            defaultValue="https://ghost.estudiopatagon.com/zento-personal/vertical/"
                            className="inputbox large"
                            id="copy-link"
                          />
                          <button
                            className="copy epcl-button submit absolute"
                            type="submit"
                            data-copied="Copied!"
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end: .share-buttons */}
                  </section>
                </article>
                <div className="clear" />
                <section className="siblings epcl-flex" id="epcl-other-stories">
                  <article className="prev epcl-flex ctag-travel post tag-travel tag-lifestyle">
                    <div className="info">
                      <p>Previous Article</p>
                      <h4 className="title usmall white fw-semibold">
                        Customizing your brand and design settings
                      </h4>
                    </div>
                    <span className="arrow">
                      <svg className="icon large">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#left-arrow" />
                      </svg>
                    </span>
                    <a
                      href="/zento-personal/customizing-your-brand-and-design-settings/"
                      className="full-link"
                    />
                  </article>
                  <div className="separator hide-on-mobile" />
                  <article className="next epcl-flex ctag-inspiration post tag-inspiration tag-travel tag-hash-rating-2 tag-lifestyle">
                    <div className="info">
                      <p>Next Article</p>
                      <h4 className="title usmall white fw-semibold">
                        Far far away, behind the word mountains
                      </h4>
                    </div>
                    <span className="arrow">
                      <svg className="icon large">
                        <use xlinkHref="/zento-personal/assets/images/svg-icons.svg?v=49dd8d696b#right-arrow" />
                      </svg>
                    </span>
                    <a href="/zento-personal/classic/" className="full-link" />
                  </article>
                  <div className="clear" />
                </section>
                <section
                  className="related bg-box section ctag-lifestyle"
                  id="epcl-related-stories"
                >
                  <div className="category-info epcl-flex">
                    <div className="overlay-effect ctag-lifestyle">
                      <span className="image-container category-image ctag-lifestyle">
                        <img src="/zento-personal/content/images/size/w300h300/2024/02/d61a6f81-1a45-429f-b69a-ac6b567cfd69.webp" />
                      </span>
                      <h3 className="title usmall fw-normal">
                        More in this <b>Category</b>{" "}
                        <span className="title large">Lifestyle</span>
                      </h3>
                      <a className="full-link">
                        <span className="screen-reader-text">Lifestyle</span>
                      </a>
                    </div>
                    <a className="epcl-button ctag ctag-lifestyle hide-on-mobile">
                      View All Articles
                    </a>
                    <div className="clear" />
                  </div>
                  <div className="clear" />
                  <div className="article-list">
                    <article className="item post">
                      <div className="epcl-number black">1</div>
                      <div className="info">
                        <h4 className="title small underline-effect no-margin">
                          <a href="/zento-personal/vertical/">
                            Building your audience with subscriber signups
                          </a>
                        </h4>
                      </div>
                    </article>
                    <div className="clear" />
                  </div>
                  <div className="clear" />
                  <a className="epcl-button ctag ctag-lifestyle hide-on-tablet hide-on-desktop">
                    View All Articles
                  </a>
                </section>
                <div className="clear" />
                {/* start: #comments */}
                <div id="comments" className="medium-section np-bottom">
                  <div id="ghost-comments-root">
                    <iframe
                      srcDoc="<!DOCTYPE html>"
                      frameBorder={0}
                      title="comments-frame"
                      style={{ width: "100%", height: 288 }}
                    />
                    <iframe
                      data-frame="admin-auth"
                      src="https://ghost.estudiopatagon.com/zento-personal/ghost/auth-frame/"
                      title="auth-frame"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                {/* end: #comments */}
              </div>
              {/* end: .content */}
              <div className="clear" />
            </div>
            {/* end: .center */}
          </main>
        </>
      </div>
    </>
  );
}

export default SingleBlog;
