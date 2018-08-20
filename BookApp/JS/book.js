var loadList = function () {
    // $('#form').empty();
   // $('#bookContent').html(listHeaderTemplate);
    getBookList();
  }
var loadAddEditForm = function () {
  //$('#book').empty();
  $('#bookContent').html(addEditbookTemlate);
}
var storeFormData = function () {
    $('#bookErr').empty();
    var bookData = getFormData();
    $.ajax({
      url: 'http://localhost:3000/bookRecords',
      type: 'POST',
      data: JSON.stringify(bookData),
      contentType: 'application/json',
      success: (res) => {
        if(!res){
          loadList(res);
        } else{
          console.log(res);
          showBookError(res);
        }
      },
    })
  }
  var getFormData = function () {
    var bookData = {
      userID:sessionStorage.getItem('userID'),
      bookTitle: $('#book_name').val(),
      publisher: $('#publisher').val(),
      auther: $('#auther').val(),
      language: $('#language').val(),
      type: $('#type').val(),
      publishDate: $('#pub_date').val(),
      price: $('#price').val(),
      totalCopies: $('#total_copies').val(),
      description: $('#description').val(),
    };
    return bookData;
  }
  var getBookList = function () {
      var userID=sessionStorage.getItem('userID');
    $.ajax({
      url: `http://localhost:3000/bookRecords/${userID}`,
      type: 'GET',
      success: (res) => {
        showBookList(res)
      },
    })
  }
  var showBookList = function (res) {
    var row = "";
    for (let i = 0; i < res.length; i++) {
      row += `
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
    // var userID=sessionStorage.getItem('userID');
    // loadProfile(userID);
    $('#tableBody').html(row);
  
  }
  
  var editBookForm = function (data) {
    var key = data._id;
    $('#book_name').val(data.bookTitle);
    $('#publisher').val(data.publisher);
    $('#auther').val(data.auther);
    $('#language').val(data.language);
    $('#type').val(data.type);
    $('#pub_date').val(data.pub_data);
    $('#price').val(data.price);
    $('#total_copies').val(data.totalCopies);
    $('#description').val(data.description);
    $('#save').click((event) => {
      updateBookData(key);
      event.stopImmediatePropagation();
    })
  }
  
  var updateBookData = function (key) {
    $('#bookErr').empty();
    var bookData = getFormData();
    $.ajax({
      url: `http://localhost:3000/bookRecords/${key}`,
      type: 'PUT',
      data: JSON.stringify(bookData),
      contentType: 'application/json',
      success: (res) => {
        if(!res){
          loadList(res);
        } else{
          console.log(res);
          showBookError(res);
        }
      },
    })
  }
  var deleteBook = function (key) {
    console.log("deleted");
    $.ajax({
      url: `http://localhost:3000/bookRecords/${key}`,
      type: 'DELETE',
      success: (res) => {
        loadList();
        console.log(res)
      },
    })
  }
  var showBookError=function(err){
    $.each(err,(indx,val)=>{
      var error=`<div class="d-flex justify-content-center">${val}</div>`;
      $('.error').append(error);
    })
    }