import Main from './Main'
import {connect} from 'react-redux'
import * as actions from '../Redux/Actions'
import {bindActionCreators} from 'redux'

function mapStateToProp(state){
    
    return {

        photoAlbum: state.photos,
        comments: state.comments
        

    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators(actions,dispatch)
}

const App = connect(mapStateToProp,mapDispatchToProp)(Main)

export default App