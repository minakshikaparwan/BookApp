var loadProfile=function(){
  $('#form').empty();
  $('#bookContent').html(profForm);
}
var loadList = function () {
    $('#form').empty();
    $('#bookContent').html(listHeaderTemplate);
    getBookList();
  }
var loadAddEditForm = function () {
  $('#book').empty();
  $('#book').html(addEditbookTemlate);
}
var loadLoginForm = function (msg) {
  $('#form').empty();
  $('#form').html(userLoginForm);
  $('#msg').css({"display":"block"});
  $('#msg').html(msg);
  $("#signin").click(function () {
    userSignIn();
  })
}
var loadRegistrationForm = function () {
  $('#form').empty();
  $('#form').html(registerationForm);
  $("#signup").click(function () {
    $("#login").css({"display":"block"});
    $("#register").css({"display":"none"});
    userSignUp();
  })
}