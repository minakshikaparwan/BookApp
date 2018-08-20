//-------------- load Registration Form --------------- 
var loadRegistrationForm = function () {
    $('#form').empty();
    $('#form').html(registerationForm);
    $("#login").css({"display":"block"});
    $("#register").css({"display":"none"});
    $("#signup").click(function () {
      userSignUp();
    })
}
//----------------ajax call -------------------------------
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
            showRegistrationError(res);
        }
      },
    })
  };

//----------------- error display ----------------------------
var showRegistrationError=function(err){
    $('.error').css({"display":"block"});
    $.each(err,(indx,val)=>{
        var error=`<div class="d-flex justify-content-center">${val}</div>`;
        $('.error').append(error);
    })
}