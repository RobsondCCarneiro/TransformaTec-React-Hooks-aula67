import React, { useState } from 'react';

export default function useStateObject() {

    const [user, setUser] = useState(
        {
            name: 'Robson',
            age: 27
        }
    )

    return (
        <div>
            <h4>Exemplo de prevState em objeto</h4>
            <button
                /* Quando utiliza o hook setState num objeto,
                os atributos que não foram passados como parâmetros
                são perdidos */
                /* onClick={
                    () => setUser({name: 'Robson da Costa'})
                } */

                onClick={
                    () => setUser(
                        /* Ao utilizar o prevState como o parâmetro do 
                        objeto, é atualizado o atributo sem perder os outros,
                        é utiliza o operador Spread para "varrer" todos os 
                        atributos do objeto.*/
                        (prevState) => {
                            return ({...prevState, name: "CARNEIRO, Robson"})
                        }
                    )}
            >Atualizar nome</button>
            <p>
                {JSON.stringify(user)}
            </p>
        </div>
    )
}