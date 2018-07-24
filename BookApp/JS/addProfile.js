var loadProfileForm=function(){
    $('#form').empty();
    $('#bookContent').html(profForm);
    // $('#Save_changes').click(()=>{
    //     addProfile(); 
    // })
}
// var addProfile=function(){
//     var myForm=$("#profileForm")[0];
//     var formData=new FormData(myForm);
//     console.log(formData.get("fName"));
    // var data={"name":"myName"};
    // formData.append("name","abc");
    // $.ajax({
    //     url: 'http://localhost:3000/addProfile',
    //     type: 'POST',
    //     data: JSON.stringify(formData.getAll()),
        // enctype: 'multipart/form-data',
//         contentType: 'application/json',
//         success: (res) => {
//             console.log(res);
//     }})
// }