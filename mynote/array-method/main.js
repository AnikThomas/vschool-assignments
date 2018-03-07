
//array push method
var stuff = ['donuts','Coffe','cream','bananas','carrots']
var arrLength = stuff.push('orange')
console.log(stuff[5])

//array pop method
var stuff = ['donuts','Coffe','cream','bananas','carrots']
var arrLengthpoppedOff = stuff.pop()
console.log(stuff);

//study slice and splice

//splice
var stuff = ['donuts','Coffe','cream','bananas','carrots']
var x = stuff.splice(0, Math.floor(stuff.length/2))
console.log(stuff);

//learn about indexOf

//
var stuff = ['cream','donuts','Coffe','cream','bananas','carrots']
//find the first instance
//stu

function checkFor(string,arr){
    var count=0
    for (var i = arr.indexOf(string); i < arr.lastIndexOf(string) + 1; i++) {
        if (arr[i] === string){
            count++
        }
    }
    return count;
}
console.log(checkFor('cream','stuff'))



//study join method

//concenate
var thisStuff = ['cream','donuts','Coffe','cream','bananas','carrots','cream']
var thatStuff = ['radio','socks','shirt','walkman','scarf']
var hipsterStuff = thisStuff.concat(thatStuff)
console.log(thisStuff);
thisStuff.reverse();
thisStuff.splice(2,0, 'hairbender')



