/* Serve para verificar o comportamento do Callback */
import { useState, useCallback } from 'react'

import Todos from './Todos'

export default function TodoList() {
    const [todoCount, setTodoCount] = useState(0)
    const [todos, setTodos] = useState([])

    console.log("Renderização do componente PAI")

    const incrementTodoCount = () => {
        setTodoCount(todoCount + 1)
    }

    /* const addTodo = () => {
        setTodos(
            (todosArray) => [...todosArray, "Nova tarefa"]
        )
    } */

    const addTodo = useCallback(
        () => {
            setTodos(
                (todosArray) => [...todosArray, "Nova tarefa"]
            )
        }, [todos]
    )

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <div>
                <p>Contador de tarefas: {todoCount}</p>
                <button onClick={incrementTodoCount}>+</button>
            </div>
        </div>
    )
}

