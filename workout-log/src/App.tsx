import Message from "./Message.tsx";
import Footer from "./components/Footer.tsx";
import NavBar from "./components/NavBar.tsx";
import './components/general.css'
import ListWorkouts from "./components/ListWorkouts.tsx";


function App(){

    const workouts = [
            {'id':0,'name':"benk", 'weight': 23, 'set':3, 'reps': 12},
        {'id':0,'name':"press", 'weight': 23, 'set':3, 'reps': 12},
    ]
    console.log(workouts)
    return <div>
        <NavBar/>
    <div className="container">
        <ListWorkouts workoutList={workouts}/>
        <Message></Message>
        <Footer></Footer>
    </div>
    </div>

}

export default App;