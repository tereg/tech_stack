import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
//line above calls the function connect. when connect is called it returns another function. we then immediately call that function with the LibraryList.

// To pull data out of our redux store and show it inside of our component, we use a connect helper. This is a feature of the react-redux library. Connect is a tool that is used to connect a component to the Redux store.

// mapStateToProps takes our global state object (our application state [the thing that sits inside our redux store]) and it will map it in some fashion and provide them as props to LibraryList.

