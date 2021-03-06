import React, {Component} from 'react'


class AddPhoto extends Component {

    constructor(){
        super()
        this.addPhoto=this.addPhoto.bind(this)
        
    }

    addPhoto(event) {
        event.preventDefault();
        const caption= event.target.elements.desc.value
        const link= event.target.elements.link.value
        const newPhoto= {

            id: Number(new Date),
            caption:  caption,
            image: link
        }
        
        console.log(newPhoto)
        this.props.addPhoto(newPhoto)
        this.props.onHistory.push("/")

    }

    render () {
  
        return (
  
            <div>
                <h1 > Here we will add photo</h1>
                <form onSubmit={this.addPhoto}>

                    <input type="text" name="link" placeholder="link"></input>
                    <input type="text" name="desc" placeholder="description"></input>
                    <input type="submit" name="submit" value="save"></input>
                    
                </form>

            </div>  
  
        )
  
    }
  
  }

  export default AddPhoto