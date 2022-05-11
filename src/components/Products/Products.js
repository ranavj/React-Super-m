import { useEffect, useState } from "react";
import Product from "./Product";
import useFetch from "../../common/customHooks/useFetch";
import Loader from "../Loader";
export default function Products() {
    // useEffect(() => {
    //     fetch('https://react-tutorial-demo.firebaseio.com/users.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.log(error))
    // }, []);

    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch('https://react-tutorial-demo.firebaseio.com/');

    useEffect(() => {
        get("supermarket.json")
            .then(res => setProducts(res))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <div className="flex lg:mt-10">
                <div className="w-full">
                    <h2 className="lg:pl-5 text-4xl text-left tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Products</h2>
                    <p className="lg:pl-5 mt-3 text-left text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Take a look at out products</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"> Customers also purchased</h2>
                    
                    {loading && 
                     <div className="flex justify-center">
                        <Loader /> 
                     </div>
                    }
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            products && products.map((product) => {
                                return (<Product key={product.id} detail={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}