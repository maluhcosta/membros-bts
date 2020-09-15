import React, { Component } from 'react';
import { Message } from './Message';
import Figure from './Figure';
import Button from './Button';

class App extends Component {
  state = {
    titulo: 'Membros do BTS',
    nomeDoMembro: 'Selecione um membro para ver sua foto',
    nomeDaClasse: 'nome',
    membros: ['J-Hope', 'Jimin', 'Jin', 'Jungkook', 'Rap-Monster', 'Suga', 'V']
  };

  cliqueNobotao = (membros) => { this.setState({ nomeDaClasse: membros})
    this.setState({ nomeDoMembro: membros })};

  render() {
    return (
      <section className='container-tudo'>
        <Message titulo={this.state.titulo} />
        <Message nomes={this.state.nomeDoMembro} />
                        
        <div className='container-figureMessage'>
          <ul className='list'>
            {this.state.membros.map((item, index) => (
              <li key={index}>
                <Button membros={item} mudaValor={() => this.cliqueNobotao(item)} />
              </li>
            ))}
          </ul>
           
          <Figure value={ this.state.nomeDaClasse } />
        </div>
      </section>
    );
  }
} 

export default App;