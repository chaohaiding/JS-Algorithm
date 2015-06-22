/*
Copyright (c) 2014 Chaohai Ding All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/**
 * BinarySearch Implemented in Javascript
 *@param array the array to search within.
 *@param targetElement the item to search for.
 *@return {Number} The index of the element.
 *
**/
function BinarySearch(array,targetElement)
{
    var indexMax=array.length-1;
    var indexMin=0;
    var currentElement;
    var currentIndex;
    while(indexMin<=indexMax)
    {
        currentIndex=Math.floor((indexMax+indexMin)/2);
        currentElement=array[currentIndex];
        if(currentElement<targetElement)
        {
            indexMin=currentIndex+1;
        }
        else if(currentElement>targetElement)
        {
            indexMax=currentIndex-1;
        }
        else
        {
            return currentIndex;
        }
    }
    retrun -1;
}


//Test in the Node js
var testArray=[1,2,3,4,5,6,7,8,9,0];
var targetElement=8;
var index=BinarySearch(testArray,targetElement);
console.log(index);
