# MERN workshop - Javascript syntax and features

Hello all, in this exercise we will try to cover some of the fundamentals of Javascript syntax and features. We'll do an introduction to `objects`, `arrays` and [TO ADD]

The style of this exercise will be a little different. I want you to take the time to analysis the code I have provided and do your own research. I will point out certain concepts and ideas that I want you to pay attention to, so please take the time to read what I write.

First of all, we're using the files Oussama used for his Javascript DOM manipulation session with some modifications. You'll find these files:
* `index.html`
* `script.js`
* `theme.css`
**You are not allowed to edit `index.html`**
**You are not allowed to edit the NO TOUCH ZONE in `script.js`**

We will try to manipulate the DOM this time using just javascript.
First, let's analyse the existing code in `script.js`.
If you read through it you'll find:
`const table = document.getElementById("table");`
The above line locates and selects the `table` element with the id `"table"`.
Then we have:
```
function createRow(student)
{
    const tr = document.createElement("tr") // What if you create an element that does not exist ? Try it
    for(const prop in student){

        const td = document.createElement("td");
        td.textContent = student[prop];
        tr.appendChild(td);
    }
    return tr;
}
```
The above function creates a `row` element by looping over each `student` . `student` is an `object` representation of a 1337 student.
Take this opportunity to learn about `objects`. Objects are a data structure in javascript, you can define objects like this:
```
let myFirstObject = {
	x: 45,
	y: 44
	}
```
`x` and `y` are called properties,  `45` and  `45` are respectively the values for the properties `x` and `y`.
You can access a property like this:
```
console.log(myFirstObject.x)
// 45
console.log(myFirstObject["x"])
// 45
```
You can also loop over an object's properties using `for..in`. Read about it in [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

The function `insertRow` simply inserts the row in the table.

**You Job?**
In this exercise you're asked to manipulate that `students` array to get different results. You will find the results you need to get in what follows of this document.

There is a function named `modifyStudents` that is defined in `script.js`. That functions gets called before `createRow` and `insertRow`. You can edit **only** the `modifyStudents` function.
Your job is to manipulate the `students` array to get the desired result.
List of results:
If you're stuck, check the hints at the botton of this markdown.

 - Add yourself to the bottom of the list of students.
 - Add yourself to the top of the list of students.
 - Remove everyone from the list of students but yourself.
 - Remove all students who are younger than 20 years old.
 - Display an [alert](https://www.w3schools.com/jsref/met_win_alert.asp) if there is a student younger than 20 years old in the list.
 - Modify the age of Oussama.
 
 Advanced:
 
 - Retrieve `students` from this [API](https://mern-1337.herokuapp.com/) and display them.

**Hints:**

<details><summary>Hint 1</summary>
Google `Array.prototype.push()`
</details>

<details><summary>Hint 2</summary>
Did you do task 1 successfully ? You should be able to do this one without unshifting your focus ;)
</details>

<details><summary>Hint 3</summary>
Be creative with this one, you're a 1337 student.
</details>

<details><summary>Hint 4</summary>
Every heard of filtering ? :D
</details>

<details><summary>Hint 5</summary>
*some* students might be younger that 20 years old :) Nothing wrong with it though.
</details>

<details><summary>Hint 6</summary>
Oussama is an object.. e7m.. I mean presented as an object ! Modify his properties :D
</details>

<details><summary>Hint 7</summary>
Remember what we said about asynchronous functions ? Google [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
</details>

<details><summary>Hint 7, extra</summary>
Got to the part where you are fetching the data ? It return a promise, right ? Look into [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
</details>