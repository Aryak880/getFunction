import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Copy from '../Coppied/Coppied';
import './bodyStyle.css';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coppied: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      coppied: true
  })
    setTimeout(() => {
      this.setState({coppied: false});
  }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.coppied && <Copy />}
        {
          this.props.boiler.map(e => (
            <div key={e.dataStructure} className="boilerContainer">
              <div className="boilerHeading">
                <h1>{e.dataStructure}  basic template</h1>
              </div>
              <div className="boilerCode">
                <pre>
                  <code>
                    {e.working}
                  </code>
                </pre>
              </div>
            
              <div className="boilerButtonContainer">
                <div className="boilerButton">
                  <CopyToClipboard text={e.working}
                  onCopy={() => this.setState({copied: true})}>
                  <button onClick={this.handleClick}><span>&lt;\</span>Copy code<span>&gt;</span></button>
                  </CopyToClipboard>
                </div>

                <div className="boilerButton">
                  <a href={this.props.fileLink}  download={this.props.fileName} target="_blank" rel="noopener noreferrer"><button><span>&lt;\</span>Download code file<span>&gt;</span></button></a>
                </div>
              </div>
            </div>
          ))
        }
        <br />
        <div className="functionHeading"><h2>{this.props.boiler.map(e => e.dataStructure)} functions</h2></div>
        <div className="cardContainer">
          {
            this.props.fun.map(e => (
              <div className="card" key={e.funName}>
                <div className="cardHeading">
                  <h2>{e.funName}</h2>
                </div>
                <div className="cardCode">
                    <pre>
                        <code>
                          {e.working}
                        </code>
                    </pre>
                </div>
                <div className="cardCopy">
                  <CopyToClipboard text={e.working}
                    onCopy={() => this.setState({copied: true})}>
                    <button onClick={this.handleClick}><span>&lt;\</span>Copy code<span>&gt;</span></button>
                  </CopyToClipboard>
                </div>        
            </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Card;