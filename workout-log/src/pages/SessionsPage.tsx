import SessionItem from "../components/SessionDisplay/SessionItem.tsx"

import database from "../database.json";
function SessionsPage(){
    return <>
        <h1>Sessions Page</h1>
        {database.users[0].sessions.map((session, key) =>{
            return <SessionItem key={key} session={session}/>
        })}
    </>
}

export default SessionsPage;