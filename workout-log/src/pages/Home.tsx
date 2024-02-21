import Footer from "../components/Footer.tsx";
import Message from "../Message.tsx";
import ListWorkouts from "../components/ListWorkouts.tsx";

const workouts = [
    {'id':0,'name':"benk", 'weight': 23, 'set':3, 'reps': 12},
    {'id':0,'name':"press", 'weight': 23, 'set':3, 'reps': 12},
]
function Home(){
    return <div className="container">
        <ListWorkouts workoutList={workouts}/>
        <Message></Message>
        <Footer></Footer>
    </div>
}

export default Home
