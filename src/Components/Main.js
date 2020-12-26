import React, {Component} from 'react'
import PhotoAlbum from './PhotoAlbum';
import Title from './Title';
import {Route} from 'react-router-dom'
import AddPhoto from './AddPhoto'
import {removePhoto} from '../Redux/Actions'

const favoriteArtists= ['Mark Knophler', 'David Gilmore', 'George Harrision']

const favoriteGames= ['Cricket', 'Football', 'Kicker','Bowling']



class Main extends Component {

    constructor(){
        super()
    }



    componentDidMount(){

        
        
    }

    render () {
        
        return (
        
        <div> 
            
            <Route exact path="/" render={()=>(
                <div>
                    <Title title="Photo Album"/> 
                    <PhotoAlbum {...this.props} /> 
               </div> 
            )} />

            <Route path="/AddPhoto"render={({history})=>(

                    <AddPhoto {...this.props} onHistory={history}/>

            )} />

        </div>
        )
    }
  
  }

  function simulateExternaldata(){

        return [

            {
                id: 1,
                caption: "image of a tree",
                image: "https://i.pinimg.com/originals/e7/d0/69/e7d06911dc6cafa9163653fa7abf584a.jpg"
            },
        
            {
                id: 2,
                caption: "Finding Nemo",
                image: "https://pyxis.nymag.com/v1/imgs/3ad/b13/85a7c32f1764fadc830991c6e3e5067603-29-finding-dory.rhorizontal.w700.jpg"
            }
            
        ]
  }

  export default Main