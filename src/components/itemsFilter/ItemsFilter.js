import { useState } from 'react'
import { discount } from '../assets/data'
import Categories from './Categories'
import Items from './Items'


const ItemsFIlter = () => {

    const allCategories = ['all', ...new Set(discount.map(item => item.category))];

    const [items, setItems] = useState(discount);
    const [selectedCategory, setSelectedCategory] = useState();

    const filterItems = (categoryName) => {
        setSelectedCategory(categoryName);
        if (categoryName == 'all') {
            setItems(discount);
        } else {
            const filterItem = discount.filter(item => item.category == categoryName);
            setItems(filterItem);
        }

    }


    return (

        <>
            <h1 className='mt-32 text-center text-[40px]'>most popular recently</h1>
            <div className='flex justify-center gap-6 mt-10'>
                <Categories categoryItem={allCategories} filtering={filterItems} selectedCategory={selectedCategory} />
            </div>
            <div className="grid justify-items-center grid-cols-3 gap-10 mt-10 xl:grid-cols-2 sm:grid-cols-1 h-[450px] overflow-auto
            scrollbar scrollbar-thumb-slate-900/60 scrollbar-track-slate-900/15 scrollbar-thin ">
                {
                    items.map((h, i) => (
                        <Items
                            {...h}
                            key={i}
                        />
                    ))
                }

            </div>
        </>
    )

}


export default ItemsFIlter;