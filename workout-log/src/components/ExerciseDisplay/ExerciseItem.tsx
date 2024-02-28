
import './ExerciseItem.css'
import React from "react";
interface ExerciseProp {
    exercise: {id:number,name:string, sets:{number:number, reps: number, weight:number}[]};
}

const ExerciseItem: React.FC<ExerciseProp> =
function ExerciseItemComponent({exercise}){
    return <>
            <div className="container">
                <h1>{exercise.name}</h1>
                <table className="setList">
                    <thead>
                    <tr>
                        <th>Set</th>
                        <th>Repetitions</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exercise.sets.map((set, key) =>
                    <tr key={key} className="exerciseSet">
                        <th>{set.number}</th>
                        <th>{set.reps}</th>
                        <th>{set.weight}</th>
                    </tr>)}
                    </tbody>
                </table>
            </div>
    </>
}

export default ExerciseItem;