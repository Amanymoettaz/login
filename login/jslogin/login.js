var user=[] ;
  user =JSON.parse(localStorage.getItem('user'))


  var singInEmail=document.getElementById("email")
  var signInPassword=document.getElementById("password")


  document.getElementById('logIn').addEventListener('click' , function() {

if(singInEmail.value=='' ||  signInPassword.value==''){

document.getElementById('message').innerHTML=`<p class="text-danger "> All inputs are required</p>`
}else{

    checkUser();
}

  })

  function checkUser(){
for(var i=0 ; i<user.length ;i++){

if(singInEmail.value==user[i].email && signInPassword.value==user[i].password)
var y=user[i].name 
localStorage.setItem('userName',y);
location.href='./../home/home.html'
break;
}
  }