import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
//line above calls the function connect. when connect is called it returns another function. we then immediately call that function with the LibraryList.

// To pull data out of our redux store and show it inside of our component, we use a connect helper. This is a feature of the react-redux library. Connect is a tool that is used to connect a component to the Redux store.

// mapStateToProps takes our global state object (our application state [the thing that sits inside our redux store]) and it will map it in some fashion and provide them as props to LibraryList.

