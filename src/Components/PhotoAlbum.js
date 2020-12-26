import React, {Component} from 'react'
import Photo from './Photo';
import { Link } from 'react-router-dom';

class PhotoAlbum extends Component {

    render () {
  
        return (
  
            <div>
                <Link to="/AddPhoto"> Add New </Link>
                <div>
                {this.props.photoAlbum
                .sort((x,y) => y.id - x.id) 
                .map((item,index) =>  <Photo key={index} index={index} details={item} {...this.props}/>)} 
                </div>
            </div>  
  
        )
  
    }
  
  }

  export default PhotoAlbum