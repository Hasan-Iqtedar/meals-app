export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export const APPLY_FILTERS = 'APPLY_FILTERS';

export const toggleFavourite = (id) => {
    return {
        type: TOGGLE_FAVOURITE,
        mealId: id
    }
}

export const applyFilters = (filters) => {
    return {
        type: APPLY_FILTERS,
        filters: filters,
    }
}