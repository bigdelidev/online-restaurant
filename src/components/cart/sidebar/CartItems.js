import { FaMinus, FaPlus } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../CartSlice'

const CartItems = ({ id, title, price, img, itemQuantity }) => {

     const dispatch = useDispatch();

     const setIncreaseQuantity = () => {
          dispatch(increaseQuantity({
               id, itemQuantity
          }))
     }

     const setdecreaseQuantity = () => {
          dispatch(decreaseQuantity({
               id, itemQuantity
          }))
     }

     const setRemoveItems = () => {
          dispatch(removeItem({ id }))
     }


     return (
          <>

               <div className='bg-yellow-500/50 m-2 mt-3 rounded-2xl p-2 text-white text-[18px] flex justify-between items-center'>
                    <div>
                         <img src={img} className='h-[80px] w-[80px] lg:h-[64px] lg:w-[64px]  rounded-[20px]' />
                         <div className="flex items-center justify-around mt-2">
                              <button onClick={setdecreaseQuantity}>
                                   <FaMinus className='bg-white/40 rounded-[9px] lg:rounded-[7px] text-black/60 shadow-slate-500 shadow-md 
     text-[25px] lg:text-[20px] p-1 active:scale-90'/>
                              </button>


                              <h1 className='text-[25px] lg:text-[20px]'>{itemQuantity}</h1>
                              <button onClick={setIncreaseQuantity}>
                                   <FaPlus className='bg-white/40 rounded-[9px] lg:rounded-[7px] text-black/60 shadow-slate-500 shadow-md 
     text-[25px] lg:text-[20px] p-1 active:scale-90'/>
                              </button>
                         </div>
                    </div>

                    <h1 className='text-[30px] lg:text-[24px]'>${price}</h1>

                    <h1 className="text-[20px] lg:text-[16px] w-[150px] lg:w-[120px]">{title}</h1>

                    <button onClick={setRemoveItems}>
                         <MdDelete className='text-[30px] lg:text-[24px]' />
                    </button>
               </div>

          </>
     )


}


export default CartItems;
