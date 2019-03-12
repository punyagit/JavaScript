
function even_or_odd(number) {
  var num = (Boolean(number % 2))
  console.log(num ? "Odd" : "Even")
  alert(num)
  // ...
}

even_or_odd(2)
even_or_odd(21)
even_or_odd(0)