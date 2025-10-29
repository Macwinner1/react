import React from 'react'
import { useGetAllProductsQuery } from '../api/productApi';

export const AllProducts = () => {
  const products  = useGetAllProductsQuery();
  console.log(products.data);
  return (
    <div className="product-list">
        {
            products?.data?.map(product => (
                <div key={product.id} className="product-card">
                    <div className='img'><img src={product.image} alt={product.title} /></div>
                    <h2>{product.title}</h2>
                    <p>{product.category}</p>
                    <p className='product-description'>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <h2>Rating: {product.rating.rate} ({product.rating.count} reviews)</h2>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default AllProducts
