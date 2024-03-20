import SlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"

type Props ={
    visible : boolean;
    closePane: () =>void;
}

export default function AddExercisePane({visible, closePane}:Props){
    return (<SlidingPane className="slide-pane" isOpen={visible} title="Add Exercise" width={window.innerWidth < 600 ? "100%" : "500px"} onRequestClose={closePane}>
    <div><h1>Content</h1></div>
    </SlidingPane> )
}