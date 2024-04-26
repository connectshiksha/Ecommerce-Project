import React from 'react'

const Header = () => {
  return (
    <div>

      {/* ===== Header  ======= */}

      <nav className="bg-[var(--purple-bg1)] border-b-4 border-[var(--purple-color)]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-[85rem] py-4">
          <nav className="">
            <div className="max-w-screen-xl px-4 py-0 mx-auto">
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                    <a href="/dashboard" className="text-gray-900 hover:underline" aria-current="page">Account </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900 hover:underline">Track Order </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-900  hover:underline">Support</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-[var(--black-color)] font-semibold hover:underline">Need help? Call Us: <span className='text-[var(--purple-color)] font-extrabold]'> + 00645 4568</span></a>
          </div>
        </div>
      </nav>

      <nav className="border-gray-200 bg-gray-50 dark:bg-[#f8f8f8] font-serif  ">
        <div className="max-w-[85rem] flex flex-wrap items-center justify-between mx-auto py-6">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://quomodothemes.website/html/shopus/assets/images/logos/logo.webp" className="" alt="ShopUs Logo" />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col justify-center items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="#" className="flex justify-center items-center font-bold bg-[var(--yellow-color)] text-[var(--black-color)] text-lg h-12 w-12 rounded-full" aria-current="page"><i class="fa-solid fa-magnifying-glass   "></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-[var(--text-color)] hover:text-[var(--purple-color)] rounded md:bg-transparent text-base" aria-current="page"><i class="fa-solid fa-code-compare text-2xl pr-2"></i> Compaire</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0  text-[var(--text-color)] hover:text-[var(--purple-color)] text-base"> <i class="fa-solid fa-heart text-2xl pr-2"></i> Wishlist</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-[var(--text-color)] hover:text-[var(--purple-color)] text-base"><i class="fa-solid fa-cart-shopping text-2xl pr-2"></i> Cart</a>
              </li>
              <li>
                <a href="/registartion" className="block py-2 px-3 md:p-0  text-[var(--text-color)] hover:text-[var(--purple-color)] text-base"><i class="fa-solid fa-user text-2xl pr-2"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-[var(--purple-color)] text-sm py-3 md:py-0 ">
        <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">

              <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-1 md:py-6">

                <button type="button" className="flex items-center w-[10rem] text-[var(--white-color)] font-medium">
                  <i class="fa-solid fa-list pr-3 bg-[#c459b5] p-4 rounded-full mr-2"></i>   All Categories
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                  <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                    <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="2" y1="12" y2="12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" x2="6.01" y1="16" y2="16" /><line x1="10" x2="10.01" y1="16" y2="16" /></svg>
                    <div className="grow">
                      <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Data</span>
                      How you get the most accurate and up-to-date data
                    </div>
                  </a>

                  <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                  <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                    <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    <div className="grow">
                      <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Team <span className="inline ms-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">We're hiring</span></span>
                      Meet the people building products to help your business grow
                    </div>
                  </a>

                  <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                  <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                    <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                    <div className="grow">
                      <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Blog</span>
                      The latest news, feature releases, and how to grow with data
                    </div>
                  </a>
                </div>
              </div>

              <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hsCollapseOpen:hidden flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg className="hsCollapseOpen:block hidden flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>

            </div>

            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-12 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">

                  <a className="font-medium  text-[var(--white-color)] text-base " href="/" aria-current="page">Home</a>

                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                    <button type="button" className="flex text-base items-center w-[4rem] font-medium text-[var(--white-color)] ">
                      Shop <i class="fa-solid fa-plus ml-2 pt-1"></i>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                      <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                        <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="2" y1="12" y2="12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" x2="6.01" y1="16" y2="16" /><line x1="10" x2="10.01" y1="16" y2="16" /></svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Data</span>
                          How you get the most accurate and up-to-date data
                        </div>
                      </a>

                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                        <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Team <span className="inline ms-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">We're hiring</span></span>
                          Meet the people building products to help your business grow
                        </div>
                      </a>

                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                        <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Blog</span>
                          The latest news, feature releases, and how to grow with data
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                    <button type="button" className="flex items-center text-base w-[4rem] font-medium text-[var(--white-color)] ">
                      Pages <i class="fa-solid fa-plus ml-2 pt-1"></i>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-52 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                      <a className="inline-flex justify-center items-center text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">Product-details</span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">Privacy Policy</span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">Term & Condition</span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">FAQ </span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">Shop Category icon </span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                      <a className="inline-flex text-center" href="#">                        
                        <div className="grow">
                          <span className="block font-semibold mb-1 text-gray-800 dark:text-neutral-200 hover:text-[var(--purple-color)] ">Shop List View  </span>
                        </div>
                      </a>                      
                      <div className="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                    
                    </div>
                  </div>
                  <a className="font-medium  text-[var(--white-color)] text-base " href="#" aria-current="page">About</a>
                  <a className="font-medium  text-[var(--white-color)] text-base " href="/blog" aria-current="page">Blog</a>
                  <a className="font-medium  text-[var(--white-color)] text-base " href="/dashboard" aria-current="page">User Dashboard</a>
                  <a className="font-medium  text-[var(--white-color)] text-base " href="/contact" aria-current="page">Contact</a>


                  <div className="pt-3 md:pt-0">
                    <a className="py-3 px-7 inline-flex items-center gap-x-2 text-base font-semibold rounded-full border border-transparent  text-[var(--black-color)] bg-[var(--yellow-color)] disabled:opacity-50 disabled:pointer-events-none hover:bg-[var(--black-color)] hover:text-[var(--white-color)] " href="#">
                      Became Vendor <i class="fa-solid fa-arrow-right pt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header>
      {/*========== END HEADER ==========*/}

    </div>
  )
}

export default Header
