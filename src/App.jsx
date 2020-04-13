import React from "react";
import Graph from "react-graph-vis";

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
};

const events = {
  select: function (event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: {
        nodes: [
          { id: 1, label: "Node 1", color: "#e04141" },
          { id: 2, label: "Node 2", color: "#e09c41" },
          { id: 3, label: "Node 3", color: "#e0df41" },
          { id: 4, label: "Node 4", color: "#7be041" },
          { id: 5, label: "Node 5", color: "#41e0c9" }
        ],
        edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
      }
    }
  }

  render() {
    return (
      <Graph graph={this.state.graph} options={options} events={events} style={{ height: "640px" }} />
    );
  }
}
