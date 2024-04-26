import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Blog = () => {
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

                    <a href="/contact" className="text-gray-600 dark:text-gray-200 hover:underline">
                        Blog
                    </a>

                </div>
                <h1 className='text-center text-4xl font-mono text-[var(--black-color)] pb-7 font-bold'>Our Blogs</h1>

            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">


                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    How to use sticky note for problem solving
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>

                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=" alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    All the features you want to know
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog