import React from 'react'

const ProductCard = ({product , del}) => {
  return (
    <div className='p-4 border border-2 rounded-2xl  gap-4 flex flex-col'>
      <div className='w-45'>
        <img src={product.image}
         alt="image" />
      </div>
      <div>
        <h2 className='font-semibold' >{product.title.substring(0,20)}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-600'>{product.price}</p>
      </div>
      <button className='p-2 bg-red-700 text-black hover:bg-red-500 '>Delete</button>
    </div>
  )
}

export default ProductCard
