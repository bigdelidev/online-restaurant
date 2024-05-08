import { FaHamburger } from 'react-icons/fa'
import { TbShoppingBag } from 'react-icons/tb'
import { CiSearch } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import { openSidebar } from './cart/CartSlice'


const Navbar = () => {

    const dispatch = useDispatch();

    const setOpenSidebar = () => {
        dispatch(openSidebar(true))
    }
    return (
        <>
            <nav className="w-full h-16 bg-stone-50 flex items-center justify-between sticky top-0 z-20">
                <span className='flex items-center gap-3 sm:gap-0 ml-2 text-[20px] md:text-[15px] 
                sm:text-[10px] font-thin'>online restaurant<FaHamburger /></span>

                <div className="flex items-center ">
                    <input type="text" className="rounded-full w-[500px] xl:w-[400px] lg:w-[300px] md:w-[200px]  
               sm:w-[150px] h-[40px] md:h-[30px]
               px-6 border-solid border-[0.8px] border-stone-300" placeholder="Search..." />
                    <CiSearch className="text-[40px] text-stone-500 stroke-[0.1px] cursor-pointer" />
                </div>

                <button>
                    <TbShoppingBag className="text-slate-600 text-[40px] stroke-[0.6px] active:scale-90" onClick={setOpenSidebar} />
                </button>
            </nav>
        </>
    )

}


export default Navbar;