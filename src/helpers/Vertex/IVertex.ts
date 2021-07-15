export interface IVertex {
    id: number;
    payload: { blocked: boolean };
    edges: number[];
    addEdge: (edge: number) => void;
    removeEdge: (edge: number) => void;
    toggleBlock: () => boolean;
    unBlock: () => void;
}

