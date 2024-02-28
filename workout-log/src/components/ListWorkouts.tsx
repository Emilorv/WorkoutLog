import React from "react";
interface ListWorkoutProps {
    workoutList: {id:number,name:string, weight:number, set:number, reps:number}[];
}
const ListWorkouts: React.FC<ListWorkoutProps> =
function WorkoutListComponent({workoutList}){
    return workoutList.map((workout, key) => {
            return <div key={key} className={"container"}>
                <h1 >{workout.name}</h1>
                <p>{workout.weight}</p>
                <p>{workout.set}</p> b
                <p>{workout.reps}</p>
            </div>
        }
    )
}

export default ListWorkouts