export type NodeAttribute = {
  type: string;
  name: string;
  value: string;
};

export interface Node {
  type: string;
  name: string;
  attributes: NodeAttribute[];
  children: Node[];
  position: {
    start: { line: number; column: number; offset: number };
    end: { line: number; column: number; offset: number };
  };
}

export interface Tree {
  children: Node[];
}
