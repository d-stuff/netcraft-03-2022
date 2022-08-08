import { users } from './usersData.js';
const URL='https://htmlpreview.github.io/?https://github.com/d-stuff/netcraft-03-2022/blob/main/'
const searchButton=document.querySelector('#searchBtn')
searchButton.addEventListener('click',main)


function searchUser(){
    const userInput =document.querySelector('#user').value
     const user =users.find(user=>user.name===userInput)


        return user

}
function main() {
    const user=searchUser()
    if(user){
        const urlCV=URL+user.cv
        location.href = urlCV;
    }
    else {
        document.querySelector('#err').innerHTML='User does not exist'

    }

}
