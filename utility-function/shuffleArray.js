// Fisher-yates shuffle algorithm    -- 0(n)

function shuffleArray(arr){
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


console.log(shuffleArray([3,"punya",7,"bisam",23,56,62]));