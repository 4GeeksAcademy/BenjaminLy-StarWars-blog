import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starships: [],
			vehicles: [],
			species: [],
			planets: [],
			apiURL: "https://swapi.dev/api/",
			favorites: []
		},
		actions: {
			fetchPeople:  () => {
				let store = getStore()
				fetch(store.apiURL + 'people')
				.then(response => response.json())
				.then(data => setStore({people: data.results}))
				.catch(error => console.log(error))
			  },
			  fetchVehicles:  () => {
				let store = getStore()
				fetch(store.apiURL + 'vehicles')
				.then(response => response.json())
				.then(data => setStore({vehicles: data.results}))
				.catch(error => console.log(error))
			  },
			  fetchPlanets:  () => {
				let store = getStore()
				fetch(store.apiURL + 'planets')
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.catch(error => console.log(error))
			  },
			  fetchStarships:  () => {
				let store = getStore()
				fetch(store.apiURL + 'starships')
				.then(response => response.json())
				.then(data => setStore({starships: data.results}))
				.catch(error => console.log(error))
			  },
			  fetchSpecies:  () => {
				let store = getStore()
				fetch(store.apiURL + 'species')
				.then(response => response.json())
				.then(data => setStore({species: data.results}))
				.catch(error => console.log(error))
			  },
			  
		}
	};
};

export default getState;
