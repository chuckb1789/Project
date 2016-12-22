var noSwearingInput = document.querySelector('.no-swearing')

// the event listener takes a callback function. I define this function, but I never call it myself. The browser will call it for me when this event happens.


var bannedWords = [
  'eff-word',
  'ess-word',
]
noSwearingInput.addEventListener('keyup', function(event) {
  console.log (event.target.value);
  console.log (event);
  //prevent default behavior for this event
  var wordArray = event.target.value.split(' ')

  for (var i = 0; i < wordArray.length; i++ ) {
    if ( bannedWords.indexOf(wordArray[i]) != -1 ) {
      wordArray[i] = ''
    }
  }
  wordString = wordArray.join(' ');

  event.target.value = wordString
})

// // this prevent a lot of keyboard shortcuts. don't do this!
// document.addEventListener('keypress', function(event){
//   event.preventDefault()
// })

//Prevent space bar to page down aka prevent the default action of the browser.
// document.addEventListener('keypress', function(event){
//   if (event.key === ' ') {
//     event.preventDefault();
//   }
// })


document.querySelector('.outer').addEventListener('click', function(event) {
  console.log (event);
  console.log ('clicked the outer element');
})
document.querySelector('.inner').addEventListener('click',  function(event) {
  console.log ('clicked the inner element')
  event.stopPropagation()
})
