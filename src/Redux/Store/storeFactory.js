export const storeFactory = (array) => {
    return ({
        graph: {
          dimensions: {
          }
        },
        animations: {
            frames: [],
            currentAnimation: [],
        },
        settings: {
            // maxItems: 5,
            delay: .01,
            isPaused: true,
        }
    });
}