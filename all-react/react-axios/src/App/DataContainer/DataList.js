import React from 'react';

import Person from './Person';

function DataList(props){
    const {people} = props;
    console.log(people);
    const peopleComponents = people.map((person, i)=> <Person key={person.name + i} {...person}/>);
    return (
        <ul>
            {peopleComponents}
        </ul>
    )
}

export default DataList;