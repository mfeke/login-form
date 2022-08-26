let user =[]
    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem("user"))
        
    }


function validate() {
    var  username = document.querySelector("#EMAIL-ADDRESS").value ;
    var  Password = document.querySelector("#PASSWORD").value ;
    console.log(username,Password )

    let user ={
        username : username ,
        Password : Password

    }
    
    localStorage.setItem('users', JSON.stringify(user))
    localStorage.setItem('Password', Password)
    // localStorage.setItem('username', username)
    
}