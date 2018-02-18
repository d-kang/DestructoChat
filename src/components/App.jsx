import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = {
    message: 'hello world!!',
  };

  render() {
    return (
      <div>
        <span style={{ color: 'blue' }}>{this.state.message}</span>
      </div>
    );
  }
}

export default App;
