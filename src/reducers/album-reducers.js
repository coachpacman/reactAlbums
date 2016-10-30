const DefaultState = {
	albums: [],
	currentAlbumLabel: ""
}


export default function(state = DefaultState, action) {
	switch(action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.albums}
		
		case 'GET_ALBUM':
			return {...state, currentAlbumLabel: action.currentAlbumLabel}

		default:
			return state 

	}
}

