import React from 'react'; 

const Newposts = (props) =>{
    return (
        <div className= "new-post-comp-main-container">
            <form>
                <h2>Create New Posts</h2>

                <fieldset className= 'auth-comp-input'>
                    <label htmlFor='username'>Username</label>
                    <input 
                    id= 'username'>
    
                    </input>
                    
                </fieldset>
            </form>
            

        </div>
    )
}