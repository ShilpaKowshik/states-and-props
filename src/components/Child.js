import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
  }

   handleChange = (e)=>  {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div style = {{marginTop : '95px', textAlign : 'center'}}>
        <select onChange={this.handleChange}>
            <option value="KindaWeird">KindaWeird</option>
            <option value="JSHead">JSHead</option>
            <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
    }
}