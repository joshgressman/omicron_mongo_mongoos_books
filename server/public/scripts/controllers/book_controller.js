
app.controller('BookController', ['$scope', '$http', function($scope, $http){
$scope.books = []; //the array of books we expect
$scope.newBook = {}; // single book to be added to DB
$scope.displayBookId = '';
$scope.newComment = {};
$scope.postedBy = {};
getBooks();
// scope functions
$scope.submitNewBook = function () {
  var data = $scope.newBook;
  $http.post('/books', data)
  .then(function(){
    console.log('POST /books', data);
    getBooks();
  });
};

$scope.deleteBook = function (id) {
  $http.delete('/books/' + id)
  .then(function(){
    console.log('DELETE/books/', id);
    getBooks();
  });
};

$scope.updateBook = function(book){
  var id = book._id;

  $http.put('/books/' + id, book)
  .then(function(){
    console.log('PUT /Books', id);
    getBooks();
  });
};

$scope.displayComments = function (id){
  $scope.displayBookId = id;
}

$scope.submitComment = function (id){
  var data = $scope.newComment;
  $http.post('/books/' + id + '/comments', data)
  .then(function(){
    console.log('POST /books', id, '/comemnts', data);
  $scope.newComment = {};
    getBooks();

  });
};
// Utility functions
function getBooks(){
  $http.get('/books')
  .then(function (response){
    console.log("get books", response.data);
    var bookDataArray = response.data;

     bookDataArray.forEach(function (book){
       book.publishDate = new Date (book.publishDate);
     });

    $scope.books = bookDataArray;
  });
}
}]);
