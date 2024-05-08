import { useDispatch } from 'react-redux'
import { addItemToCart } from '../cart/CartSlice';



const Items = ({ id, title, price, img }) => {


  const dispatch = useDispatch();

  const setAddItemToCart = () => {

    dispatch(addItemToCart({
      id, title, price, img
    }))
  }

  return (
    <>

      <div className="w-[400px] h-[400px] xxl:w-[350px] xxl:h-[350px] lg:w-[300px] lg:h-[300px] 
                md:w-[250px] md:h-[250px] transition-all 
                grid justify-items-center border-[1px] border-yellow-600 rounded-[30px] p-3 bg-yellow-400 
                shadow-lg shadow-slate-300 relative">


        <img src={img} className="h-[250px] xxl:h-[200px] lg:h-[150px] md:h-[100px] border-2 border-stone-900 rounded-full" />


        <div className="grid grid-cols-2 gap-32 mb-20 items-center">
          <span className="text-white text-[40px] md:text-[30px]">{title}</span>
          <div className="shadow-btn w-[50px] h-[30px] 
                  flex justify-center items-center">
            <span>${price}</span>
          </div>
        </div>

        <button onClick={setAddItemToCart}
          className="shadow-btn  px-2 absolute bottom-2 text-[20px]  active:scale-90">buy</button>

      </div>

    </>
  )

}


export default Items;