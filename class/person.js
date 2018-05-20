function Person(firstName, lastName){
    this.name = {}
    this.name.first = firstName
    this.name.last = lastName
    
}

Person.prototype.fullName = function(){
    return this.name.first + ' ' + this.name.last
}

person = new Person('burt', 'lam')
inspect(person)

function inspect(p){
    console.log(p.name.first)
    console.log(p.name.last)
    console.log(p.fullName())
    
    }