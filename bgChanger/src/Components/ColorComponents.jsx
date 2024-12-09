import './ColorComponents.css';
export default function ColorComponents(props){
    return (
        <div id='colorArea' style={{background:props.color}}>
            <h1>Color Components</h1>
        </div>
    )
}