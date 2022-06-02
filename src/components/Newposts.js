import React, {useState} from 'react'; 
import {createPost} from '../api';
import {getToken, getUser} from "../auth"; 

const Newposts = (props) =>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className= "new-post-comp-main-container">
            <form
            id= "newPostSubmit"
            onSubmit={ async (event) => {
                event.preventDefault();
                try {
                    const token = getToken();
                    const user= getUser;

                    const createdPost= await createPost(title, description, user, token)
                } catch (err) {
                    console.log(error)
                }
            }}>
                <h2>Create New Posts</h2>

                <fieldset className= 'auth-comp-input'>
                    <label htmlFor='title'>Title</label>
                    <input 
                    id= "title"
                    type= "text"
                    placeholder="enter title"
                    value={title}
                    onChange= {(event) => {
                        setTitle(event.target.value);
                    }}
                    ></input>   
                </fieldset>
                <fieldset className= 'auth-comp-input'>
                    <label htmlFor='description'>Description</label>
                    <input 
                    id= "description"
                    type= "text"
                    placeholder="enter description"
                    value={description}
                    onChange= {(event) => {
                        setDescription(event.target.value);
                    }}
                    ></input>   
                </fieldset>
                <button type="submit">Submit</button>
            </form>
            

        </div>
    )
}
export default Newposts; 