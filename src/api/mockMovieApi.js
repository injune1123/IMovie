import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


const movies = [
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
},
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
},
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
},
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
},
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
},
{
    "category": "Romance",
    "snapshot": "https://s3-us-west-2.amazonaws.com/sadmovie/no_string.jpg",
    "name": "No Strings Attached(2011)",
	"vid": "9yVrWNaBqpk",
	"testUrl": "http://sadmovie.s3-website-us-west-2.amazonaws.com/",    
    "taskid": "79b264b70747327853bfa3979013faca"
}];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
class MovieApi {
  static getAllMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], movies));
      }, delay);
    });
  }
}

export default MovieApi;
