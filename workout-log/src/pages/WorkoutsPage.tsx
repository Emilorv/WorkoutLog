import ExerciseItem from "../components/ExerciseDisplay/ExerciseItem.tsx";
import React from "react";
import './WorkoutsPage.css'
import '../components/ExerciseDisplay/AddExercisePane.tsx'
import AddExercisePane from "../components/ExerciseDisplay/AddExercisePane.tsx";

const exercises = [{"id":0, "name":"Benkpress", sets:[{"number":1, "reps":12, "weight": 30},{"number":2, "reps":12, "weight": 30},{"number":3, "reps":12, "weight": 25}]},
                                                {"id":1, "name":"Squats", sets:[{"number":1, "reps":12, "weight": 60},{"number":2, "reps":12, "weight": 50},{"number":3, "reps":10, "weight": 40}]}]


function WorkoutsPage(){
    const [IsAddPaneOpen, setAddPaneState] = React.useState<boolean>(false);
    const closePane = () =>{
        setAddPaneState(false)
    }
    return <>
        <img onClick={()=> setAddPaneState(!IsAddPaneOpen)} className="AddButton" alt="Add-button" src="/icons/Add.svg"/>
        <AddExercisePane visible={IsAddPaneOpen} closePane={closePane}></AddExercisePane>
        <h1>Workouts Page</h1>
        <h1>Is Open? {IsAddPaneOpen ? "Yes":"NO"}</h1>
        {exercises.map((exercise, key) =>{
            return <ExerciseItem key={key} exercise={exercise}/>
        })}
    </>
}

export default  WorkoutsPage;