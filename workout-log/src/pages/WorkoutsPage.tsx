import ExerciseItem from "../components/ExerciseDisplay/ExerciseItem.tsx";

const exercises = [{"id":0, "name":"Benkpress", sets:[{"number":1, "reps":12, "weight": 30},{"number":2, "reps":12, "weight": 30},{"number":3, "reps":12, "weight": 25}]},
                                                {"id":1, "name":"Squats", sets:[{"number":1, "reps":12, "weight": 60},{"number":2, "reps":12, "weight": 50},{"number":3, "reps":10, "weight": 40}]}]
function WorkoutsPage(){
    return <>
        <h1>Workouts Page</h1>
        {exercises.map((exercise, key) =>{
            return <ExerciseItem key={key} exercise={exercise}/>
        })}
    </>
}

export default  WorkoutsPage;