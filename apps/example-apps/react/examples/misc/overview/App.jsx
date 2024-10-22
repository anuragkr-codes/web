import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import './xy-theme.css';


import {
  nodes as initialNodes,
  edges as initialEdges,
} from './nodes-and-edges';
import AnnotationNode from './AnnotationNode';
import ToolbarNode from './ToolbarNode';
import ResizerNode from './ResizerNode';
import CircleNode from './CircleNode';
import InputNode from './InputNode';
import ButtonEdge from './ButtonEdge';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: InputNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      className="overview"
    >
      <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default OverviewFlow;
