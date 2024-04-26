
import React, { useEffect, useState } from 'react'
import axiosinstance from '../lib/axios'

const ProductList = () => {
    const [fetchedData, setFetchedData] = useState([])

    useEffect(() => {
        axiosinstance.get('/products_details').then((res) => {
            console.log(res.data.data)
            setFetchedData(res.data.data)

        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return (
        <>
            {
                fetchedData && fetchedData.map((product) => {
                    return (
                        <div>
                            <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                <img src={product?.imageurl} loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                            </a>

                            <div>
                                <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{product?.pro_name}</a>

                                <div className="flex items-end gap-2">
                                    <span className="font-bold text-gray-800 lg:text-lg">{product?.pro_price}</span>
                                    <span className="mb-0.5 text-red-500 line-through">{product?.pro_price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>

    )
}

export default ProductList