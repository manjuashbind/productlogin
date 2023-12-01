function register(){
    email=document.getElementById("email").value
    uname=document.getElementById("uname").value
    passwd=document.getElementById("passwd").value
    console.log(email);
    if(email=='' || uname=='' || passwd==''){
        alert("Enter All Fields")
    }
    else{
        if(email in localStorage){
            alert("User email Already registered")
        }
        else{
            const userobj={
                    uname:uname,
                    passwd:passwd,
                    email:email,
                    income:0,
                    expense:0,
                    incomeArray:[],
                    expenseArray:[]

            }
            localStorage.setItem(uname,JSON.stringify(userobj))
            alert("User Registered Successfully")
            let modal=document.getElementById("exampleModal")
            window.location='./index.html';

        }
    }
}

// login
function login(event){
    event.preventDefault();
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value

    if(username=='' || password==''){
        alert("Enter all fields")
    }
    else{
        if(username in localStorage){
            
            let newobj=JSON.parse(localStorage.getItem(username));
            console.log(newobj);
            if(password== newobj.passwd){
                localStorage.setItem('loggedobj',JSON.stringify(newobj))
                localStorage.setItem('loggedkey',username)
                window.location='./home.html'
            }
            else{
                alert("Wrong Password: login failed")
                document.getElementById("formlogin").reset()
            }
            

        }
        else{
            alert("User Does not exist, Please register")
        }
    }
}
