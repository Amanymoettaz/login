var signUpName=document.getElementById("signName") ;
var signUpEmail=document.getElementById("signEmail") ;
var signUpPassword=document.getElementById("signPassword") ;
var user=[];
var alertMessage =document.getElementById("alertMessage")





if(localStorage.getItem("user")!=null){
    user=JSON.parse(localStorage.getItem('user'))
}
else{
user=[] ;
}

function add (){

    if(signUpName.value == ""  || signUpEmail.value=="" || signUpPassword.value==""){

    //document.getElementById("message").innerHTML= `<p class=' text-danger'> All inputs are required </p>`
    getAlertMessage('all inputs are required','red')
}
else {

    var obj={

        name: signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value,
    }

    if(checkEmailExist==true){
        //alert message 
        getAlertMessage('Email already exist','green');

    } else{
        user.push(obj);
        console.log(user)
        
        localStorage.setItem('user' ,JSON.stringify(user));
        clearForm()
        getAlertMessage('success','green') 
    }
    
}
}


function getAlertMessage(text,color){
    alertMessage.classList.replace('d-none','d-block');
    alertMessage.innerHTML=text
    alertMessage.style.color=color
}

function clearForm(){
    signUpName.value="";
    signUpEmail.value="";
    signUpPassword.value="";
}

function checkEmailExist(){

    for(var i=0 ; i<user.length ; i++){
        if (user[i].email ==signUpEmail.value)
        return true ;
    }
}