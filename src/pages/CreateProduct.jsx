import React from 'react'
import { Button } from 'react-bootstrap';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CreateProduct = () => {
    const [category, setCategory] = React.useState();
    const [description, setDescription] = React.useState();
    const [image, setImage] = React.useState();
    const [price, setPrice] = React.useState();
    const [title, setTitle] = React.useState();

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handleImageChange = (e) => {
        setImage(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = ( ) => {
        const newProduct = {
            category,
            description,
            image,
            price,
            title
        }

        const db = getFirestore();
        const newProductCollection= collection(db, "products")
        addDoc(newProductCollection, newProduct).then(({id}) => console.log(id))

    }
    
    //console.log({category, description, image, price, title})

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", width: "50%", margin: "30px"}} >
        
        <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Categoria'/>
        <input type="text" onChange={(e) => handleDescriptionChange(e)} placeholder='Descripcion'/>
        <input type="text" onChange={(e) => handleImageChange(e)} placeholder='Imagen'/>
        <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Precio'/>
        <input type="text" onChange={(e) => handleTitleChange(e)} placeholder='Titulo'/>
        <button onClick={handleSubmit} >Crear Producto</button>
    </div>
  )
}

export default CreateProduct