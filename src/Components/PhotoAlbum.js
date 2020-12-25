import React, {Component} from 'react'
import Photo from './Photo';
import { Link } from 'react-router-dom';

class PhotoAlbum extends Component {

    render () {
  
        return (
  
            <div>
                <Link to="/AddPhoto"> Add New </Link>
                <div>
                {this.props.items
                .sort((x,y) => y.id - x.id) 
                .map((item,index) =>  <Photo key={index} details={item} onRemovePhoto={this.props.onRemovePhoto}/>)} 
                </div>
            </div>  
  
        )
  
    }
  
  }

  export default PhotoAlbum