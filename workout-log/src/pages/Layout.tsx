import {Outlet, Link} from "react-router-dom";
import '../components/navBar.css'
function Layout(){
    const homeIcon = "public/icons/Home.svg"
    const sessionIcon = "public/icons/List.svg"
    const workoutIcon = "public/icons/Exercise.svg"
    const profileIcon = "public/icons/Account circle.svg"

    return<>
        <Outlet/>
        <nav className="navBar">
            <Link className="navbar-item" to="/"><img alt="Homebutton" src={homeIcon}/></Link>
            <Link className="navbar-item" to="/sessionsPage"> <img alt="SessionButton" src={sessionIcon}/></Link>
            <Link className="navbar-item" to="/workoutsPage"><img alt="WorkoutsButton" src={workoutIcon}/></Link>
            <Link className="navbar-item" to="/profile"><img alt="ProfileButton" src={profileIcon}/></Link>
        </nav>
    </>

}
export default Layout;