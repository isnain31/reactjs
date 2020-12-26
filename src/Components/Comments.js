import React, {Component} from 'react'

class Comments extends Component {

    constructor(){

        super();
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        const comment=event.target.comment.value
        const id = this.props.photoId
        this.props.addComment(comment,id)
    }

    render() {
        console.log(this.props.comments)    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="comment" placeholder="Comment"/>
                    <input type="submit" value="submit" />
                </form>

                <div>
                    <h2>List of current comments</h2>

                    {
                        this.props.comments.map((comment,index) => {

                            return (
                                    
                                <p key={index}>{comment}</p>
                            )
                        } )

                    }

                </div>

            </div>   

        )
        
        
    }
}

export default Comments