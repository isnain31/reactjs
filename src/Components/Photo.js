import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Photo extends Component {

    render () {
        
        return (

            <div>
                
                <p> { this.props.details.caption}</p>    
                <Link to={`single/${this.props.details.id}`}><img src={this.props.details.image} ></img></Link>
                <button onClick={ () => {

                    this.props.removePhoto(this.props.index)
                    this.props.history.push("/")

                }}>Remove</button>
                <Link to={`single/${this.props.details.id}`}>

                    <div>
                        {
                            
                        
                                this.props.comments[this.props.details.id] ? this.props.comments[this.props.details.id].length : 0
                                
                                
                        }

                    </div>

                </Link>
            </div>  
  
        )
  
    }
  
  }

  export default Photo