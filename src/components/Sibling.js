import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div style = {{ marginTop : '80px', textAlign : 'center'}}>
        <h3>Hey, my name is {name}!</h3>
        <h3>Don't you think {name} is the prettiest name ever?</h3>
        <h3>Sure am glad that my parents picked {name}!</h3>
      </div>
    );
  }
}

