
var listHeaderTemplate =`
<div style="margin-top:60px">

 <button type="button" id="addButtonID" class="btn btn-primary ">Add Book</button>
 <button type="button" id="loginButton" class="btn btn-success">Login</button>
</div>
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
`;

var addEditbookTemlate = `
<div class=" list container">
        
        <form class="form-horizontal" style="padding:0px; margin:0px" name="store">
                <fieldset>
                      
                  <legend>
                    <div align="center">
                        <h1>Add a Book</h1>
                    </div>
                  </legend>


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
                                                                 <button type="button" class="btn btn-success" id="edit" style="display:none">Update</button>
                                                                  <button  type="button" class="btn btn-default" id="cancel" onclick="window.open('index.html','_self')" >Cancel</button>
                                                                  <button  type="button" class="btn btn-primary" id="save">Submit</button>
                                                                </div>
                                                              </div>
                                                              </div>
                    
                </fieldset>
        </form>
     </div>`

var userLoginForm=`
<div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" class="form-control" id="userName" name="userName"placeholder="Username" >
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="password" name="password" placeholder="Password"  >
        </div>
        <div class="form-group">
            <button type="button" id="signin"class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
</div>`     