import React from 'react'
import ProductsCard from './ProductsCard'

const ItemListContainer = ({ productsData }) => {
    return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', gap:'20px', margin:'3rem'}}>
        
        {productsData.map((product) => {
    return <ProductsCard key={product.id} productData={product} />;
        })}
    </div>
    );
};


export default ItemListContainer