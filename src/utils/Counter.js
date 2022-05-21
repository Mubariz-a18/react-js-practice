import React , {Component} from 'react';
class Counter extends Component {
    state = {count:0}
    constructor() {
        super();
        setInterval(() => {
            const cnt = this.state.count;
            this.setState({count:cnt+1})
        }, 1000);
    }
    render() { 
        return (<div>
            <h1>{this.state.count}</h1>
        </div>  );
    }
}
 
export default Counter;