import React from 'react'
import { Button } from 'react-bootstrap';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent';

const UpdateProduct = () => {
    const [category, setCategory] = React.useState();
    const [description, setDescription] = React.useState();
    const [image, setImage] = React.useState();
    const [price, setPrice] = React.useState();
    const [title, setTitle] = React.useState();
    const [productData, setProductData] = React.useState();
    const [loading, setLoading] = React.useState();

    const {itemId} = useParams();

    React.useEffect(() => {
        const db = getFirestore();
    
        const productCollection = doc(db, "products", itemId);
        getDoc(productCollection)
          .then((snapshot) => {
            setProductData({ id: snapshot.id, ...snapshot.data()});
          })
          .catch((error) => setError(true))
          .then(() => setLoading(false));
      }, [itemId]);

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
        const updateProductCollection= doc(db, "products", itemId)
        updateDoc(updateProductCollection, newProduct)

    }
    
    //console.log({category, description, image, price, title})

  return loading ? ( <LoaderComponent/> ) : (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", width: "50%", margin: "30px"}} >
        
        <input type="text" onChange={(e) => handleCategoryChange(e)} placeholder='Categoria'/>
        <input type="text" onChange={(e) => handleDescriptionChange(e)} placeholder='Descripcion'/>
        <input type="text" onChange={(e) => handleImageChange(e)} placeholder='Imagen'/>
        <input type="text" onChange={(e) => handlePriceChange(e)} placeholder='Precio'/>
        <input type="text" onChange={(e) => handleTitleChange(e)} placeholder='Titulo'/>
        <button onClick={handleSubmit} >Modificar Producto</button>
    </div>
  )
}

export default UpdateProduct