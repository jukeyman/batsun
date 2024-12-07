import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './MainMenu.module.css';

const MainMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
      submenu: [
        {
          id: "2-1",
          title: "AI & Automation",
          link: "/services/ai-automation",
          icon: "bi-robot"
        },
        {
          id: "2-2",
          title: "Business Formation",
          link: "/services/business-formation",
          icon: "bi-building"
        },
        {
          id: "2-3",
          title: "Payroll & HR",
          link: "/services/payroll-hr",
          icon: "bi-people"
        },
        {
          id: "2-4",
          title: "Insurance Services",
          link: "/services/insurance",
          icon: "bi-shield-check"
        },
        {
          id: "2-5",
          title: "Strategic Growth",
          link: "/services/strategic-growth",
          icon: "bi-graph-up"
        },
        {
          id: "2-6",
          title: "Grants & Funding",
          link: "/services/grants-funding",
          icon: "bi-cash-coin"
        }
      ],
    },
    {
      id: 3,
      title: "About",
      link: "/about",
      submenu: [
        {
          id: "3-1",
          title: "Our Story",
          link: "/about/story",
          icon: "bi-book"
        },
        {
          id: "3-2",
          title: "Leadership",
          link: "/about/leadership",
          icon: "bi-people-fill"
        },
        {
          id: "3-3",
          title: "Angel Lewis-Jefferson",
          link: "/about/angel-lewis-jefferson",
          icon: "bi-person"
        },
        {
          id: "3-4",
          title: "Rick Jefferson",
          link: "/about/rick-jefferson",
          icon: "bi-person"
        },
        {
          id: "3-5",
          title: "Certifications",
          link: "/about/certifications",
          icon: "bi-award"
        }
      ],
    },
    {
      id: 4,
      title: "Resources",
      link: "/resources",
      submenu: [
        {
          id: "4-1",
          title: "Blog",
          link: "/blog",
          icon: "bi-newspaper"
        },
        {
          id: "4-2",
          title: "Case Studies",
          link: "/case-studies",
          icon: "bi-file-text"
        },
        {
          id: "4-3",
          title: "ROI Calculator",
          link: "/roi-calculator",
          icon: "bi-calculator"
        },
        {
          id: "4-4",
          title: "Industry Comparisons",
          link: "/industry-comparison",
          icon: "bi-bar-chart"
        },
        {
          id: "4-5",
          title: "Testimonials",
          link: "/testimonials",
          icon: "bi-chat-quote"
        }
      ],
    },
    {
      id: 5,
      title: "Community",
      link: "/community",
      submenu: [
        {
          id: "5-1",
          title: "MomEntrepreneur",
          link: "/community/mom-entrepreneur",
          icon: "bi-heart"
        },
        {
          id: "5-2",
          title: "Digital Store",
          link: "/store",
          icon: "bi-shop"
        },
        {
          id: "5-3",
          title: "Events",
          link: "/events",
          icon: "bi-calendar-event"
        },
        {
          id: "5-4",
          title: "Success Stories",
          link: "/community/success-stories",
          icon: "bi-trophy"
        }
      ],
    },
    {
      id: 6,
      title: "Contact",
      link: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <>
      <button 
        className={`${styles.mobileMenuButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.mainMenu} ${isOpen ? styles.active : ''}`}>
        <ul className={styles.mainMenuList}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${styles.menuItem} ${
                item.submenu ? styles.hasChildren : ""
              } ${pathname === item.link ? styles.active : ""}`}
            >
              {item.submenu ? (
                <>
                  <button
                    className={styles.menuLink}
                    onClick={() => toggleSubmenu(item.id)}
                    aria-expanded={activeSubmenu === item.id}
                  >
                    {item.title}
                    <i className={`bi-chevron-down ${styles.submenuIcon} ${
                      activeSubmenu === item.id ? styles.active : ''
                    }`}></i>
                  </button>
                  <ul className={`${styles.submenu} ${
                    activeSubmenu === item.id ? styles.active : ''
                  }`}>
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        className={`${styles.submenuItem} ${
                          pathname === subItem.link ? styles.active : ""
                        }`}
                      >
                        <Link href={subItem.link} className={styles.submenuLink}>
                          <i className={`bi ${subItem.icon}`}></i>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.link}
                  className={`${styles.menuLink} ${
                    pathname === item.link ? styles.active : ""
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu} />
      )}
    </>
  );
};

export default MainMenu; 