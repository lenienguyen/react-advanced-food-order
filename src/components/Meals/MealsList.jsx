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

    let content = <p>Found no meals</p>

    if(meals.length > 0){
        content = meals.map(meal => 
            <MealItem 
            key={meal.id}
            id={meal.id}
            image={meal.image}
            name={meal.name}
            price={meal.price}
            description={meal.description}
            />
        )
    }

    if(mealsError){
        content = <p>{mealsError}</p>
    }

    /* if(isLoading){
        content = <p>Loading...</p>
    } */



    return (
        <div id="meals">
            {content}
        </div>
    )
}

export default MealsList