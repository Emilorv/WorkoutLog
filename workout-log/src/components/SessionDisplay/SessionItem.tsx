
import './SessionItem.css'
import React from "react";
interface SessionProp {
    session: {id:number,name:string, "date":string, "time":string, duration: number, exercises:[]};
}

const SessionItem: React.FC<SessionProp> =
function SessionItemComponent({session}){
    return <>
            <div className="container">
                <h1>{session.name}</h1>
            </div>
    </>
}

export default SessionItem;