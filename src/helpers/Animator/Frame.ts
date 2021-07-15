import {IFrame} from "./IFrame";

export class Frame implements IFrame {
    processed: boolean = false;
    animation = "default";
    payload;

    constructor(animation: string, payload: {id: number}) {
        this.payload = payload;
        this.animation = animation;
    }
}