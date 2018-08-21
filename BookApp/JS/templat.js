var navbar=`
<nav class="navbar navbar-expand-sm navbar-dark bg-info mb-3">
  <div class="container">
    <a class="navbar-brand" href="/">BookApp</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="" id="register" class="nav-link">Register</a>
        </li>
        <li class="nav-item">
          <a href="" id="login" style="display:none"class="nav-link">Login</a>
        </li>
        <li class="nav-item">
          <a href="" id="logout" style="display:none"class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
var listHeaderTemplate =`
  <div id="book" >
    <div class="row tableHeader">
      <div class="col-md-2 col-xs-6"><strong>Name</strong>    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
      <div class="col-md-2 col-xs-6"><strong>Author</strong>  <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
      <div class="col-md-2 col-xs-6"><strong>Publisher</strong>    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
      <div class="col-md-2 col-xs-6"><strong>Price</strong>   <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
      <div class="col-md-2 col-xs-6"><strong>Total Copies</strong>    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
      <div class="col-md-2 col-xs-6"><strong>Action</strong>  <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
    </div>
    <div class="row" id="tableBody"> 
    </div>
    <div style="margin-top:20px"class=" d-flex justify-content-end">
      <button type="button" id="addButtonID" class="btn btn-info ">Add Book</button>
    </div>
  </div>
`;

var addEditbookTemlate = `
<div class=" list container">
  <form class="form-horizontal" style="padding:0px;" name="store">
    <fieldset>
      <legend>
        <div align="center">
          <h1>Add a Book</h1>
        </div>
      </legend>
      <div class="error"id="bookErr"></div>     
      <div class="data">
        <div id="key" display="none" value="none"></div>
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="book_name">Book Title <span class="req">*</span></label>
                <input class="form-control" id="book_name" type="text" placeholder="Book Name" name="book_name">
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="form-group" style="margin-top:10px;">
                <label class="control-label" for="publisher">Publisher<span class="req">*</span></label>
                <input class="form-control" id="publisher" type="text" placeholder="Publisher Name" name="publisher">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="auther">Auther <span class="req">*</span></label>
                <input class="form-control" id="auther" type="text" placeholder="Auther" name="auther">
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="language" class="control-label">Language</label>
                <select class="form-control selectpicker" type="text"id="language" style="height:32px"  name="language">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div> 
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="type">Book Type</label>
                <select class="form-control selectpicker" type="text"id="type" style="height:32px" name="type">
                  <option>Paperback</option>
                  <option>Hardcover</option>
                </select>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="pub_date">Published Date</label>
                <input class="form-control" id="pub_date" name="pub_date" type="date" style="width:300px">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="price">Price<span class="req">*</span></label>
                <input class="form-control" id="price" name="price" type="number" min="0" placeholder="Book Price">
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="form-group">
                <label class="control-label" for="total_copies">Total Copies <span class="req">*</span></label>
                <input class="form-control" id="total_copies" name="total_copies" type="number" min="0"placeholder="Total Copies">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="control-label" for="description">Book Description</label>
                <textarea class="form-control" rows="6"  name="description" id="description"></textarea>
              </div>
            </div>
          </div>                                 
          <div class="form-group">
            <div class="col-lg-12 col-lg-offset-5">
              <button  type="button" class="btn btn-default" id="cancel">Cancel</button>
              <button  type="button" class="btn btn-primary" id="save">Submit</button>
              <button type="button" class="btn btn-success" id="update" style="display:none">Update</button>
            </div>
          </div>
        </div>             
    </fieldset>
  </form>
</div>`

var userLoginForm=`

<div id="signIn" class="d-flex align-items-center">
  <div class="col-md-7 mx-auto" id="signIn-form" >
      <form action="" method="post">
        <h2 class="text-center p-3">LOGIN</h2> 
        <div id="msg" class="col-md-10 mb-3 mx-auto alert alert-success"></div>
        <div class="error alert alert-danger"id="loginErr"></div>        
        <div class="form-group row">
        <label class="control-label col-md-4 text-center" for="email">Email ID <span class="req">*</span></label>
          <input type="email" class="form-control col-md-7" id="email" name="email" placeholder="Enter Email ID"  >
        </div>
        <div class="form-group row">
        <label class="control-label col-md-4 text-center" for="password">Password <span class="req">*</span></label>
          <input type="password" class="form-control col-md-7" id="password" name="password" placeholder="Enter Password"  >
        </div>
        <div class="form-group d-flex justify-content-center">
          <button type="button" id="signin"class="btn btn-info btn-md ">Sign In</button>
        </div>    
        <div class="clearfix">
          <a href="#" class="pull-right">Forgot Password?</a>
        </div>        
      </form>
    </div>
</div>`     
var registerationForm=`
<div id="signUp" class="d-flex align-items-center">
  <div class="col-md-7 mx-auto" id="signUp-form">
    <form action="" method="post">
      <h2 class="text-center p-3">Register User</h2>  
      <div class="error alert alert-danger"id="registraionErr"></div>     
      <div class="form-group row">
        <label class="control-label col-md-4 text-center" for="userName">User Name <span class="req">*</span></label>
        <input type="text" class="form-control col-md-7" id="userName" name="userName"placeholder="Enter User Name" >
      </div>
      <div class="form-group row">
      <label class="control-label col-md-4 text-center" for="email">Email ID <span class="req">*</span></label>
        <input type="email" class="form-control col-md-7" id="email" name="email" placeholder="Enter Email ID"  >
      </div>
      <div class="form-group row">
      <label class="control-label col-md-4 text-center" for="password">Password <span class="req">*</span></label>
        <input type="password" class="form-control col-md-7" id="password" name="password" placeholder="Enter Password"  >
      </div>
      <div class="form-group d-flex justify-content-center">
        <button type="button" id="signup"class="btn btn-info btn-md ">Sign Up</button>
      </div>    
    </form>
  </div>
</div>`;
var stateChange=`<a href="" id="login" class="nav-link">Login</a>`  ;

var profForm=`
<div class="container">
    <h1>Edit Profile</h1>
    <hr>
    <form action="http://localhost:3000/" enctype="multipart/form-data" class="form-horizontal" method="POST"  name="profileForm" id="profileForm" role="form">  
	<div class="row">
      <!-- edit form column -->
      <div class="col-md-9 mx-auto">
        <h3>Personal info</h3>
        <div class="form-group">
        <div class="col-lg-8">
          <input id="image" name="image" class="form-control" type="file" >
        </div>
      </div>
          <div class="form-group">
            <label class="col-lg-5 control-label">First name:</label>
            <div class="col-lg-8">
              <input id="fName" name="fName" class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-5 control-label">Last name:</label>
            <div class="col-lg-8">
              <input id="lName" name="lName" class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-5 control-label">DOB:</label>
            <div class="col-md-8">
              <input id="dob" name="dob" class="form-control" type="date" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-5 control-label">Company:</label>
            <div class="col-lg-8">
              <input id="company" name="company"class="form-control" type="text" >
            </div>
          </div>
          <div>
          <input id="userID" name="userId"class="form-control" type="text" >
          </div>
          <div class="form-group">
          <label class="col-md-3 control-label"></label>
          <div class="col-md-8">
            <input type="submit" id="Save_changes"class="btn btn-primary" value="Save Changes">
            <span></span>
            <input type="reset" class="btn btn-default" value="Cancel">
          </div>
        </div>
        </form>
      </div>
  </div>
</div>
<hr>
`

var a=`
<div id="userPage" class="row p-0 pt-2">
  <div id="pro" class="col-md-3 p-0">
    
  </div>
  <div id="book_list" class="col-md-9 pl-4 pt-0 m-0">
   
  </div>
</div>`