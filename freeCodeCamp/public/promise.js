/* Create a new promise called makeServerRequest. 
Pass in a function with resolve and reject parameters to the constructor.*/ 

const makeServerRequest = new Promise((resolve,reject) => {

});

// Make the promise handle success and failure.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
    // Change this line
  } else { 
    reject("Data not received");
    // Change this line
  }
});

/*Add the then method to your promise. 
Use result as the parameter of its callback function
 and log result to the console. */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result =>{
      console.log(result);
    })
  } else {  
    reject("Data not received");
  }
});
/**Add the catch method to your promise. 
Use error as the parameter of its callback function
 and log error to the console. */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    makeServerRequest.catch(error => {
      console.log(error);
    })
  }
});

