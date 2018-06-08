
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

  function get1() {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        for(var i = 0; i < 13000; i++){
            //console.log("hkhkjh")
            
        }
        resolve (i)
    });
  }
for (var i = 0; i < 10; i ++){
  get('http://www.json-generator.com/api/json/get/cedUEyUlYO?indent=2').then(function(response) {
    console.log("Success!", response);
  }, function(error) {
    console.error("Failed!", error);
  })

}

  function get2() {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        for(var i = 0; i < 6000; i++){
            //console.log("hkhkjh")
            
        }
        resolve (i)
    });
  }
  
  

  get1()
  .then(function (i){
      console.log(i)
  })

  get2()
  .then(function (i){
      console.log(i)
  })

  window.onload = function(){

  document.getElementById("myBtn").addEventListener("click", displayDate);

  function displayDate() {
    for(var i = 0; i < 20000; i++){
        console.log("huh oijopujops osdiposidpo[si d[wsd")
        
    }
  }

}
  




  console.log("new")





  
  
  
    
  