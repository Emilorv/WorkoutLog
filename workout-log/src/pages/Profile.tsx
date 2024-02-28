import database from '../database.json'
function Profile(){
    return<>
        <h1>Profile page</h1>
        <div className={"container"}>
            <h1>{database.users[0].name}</h1>
            <p>{database.users[0].dateCreated}</p>
        </div>
        </>
}

export default Profile