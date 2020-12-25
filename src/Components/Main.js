import React, {Component} from 'react'
import PhotoAlbum from './PhotoAlbum';
import Title from './Title';
import {Route} from 'react-router-dom'
import AddPhoto from './AddPhoto';

const favoriteArtists= ['Mark Knophler', 'David Gilmore', 'George Harrision']

const favoriteGames= ['Cricket', 'Football', 'Kicker','Bowling']



class Main extends Component {

    constructor(){
        super()
        this.state={

            photoAlbum: []

        }

        this.removePhoto=this.removePhoto.bind(this)

    }

    removePhoto(photoIdTORemove){

        this.setState((state) => (
                {
                    photoAlbum : state.photoAlbum.filter((photo) => photo.id !== photoIdTORemove )
                }
            )
        )
    }            
        

    addPhoto(photoToAdd){

        this.setState((state) => (

                {

                    photoAlbum: state.photoAlbum.concat([photoToAdd])
                }

            )
        ) 

    }

    componentDidMount(){

        const albumdData=simulateExternaldata()
        this.setState({

            photoAlbum : albumdData
        })
    }

    render () {
  
        return (
        
        <div> 
            
            <Route exact path="/" render={()=>(
                <div>
                    <Title title="Photo Album"/> 
                    <PhotoAlbum items={this.state.photoAlbum} onRemovePhoto={this.removePhoto}/> 
               </div> 
            )} />

            <Route path="/AddPhoto" render={({history})=>(

                    <AddPhoto onAddPhoto={(newPhoto) => {

                            this.addPhoto(newPhoto)
                            history.push("/")

                    }}/>

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