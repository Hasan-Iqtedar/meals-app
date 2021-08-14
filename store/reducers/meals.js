import { MEALS } from "../../data/dummy-data"
import { APPLY_FILTERS, TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FAVOURITE: {
            const index = state.favouriteMeals.findIndex(meal => meal.id == action.mealId);

            //If the meal is already marked as favourite then remove it.
            if (index > -1) {
                const updatedFavMeals = [...state.favouriteMeals]
                updatedFavMeals.splice(index, 1);
                return { ...state, favouriteMeals: updatedFavMeals }
            }
            //Else add it to the favourites list.
            else {
                const mealToBeAdded = state.meals.find(meal => meal.id == action.mealId);
                const updatedFavMeals = state.favouriteMeals.concat(mealToBeAdded);
                return { ...state, favouriteMeals: updatedFavMeals }
            }
        }

        case APPLY_FILTERS: {

            const updatedMeals = state.meals.filter((meal) => {
                if (action.filters.isGlutenFree && !meal.isGlutenFree ) {
                    return false;
                }
                if (action.filters.isLactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (action.filters.isVegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (action.filters.isVegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updatedMeals }
        }

        default: {
            return state
        }

    }//End of switch block.

}

export default mealReducer;