var addProfile=function(){
    var profile={
        fName:$("#fName").val(),
        lName:$("#lName").val(),
        user:$("#user").val(),
        dob:$("#dob").val(),
        company:$("#company").val()
    };
    $.ajax({
        url: `http://localhost:3000/addProfile/${userID}`,
        type: 'POST',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: (res) => {
    }})
}