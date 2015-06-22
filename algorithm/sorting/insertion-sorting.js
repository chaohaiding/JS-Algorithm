/*
Copyright (c) 2015 Chaohai Ding All rights reserved.

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
 * Insertion Sort Implemented in Javascript
 *@param array the array to sort..
 *@return {Number} The index of the element.
 *
**/
function InsertionSort(array)
{
    for(j=1;j<=array.length-1;j++)
    {
        var _key=array[j];
        var i=j-1;
        while(i>-1 && array[i]>_key){
            array[i+1]=array[i];
            i=i-1;
        }
        array[i+1]=_key;
    }
    return array;
}


//
/*
* Generate ramdon array
var arr = []
while(arr.length < 10){
  var randomnumber=Math.ceil(Math.random()*100)
  var found=false;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
*/
/*
* Test in Node JS
var arr=[ 98, 45, 51, 69, 77, 94, 31, 75, 64, 59 ];
var _arr=InsertionSort(arr);
console.log(_arr);
*/
