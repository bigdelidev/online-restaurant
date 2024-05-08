import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { slideshow } from './assets/data'




const Header = () => {

    return (

        <div className='mt-5'>
            <Slide >

                {
                    slideshow.map((image, i) => (
                        <div key={i} className="flex justify-center">
                            <img src={image.img} className="w-[90%] h-[600px] object-cover xl:h-auto rounded-[50px]" />
                        </div>
                    ))
                }
            </Slide>
        </div>
    )

}


export default Header;

