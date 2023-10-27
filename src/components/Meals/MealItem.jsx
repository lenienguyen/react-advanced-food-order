import React, { useContext } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import { currencyFormatter } from '../../util/formatting'


const MealItem = ({meal}) => {
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
        <li className="meal-item">
            <article>
                <img src={`/backend/public/${meal.image}`} alt={meal.name} />
                <div>
                <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={addToCartHandler}>Add to Cart</Button>
                </p>
            </article>
        </li>
    </Card>
  )
}

export default MealItem