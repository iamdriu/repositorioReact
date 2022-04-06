import React from 'react'
import { getProducts } from "../../asyncmock"
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoryId])
    
    return (
        <div className="ItemListContainer">
            {
                loading ? 
                    <h1>Cargando. Por favor, espere...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <div>
                    <h1>Ups... No encontramos productos</h1>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/42/42811.png" alt="imagen de carrito" width="80" height="80"/>
                        </div>
                    </div>

            }
        </div>
    )    
    
}

export default ItemListContainer