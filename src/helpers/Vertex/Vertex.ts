import { IVertex } from "./IVertex";
import {errors as vertexErrors} from "../Errors/VertexErrors";
import {Payload as IVertexPayload} from "./IVertexPayload";

export class Vertex implements IVertex {
    private _id_: number = -1;
    public payload: IVertexPayload = { blocked: false };
    public edges: number[] = [];

    public constructor(payload: any, id: number) {
        this.payload = payload;
        this._id_ = id;
    }

    public get id(): number{
        try{
            if(this._id_ === -1){
                throw new Error(vertexErrors.vertexNotFound);
            }
        }catch(e){
            console.log(e);
        }
        return this._id_;
    }

    public set id(id: number){
        try{
            if(this._id_ > 0){
                this._id_ = id;
            }
        }catch(e){
            console.log(e);
            return;
        }
    }

    public addEdge(edge: number): number {
        try {
            if (this.edges) {
                this.edges.push(edge);
            }
        }
        catch (e) {
            console.log(e);
            return -1;
        }
        return 0;
    }

    public removeEdge(edge: number): number {
        try {
            if (this.edges) {
                this.edges = this.edges.filter(vEdge => vEdge !== edge);
            }
        }
        catch (e) {
            console.log(e);
            return -1;
        }
        return 0;
    }

    public toggleBlock(): number {
        let { blocked } = this.payload;
        if (blocked === true) {
            this.payload.blocked = false
        }
        else {
            this.payload.blocked = true;
        }
        return 0;
    }

    public unBlock(): number {
        this.payload.blocked = false;
        return 0;
    }

}