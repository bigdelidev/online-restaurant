import PopularItems from './PopularItems'



const Popular = ({ data }) => {

    return (
        <div className='mt-32'>

            <p className='text-center text-[40px]'>popular</p>
            <div className='grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-items-center mt-12 gap-10'>

                {
                    data.map((item, i) => (
                        <PopularItems
                            {...item}
                            key={i}
                        />
                    ))
                }
            </div>
        </div>
    )

}


export default Popular;