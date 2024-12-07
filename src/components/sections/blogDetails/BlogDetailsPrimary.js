"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogDetailsPrimary = ({ post }) => {
  return (
    <div className="blog__details__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="blog__details__wrapper">
              <div
                className="blog__details__content"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="blog__details__img">
                  {post?.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  )}
                </div>
                
                <div className="blog__details__meta">
                  <span className="date">{post?.pulishDate}</span>
                  <span className="author">By {post?.author?.name}</span>
                  {post?.category && (
                    <span className="category">{post.category}</span>
                  )}
                </div>

                <div className="blog__details__title">
                  <h3>{post?.title}</h3>
                </div>

                <div className="blog__details__text">
                  <p>{post?.desc}</p>
                </div>

                {post?.content?.map((section, index) => (
                  <div key={index} className="blog__details__section">
                    {section.heading && (
                      <h4 className="section__heading">{section.heading}</h4>
                    )}
                    {section.content && (
                      <p className="section__content">{section.content}</p>
                    )}
                    {section.list && (
                      <ul className="section__list">
                        {section.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {post?.tags && (
                  <div className="blog__details__tags">
                    <h5>Tags:</h5>
                    <div className="tags__list">
                      {post.tags.map((tag, index) => (
                        <Link key={index} href={`/tag/${tag}`}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {post?.relatedPosts && (
                <div className="blog__details__related">
                  <h4>Related Posts</h4>
                  <div className="row">
                    {post.relatedPosts.map((related, index) => (
                      <div key={index} className="col-md-6">
                        <div className="related__post">
                          <Link href={`/blog/${related.slug}`}>
                            <h5>{related.title}</h5>
                          </Link>
                          <span className="date">{related.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="blog__sidebar">
              <div className="blog__sidebar__search">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              <div className="blog__sidebar__categories">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <Link href="/category/ai-automation">
                      AI & Automation
                      <span>(12)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/business-formation">
                      Business Formation
                      <span>(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/payroll-hr">
                      Payroll & HR
                      <span>(10)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/insurance-legal">
                      Insurance & Legal
                      <span>(6)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/growth-strategy">
                      Growth Strategy
                      <span>(9)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;
