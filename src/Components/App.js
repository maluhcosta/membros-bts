import React, { Component } from 'react';
import { Message } from './Message';
import { Figure } from './Figure';
import { Button } from './Button';

import "./style/App.css";

import github from '../assets/footer/github.png';
import linkedin from '../assets/footer/linkedin.png';
import instagram from '../assets/footer/instagram.png';
import coracao from "../assets/footer/coracao.png"

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
      <section className='container-all'>
        <div className="text-container">
        <Message titulo={this.state.titulo}/>
        <Message nomes={this.state.nomeDoMembro}/>
        </div>
                        
        <div className='container-figureMessage'>
          <ul className='list'>
            {this.state.membros.map((item, index) => (
              <li key={index}>
                <Button membros={item} mudaValor={() => this.cliqueNobotao(item)}/>
              </li>
            ))}
          </ul>
           
          <Figure value={this.state.nomeDaClasse} />
        </div>
        
        <footer>
          <ul className="footer-container">
            <li>
              <a className="contact-link" href="https://instagram.com/maluhcosta" target="_blank">
                <img className="logo-link" title="Instagram" src={instagram} alt="Logo do Instagram"/>
              </a>
            </li>

            <li>
              <a className="contact-link" href="https://github.com/maluhcosta" target="_blank">
                <img className="logo-link" title="GitHub" src={github} alt="Logo do Github"/> 
              </a>
            </li>

            <li>
              <a className="contact-link" href="https://www.linkedin.com/in/maluhcosta/" target="_blank">
                <img className="logo-link" title="LinkedIn" src={linkedin} alt="Logo do Linkedin"/>
              </a>
            </li>
          </ul>
          
          <div className="line-heart">
            <p className="footer-line">Feito por Maria Luísa Costa com</p>
            <img className="heart" src={coracao} alt="Coração roxo"/>
          </div>
        </footer>
      </section>
    );
  }
} 

export default App;