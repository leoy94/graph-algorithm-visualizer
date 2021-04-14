export interface IFrame {
    processed: boolean;
    payload: any;
    animation: string;
}

export class Frame implements IFrame {
    processed: boolean = false;
    animation = "default";
    payload = {};

    constructor(animation: string, payload: any) {
        this.payload = payload;
        this.animation = animation;
    }
}