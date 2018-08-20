//---------------nav bar event---------------------
function navEvent(){
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
function bookEvent(){
    $('#bookApp').click(function(e){
        if(e.target.id=='addButtonID'){
			beforeLoadView();
        	loadAddEditForm();
        }
        if(e.target.className=='edit'){
			beforeLoadView();
            loadAddEditForm();
            var data=e.target.dataset.key;
            editBookForm(JSON.parse(data));
        }
        if(e.target.className=='delete'){
    		if(confirm("Sure You want to delete ?")){
    			var key=e.target.dataset.key;
    			deleteBook(key);
    		}
        }
        if(e.target.id=='cancel'){
			beforeLoadView();
    		loadList();
    	}
    	if(e.target.id=='save'){
			storeFormData();
			var userData=sessionStorage.getItem('userData');
			userProfile(JSON.parse(userData));
    	}
    })
}
//--------------------Before Load-------------------
function beforeLoadView(){
	$('#form').empty();
    $('#bookContent').empty();
}