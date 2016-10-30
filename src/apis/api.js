import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getData() {
	return axios.get("albums").then(function(resp) {
		store.dispatch({
			type: 'GET_ALBUMS',
			albums: resp.data
		})
	})
}

export function getAlbumData(id) {
	return axios.get(`albums/${id}`).then(function(resp) {
		store.dispatch({
			type: 'GET_ALBUM',
			currentAlbumLabel: resp.data.album_label
		})
		console.log("getAlbumData() response",resp.data.album_label)
	})
}