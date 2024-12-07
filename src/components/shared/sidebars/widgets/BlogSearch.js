import { useCommonContext } from "@/providers/CommonContext";
import React from "react";
import QuickSearchItems from "../../others/QuickSearchItems";

const BlogSearch = () => {
  const {
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    sidebar,
    setIsShowQuickSearchResult,
  } = useCommonContext();
  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__search">
        <form
          style={{ position: "relative" }}
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            onBlur={() => setIsShowQuickSearchResult(false)}
            onChange={(e) => handleSearchString(e)}
            onKeyDown={closeSearch}
            onKeyUp={startSearch}
            name="search"
            className="sidebar__common__input"
            type="text"
            placeholder="Search articles and insights..."
            aria-label="Search blog posts"
          />
          <button type="submit" className="sidebar__search__button" aria-label="Submit search">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 13.372L17.91 16.864C17.97 16.924 18 17.002 18 17.098C18 17.194 17.97 17.272 17.91 17.332L16.758 18.484C16.698 18.544 16.62 18.574 16.524 18.574C16.428 18.574 16.35 18.544 16.29 18.484L15.966 18.142L15.804 17.998C15.72 17.926 15.672 17.884 15.66 17.872L12.816 15.028C12.756 14.956 12.672 14.92 12.564 14.92C12.468 14.908 12.384 14.932 12.312 14.992C11.664 15.448 10.962 15.802 10.206 16.054C9.426 16.306 8.628 16.432 7.812 16.432C6.396 16.432 5.082 16.078 3.87 15.37C2.694 14.674 1.758 13.738 1.062 12.562C0.354 11.35 0 10.036 0 8.62C0 7.204 0.354 5.89 1.062 4.678C1.758 3.502 2.694 2.566 3.87 1.87C5.082 1.162 6.396 0.807999 7.812 0.807999C9.228 0.807999 10.536 1.162 11.736 1.87C12.912 2.566 13.848 3.502 14.544 4.678C15.252 5.89 15.606 7.204 15.606 8.62C15.606 10.156 15.192 11.566 14.364 12.85C14.316 12.934 14.292 13.024 14.292 13.12C14.304 13.216 14.34 13.3 14.4 13.372ZM12.528 12.256C12.924 11.74 13.23 11.176 13.446 10.564C13.662 9.94 13.77 9.292 13.77 8.62C13.77 7.54 13.5 6.538 12.96 5.614C12.432 4.702 11.718 3.982 10.818 3.454C9.894 2.914 8.892 2.644 7.812 2.644C6.732 2.644 5.73 2.914 4.806 3.454C3.894 3.982 3.174 4.702 2.646 5.614C2.106 6.538 1.836 7.54 1.836 8.62C1.836 9.7 2.106 10.702 2.646 11.626C3.174 12.538 3.894 13.258 4.806 13.786C5.73 14.326 6.732 14.596 7.812 14.596C8.532 14.596 9.222 14.476 9.882 14.236C10.542 13.984 11.136 13.63 11.664 13.174C11.988 12.898 12.276 12.592 12.528 12.256Z"
                fill="#1C5C05"
              />
            </svg>
          </button>
          <QuickSearchItems />
        </form>
      </div>
    </div>
  );
};

export default BlogSearch;