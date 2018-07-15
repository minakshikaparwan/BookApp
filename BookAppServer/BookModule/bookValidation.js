var validateBookData={
  validateBookData:function(req,res){
    var err=[];
    var bookData={
      bookTitle: req.body.bookTitle.trim(),
      publisher: req.body.publisher.trim(),
      auther: req.body.auther.trim(),
      language: req.body.language.trim(),
      type: req.body.type.trim(),
      publishDate: req.body.publishDate.trim(),
      price: req.body.price.trim(),
      totalCopies: req.body.totalCopies.trim(),
      description: req.body.description.trim(),  
    };
    if (bookData.bookTitle.length != 0) {
      if (!bookData.bookTitle.match(/^[a-zA-Z ]+$/)) {
        err.push("Invalid Book Title");
      }
    } else {
      err.push("Book Title is required.")
    }
    if (bookData.publisher.length != 0) {
      if (!bookData.publisher.match(/^[a-zA-Z ]+$/)) {
        err.push("Invalid Publisher");
      }
    } else {
      err.push("Publisher is required.")
    }
    if (bookData.auther.length != 0) {
      if (!bookData.auther.match(/^[a-zA-Z ]+$/)) {
        err.push("Invalid Auther");
      }
    } else {
      err.push("Auther is required.")
    }
    if (bookData.price.length != 0) {
      if (!bookData.price.match(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/)) {
        err.push("Invalid price");
      }
    } else {
      err.push("price is required.")
    }
    if (bookData.totalCopies.length != 0) {
      if (!bookData.totalCopies.match(/^[0-9]+$/)) {
        err.push("Invalid totalCopies");
      }
    } else {
      err.push("totalCopies is required.")
    }
    return err;
  }
}
export default validateBookData;