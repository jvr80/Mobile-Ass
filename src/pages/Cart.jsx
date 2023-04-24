import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem'

function Cart() {

  const cartItems = useSelector(state => state.cart)

  const total = cartItems.reduce((p,c)=>{
    return p + c.price
  },0)



  return (
   <>
   
   
   <section className="h-fit bg-gray-400 py-12 sm:py-16 lg:py-20">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>

    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">

{/* <!-- CHEK OUT CARD  --> */}

   {
    cartItems.map( item =><CartItem key={item.id} item={item}/>)

    
   }    

  
         



            </ul>
          </div>

          <div className="mt-6 border-t border-b py-2">
            {/* <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">${total}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">$00</p>
            </div> */}
          
          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xl font-normal text-gray-400">Rs</span> {total}</p>
          </div>
          </div>

          <div className="mt-6 text-center">
            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Cart