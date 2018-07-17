var loadProfileForm=function(){
    $('#form').empty();
    $('#bookContent').html(profForm);
}
var addProfile=function(){
    // var profile={
    //     fName:$("#fName").val(),
    //     lName:$("#lName").val(),
    //     userName:$("#user").val(),
    //     dob:$("#dob").val(),
    //     company:$("#company").val()
    // };
    var form = $('#profileForm')
    var data = new FormData(form);
    $.ajax({
        url: `http://localhost:3000/addProfile/${userID}`,
        type: 'POST',
        enctype: 'multipart/form-data',
        data: JSON.stringify(data),
        processData: false,
        contentType: false,,
        success: (res) => {
    }})
}