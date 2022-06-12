import React from 'react';

export default class UseEffect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    //Primeira renderização
    componentDidMount() {
        document.title = `Cliques: ${this.state.count}`
    }

    //Renderiza toda vez que o estado for atualizado
    componentDidUpdate(){
        //O titulo da aba do navegador é atualizado
        document.title = `Cliques: ${this.state.count}`
    }

    render() {
        return (
            <div>
                <p>Cliques {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clique Aqui!
                </button>
            </div>
        )
    }
}