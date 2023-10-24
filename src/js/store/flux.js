import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
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
				.then(data => setStore({characters: data.results}))
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
			  updateFavorites: (item, category) => {
				let store = getStore()
				if (store.favorites.find((i, id) => i.item == item)){
					let newFavorites = store.favorites.filter((i , id) => i.item != item )
					setStore({favorites: newFavorites})
				} else {
					store.favorites.push({item : item, category : category})
					setStore(store)
				}
			  }
		}
	};
};

export default getState;
