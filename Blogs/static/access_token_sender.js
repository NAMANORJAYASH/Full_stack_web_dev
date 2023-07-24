if(sessionStorage.getItem('access_token')){
    const access_token = sessionStorage.getItem('access_token')

const home = document.querySelector("#Home")
const blog = document.querySelector("#Blog")
const create_blog = document.querySelector("#Create_blog")
const logout = document.querySelector("#Logout")

home.addEventListener('click',fetch(home.href,{headers : {'Authorizations' : access_token }}))
blog.addEventListener('click',fetch(home.href,{headers : {'Authorizations' : access_token }}))
create_blog.addEventListener('click',fetch(home.href,{headers : {'Authorizations' : access_token }}))
logout.addEventListener('click',fetch(home.href,{headers : {'Authorizations' : access_token }}))

}