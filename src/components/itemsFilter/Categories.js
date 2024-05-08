const Categories = ({ categoryItem, filtering, selectedCategory }) => {

    return (
      <>
        {categoryItem.map((item, i) => {
          return (
            <div key={i} className="shadow-md shadow-slate-100">
              <button type="button" onClick={() => filtering(item)} className={`text-amber-600 px-2 transition-all duration-500 
                   h-full hover:bg-amber-100/60 text-[20px] xsm:text-[15px]
                  ${selectedCategory == item ? 'border-b-2 border-amber-600 ' : ''}`}>{item}</button>
            </div>
          )
        })}
      </>
    )
  
  }
  
  
  export default Categories;