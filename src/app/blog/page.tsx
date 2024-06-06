import React from "react";

function Blog() {
  return (
    <div>
      <>
      <main id="single" className="main grid-container classic">
          {}
          <div className="center content">
            {}
            <aside
              id="sidebar"
              className="enable-sticky grid-30 tablet-grid-30 hide-on-tablet hide-on-mobile"
            >
              {}
              <div className="widget widget_epcl_article_info grid-25 tablet-grid-50 mobile-grid-100">
                <h3 className="widget-title title medium bordered">
                  <svg className="decoration">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
                  </svg>
                  <span>Article Information</span>
                </h3>
                <div className="info meta bg-box">
                  <div className="item meta-info">
                    <svg className="icon main-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#tag-icon" />
                    </svg>
                    <span className="fw-semibold">Category:</span>
                    <a href="/zento/tag/3-css/" className="tag-name">
                      CSS
                    </a>
                  </div>
                  <time className="meta-info" dateTime="2024-01-19">
                    <svg className="icon main-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#clock-icon" />
                    </svg>
                    <span className="name">Updated:</span>
                    Feb 10, 2024
                  </time>
                  <div className="item meta-info">
                    <svg className="icon main-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#author-icon" />
                    </svg>
                    <span className="fw-semibold">Author:</span>
                    <a
                      href="/zento/author/jonathan-doe/"
                      className="author-name"
                    >
                      Jonathan Doe
                    </a>
                  </div>
                  <div className="min-read meta-info">
                    <svg className="icon main-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#reading-icon" />
                    </svg>
                    <span className="fw-semibold">Reading time:</span>2 min
                  </div>
                  <div className="difficulty meta-info">
                    <svg className="icon main-color">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#medal-icon" />
                    </svg>
                    <span className="name">Difficulty:</span>
                    <div className="rating   star-3">
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="widget widget_epcl_toc">
                <h3 className="widget-title title medium bordered">
                  <svg className="decoration">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#title-decoration" />
                  </svg>
                  <span>Table of Contents</span>
                </h3>
                <div className="toc">
                  <ol className="toc-list ">
                    <li className="toc-list-item is-active-li">
                      <a
                        href="#prerequisites"
                        className="toc-link node-name--H3  is-active-link"
                      >
                        Prerequisites
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a
                        href="#step-1-planning-your-animation"
                        className="toc-link node-name--H3 "
                      >
                        Step 1: Planning Your Animation
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a
                        href="#step-2-setting-up-your-html"
                        className="toc-link node-name--H3 "
                      >
                        Step 2: Setting Up Your HTML
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a
                        href="#step-3-writing-the-css-animation"
                        className="toc-link node-name--H3 "
                      >
                        Step 3: Writing the CSS Animation
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a
                        href="#step-4-triggering-the-animation-with-javascript-optional"
                        className="toc-link node-name--H3 "
                      >
                        Step 4: Triggering the Animation with JavaScript
                        (Optional)
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a
                        href="#step-5-preview-and-publish"
                        className="toc-link node-name--H3 "
                      >
                        Step 5: Preview and Publish
                      </a>
                    </li>
                    <li className="toc-list-item">
                      <a href="#conclusion" className="toc-link node-name--H3 ">
                        Conclusion
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </aside>
            {}
            {}
            <div className="left-content grid-70 np-mobile">
              <article className="main-article bg-box section post-access-public primary-tag-3-css post tag-3-css tag-code tag-hash-rating-3 tag-guides tag-tech no-image">
                <header>
                  <div className="info textcenter">
                    <h1 className="main-title title ularge">
                      Crafting Engaging CSS Animations step by step guide
                    </h1>
                    {}
                    <div className="meta small">
                      <time className="fw-semibold" dateTime="2024-01-19">
                        <svg className="icon main-color">
                          <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#calendar-icon" />
                        </svg>
                        Published: January 19, 2024
                      </time>
                    </div>
                    {}
                    <div className="clear" />
                  </div>
                  <div className="clear" />
                </header>
                <section className="post-content">
                  <div className="text">
                    <p>
                      In the realm of technology blogging, captivating your
                      audience goes beyond just the written word. Incorporating
                      eye-catching CSS animations can elevate your content and
                      provide a dynamic user experience. In this tutorial, we'll
                      explore the art of creating CSS animations to add flair
                      and interactivity to your technology blog.
                    </p>
                    {}
                    <h3 id="prerequisites">Prerequisites</h3>
                    <p>
                      Before we dive into the world of CSS animations, ensure
                      the following:
                    </p>
                    <ol>
                      <li>
                        <strong>Basic HTML and CSS Knowledge:</strong>{" "}
                        Familiarize yourself with the fundamentals of HTML and
                        CSS.
                      </li>
                      <li>
                        <strong>Access to Your Blog's Stylesheet:</strong> Make
                        sure you can modify your blog's CSS stylesheet.
                      </li>
                    </ol>
                    <h3 id="step-1-planning-your-animation">
                      Step 1: Planning Your Animation
                    </h3>
                    <p>
                      Before writing any code, sketch out the type of animation
                      you want. Consider the mood and tone of your blog,
                      ensuring the animation complements your content.
                    </p>
                    <h3 id="step-2-setting-up-your-html">
                      Step 2: Setting Up Your HTML
                    </h3>
                    <p>
                      In your blog post or webpage, identify the element you
                      want to animate. Add a class to this element for easy
                      targeting in your CSS.
                    </p>
                    <div className="code-toolbar">
                      <pre className="language-html" tabIndex={0}>
                        <code className="language-html">
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;</span>div
                            </span>{" "}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation attr-equals">
                                =
                              </span>
                              <span className="token punctuation">"</span>
                              animated-element
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          {"\n"}
                          {"  "}Your content here...{"\n"}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt;/</span>
                              div
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>HTML</span>
                        </div>
                        <div className="toolbar-item">
                          <button
                            className="copy-to-clipboard-button"
                            type="button"
                            data-copy-state="copy"
                          >
                            <span>Copy</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <h3 id="step-3-writing-the-css-animation">
                      Step 3: Writing the CSS Animation
                    </h3>
                    <p>
                      Open your blog's CSS stylesheet and add the following
                      code:
                    </p>
                    <div className="code-toolbar">
                      <pre className="language-css" tabIndex={0}>
                        <code className="language-css">
                          <span className="token selector">body</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">margin</span>
                          <span className="token punctuation">:</span> 0
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">font-family</span>
                          <span className="token punctuation">:</span>{" "}
                          <span className="token string">"Helvetica Neue"</span>
                          <span className="token punctuation">,</span> Helvetica
                          <span className="token punctuation">,</span> Arial
                          <span className="token punctuation">,</span>{" "}
                          sans-serif
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">font-size</span>
                          <span className="token punctuation">:</span> 13px
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">line-height</span>
                          <span className="token punctuation">:</span> 18px
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">color</span>
                          <span className="token punctuation">:</span> #333333
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">
                            background-color
                          </span>
                          <span className="token punctuation">:</span> #ffffff
                          <span className="token punctuation">;</span>
                          {"\n"}
                          <span className="token punctuation">{"}"}</span>
                          {"\n"}
                          {"\n"}
                          <span className="token selector">a</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">color</span>
                          <span className="token punctuation">:</span> #0088cc
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"  "}
                          <span className="token property">
                            text-decoration
                          </span>
                          <span className="token punctuation">:</span> none
                          <span className="token punctuation">;</span>
                          {"\n"}
                          <span className="token punctuation">{"}"}</span>
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>CSS</span>
                        </div>
                        <div className="toolbar-item">
                          <button
                            className="copy-to-clipboard-button"
                            type="button"
                            data-copy-state="copy"
                          >
                            <span>Copy</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p>
                      This example creates a simple fade-in animation with a
                      slight upward movement. Feel free to experiment with
                      different properties like <code>opacity</code>,{" "}
                      <code>transform</code>, and <code>transition</code> to
                      achieve the desired effect.
                    </p>
                    <h3 id="step-4-triggering-the-animation-with-javascript-optional">
                      Step 4: Triggering the Animation with JavaScript
                      (Optional)
                    </h3>
                    <p>
                      If you want the animation to occur on a specific event,
                      like when the user scrolls to the element, you can use
                      JavaScript. Add the following script to your blog:
                    </p>
                    <div className="code-toolbar">
                      <pre className="language-js" tabIndex={0}>
                        <code className="language-js">
                          <span className="token operator">&lt;</span>script
                          <span className="token operator">&gt;</span>
                          {"\n"}
                          {"  "}document
                          <span className="token punctuation">.</span>
                          <span className="token function">
                            addEventListener
                          </span>
                          <span className="token punctuation">(</span>
                          <span className="token string">
                            'DOMContentLoaded'
                          </span>
                          <span className="token punctuation">,</span>{" "}
                          <span className="token keyword">function</span>{" "}
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"    "}
                          <span className="token keyword">var</span>{" "}
                          animatedElement{" "}
                          <span className="token operator">=</span> document
                          <span className="token punctuation">.</span>
                          <span className="token function">querySelector</span>
                          <span className="token punctuation">(</span>
                          <span className="token string">
                            '.animated-element'
                          </span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"\n"}
                          {"    "}
                          <span className="token keyword">function</span>{" "}
                          <span className="token function">isInViewport</span>
                          <span className="token punctuation">(</span>
                          <span className="token parameter">element</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"      "}
                          <span className="token keyword">var</span> rect{" "}
                          <span className="token operator">=</span> element
                          <span className="token punctuation">.</span>
                          <span className="token function">
                            getBoundingClientRect
                          </span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"      "}
                          <span className="token keyword">return</span> rect
                          <span className="token punctuation">.</span>top{" "}
                          <span className="token operator">&lt;</span> window
                          <span className="token punctuation">.</span>
                          innerHeight
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"    "}
                          <span className="token punctuation">{"}"}</span>
                          {"\n"}
                          {"\n"}
                          {"    "}
                          <span className="token keyword">function</span>{" "}
                          <span className="token function">handleScroll</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"      "}
                          <span className="token keyword">if</span>{" "}
                          <span className="token punctuation">(</span>
                          <span className="token function">isInViewport</span>
                          <span className="token punctuation">(</span>
                          animatedElement
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                          {"\n"}
                          {"        "}animatedElement
                          <span className="token punctuation">.</span>classList
                          <span className="token punctuation">.</span>
                          <span className="token function">add</span>
                          <span className="token punctuation">(</span>
                          <span className="token string">'show'</span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"        "}window
                          <span className="token punctuation">.</span>
                          <span className="token function">
                            removeEventListener
                          </span>
                          <span className="token punctuation">(</span>
                          <span className="token string">'scroll'</span>
                          <span className="token punctuation">,</span>{" "}
                          handleScroll
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"      "}
                          <span className="token punctuation">{"}"}</span>
                          {"\n"}
                          {"    "}
                          <span className="token punctuation">{"}"}</span>
                          {"\n"}
                          {"\n"}
                          {"    "}window
                          <span className="token punctuation">.</span>
                          <span className="token function">
                            addEventListener
                          </span>
                          <span className="token punctuation">(</span>
                          <span className="token string">'scroll'</span>
                          <span className="token punctuation">,</span>{" "}
                          handleScroll
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">handleScroll</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>{" "}
                          <span className="token comment">

                          </span>
                          {"\n"}
                          {"  "}
                          <span className="token punctuation">{"}"}</span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span>
                          {"\n"}
                          <span className="token operator">&lt;</span>
                          <span className="token operator">/</span>script
                          <span className="token operator">&gt;</span>
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>JavaScript</span>
                        </div>
                        <div className="toolbar-item">
                          <button
                            className="copy-to-clipboard-button"
                            type="button"
                            data-copy-state="copy"
                          >
                            <span>Copy</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <h3 id="step-5-preview-and-publish">
                      Step 5: Preview and Publish
                    </h3>
                    <p>
                      Preview your blog post to see the CSS animation in action.
                      Tweak the animation properties as needed to achieve the
                      desired look and feel. Once satisfied, publish your post
                      and let your readers enjoy the visually enhanced content.
                    </p>
                    <h3 id="conclusion">Conclusion</h3>
                    <p>
                      By incorporating CSS animations into your technology blog,
                      you add a layer of engagement that captivates your
                      audience. Experiment with different animations and effects
                      to find the perfect fit for your blog's style. Elevate
                      your content and make a lasting impression with the power
                      of CSS animations.
                    </p>
                  </div>
                  {}
                  <div className="share-buttons epcl-social-buttons fill-color">
                    <h5 className="title usmall fw-semibold">Share Article:</h5>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://ghost.estudiopatagon.com/zento/text-only/"
                      target="_blank"
                    >
                      <svg className="icon">
                        <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#facebook-icon" />
                      </svg>
                    </a>
                    <a
                      className="twitter"
                      href="http://twitter.com/share?text=Crafting%20Engaging%20CSS%20Animations%20step%20by%20step%20guide&url=https://ghost.estudiopatagon.com/zento/text-only/"
                      target="_blank"
                    >
                      <svg className="icon">
                        <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#twitter-icon" />
                      </svg>
                    </a>
                    <a
                      className="whatsapp"
                      href="https://api.whatsapp.com/send?text=https://ghost.estudiopatagon.com/zento/text-only/"
                      target="_blank"
                      data-action="share/whatsapp/share"
                    >
                      <svg className="icon">
                        <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#whatsapp-icon" />
                      </svg>
                    </a>
                    <a
                      className="email"
                      href="mailto:?subject=Crafting%20Engaging%20CSS%20Animations%20step%20by%20step%20guide&body=https://ghost.estudiopatagon.com/zento/text-only/"
                      target="_blank"
                    >
                      <svg className="icon">
                        <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#email-icon" />
                      </svg>
                    </a>
                    <div className="clear" />
                    <div className="permalink">
                      <div className="form-group">
                        <input
                          type="text"
                          name="shortlink"
                          defaultValue="https://ghost.estudiopatagon.com/zento/text-only/"
                          className="inputbox large"
                          id="copy-link"
                          readOnly
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
                  {}
                </section>
              </article>
              <div className="clear" />
              <section className="siblings epcl-flex" id="epcl-other-stories">
                <article className="prev epcl-flex ctag-1-fundamentals post tag-1-fundamentals tag-tech tag-hash-rating-1 tag-code featured">
                  <div className="info">
                    <p>Previous Article</p>
                    <h4 className="title usmall white fw-semibold">
                      Understanding how links works 🚀
                    </h4>
                  </div>
                  <span className="arrow">
                    <svg className="icon large">
                      <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#left-arrow" />
                    </svg>
                  </span>
                  <a href="/zento/vertical/" className="full-link" />
                </article>
                <div className="clear" />
              </section>
              <section
                className="related bg-box section ctag-3-css"
                id="epcl-related-stories"
              >
                <div className="category-info epcl-flex">
                  <div className="overlay-effect ctag-3-css">
                    <span
                      className="image-container category-image ctag-3-css"
                    >
                      <img src="/zento/content/images/size/w300h300/2024/02/css-icon.svg" />
                    </span>
                    <h3 className="title usmall fw-normal">
                      More in this <b>Category</b>{" "}
                      <span className="title large">CSS</span>
                    </h3>
                    <a
                      href="https://ghost.estudiopatagon.com/zento/tag/3-css/"
                      className="full-link"
                    >
                      <span className="screen-reader-text">CSS</span>
                    </a>
                  </div>
                  <a
                    href="https://ghost.estudiopatagon.com/zento/tag/3-css/"
                    className="epcl-button ctag ctag-3-css hide-on-mobile"
                  >
                    View All Articles
                  </a>
                  <div className="clear" />
                </div>
                <div className="clear" />
                <div className="article-list">
                  <article className="item post no-image">
                    <div className="epcl-number black">1</div>
                    <div className="info">
                      <h4 className="title small underline-effect no-margin">
                        <a href="/zento/text-only/">
                          Crafting Engaging CSS Animations step by step guide
                        </a>
                      </h4>
                    </div>
                  </article>
                  <div className="clear" />
                  <article className="item post featured no-image">
                    <div className="epcl-number black">2</div>
                    <div className="info">
                      <h4 className="title small underline-effect no-margin">
                        <a href="/zento/advanced-css-selectors-class-and-id/">
                          CSS Selectors: Class and ID basic filtering for HTML
                          elements
                        </a>
                      </h4>
                    </div>
                  </article>
                  <div className="clear" />
                  <article className="item post no-image">
                    <div className="epcl-number black">3</div>
                    <div className="info">
                      <h4 className="title small underline-effect no-margin">
                        <a href="/zento/css-basics/">Introduction to CSS 🚀</a>
                      </h4>
                    </div>
                  </article>
                  <div className="clear" />
                </div>
                <div className="clear" />
                <a
                  href="https://ghost.estudiopatagon.com/zento/tag/3-css/"
                  className="epcl-button ctag ctag-3-css hide-on-tablet hide-on-desktop"
                >
                  View All Articles
                </a>
              </section>
              <div className="clear" />
              {}
              <div id="comments" className="medium-section np-bottom">
                <div id="ghost-comments-root">
                  <iframe
                    srcDoc="<!DOCTYPE html>"
                    frameBorder={0}
                    title="comments-frame"
                    style={{ width: "100%", height: 432 }}
                  />
                  <iframe
                    data-frame="admin-auth"
                    src="https://ghost.estudiopatagon.com/zento/ghost/auth-frame/"
                    title="auth-frame"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              {}
            </div>
            {}
            <div className="clear" />
          </div>
          {}
        </main>
      </>
    </div>
  );
}

export default Blog;
