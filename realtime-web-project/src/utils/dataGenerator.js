function generateRandomData() {
    return {
        timestamp: new Date().toISOString(),
        value: Math.floor(Math.random() * 100) + 1
    };
}

export default generateRandomData;