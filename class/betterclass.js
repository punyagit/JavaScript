let person1 = {
    name: {
        first: 'John', last: 'smith'},
        fullname: function() {
            return this.name.first + " " + this.name.last
    }
}

let person2 = {
    name: {first: 'priya', last: 'chapagain'},
}

function makePerson(firstName,lastName){
    let obj = {}
    obj.name = {}
    obj.name.first = firstName
    obj.name.last = lastName
    Object.setPrototypeOf(obj,person1)
    return obj
}

inspect(makePerson('punya', 'chapagain'))
inspect(makePerson('pun', 'pagain'))

function inspect(p){
    console.log(p.name.first)
    console.log(p.name.last)
    console.log(p.fullname())
}