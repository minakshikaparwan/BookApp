var userSignIn = function () {
  $('#loginErr').empty();
  var pasword = $("#password").val();
  if(!pasword==""){
    var pasword=CryptoJS.SHA256(pasword+'sha256').toString();
  }
  var userData = {
    emailID: $("#email").val(),
    password: pasword
  }
  $.ajax({
    url: 'http://localhost:3000/userLogin',
    type: 'POST',
    data: JSON.stringify(userData),
    contentType: 'application/json',
    success: (res) => {
      if(res.userID){
        $('#register').css({"display":"none"});
        $('#login').css({"display":"none"});
        $('#logout').css({"display":"block"});
        sessionStore(res);
        loadProfile();
        //loadList();
      } else {
        showUserError(res);
      }
    },
    
  })
}
var userSignUp = function () {
  $('#registraionErr').empty();
  var pasword = $("#password").val();
  if(!pasword==""){
    var pasword=CryptoJS.SHA256(pasword+'sha256').toString();
  }
  var userData = {
    userName: $("#userName").val(),
    emailID: $("#email").val(),
    password: pasword
  }
  console.log(userData.password);
  $.ajax({
    url: 'http://localhost:3000/registerUser',
    type: 'POST',
    data: JSON.stringify(userData),
    contentType: 'application/json',
    success: (res) => {
      if(!res){
        $('#register').css({"display":"block"});
        $('#login').css({"display":"none"});
        let msg="Successfully Registered";
        loadLoginForm(msg);
      } else {
        showUserError(res);
      }
    },
  })
};

var showUserError=function(err){
  $('.error').css({"display":"block"});
$.each(err,(indx,val)=>{
  var error=`<div class="d-flex justify-content-center">${val}</div>`;
  $('.error').append(error);
})
}

var sessionStore=function(res){
  console.log(res);
  sessionStorage.setItem('userID', res.userID);
}