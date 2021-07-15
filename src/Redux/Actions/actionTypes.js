export const actions = {
    //graph dimension actions
    createGraph: "createGraph",
    resetGraph: "resetGraph",

    //graph painting user actions
    setStart: "setStart",
    setEnd: "setEnd",
    blockOrUnblockCell: "blockOrUnblockCell",

    //graph visualizer user actions
    setAlg: "setAlg",
    //everytime we set an algorithm we have to regenerate the animations

    //animator actions
    pause: "pause",
    play: "play",
    generateFrames: "generateFrames",
    processNextFrame: "getNext",
    clearFrames: "clearFrames",
    resetAnimator: "resetAnimator"
}

