import blogImage7 from "@/assets/img/blog/blog__7.png";
import blogImage8 from "@/assets/img/blog/blog__8.png";
import blogBgImage2 from "@/assets/img/blog/blog__bg_2.png";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard3 from "@/components/shared/cards/BlogCard3";
import getAllBlogs from "@/libs/getAllBlogs";

const Blogs3 = ({ blogsType }) => {
  const blogs = getAllBlogs()?.filter(({ id }) => id === 7 || id === 8);

  return (
    <div
      className={`${
        blogsType === 4
          ? "blog__4 sp_top_120 sp_bottom_120 white__bg "
          : "blog__3 sp_bottom_200 sp_top_140 "
      } special__spacing`}
      style={{
        background: `url('${blogsType === 4 ? "" : blogBgImage2.src}')`,
      }}
      id="blog__area"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title  section__title--2 blog__4__padding__right  ${
                blogsType === 4 ? "" : "section__title--3"
              }`}
            >
              {blogsType === 4 ? (
                <div className="section__title__small">
                  <span>BLOG & STRATEGY</span>
                </div>
              ) : (
                <div className="section__title__button">
                  <span>Expert Insights</span>
                </div>
              )}

              <div className="section__title__heading">
                <h3>ANALYSIS AND STRATEGY IN BUSINESS CONSULTING</h3>
              </div>
              <div className="blog__4__section__title__text">
                <p>
                  Gain valuable insights from our expert blogs covering trends,
                  strategies, and innovative solutions in the consulting
                  industry.
                </p>
              </div>
              <div className="section__title__button">
                <ButtonPrimary text="VIEW ALL ARTICLES" path="/blogs" />
              </div>
            </div>
          </div>
          {blogs?.map((blog, idx) => (
            <BlogCard3 key={idx} blog={blog} blogsType={blogsType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs3;
