import React from 'react'

export default function Todos(props) {

    console.log("Renderização do componente FILHO!")

    return (
        <div>
            <h4>Minha lista de afazeres</h4>
            {
                props.todos.map(
                    (todo, index) => {
                        return (
                            <p key={index}>
                                (todo)
                            </p>
                        )
                    }
                )
            }
            <button onClick={props.addTodo}>Cadastrar</button>

        </div>
    )
}