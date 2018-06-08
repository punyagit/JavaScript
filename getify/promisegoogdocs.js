function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}






  
function cout(){
  for(var i = 0; i < 1000; i++){
      console.log("punya1")
  }
}

function cout1(){
    for(var i = 0; i < 5000; i++){
        console.log("punya2")
    }
  }

  function cout2(){
    for(var i = 0; i < 5000; i++){
        console.log("punya3")
    }
  }
  
  get('http://www.json-generator.com/api/json/get/cedUEyUlYO?indent=2').then(function(response) {
    console.log("Success!", response);
  }, function(error) {
    console.error("Failed!", error);
  })

setTimeout(cout,0)
setTimeout(cout1,0)
setTimeout(cout2,1000)



  

  
console.log("new w")