import specialHotDog from './images/special hot dog.jpg'




const Special = () => {

    return (
        <>
            <div className='flex my-52  items-center justify-around lg:flex-col lg:gap-10'>
                <img src={specialHotDog} className='rounded-[100px] h-[450px] xl:h-[400px] sm:h-[300px]' />

                <div className='flex flex-col items-center w-[700px] xxl:w-[450px] xl:w-[360px]'>
                    <span className='text-[60px] xxl:text-[50px] xl:text-[40px]'>special hot dog</span>


                    <span className='text-[40px] xxl:text-[30px] xl:text-[20px] text-center'>make mealtime memorable with our delicious hot dog</span>
                    <button className='text-[20px] shadow-btn px-2 mt-6'>view details</button>
                </div>
            </div>
        </>
    )
}



export default Special;