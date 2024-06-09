import React from 'react'

function TrandingTopic() {
  return (
    <>
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
                            fetchpriority="low"
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
                            fetchpriority="low"
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
                            fetchpriority="low"
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
                            fetchpriority="low"
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
                            fetchpriority="low"
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
                            fetchpriority="low"
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
    </>
  )
}

export default TrandingTopic