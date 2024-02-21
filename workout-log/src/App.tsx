import Layout from "./pages/Layout.tsx"
import './components/general.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NoPage from "./pages/NoPage.tsx";
import Profile from "./pages/Profile.tsx";
import WorkoutsPage from "./pages/WorkoutsPage.tsx";
import SessionsPage from "./pages/SessionsPage.tsx";


function App(){
    return<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/sessionsPage" element={<SessionsPage/>}/>
                <Route path="/workoutsPage" element={<WorkoutsPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NoPage/>}/>
            </Route>
            </Routes>
        </BrowserRouter>
}

export default App;