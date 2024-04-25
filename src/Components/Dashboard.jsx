import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Dashboard = () => {
    return (
        <div>
            <Header />
            {/* Breadcrumbs  */}
            <div className="bg-[var(--purple-bg1)] ">
                <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
                    <a href="/" className="text-gray-600 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </a>

                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>

                    <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
                        Dashboard
                    </a>

                </div>
                <h1 className='text-center text-4xl font-mono text-[var(--black-color)] pb-7 font-bold'>User Dashboard</h1>

            </div>


            <a href="/" className=' px-16 '>
                <img className="w-auto h-7 mt-8 ml-16" src="https://quomodothemes.website/html/shopus/assets/images/logos/logo.webp" alt="" />
            </a>
            
            <div className="flex flex-wrap py-7 px-16">
                <div className="border-e border-gray-200 dark:border-neutral-700 ">
                    <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--black-color)] disabled:opacity-50 disabled:pointer-events-none  active   text-lg transition-colors duration-300  transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Dashboard</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                        <i class="fa-solid fa-user"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Personal Info</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active   text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                        <i class="fa-solid fa-credit-card"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Payment Method</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--black-color)] disabled:opacity-50 disabled:pointer-events-none  active   text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                        <i class="fa-solid fa-cart-shopping"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Order</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active  text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                        <i class="fa-solid fa-heart"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Wishlist</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active  text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                        <i class="fa-solid fa-address-card"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Address</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--black-color)] disabled:opacity-50 disabled:pointer-events-none  active  text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                        <i class="fa-solid fa-users-viewfinder"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Reviews</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                        <i class="fa-solid fa-lock"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Change Password</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                        <i class="fa-solid fa-clipboard-check"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Support Ticket</span>
                        </button>
                        <button type="button" className="hs-tab-active:border-[var(--purple-color)] hs-tab-active:text-[var(--purple-color)]  py-2 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent  whitespace-nowrap text-[var(--text-color)] hover:text-[var(--purple-color)] focus:outline-none focus:text-[var(--purple-color)] disabled:opacity-50 disabled:pointer-events-none  active  text-lg transition-colors duration-300 transform   hover:bg-gray-100 " id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>

                            <span className="mx-2 text-lg text-[var(--text-color)]  ">Logout</span>
                        </button>

                    </nav>
                </div>

                <div className="ms-3 ">
                    <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                        <p className="text-gray-500 dark:text-neutral-400">
                            This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">first</em> item's tab body.
                        </p>
                    </div>
                    <div id="vertical-tab-with-border-2" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                        <p className="text-gray-500 dark:text-neutral-400">
                            This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">second</em> item's tab body.
                        </p>
                    </div>
                    <div id="vertical-tab-with-border-3" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                        <p className="text-gray-500 dark:text-neutral-400">
                            This is the <em className="font-semibold text-gray-800 dark:text-neutral-200">third</em> item's tab body.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard