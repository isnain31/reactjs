import React, {Component} from 'react'

class Photo extends Component {

    render () {
        console.log(this.props)
        return (

            <div>
                
                <p> { this.props.details.caption}</p>    
                <img src={this.props.details.image} ></img>
                <button onClick={ () => {

                    this.props.removePhoto(this.props.index)

                }}>Remove</button>

            </div>  
  
        )
  
    }
  
  }

  export default Photo