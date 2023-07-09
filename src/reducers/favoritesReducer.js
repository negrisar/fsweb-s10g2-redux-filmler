import { REMOVE_FAVORITE, TOGGLE_FAVORITES, ADD_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false
  }

const reducer = (state= initialState, action) => {
    switch (action.type) {
        
    case ADD_FAVORITE:
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        }

    case REMOVE_FAVORITE:
         return {
            ...state,
            favorites: state.favorites.filter(movie=> movie.id !== action.payload)
        }

    case TOGGLE_FAVORITES:
        return {
            ...state,
            displayFavorites: !state.displayFavorites
        }
    
      default:
            return state;
    }
}

export default reducer;
