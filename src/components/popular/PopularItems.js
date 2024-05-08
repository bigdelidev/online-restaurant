import { useDispatch } from 'react-redux'
import { addItemToCart } from '../cart/CartSlice'



const PopularItems = ({ id, title, img, price }) => {

    const dispatch = useDispatch();


    const setAddItemToCart = () => {
        dispatch(addItemToCart({
            id, title, img, price
        }
        ))
    }

    return (
        <>
            <div className='h-[250px] w-[300px] bg-slate-300  rounded-xl relative xxl:h-[200px] xxl:w-[250px]'>
                <div className='flex justify-between items-center'>
                    <img src={img} className='h-[120px] xxl:h-[90px] mt-2 ml-2 rounded-[30px] xxl:rounded-[20px] sm:rounded-[10px]' />
                    <span className='text-white text-[30px] xxl:text-[20px] px-4'>{title}</span>
                </div>

                <div className='flex justify-center mt-6  xxl:mt-4 text-[20px] xxl:text-[15px] gap-3'>
                    <div className='shadow-btn  w-[50px] h-[30px] 
                  flex justify-center items-center'>
                        <span>
                            ${price}
                        </span>
                    </div>
                    <button className='shadow-btn px-2'>
                        details
                    </button>

                </div>
                <button onClick={setAddItemToCart} className='shadow-btn absolute bottom-2 
                 w-[290px] xxl:w-[240px]  ml-[5px] rounded-xl py-1 active:scale-95' >
                    buy
                </button>
            </div>
        </>
    )

}



export default PopularItems;