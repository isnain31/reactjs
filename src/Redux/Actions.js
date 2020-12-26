// removePhoto 

export function removePhoto(index){
    console.log(index)
    return {

        type: "REMOVE_PHOTO",
        index : index 
    }

}

export function addPhoto(photo){
    
    return {

        type: "ADD_PHOTO",
        photo  // es6 can do that 
    }

}

export function addComment(comment,postId){

    return {

        type: "ADD_COMMENT",
        comment,
        postId
    }

}