import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductList from './ProductList'
const Product = () => {
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

          <a href="/product" className="text-gray-600 dark:text-gray-200 hover:underline">
            Products
          </a>

        </div>

      </div>


      <aside className="flex">
        <div className="flex flex-col items-center w-16 h-screen py-8 bg-[var(--product-bg2)] ">
          <nav className="flex flex-col items-center flex-1 space-y-8 ">


            <a href="/" className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>

            <a href="#" className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </nav>

          <div className="flex flex-col items-center mt-4 space-y-4">

            <a href="/registartion" className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-[var(--purple-color)] ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </a>
          </div>
        </div>

        <div className="h-full pb-16 px-5  overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">

          <nav className="mt-4 -mx-3 space-y-6 shadow-lg shadow-[var(--product-bg2)] ">
            <div className="space-y-3 ">
              <label className="px-3 text-xl font-bold text-[var(--black-color)]  ">Product Categories </label>

              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Mobile & Laptops </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Bags </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Sweatshirt </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Boots</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Accessories</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Sneakers </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Outerwear</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Activewear </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Cosmetics</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Watch </label>
              </a>



            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xl font-bold text-[var(--black-color)]  ">Price Rabge </label>

              <input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />


            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xl font-bold text-[var(--black-color)]  ">Brands </label>

              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Refined Threads</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Ethereal Chic </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Yellow </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Esctasy</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Urban Hive
                </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Velvet Vista
                </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Boldly Blue</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Minted Mode
                </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Eclectic Ensemble</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>BraveAlchemy Attire </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Cascade Couture </label>
              </a>



            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xl font-bold text-[var(--black-color)]  ">Colors  </label>

              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Red</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Blue </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Navy </label>
              </a>




            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xl font-bold text-[var(--black-color)]  ">Size </label>

              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>Small</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Medium </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  Large </label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>
                  XL</label>
              </a>
              <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[var(--purple-bg1)]  hover:text-gray-700" href="#">
                <input type="checkbox" className='input mr-3 rounded-md ' id="mobile" name="mobile" />
                <label htmlFor="mobile " className='text-sm font-medium'>2XL</label>
              </a>


            </div>

          </nav>
        </div>


        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

              <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a>
            </div>

            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {/*product - start*/}
              <ProductList />
            </div>

          </div>
        </div>
      </aside >
      <Footer />
    </div >
  )
}

export default Product