import './ColorTabButton.css';
export default function ColorTabButton(props){
    return (
        <button color={props.color} id='colorButton'>{props.color}</button>
    )
}