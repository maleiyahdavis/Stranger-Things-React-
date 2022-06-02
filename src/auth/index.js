
// This function expects one parameter which is a token and calls localStorage.setItem to store
// any information onto local storage
// the result of the json stringify is what we set the token to 
export function storeToken (token) {
    localStorage.setItem('token', JSON.stringify(token))
}
// This function grabs information from local storage and the string has to mactch the string that we input 
export function getToken() {
    const myToken = JSON.parse(localStorage.getItem('token')); 
    return myToken; 
}
export function storeUser (user) {
    localStorage.setItem('user', JSON.stringify(user))
}
export function getUser() {
    const myUser = JSON.parse(localStorage.getItem('user')); 
    return myUser; 
}