/**
 * Membuat Component Hello yang menerima inputan Props 
*/

function Hello(props){
    const {name} = props;//destrucing object

    return (
        <div className = "Hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    )
}

export default Hello;