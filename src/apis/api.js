import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getData() {
	return axios.get("albums")
}

export function getAlbumData(id) {
	return axios.get(`albums/${id}`)
}