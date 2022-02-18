function modifyStudents(students){
    return students;
}
// NO TOUCH ZONE
const table = document.getElementById("table");

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

function insertRow(row)
{
    const table = document.getElementById("table");
    table.appendChild(row)
}


let students = [
    {name:"Mohamed Yassir", username:"mkhalid", age:24, profession: "Programmer", sessions:[1,1]},
    {name:"El Houcine", username:"awixor", age:24, profession: "Programmer"},
    {name:"Oussama", username:"Oussama", age:20, profession: "Programmer"},
]
students = modifyStudents(students);
students.forEach(student => {
    const row = createRow(student);
    insertRow(row);
})
// END NO TOUCH ZONE