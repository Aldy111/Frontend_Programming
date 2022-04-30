import { useEffect, useState } from "react";

const Counter = ()=> {
    //destrucing use state
    const [Angka , setAngka] = useState(0);
    

    const addAngka = ()=> {
        setAngka(Angka + 1);
        console.log(Angka)
    }
    const manipulateDOM = ()=> {
        console.log('Lifecycle : Component Di mount')
        document.title = `Result : ${Angka}`;
    }
    //useeffect melakukan side effect
    useEffect(manipulateDOM,[])
    console.log('LifeCycle : Component Di render')
    return(
        <div>
            <p>Result : {Angka}</p>
            <button onClick = {addAngka}>Add</button>
        </div>
    )
}
export default Counter