function loop(str) {
    let count = str.length
    console.log (str)
    if(count < 2) {
        console.log("hello")
        return true
    }
    
    
    loop(str.slice(1))
    
}

loop("punya")