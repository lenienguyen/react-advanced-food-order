import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
/* import MealsList from './MealsList' */

const Meals = props => {
  const [loadedMeals, setLoadedMeals] = useState([])

  
  useEffect(() => {
    const fetchMeals = async () => {
      let res = await fetch('http://localhost:3000/meals')
      if(!res.ok){}
  
      let meals = await res.json()
      setLoadedMeals(meals)
    }

    fetchMeals();
  }, [])


  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <MealItem 
        key={meal.id} 
        meal={meal} 
        />
      ))}
    </ul>
  )
}

export default Meals