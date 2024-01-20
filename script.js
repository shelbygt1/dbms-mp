const content=document.getElementById('content')

function navigate_library(m){
    if(m==1){
        content.innerHTML=`<h1>Welcome to our library</h1>
        <p></p>`
    }
    if(m==2){
        content.innerHTML=`<div id="login">
        <h3>Welcome to LOGIN :)</h3>
        <input type="text" id="login_id" placeholder="Enter your ID">
        <input type="password" id="login_pass" placeholder="Enter your password">
        <button onclick="login()">Login</button>
       </div>`
    }
    if(m==3){
        content.innerHTML=`<div id="about">
        <h3>This is created by AIML Students</h3>
        <p>This is an user friendly environement</p>
        </div>`
    }
    if(m==4){
        content.innerHTML=`<div id="lending">
        <h3>Enter the Book Details and Student Details</h3>
        <a href="lending.html"></a>
        </div>`
    }
}

async function login() {
    let username = document.getElementById('login_id').value;
    let password = document.getElementById('login_pass').value;
    let msg = document.getElementById('login_msg');

    // Validate inputs
    if (username !== 'root' || password !== 'root') {
        msg.innerHTML = 'Username and password are required';
        return;
    }

    // Send login request to the server
    let obj = { username: username, password: password };

    try {
        let res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });

        res = await res.json();

        // Check server response
        if (res.status === 'err') {
            msg.innerHTML = 'Invalid username or password';
            return;
        }

        window.location= '/main.html'; 

    } catch (error) {
        console.error('Error during login:', error);
        msg.innerHTML = 'An error occurred during login';
    }
}
