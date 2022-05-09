/* This example requires Tailwind CSS v2.0+ */

export default function About(){
    return(
        <main className="container mx-auto">
          <div className="relative bg-white overflow-hidden flex lg:mt-8 lg:items-center space-x-10">
            {/* Replace with your content */}
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl  lg:pb-28 xl:pb-32">
             <h2 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>About Us</h2>
             <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>We started operations in 2020. We guarantee fresh produce.
Save time by shopping on our app and we'll deliver the products right to your home.
We use Stripe to process your payment.</p>
             {/* <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center'>
             <a href='#' className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>start shoping</a>
             </div>              */}
            </div>
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl  lg:pb-28 xl:pb-32">
                <div className=" ">
                    <img width="350" height="240" src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg'
                    />
                </div>
             </div>
            {/* /End replace */}
          </div>
        </main>
    )
}