import { Link } from "react-router-dom"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/products/1',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Product({ detail }) {
  // console.log(detail)
  return (
    <div key={detail.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={detail.image}
          alt={detail.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={'/products/' + detail.id}>
              <span aria-hidden="true" className="absolute inset-0" />
              {detail.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{detail.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${detail.price}</p>
      </div>
    </div>
  )
}
