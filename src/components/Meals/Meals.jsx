import MealItem from './MealItem'
import useHttp from '../../hooks/useHttp'

const requestConfig = {}

const Meals = props => {
  const { 
    data: loadedMeals, 
    error, 
    isLoading 
  } = useHttp('http://localhost:3000/meals', requestConfig, [])

  console.log(loadedMeals)

  if(isLoading){
    return <p>Fetching meals...</p>
  }

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