# shortExercises
callback

Topics:
Synchronous and asynchronous
CallBacks
JavaScript as a synchronous language
single thread
Task:
1) Create three functions that evaluate if a triangle is a right-angle triangle or not.
* the First function receives 3 parameters and checks if the square of the first two parameters is equal to the square of the third.  The first function calls the second function to receive the square value for each parameter.
The Second function receives 1 parameter and calls a third function with the parameter received. 
The third fusnction receives two parameters and returns the value of the multiplication of the two parameters. 
2) Look at loup (   http://latentflip.com/loupe/   )  to see how the Call Stack works (loup does not except arrow functions)
3) Open the debugger. Place a breakpoint prior to calling the main function and see how the Call Stack flows. 
4) Create a script with three console.log commands
* Consol.log(“first call”)
* Place a console.log(“second call”) inside a setTimeout() function to be called after 2 sec  
* Consol.log(“ third call”`)
* What will your console output be?
5) Create a function that receives four parameters (time, color, callback, reject);
Create a random number between 1-10
By using setTimeOut and callbacks, the function will change the backgroundColor of the body (max of three times)
If the random number is bigger than 5:
Change backgroundColor for at least 1 sec
Use callback to call the function again for three times.
If the number is smaller than 5:
console.log(“your request was rejected ☹”)
Hint: to check if all three callbacks work, then set the if(  >0) (
6) Based on question 5, change the message in the console for the first and last callback to indicate what callback was rejected.
7) Keep on task 5 and change the color 7 times. Make sure that every error will point out what callback failed
