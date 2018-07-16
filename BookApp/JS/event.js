//---------------nav bar event---------------------
function navEvent(){
	$("#register").click(function (e) {
		e.preventDefault();
		loadRegistrationForm();
	});
	$("#login").click(function () {
		userSignIn();
	});
	$("#logout").click(function () {
		sessionStorage.clear();
		loadLoginForm();
	});
} 
//----------------- book event -------------------------
function bookEvent(){
    $('#bookContent').click(function(e){
        if(e.target.id=='addButtonID'){
        	loadAddEditForm();
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
        if(e.target.id=='cancelButtonID'){
    		loadList();
    	}
    	if(e.target.id=='save'){
    		storeFormData();
    	}
    })
}