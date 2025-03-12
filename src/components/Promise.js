import React, { PureComponent,Component  } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    console.log('MyPureComponent render');
    return (
      <div>
        <h2>Pure Component</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}


class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      age: 30
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     age: 39
    //   });
    // }, 10000);
  }

  render() {
    console.log('ParentComponent render');
    return (
      <div>
        <h1>Parent Component</h1>
        <MyPureComponent name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

export default ParentComponent;