//---------------nav bar event---------------------
function navEvent(){
	// loadLoginForm()
	$("#register").click(function (e) {
		e.preventDefault();
		beforeLoadView();
		loadRegistrationForm();
	});
	$("#login").click(function () {
		beforeLoadView();
		userSignIn();
	});
	$("#logout").click(function () {
		sessionStorage.clear();
		beforeLoadView();
		loadLoginForm();
	});
} 
//----------------- book event -------------------------

//--------------------Before Load-------------------
function beforeLoadView(){
	$('#form').empty();
    $('#bookContent').empty();
}