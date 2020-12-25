import React, {Component} from 'react'

class Photo extends Component {

    render () {
  
        return (
  
            <div>
                
                <p> { this.props.details.caption}</p>    
                <img src={this.props.details.image} ></img>
                <button onClick={ () => {

                    this.props.onRemovePhoto(this.props.details.id)

                }}>Remove</button>

            </div>  
  
        )
  
    }
  
  }

  export default Photo