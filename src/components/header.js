import React, { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import boxLogo from '../images/box-logo.svg';

const Header = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    if (scrolled === true) {
      setActive(!active);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 560;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return function cleanup() {
      document.removeEventListener('scroll');
    };
  }, []);

  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          menuItems {
            items {
              item
            }
          }
        }
      }
    }
  `);

  const { items } = data.wpPage.sections.menuItems;
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav className="bg-gray-900 shadow-xl fixed w-full z-20 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button  */}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="navbar-burger shadow-xl inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Icon when menu is closed. -->
                          <!--
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                  --> */}
                  <svg
                    className={`${active ? 'hidden' : 'block'} open h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <span className="sr-only">Close main menu</span>
                  {/* <!-- Icon when menu is open. -->
                          <!--
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                  --> */}
                  <svg
                    className={`${active ? 'block' : 'hidden'} close h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <LinkScroll
                  activeClass="no-active"
                  to="Home"
                  spy
                  smooth
                  offset={-100}
                  duration={1000}
                  className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}

                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={boxLogo}
                    alt="box header"
                  />

                  <div className="hidden lg:block">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-auto"
                        src={boxLogo}
                        alt="box header"
                      />

                      <h2 className=" h-8 w-auto">
                        <span className="text-xl text-white font-bold">
                          Tint Bros
                        </span>
                      </h2>
                    </div>
                  </div>
                </LinkScroll>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {items.map((i) => (
                  <LinkScroll
                    activeClass="active"
                    to={i.item}
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                    className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {i.item}
                  </LinkScroll>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm sm:text-md font-extrabold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500"
                >
                  <svg
                    className="h-5 sm:h-6 fill-current mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="uppercase">Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">Mobile menu</span>
        {/* <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
      --> */}
        <div
          className={`${active ? 'block' : 'hidden'} mobile-menu  md:hidden `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {items.map((i) => (
              <LinkScroll
                onClick={handleScroll}
                activeClass="active"
                to={i.item}
                spy
                smooth
                offset={-100}
                duration={1000}
                className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {i.item}
              </LinkScroll>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
