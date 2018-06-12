import React, { Component } from 'react';

import './App.css';
import Emoji from './Emoji/Emoji';
import Emoji1 from './Emoji/Emoji1';
import Emoji2 from './Emoji/Emoji2';
import Emoji3 from './Emoji/Emoji3';

class App extends Component {

  switchName=()=>{

    window.alert("Thankyou");

}

  render() {
    const style={
      padding:'8px'
    }


    return (
      <div className="App">
        <header className="App-header">
          ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
          <h1 className="App-title" style={style}>TeXt EmOjI</h1>

        </header>
        <p className="App-intro" >



          <Emoji/>
          <Emoji1/>
            <Emoji2/>
<Emoji3/>
      </p>
      </div>
    );
  }
}

export default App;
