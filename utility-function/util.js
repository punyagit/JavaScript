
 Utils = (function(){
    return{
        shuffleArray: function(arr){
            let newArray =[]
            let c = 0
            while(arr.length >= 1){
                let randomNumber = Math.floor(Math.random() * arr.length);
                    newArray.push(arr[randomNumber])
                    arr[randomNumber] = arr[arr.length-1]
                    
                
                
                arr.pop();
            }
            return newArray
    
        }

    }
    

})();

module.exports = Utils

