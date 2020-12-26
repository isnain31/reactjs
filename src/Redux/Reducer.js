import photoData from '../Data/Photos'

const photoReducer = function photos(state=photoData,action) {

    switch(action.type) {

        case 'REMOVE_PHOTO': return [...state.slice(0,action.index) , ...state.slice(action.index+1)]
        case 'ADD_PHOTO': return [...state,action.photo  ]
        default: return state
    }

    }

    

export default photoReducer