import React, {useState} from 'react';

function counter(){

    return Math.random()
}

// O useState só irá chamar a função counter() uma vez na inicialização
export default function UseStateLazy () {

    const [state, setState] = useState(counter());
    const [num, setNum] = useState(0);

    return(
        <div>
            <h4>Inicialização lenta</h4>
            <p>Valor do state: {state}</p>
            <p>Valor do num: {num}</p>
            <button
                onClick = {
                    () => setNum(num + 1)
                }
            >
                Clique Aqui!
            </button>
        </div>
    )
}