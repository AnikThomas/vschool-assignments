var chai = require ("chai"); //chai give me access to ...
var assert = chai.assert;
var isPalindrome = require("./script");

describe("A Palindrom Finder",function(){
    it("should identify a palindrome", function(){
        assert.isTrue(isPalindrome("abba"), true);
        assert.isTrue(isPalindrome("aba"), true);
        assert.isTrue(isPalindrome("a"), true);
        assert.isTrue(isPalindrome("abc"), true);
        assert.isTrue(isPalindrome("star!rats..."), true);
        assert.isTrue(isPalindrome("star rats"))
        assert.isTrue(isPalindrome("StarRatS"))
        assert.isTrue(isPalindrome("Star, RatS"))
         //should work even when there are spaces,capitals or symbols
    });

    it("should identify a palindrome even with spaces", function(){
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("tar rats"));
        assert.isFalse(isPalindrome("i have a space"));
    });

    it("should identify a palindrome even with capital", function(){
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("tar rats"));
        assert.isFalse(isPalindrome("i have a space"));
    });


    //sudocode for Unit Test
    //correctly identify palindromes
        //should work even when there are spaces,capitals and symbols
    
});