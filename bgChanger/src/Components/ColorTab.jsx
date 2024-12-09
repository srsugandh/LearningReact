import './ColorTab.css'
export default function ColorTab(props){
    
    return (
        <div>
            <h1>Color Tab</h1>
            <div id='colorTab'>
                {props.colors.map((color, index) => {
                    return (
                        <button key={index} style={{background:color}} id='colorButton' onClick={() => props.updateColor(color)}>{color}</button>
                    )
                })}
            </div>
            
        </div>
    )
}