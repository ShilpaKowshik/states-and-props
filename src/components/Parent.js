import React from 'react';
import { Child } from './Child';
import { Sibling } from './Sibling';

export class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'KindaWeird'
        };
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName){
        this.setState({
            name: newName
        });
    }

    render(){
        return(
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
}