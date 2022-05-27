/* This example requires Tailwind CSS v2.0+ */
import { Fragment,  useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../common/reduxStore/cartStore'
// import { CartContext } from '../common/customHooks/context/CartContext'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart() {
  const [open, setOpen] = useState(true)

  // const { cartProduct, getTotalPrice } = useContext(CartContext);
  const cartProduct = useSelector(state => state.cart);
  const totalPrice = useSelector(getTotalPrice);
  if(cartProduct.length === 0) {
    return <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center'>No products added.</p>
  } 
  return (
    <div className='container mx-auto mt-10'>
      {cartProduct.length > 0 &&
        <table class="border-collapse table-fixed w-full text-sm text-left">
          <thead className='bg-white dark:bg-slate-800 p-4'>
            <tr>
              <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Product</th>
              <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Unit price</th>
              <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Quanity	</th>
              <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Total	</th>
            </tr>
          </thead>
          <tbody className='bg-white dark:bg-slate-800'>
            { cartProduct.map( product => {
              return (
                <tr key={product.id}>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{product.name}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>${product.price}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{product.quantity}</td>
                  <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>${product.quantity * product.price}</td>
                </tr>                
              )
            })}
            <tr>
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'></td>
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'></td>
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Total</td>
              <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>${totalPrice}</td>
            </tr>
          </tbody>
        </table>
      }

    </div>
  )
}
