import {
  heroesFetched,
  heroesFetching,
  heroesFetchingError,
} from "../components/heroesList/heroesSlice";
import { filtersFetchingError, filtersFetched, filtersFetching } from "../components/heroesFilters/filtersSilce";

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("http://localhost:3001/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const filterHeroes = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};
