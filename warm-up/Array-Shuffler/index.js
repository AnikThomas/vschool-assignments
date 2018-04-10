// Write a function that takes an array as a parameter and returns a new array with the contents randomly "shuffled".
//=========================================================================

//for every loop we are going to pick a random index
//then swap with the current index
//repeat until it shuffled

function shuffle (array) {
    let i = 0
    let j = 0
    let temp = null
  
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  console.log(shuffle([1,2,3,4,5]));

  
