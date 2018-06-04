var foo = "bar"

function bar() {
    var foo = "baz"
    function baz(foo) {
        foo = "bam"
        bam = "yay"
    }
    baz(12)
}

bar()
console.log(foo) // bar : get the value from global scope
console.log(bam) //  yay : crate the value globally because bam is undeclared variable
//baz() // error because javascript can't make function in global scope