import MealItem from './MealItem'
import useHttp from '../../hooks/useHttp'
import Error from '../Error/Error'

const requestConfig = {}

const Meals = props => {
  const { 
    data: loadedMeals, 
    error, 
    isLoading 
  } = useHttp('http://localhost:3000/meals', requestConfig, [])

  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }

  if(error){
    return <Error 
    title="Failted to fetch meals" 
    message={error}/>
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