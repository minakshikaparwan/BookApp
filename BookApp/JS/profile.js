var profForm=`
<div class="container">
    <h1>Edit Profile</h1>
  	<hr>
	<div class="row">
      <!-- left column -->
      <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar">
          <h6>Upload photo...</h6>
          <input type="file" class="form-control">
        </div>
      </div> 
      <!-- edit form column -->
      <div class="col-md-9">
        <h3>Personal info</h3>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-5 control-label">First name:</label>
            <div class="col-lg-8">
              <input id="fName" class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-5 control-label">Last name:</label>
            <div class="col-lg-8">
              <input id="lName" class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-5 control-label">Username:</label>
            <div class="col-md-8">
              <input id="user"class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-5 control-label">DOB:</label>
            <div class="col-md-8">
              <input id="dob"class="form-control" type="date" >
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-5 control-label">Company:</label>
            <div class="col-lg-8">
              <input id="company"class="form-control" type="text" >
            </div>
          </div>
          <div class="form-group">
          <label class="col-md-3 control-label"></label>
          <div class="col-md-8">
            <input type="button" id="Save_changes"class="btn btn-primary" value="Save Changes">
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