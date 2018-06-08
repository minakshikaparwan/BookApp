var loadList= function(){
    $('#addEdit').empty();
    $('#list').html(listHeaderTemplate);
    getBookList();
}
var loadAddEditForm=function(){
    $('#list').empty();
    $('#addEdit').html(addEditbookTemlate); 
}
var loadLoginForm=function(){
    $('#list').empty();
    $('#addEdit').empty();
    $('#login').html(userLoginForm); 
    $("#signin").click(function(){
        userSignIn();
    })
}
var storeFormData=function(){
    var bookData=getFormData();
    $.ajax({
        url:'http://localhost:3000/bookRecords',
        type:'POST',
        data:JSON.stringify(bookData),
        contentType:'application/json',
        success:(res) => {
            loadList();
        },
    })

}
var getFormData=function(){
    var bookData={
        bookTitle:$('#book_name').val(),
        publisher:$('#publisher').val(),
        auther:$('#auther').val(),
        language:$('#language').val(),
        type:$('#type').val(),
        publishDate:$('#pub_date').val(),
        price:$('#price').val(),
        totalCopies:$('#total_copies').val(),
        description:$('#description').val(),
    };
    return bookData;
}
var validateFormData=function(){

}
var getBookList=function(){
    $.ajax({
        url:'http://localhost:3000/bookRecords',
        type:'GET',
        success:(res) => {
            showBookList(res)
        },
    })
}
var showBookList=function(res){
    var row="";
    for(let i=0;i<res.length;i++)
    {
        row +=`

        <div class="col-md-2 col-xs-6">${res[i].bookTitle}</div>
        <div class="col-md-2 col-xs-6"> ${res[i].auther}</div>
        <div class="col-md-2 col-xs-6">${res[i].publisher}</div>
        <div class="col-md-2 col-xs-6">${res[i].price}</div>
        <div class="col-md-2 col-xs-6">${res[i].totalCopies}</div>
        <div class="col-md-2 col-xs-6 tempPara" id="${res[i]._id}">
            <button class="edit" data-key=${JSON.stringify(res[i])}><i class="glyphicon glyphicon-pencil"></i></button>
            <button class="delete"data-key=${JSON.stringify(res[i]._id)}><i class="glyphicon glyphicon-trash"></i></button>
        </div>
       `
    }  
    $('#tableBody').html(row);
   
}

var editBookForm=function(data){
    var key=data._id;
    $('#book_name').val(data.bookTitle);
    $('#publisher').val(data.publisher);
    $('#auther').val(data.auther);
    $('#language').val(data.language);
    $('#type').val(data.type);
    $('#pub_date').val(data.pub_data);
    $('#price').val(data.price);
    $('#total_copies').val(data.totalCopies);
    $('#description').val(data.description);
    $('#save').click((event)=>{
        updateBookData(key);
        event.stopImmediatePropagation();
    })
}

var updateBookData=function(key){
console.log(key);
var bookData=getFormData();
$.ajax({
    url:`http://localhost:3000/bookRecords/${key}`,
    type:'PUT',
    data:JSON.stringify(bookData),
    contentType:'application/json',
    success:(res) => {
        loadList();
        console.log(res)
    },
})
}
var deleteBook=function(key){
    console.log("deleted");
    $.ajax({
        url:`http://localhost:3000/bookRecords/${key}`,
        type:'DELETE',
        success:(res) => {
            loadList();
            console.log(res)
        },
    })
}
var userSignIn=function(){
    var userData={
        name:$("#userName").val(),
        password:$("#password").val()
    }
    console.log(userData);
}
