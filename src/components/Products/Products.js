import Product from "./Product";

export default function Products(){
    return(
        <>
        <div className="flex lg:mt-10">
            <div className="w-full">
                <h2 className="lg:pl-5 text-4xl text-left tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Products</h2>
                <p className="lg:pl-5 mt-3 text-left text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Take a look at out products</p>
            </div>                     
        </div>
        <Product />  
        </>
    )
}