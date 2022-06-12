import React, {useState} from 'react';

export default function UsePrevState(){

    const [balance, setBalance] = useState(150)

    const deposit = () => {
        
        setTimeout(() => {

            /* Neste caso quando eu deposito e logo após eu saco antes
            de 3000 ms, ele aparece o saldo que sacou, mas assim  que
            atualiza, aparece o estado anterior ao saque e soma com 
            o deposito como se não fosse sacado nada.
            Por exemplo:
            # Saldo atual: 50 ## Deposito: 100 ## Saco: 200 
            ### O esperado seria: -150, porém ficou com 150
            após a atualização.
             */
            //setBalance(balance + 100)

            /* Para consertar este problema de sincronização,
            existe o prevState, que é um parâmetro com o estado
            anterior */
            setBalance((prevState) => prevState + 100)
        }, 3000);
    }

    return (
        <div>
            <h4>SetState com prevState</h4>
            <button
                onClick={deposit}
            >
                Depositar 100
            </button>

            <button
                onClick={
                    // Chamando o hook
                    () => setBalance(balance - 200)
                }
            >
                Sacar 200
            </button>
            <p>Meu saldo atual é: {balance}</p>
        </div>
    )
}