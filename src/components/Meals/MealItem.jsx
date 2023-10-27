import React, { useContext } from 'react'
/* import Card from '../UI/Card' */
import Button from '../UI/Button'
import { currencyFormatter } from '../../util/formatting'
import CartContext from '../../store/CartContext'


const MealItem = ({meal}) => {

    const cartCtx = useContext(CartContext)
    const addMealToCartHandler = () => {
        cartCtx.addItem(meal)
    }
    
    
  return (
    <li className="meal-item">
        <article>
            <img src={`/backend/public/${meal.image}`} alt={meal.name} />
            <div>
            <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={addMealToCartHandler}>Add to Cart</Button>
            </p>
        </article>
    </li>
  )
}

export default MealItem