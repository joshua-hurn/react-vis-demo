import React, { useState } from "react";
import Graph from "react-graph-vis";

export default function App() {
  const [nodes, setNodes] = useState([
    { id: 1, label: "Node 1", title: "node 1 tootip text" },
    { id: 2, label: "Node 2", title: "node 2 tootip text" },
    { id: 3, label: "Node 3", title: "node 3 tootip text" },
    { id: 4, label: "Node 4", title: "node 4 tootip text" },
    { id: 5, label: "Node 5", title: "node 5 tootip text" }
  ]);
  const [edges, setEdges] = useState([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]);


  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };

  const events = {
    doubleClick: function (event) {
      console.log(event);
      setNodes([...nodes, { id: 6, label: "Node 6", color: "#fff" }]);
      setEdges([...edges, { from: 5, to: 6 }])
    }
  };

  return (
    <Graph
      graph={{ nodes, edges }}
      options={options}
      events={events}
    // getNetwork={network => {
    //   //  if you want access to vis.js network api you can set the state in a parent component using this property
    // }}
    />
  );
}
