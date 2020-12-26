import photoData from '../Data/Photos'
import {combineReducers} from 'redux'

function comments(state={},action){
   
    switch(action.type) {

        

        case 'ADD_COMMENT': 
        
            if(!state[action.postId]){
                return {...state , [action.postId]:[action.comment]}      
            }
            else {
                return {...state , [action.postId]:[...state[action.postId],action.comment]}     
            }
                
                
        default: return state
    }
}

function photos(state=photoData,action) {
    
    switch(action.type) {

        case 'REMOVE_PHOTO': return [...state.slice(0,action.index) , ...state.slice(action.index+1)]
        case 'ADD_PHOTO': return [...state,action.photo  ]
        default: return state
    }

    }

const rootReducers = combineReducers({photos,comments})    

export default rootReducers