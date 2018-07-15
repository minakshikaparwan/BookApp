$(function(){
	$('#navbar').html(navbar);
	$('#form').html(userLoginForm);

	$("#register").click(function (e) {
		e.preventDefault();
		loadRegistrationForm();
		$('#register').css({"display":"none"});
		$('#login').css({"display":"block"})
	});
	$("#signup").click(function () {
		userSignUp();
	});
	$("#signin").click(function () {
		userSignIn();
	});
	$("#logout").click(function () {
		//loadList();
		sessionStorage.clear();
		loadLoginForm();
	});
	$("#Save_changes").click(function(){
		addProfile();
	})

	$('#bookContent').click(function(e){
		if(e.target.id=='addButtonID'){
			loadAddEditForm();
		}
		if(e.target.id=='cancelButtonID'){
			loadList();
		}
		if(e.target.id=='save'){
			storeFormData();
		}
		if(e.target.className=='edit'){
			loadAddEditForm();
			var data=e.target.dataset.key
			editBookForm(JSON.parse(data));
		}
		if(e.target.className=='delete'){
			if(confirm("Sure You want to delete ?")){
				var key=e.target.dataset.key;
				deleteBook(key);
			}
		}
	})
});
