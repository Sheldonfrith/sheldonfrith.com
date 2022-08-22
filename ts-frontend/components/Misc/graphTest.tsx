import { useEffect, useMemo, useState } from "react";
import Graph, { Data, Node, Edge, Options } from "react-graph-vis";
import { v4 as uuidv4 } from "uuid";
import { objectKeys } from "../../lib/ObjectKeys";
import { BroadCategories, SkillItem, SkillNames } from "../../lib/Skills/Types";
import { skills } from "../../lib/Skills/SkillsExport";

function skillShouldNotHaveEdge(skill: SkillItem) {
  return (
    (skill.conceptualCategory == "Language" ||
      skill.conceptualCategory == "Code Strategy" ||
      skill.conceptualCategory == "Hardware") &&
    !skill.hasParent
  );
}

export function createGraphData() {
  const defaultColor = "#7be041";

  const allNodes: Node[] = [
    {
      id: "Front End",
      label: "Front End",
      color: defaultColor,
      x: -1000,
      fixed: true,
      y: -1000,
      font: {
        size: 100,
      },
    },
    {
      id: "Back End",
      label: "Back End",
      color: defaultColor,
      x: 1000,
      fixed: true,
      y: -1000,
      font: {
        size: 100,
      },
    },
    {
      id: "Database",
      label: "Database",
      color: defaultColor,
      x: 1000,
      fixed: true,
      y: 1000,
      font: {
        size: 100,
      },
    },
    {
      id: "Architecture",
      label: "Architecture",
      color: defaultColor,
      x: -1000,
      fixed: true,
      y: 1000,
      font: {
        size: 100,
      },
    },
  ];
  //@ts-expect-error
  const nodesPerGroup: Record<BroadCategories, SkillItem[]> = {};

  const experienceFactor = 0.3;
  const skillFactor = 0.5;
  const preferenceFactor = 0.5;
  skills.forEach((skill) => {
    if (allNodes.findIndex((node) => node.id == skill.name) != -1) return; // already handled
    //create new node
    const nNode: Node = {
      id: skill.name,
      label: skill.name,
      color: defaultColor,
      shape: "box",

      font: {
        size:
          10 +
          ((4 * skill.importance) / 3) *
            (skill.experience * experienceFactor +
              skill.skill * skillFactor +
              skill.preference * preferenceFactor),
        color: "#944040",
      },
    };
    if (!objectKeys(nodesPerGroup).includes(skill.broadCategory)) {
      nodesPerGroup[skill.broadCategory] = [];
    }
    nodesPerGroup[skill.broadCategory].push(skill);
    allNodes.push(nNode);
  });
  console.log(allNodes);
  const allEdges: Edge[] = [];
  skills.forEach((skill) => {
    // if has parent create a visible edge
    let parentID: SkillNames | undefined = undefined;
    if (skillShouldNotHaveEdge(skill)) {
      // create a default one
      let toID = "";
      if (skill.conceptualCategory == "Code Strategy") {
        toID = "Architecture";
      } else if (skill.broadCategory == "Back End") {
        toID = "Back End";
      } else if (skill.broadCategory == "Front End / UI") {
        toID = "Front End";
      } else if (skill.broadCategory == "Back or Frontend") {
        const rand = Math.random();
        if (rand > 0.5) {
          toID = "Front End";
        } else {
          toID = "Back End";
        }
      } else if (skill.broadCategory == "Database") {
        toID = "Database";
      } else {
        toID = "Architecture";
      }
      allEdges.push({ from: skill.name, to: toID });
    } else {
      parentID = skills.find(
        (skill2) => skill2.name == skill.parentOrBestConnectionPoint
      )?.name;
      if (parentID) {
        const NE: Edge = {
          from: skill.name,
          to: parentID,
          //  length: 3
        };
        allEdges.push(NE);
      }
    }
  });
  console.log(allEdges);

  const graphData: Data = {
    edges: allEdges,
    nodes: allNodes,
  };
  return graphData;
}
const options: Options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
  },
  groups: {
    1: {
      color: { background: "black" },
    },
  },
  physics: {
    // maxVelocity: 30,
    // minVelocity:5,
    timestep: 0.4,
    barnesHut: {
      // centralGravity:1,
      avoidOverlap: 0.99,
      damping: 0.6,
      springLength: 150,
    },
  },
};

export const GraphTest = () => {
  let [graphKey, setGraphKey] = useState<any>();

  const [graphData, setGraphData] = useState<Data>();
  const [nodeData, setNodeData] = useState<Node[]>();
  const [edgeData, setEdgeData] = useState<Edge[]>();

  //create initial graph data
  useEffect(() => {
    setGraphData(createGraphData());
    setGraphKey(uuidv4);
  }, []);
  //! debug
  useEffect(() => {}, []);
  // const version = useMemo(uuidv4, [graphData]);
  if (!graphData) {
    return <></>;
  }
  return (
    <Graph
      //@cust-ignore
      key={JSON.stringify(graphData)}
      graph={graphData}
      options={options}
      // events={events}
      style={{ height: "640px" }}
    />
  );
};
