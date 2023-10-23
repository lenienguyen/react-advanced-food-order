import React, { useContext } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'

const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price
        })
    }
    
  return (
    <Card>
        <div className="meal-article">
            <img src={`/backend/public/${props.image}`} alt={props.name} />
            <h3>{props.name}</h3>
            <p className="meal-item-price">{props.price}</p>
            <p className="meal-item-description">{props.description}</p>
            <Button className="meal-item-actions" onClick={addToCartHandler}>Add to Cart</Button>
        </div>
    </Card>
  )
}

export default MealItem