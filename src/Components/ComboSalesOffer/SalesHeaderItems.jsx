"use client";
import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const SalesHeaderItems = ({ headers, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className="max-w-[1920px] mx-auto px-[6%] md:px-[0%] lg:px-[2%] xl:px-[8%] 4xl:px-[4%] pt-0">
      <header className="relative z-50">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center px-4 md:px-2 lg:px-0 py-4">
          <a href="/">
            <Image src={headers.logo} alt="Logo" width={120} height={30} />
          </a>

          <div className="flex md:space-x-3 xl:space-x-10 items-center font-Inter font-semibold text-[14px] lg:text-[16px]">
            {headers.menu
              .filter((item) => item.menu_name !== "Book An Appointment")
              .map((item, index) => {
                // Check if the menu item is for the homepage
                const isHomeLink = item.menu_link === "/";

                return isHomeLink ? (
                  // For "Home", use a normal <a> tag
                  <a
                    key={index}
                    href={item.menu_link}
                    className="text-white font-Inter text-[16px] hover:text-primary transition-colors font-semibold leading-[22px] uppercase cursor-pointer"
                  >
                    {item.menu_name}
                  </a>
                ) : (
                  // For other links, use react-scroll's Link
                  <Link
                    key={index}
                    to={item.menu_link.replace("#", "")} // Ensure no '#' in the link
                    smooth={true}
                    duration={1500}
                    className="text-white font-Inter text-[16px] hover:text-primary transition-colors font-semibold leading-[22px] uppercase cursor-pointer"
                  >
                    {item.menu_name}
                  </Link>
                );
              })}
          </div>

          <div>
            <Link
              style={{ width: "238px" }}
              to="pricing" // Use a 'Link' here instead of the 'a' tag
              smooth={true}
              duration={1500}
              className="flex justify-center items-center bg-white whitespace-nowrap cursor-pointer text-[#001246]   hover:bg-transparent border hover:text-white hover:border-white  md:w-[100%] lg:w-[100%] text-[14px] md:text-[14px] px-4 md:px-10 lg:px-12 py-3 md:py-1 lg:py-3 font-semibold  font-Inter transition-all duration-300 transform hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-[#F0F0F0] hover:drop-shadow-lg leading-[14px]"
            >
              See Pricing
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden relative z-50">
          <div className="flex justify-between items-center p-4">
            <a href="/">
              <Image
                src={headers.logo}
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white z-50 relative"
            >
              {isMobileMenuOpen ? (
                <RxCross2 size={24} />
              ) : (
                <RxHamburgerMenu size={24} />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0A2C8C] z-40 shadow-lg">
              <div className="divide-y divide-white/10">
                {headers.menu.map((item, index) => {
                  // Check if the menu item is for the homepage
                  const isHomeLink = item.menu_link === "/";

                  return isHomeLink ? (
                    // For "Home", use a normal <a> tag
                    <a
                      key={index}
                      href={item.menu_link}
                      onClick={toggleMobileMenu}
                      className="block px-4 py-4 text-white text-lg hover:bg-white/10 transition-colors uppercase tracking-wider font-medium"
                    >
                      {item.menu_name}
                    </a>
                  ) : (
                    // For other links, use react-scroll's Link
                    <Link
                      key={index}
                      to={item.menu_link.replace("#", "")} // Ensure no '#' in the link
                      onClick={toggleMobileMenu}
                      smooth={true}
                      duration={1500}
                      className="block px-4 py-4 text-white text-lg hover:bg-white/10 transition-colors uppercase tracking-wider font-medium"
                    >
                      {item.menu_name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default SalesHeaderItems;
