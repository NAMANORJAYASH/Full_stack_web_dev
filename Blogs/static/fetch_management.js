var form = document.querySelector('#form')

document.querySelector('#login_button').addEventListener('click',(event)=>{
    event.preventDefault()

    const formdata = new FormData(form)
    const form_object = Object.fromEntries(formdata.entries())
    form_string = JSON.stringify(form_object) 

    async function login() {
        // make AJAX request to server to log in
        const res = await fetch('Login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: form_string
        });
        console.log(res.body);
        const access_token = await res.json();
        console.log(access_token);
        sessionStorage.setItem('access_token', access_token);
        console.log(sessionStorage.getItem('access_token'));
      
        // make AJAX request to server to get home page
        const res2 = await fetch('/home', {
            headers: {  'Authorizations': `${sessionStorage.getItem('access_token')}`  }
            });
        const data = await res2.text();
        console.log(data);
        document.body.innerHTML = data;
        console.log('skip check');

        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        document.body.appendChild(newScript);
        })
        }
      
      
      login()
    })