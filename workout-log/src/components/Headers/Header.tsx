import "./Header.css"
import {useNavigate, useLocation} from "react-router-dom";
import React from "react";

const Header: React.FC = () =>{
    const location = useLocation()
    const navigate = useNavigate();

    const goBack= () =>{
        navigate(-1)
    }
    const BackButton = () =>{
        return <img onClick={goBack} alt="backButton" className="backButton" src="/icons/Chevron%20left.svg"/>
    }

    if(location.pathname === '/'){
        return <div className="NoHeader">
        </div>
    } else {
        return <div className="Header">
            <BackButton/>
        </div>
    }

}

export default Header