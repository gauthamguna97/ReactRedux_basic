import React, { Component } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/index.js";
import { bindActionCreators } from "redux";

class List extends Component {
  renderList() {
    return this.props.totallist.map(item => {
      return (
        <li
          key={item.title}
          onClick={() => this.props.selectItem(item)}
          className="list-group-item"
        >
          {item.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    totallist : state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectItem : selectItem }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(List);
