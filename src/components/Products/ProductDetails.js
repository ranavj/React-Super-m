import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../common/customHooks/context/CartContext";
import useFetch from "../../common/customHooks/useFetch";

const Tabs = ({ color, productDetail }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const nutrition = productDetail ? productDetail.nutrition : null;
  const { onProductAdd, cartProduct, onProductDelete } = useContext(CartContext);

  console.log(cartProduct)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-800"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-800"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Nutrition
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-800"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Storage
              </a>
            </li>
          </ul>
          {productDetail && nutrition && <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    {`${productDetail.description} sold at ${productDetail.price} per piece`}
                    <button  onClick={() => {onProductAdd(productDetail)}} className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>start shoping</button>
                    {cartProduct.length > 0 && <button  onClick={() => {onProductDelete(productDetail.id)}} className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>remove product</button>}
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className='container mx-auto mt-10'>
                    <table class="border-collapse table-fixed w-full text-sm text-left">
                      <thead className='bg-white dark:bg-slate-800 p-4'>
                        <tr>
                          <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Nutrient</th>
                          <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left'>Value</th>

                        </tr>
                      </thead>
                      <tbody className='bg-white dark:bg-slate-800'>
                        <tr>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Protein</td>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{nutrition.protein}g</td>

                        </tr>
                        <tr>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Carbohydrates</td>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{nutrition.carbs}g</td>

                        </tr>
                        <tr>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Fat</td>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{nutrition.fat}g</td>

                        </tr>
                        <tr>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>Salt</td>
                          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{nutrition.salt}g</td>

                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    {productDetail.storage}
                  </p>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default function ProductDetails() {

  const { get, loading } = useFetch('https://react-tutorial-demo.firebaseio.com/');
  const [product, setProduct] = useState({});
  const context = useContext(CartContext)

  const params = useParams()

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then(res => setProduct(res))
      .catch(error => console.error(error))
  }, [])

  // console.log(product)
  return (
    <>
      <div className="container mx-auto lg:mt-10">
        <div className="flex flex-row space-x-4">
          <div className="basis-1/4">
            <img src={product.image}
            />
          </div>
          <div className="basis-1/2">
            <Tabs color="gray" productDetail={product} />
          </div>
        </div>
      </div>

    </>
  );
}