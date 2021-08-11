import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople : React.Dispatch<React.SetStateAction<Props["people"]>>
}

const List: React.FC<IProps> = ({ people,setPeople }) => {

    const UpdateHandler = (index : number): void => {
            try {
            const name : string | null = prompt("Enter your name");
            const ageString : string | null = prompt ("Enter your age");
            const age : number | undefined = ageString ? parseInt(ageString) : undefined;
            const tempPeople : IProps["people"] = [...people];
            const imgURl :string | null = prompt ("Enter your image Url");
            const Note :string | null = prompt("Enter about person Info");
            if(name && age && imgURl && Note) {
             const obj  = {
                    id:index,
                    name:name,
                    age:age,
                    img:imgURl,
                    note:Note
             }
             tempPeople[index] = obj;
             setPeople([...tempPeople]);

            }
            }
            catch(error) {
                console.log("Error occuring")
            }
        
    }
    const DeleteHandler = (index : number) : void => {
        console.log(index);
        const tempPeople : IProps["people"] = [...people].filter(person => {
            return person.id !== index;
        })
        setPeople([...tempPeople]);



    }
    const renderList = (): JSX.Element[] => {
        return people.map((person,index) => {
            return (
                <li key={index} className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    <button onClick={()=>UpdateHandler(person.id)}>Update</button>
                    <button onClick={()=>DeleteHandler(person.id)}>Delete</button>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List
