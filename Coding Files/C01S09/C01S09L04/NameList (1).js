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
<Person Key={person.name} person={person}/>);

))

return <div>{personList}</div>;
}

export default NameList;


