import { http } from './httpAsyncAwait'
import {ui} from './ui'

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

//Listen for when a post is added
document.querySelector('.post-submit').addEventListener('click', addPost)

//Listen for delete
document.querySelector('.delete').addEventListener('click', deletePost)

//Get Posts
function getPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err))
}

//Add Posts
function addPost(){
    const title = document.querySelector('#title').value
    const body = document.querySelector('#body').value

    const data={
        title,      //title:title
        body        //body:body
    }

    //Update post display with new post
    http.post('http://localhost:3000/posts', data)
        .then (()=> ui.clearFields())
        .then(() => getPosts())   
        .catch(err => console.log(err))
}

//Delete Post
function deletePost(e){

    e.preventDefault()

    http.delete(`http://localhost:3000/posts/2`)
        .then(() => getPosts())

        // if(e.target.parentElement.classList.contains('card')) {
        //     const id = e.target.parentElement.dataset.id

        //     if (confirm('are you sure?')){
        //         http.delete(`http://localhost:3000/posts/${id}`)
        //         .then(() => {
        //             // ui.showAlert('Post Removed','alert alert-success')
        //             getPosts()
        //         })
        //         .catch(err => console.log(err))
        //     }
        // }
    

}




    



