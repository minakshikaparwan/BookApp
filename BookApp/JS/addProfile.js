var loadProfile=function(userID ){
    $.ajax({
        url: `http://localhost:3000/userProfile/${userID}`,
        type: 'GET',
        success: (res) => {
          if(res==null){
            loadProfileForm(userID);
          }else{
            userProfile(res);
          }
        },
    });
}
var loadProfileForm=function(userID){
    $('#form').empty();
    $('#bookContent').html(profForm);
    $('#userID').val(userID);
    $('form#profileForm').submit(function(e){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = new FormData(this); //Creates new FormData object
        form_data.append("userID",userID);
        $.ajax({
            url : post_url,
            type: request_method,
            data : form_data,
            contentType: false,
            cache: false,
            processData:false
        }).done(function(response){ 
            sessionStorage.setItem('userData', response);
            userProfile(response);
        });
    });
};

var userProfile=function(data){
    var profile=`
    <table>
        <tr>
            <td colspan="2">
            <img src="http://localhost:3000/${data.image}"></td>
        </tr>
        <tr>
            <td>First Name</td>
            <td>${data.fName}</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>${data.lName}</td>
        </tr>
        <tr>
            <td>D.O.B</td>
            <td>${data.dob.substring(0,10)}</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${data.company}</td>
        </tr>
    </table>    `;
    var userData=JSON.stringify(data)
    sessionStorage.setItem('userData', userData);
    $('#form').empty();
    $('#bookContent').html(a)
    $('#pro').html(profile);
    $('#book_list').html(listHeaderTemplate)
    loadList();
}
