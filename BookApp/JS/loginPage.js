//----------------load login form-----------------------
var loadLoginForm=function (msg) {
  $('#form').html(userLoginForm);
  if(msg!=null){
    $('#msg').css({"display":"block"});
    $('#msg').html(msg);
  }
	$("#signin").click(function () {
		userSignIn();
	});
} 
//-----------------ajax call for signin--------------------
var userSignIn = function () {
  // $('#loginErr').empty();
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
        loadProfile(res.userID);
        //loadList();
      } else {
        showLoginError(res);
      }
    },
    
  })
}
//-------------- store user id in session storage--------------
var sessionStore=function(res){
  console.log(res);
  sessionStorage.setItem('userID', res.userID);
}
//------------------error display------------------------------
var showLoginError=function(err){
  $('#msg').css({"display":"none"});
  $('.error').css({"display":"block"});
$.each(err,(indx,val)=>{
  var error=`<div class="d-flex justify-content-center">${val}</div>`;
  $('.error').html(error);
})
}