import {useState} from 'react'

export default function useStateFunction(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h4>SetState em componente de Função</h4>
            <p>Quantidade de clisques: {count}</p>
            <button
                onClick={
                    () => setCount(count + 1)
                }
            >
                Clique Aqui!
            </button>
        </div>
    )
}