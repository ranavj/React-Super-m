/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

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

  return (
    <div className='container mx-auto mt-10'>
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
      <tr>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Malcolm Lockyer</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>1961</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>1961</td>
      </tr>
      <tr>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Witchy Woman</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>The Eagles</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>1972</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>1961</td>
      </tr>
      <tr>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'></td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'></td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Total</td>
        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>1975</td>
      </tr>
    </tbody>
  </table>
    </div>
   
  )
}
