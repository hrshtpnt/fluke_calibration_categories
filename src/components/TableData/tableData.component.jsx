import React, { Component } from "react";
import MaterialTable from "../material-table/material-table.component";
class TableData extends Component {
  constructor() {
    super();
    this.state = { categoriesData: [] };
  }

  componentDidMount() {
    fetch("https://www.cubyt.io/data/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categoriesData: data }));
  }

  render() {
    const { categoriesData } = this.state;
    return <MaterialTable categoriesData={categoriesData} />;
  }
}

export default TableData;
