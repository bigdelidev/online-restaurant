import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar, total, removeAllItems } from '../CartSlice'
import SidebarEmpty from './SidebarEmpty'
import CartItems from './CartItems'
import { RiCloseCircleFill } from 'react-icons/ri'

const Sidebar = () => {

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);
  const cartItems = useSelector((state) => state.cartItems);
  const itemsTotalQuantity = useSelector((state) => state.itemsTotalQuantity);
  const itemsTotalPrice = useSelector((state) => state.itemsTotalPrice);

  const setCloseCart = () => {
    dispatch(closeSidebar(false))
  }

  const setRemoveAllItems = () => {
    dispatch(removeAllItems());
  }

  useEffect(() => {
    dispatch(total());
  }, [cartItems, dispatch])

  return (
    <>
      <div className={`fixed left-0 top-0 right-0 bottom-0 transition-all duration-200 bg-slate-700/20 backdrop-blur-xl z-30
     ${sidebar ? 'visible opacity-100 translate-x-0' : 'invisible opacity-0 translate-x-80 '}`}>

        <div className='absolute right-0 h-screen w-[500px] lg:w-[400px] sm:w-[90%] bg-slate-700/20 backdrop-blur 
       scrollbar mb-[100px] w-[470px] h-full  overflow-auto scrollbar-thumb-slate-900/60 
      scrollbar-track-slate-900/15 scrollbar-thin '>

          <div className='flex items-center justify-between m-2 p-2 bg-slate-500/70 backdrop-blur rounded-2xl text-white sticky top-0'>
            <RiCloseCircleFill onClick={setCloseCart} className='text-[40px] cursor-pointer active:scale-90' />

            <span className='lg:text-[13px] sm:text-[11px]'>totol quantity : {itemsTotalQuantity}</span>
            <span className='lg:text-[13px] sm:text-[11px]'>total price : ${itemsTotalPrice}</span>
            <button onClick={setRemoveAllItems} className='lg:text-[13px] sm:text-[11px] active:scale-90'>Clear</button>
          </div>
          {cartItems.length === 0 ? <SidebarEmpty /> : <div>
            {cartItems.map((item, i) => (
              <CartItems
                {...item}
                key={i}
              />
            ))}
          </div>
          }

        </div>

      </div>


    </>
  )
}


export default Sidebar;