// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.
// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.
// ")()(" // -> false
// "())(" // -> false

//PSEUDO CODE :
//there are just a few posibilities
//to many closing, to many opening
//there is a closing without an opening
//we will represent a opening parantheses with -1
//we will represent closing with +1

const checkBalance = str => {
    let counter = 0;
    for (let i =0; i <str.length; i++){
        switch (str[]){
            case '(':
                counter--;
                break;
            case ')':
                counter++;
                if(counter > 0)return false;
        }
    }
    return counter === 0;
}
console.log(checkBalance('((()))'));

//steven way
const chkBal = (str) => {
    let tranquility = 0
    str.split('').map(element => {
        if (tranquility < 1)
            element === "(" ? tranquility-- : tranquility++
        else
            return false
    })
    return tranquility === 0;
}
console.log(`"()()" // ->`, chkBal("()()"))
console.log(`"(())" // ->`, chkBal("(())"))
console.log(`"()))" // ->`, chkBal("()))"))
console.log(`")()(" // ->`, chkBal(")()("))
console.log(`"())(" // ->`, chkBal("())("))

