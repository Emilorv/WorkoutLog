import SlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"
import './AddExercisePane.css'
import {useState} from "react";
import { ReactComponent as AddIcon } from "/ic";

type Props ={
    visible : boolean;
    closePane: () =>void;
}
export default function AddExercisePane({visible, closePane}:Props){
    const [sets, setSets] = useState([{ id: 1, repetitions: 0, weight: 0 }]);

    const addSet = () =>{
        const newSet = {id:sets.length+1, repetitions:0, weight: 0}
        setSets([...sets, newSet]);
    }

    return (<SlidingPane className="slide-pane" isOpen={visible} title="Add Exercise" width={window.innerWidth < 600 ? "100%" : "500px"} shouldCloseOnEsc={true} onRequestClose={closePane}>
    <form>
        <div className="formrow">
            <label className="formLabel">Exercise Name</label>
            <input className="forminput" type="text" />

        </div>
        {sets.map((set,key)=>{
          return <div key = {key} className="formrow">
              <label className="formLabel">Repetitions: </label>
              <input className="formNumberInput" type="number" />
              <label className="formLabel">Weights </label>
              <input className="formNumberInput" type="number" />

          </div>
        })}
        <AddIcon onClick={addSet}/>
    </form>
</SlidingPane> )
}