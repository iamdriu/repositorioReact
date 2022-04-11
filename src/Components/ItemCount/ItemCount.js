import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)


    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => { 
        if(count > 0){
        setCount(count - 1)
        }
    }
    

    return(
        <div>
            <button onClick={increment} type="button" class="btn btn-light">+</button>
            <button onClick={decrement} type="button" class="btn btn-light">-</button>
            <p className='InfoN'>Cantidad: {count}</p>
            <button onClick={() => onAdd(count)} type="button" class="btn btn-light">Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount