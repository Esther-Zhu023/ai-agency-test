// src/app.js

import { generateRandomData } from './utils/dataGenerator.js';

const statusElement = document.getElementById('status');
const updateInterval = 1000; // 每秒更新一次

function updateStatus() {
    const randomData = generateRandomData();
    statusElement.textContent = `当前状态: ${randomData}`;
}

// 每隔一秒更新状态
setInterval(updateStatus, updateInterval);