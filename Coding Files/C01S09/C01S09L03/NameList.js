import React from ‘react’
function NameList()
{
const person = [ 
{
name:"Dhoni"
age:35
Country: "India"
},
{
name:"Sachin"
age:40
Country: "India"
},
{
name:"Virat"
age:32
Country: "India"
},
];
const personList = persons.map((person)=>(
<h1>
I am {person.name}.I am {person.age} years old .From {person.country}
</h1>
))

return <div>{personList}</div>;
}

export default NameList;


