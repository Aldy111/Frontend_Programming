/**
 * import from Hello.js 
 * buat component main
*/
import Hello from "./Hello";

const Main = () => {
    return(
        <main>
        <Hello name="Aufa" />
        <Hello name="Mikel" />
        <Hello name="Hannah" />
        <Hello name="Jonas" />
        <Hello name="Martha" />
        </main>
    )
}

//export Main

export default Main;