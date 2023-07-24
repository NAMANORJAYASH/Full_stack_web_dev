    function cookie_send(){
        console.log('cookie is : '+ document.cookie)
        if(document.cookie){
            const cookies = document.cookie.split('; ');
            const accessToken = cookies.find(cookie => cookie.startsWith('access_token=')).split('=')[1];
            console.log('1st')
            sessionStorage.setItem('access_token', accessToken)};

        

        if(sessionStorage.getItem('access_token')){
            const access_token = sessionStorage.getItem('access_token')
        
            const home = document.querySelector("#Home")
            const blog = document.querySelector("#Blog")
            const create_blog = document.querySelector("#Create_blog")
            const logout = document.querySelector("#Logout")
            const date = new Date();
            date.setTime(date.getTime());
            
            logout.addEventListener('click',()=>{document.cookie = `access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;  },true)

        }    
    }  

    window.addEventListener('load',cookie_send)