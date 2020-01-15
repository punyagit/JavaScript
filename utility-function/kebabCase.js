// following function convert word to kebab case or hello-how-are-you

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  CustomElementRegistry regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  let newString = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return newString.replace(regex, '-').toLowerCase();
}

// test here
let start = new Date();
console.log(
  spinalCase(
    'This_Is SpinalTap This_Is SpinalTapThis_Is SpinalTap This_Is SpinalTap This_Is SpinalTap '
  )
);
let end = new Date() - start;

console.log('time taken ' + end + ' Milli Second');
