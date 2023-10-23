import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import useHttps from '../../hooks/use-https'

const MealsList = props => {
    const { 
        fetchData: fetchMeals, 
        data: meals, 
        error: mealsError 
    } = useHttps();

    useEffect(() => {
        fetchMeals();
    }, [])

    return (
        <div id="meals">
            {meals.map(meal => 
            <MealItem 
            key={meal.id}
            image={meal.image}
            name={meal.name}
            price={meal.price}
            description={meal.description}
            />
            )}
        </div>
    )
}

export default MealsList