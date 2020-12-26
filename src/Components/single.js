import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'


class Single extends Component {

    render () {
            
            const {match,photoAlbum}=this.props
            const id=Number(match.params.id)
            const currentPhoto= photoAlbum.find((photo)=>photo.id === id)
            const comments = this.props.comments[id] || []
            const index = photoAlbum.findIndex((photo)=>photo.id===id)
            if(currentPhoto) {


                return (
    
                       
                        <div>
                            <Photo details={currentPhoto}  {...this.props} index={index}/>
                            <Comments addComment={this.props.addComment}  comments={comments} photoId={id}/>
                            
                        </div>
    
                )   
            }
            else {
                return ( <div>
                
                    Not Found!
                 </div>
                )
            }
            

    }
}


export default Single