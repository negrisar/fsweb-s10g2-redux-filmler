export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVİE";

export const addMovie = (movie) => {
  return ({ type: ADD_MOVIE, payload: movie });
}

export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}