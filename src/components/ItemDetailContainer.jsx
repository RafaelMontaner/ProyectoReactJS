import React from 'react'
import ProductsCard from './ProductsCard'

const ItemDetailContainer = ({ productsData }) => {
    return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'3rem' }}>
        {productsData.map((product) => {
    return <ProductsCard key={product.id} productData={product} />;
        })}
    <div style={{

        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center"
    }}>
    
    <h2>
        Descripción
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse labore sapiente? Molestiae inventore magnam, consequuntur vel veritatis sit porro et voluptate voluptatibus, neque eius quo quia eligendi repellat nostrum.</p>

    </div>



    </div>

    );
};


export default ItemDetailContainer