import {skills} from '../database/Skills';

interface Cloud {
    id: string
    nodesInCloud: GraphNode[]
    visualSpecifics: {[key: string]:any}
}
interface GraphEdge {
    isDirectional: boolean
    parentNode : GraphNode
    childNode: GraphNode
    visualSpecifics: {[key: string]: any}
}
interface GraphNode {
    id: string
    size: number
    closestNeigbor: GraphNode
    edges: GraphEdge[]
    visualSpecifics: {[key: string]: any}
}

interface GraphSpecification {
    edges: GraphEdge[]
    nodes: GraphNode[]
    clouds: Cloud[]
}

function getGraphSpecification(): GraphSpecification{
    const allEdges: GraphEdge[]= [];
    const allNodes: GraphNode[] = [];
    const allClouds: Cloud[] = []
    return {
        edges: allEdges, 
        nodes: allNodes,
        clouds: allClouds
    };
}

function getNodeCenterPositions(spec: GraphSpecification){
    // start with general cloud centerpoints
    const totalNodeSizesPerCloud: {[cloudID: string]: number} = {};
    spec.clouds.forEach(cloud => {
        cloud.nodesInCloud.reduce((prev, curr)=> {
            prev.size += curr.size
            return prev;
        });
    });
    // then move to node centerpoints
}