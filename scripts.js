// JavaScript 部分

// 切換頁面的函數
function goToPage(pageId) {
    // 這裡可以寫導向其他頁面的程式碼
    console.log('Go to page: ' + pageId);
}

// 折線圖資料
const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'red',
        fill: false,
    }]
};

const data2 = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [{
        label: 'Dataset 2',
        data: [7, 12, 5, 2, 15, 10],
        borderColor: 'blue',
        fill: false,
    }]
};

const data3 = {
    labels: ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Cherry'],
    datasets: [{
        label: 'Dataset 3',
        data: [25, 10, 15, 12, 8, 18],
        borderColor: 'green',
        fill: false,
    }]
};

// 折線圖選項
const options = {
    responsive: true,
    scales: {
        x: {
            display: true,
        },
        y: {
            display: true,
        }
    }
};

// 生成折線圖
const ctx1 = document.getElementById('lineChart1').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: data1,
    options: options,
});

const ctx2 = document.getElementById('lineChart2').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: data2,
    options: options,
});

const ctx3 = document.getElementById('lineChart3').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: options,
});

/*// 進度環函數
function updateProgress(progressRingId, percentageId, percentage) {
    const progressRing = document.getElementById(progressRingId);
    const progressCircle = progressRing.querySelector('.progress-circle');
    const percentageText = document.getElementById(percentageId);

    const offset = 2 * Math.PI * 50 * (100 - percentage) / 100;
    progressCircle.style.clip = `rect(0, 100px, 100px, ${offset}px)`;
    percentageText.textContent = `${percentage}%`;
}*/

// 模擬API取得進度數據
// 這裡假設從API取得了三個進度數據：progress1, progress2, progress3
const progress1 = 75;
const progress2 = 40;
const progress3 = 60;

/*
// 更新進度環
updateProgress('progressRing1', 'percentage1', progress1);
updateProgress('progressRing2', 'percentage2', progress2);
updateProgress('progressRing3', 'percentage3', progress3);
*/


// 更新進度環的百分比
function updateProgress(percentage, elementId) {
    const progressRing = document.getElementById(elementId);
    const progressCircle = progressRing.querySelector('.progress-circle');
    const percentageSpan = progressRing.querySelector('.percentage');
  
    percentageSpan.textContent = percentage + '%';
    const circumference = 2 * Math.PI * progressCircle.getAttribute('r');
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
  }
  
  // 模擬進度更新
function simulateProgressUpdate(percentage, elementId) {
    setTimeout(function () {
      updateProgress(percentage, elementId);
    }, 500);
  }
  
  // 在此模擬更新進度環的百分比，請根據實際情況修改
  simulateProgressUpdate(50, 'progressRing1');
  simulateProgressUpdate(75, 'progressRing2');
  simulateProgressUpdate(30, 'progressRing3');


// 新增一個全域變數來儲存當前顯示的折線圖頁面
let currentPage = '#chart1';

function goToPage(pageId) {
    // 隱藏當前顯示的折線圖頁面
    document.querySelector(currentPage).style.display = 'none';

    // 顯示目標折線圖頁面
    document.querySelector(pageId).style.display = 'block';

    // 更新當前顯示的折線圖頁面
    currentPage = pageId;

    // 在這裡你可以根據需要更新圖片和底圖的顯示
    // ...
}
