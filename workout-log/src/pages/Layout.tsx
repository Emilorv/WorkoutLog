import {Outlet, Link} from "react-router-dom";
import '../components/Layout.css'
import Header from "../components/Headers/Header.tsx";
function Layout(){
    const homeIcon = "icons/Home.svg"
    const sessionIcon = "icons/List.svg"
    const addIcon = "icons/Add.svg"
    const workoutIcon = "icons/Exercise.svg"
    const profileIcon = "icons/Account circle.svg"

    return<div className="page">
        <Header/>
        <Outlet/>
        <nav className="navBar">
            <Link className="navbar-item" to="/"><img alt="Homebutton" src={homeIcon}/></Link>
            <Link className="navbar-item" to="/sessionsPage"> <img alt="SessionButton" src={sessionIcon}/></Link>
            <a className={"startWorkoutButton navbar-item"}><img alt="startWorkoutButton" src={addIcon}></img></a>
            <Link className="navbar-item" to="/workoutsPage"><img alt="WorkoutsButton" src={workoutIcon}/></Link>
            <Link className="navbar-item" to="/profile"><img alt="ProfileButton" src={profileIcon}/></Link>
        </nav>
    </div>

}
export default Layout;