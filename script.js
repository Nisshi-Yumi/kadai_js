document.addEventListener('DOMContentLoaded', function() {
    let powerGenerated = 100;
    let carbonReduction = powerGenerated * 0.01;
    let treeCount = carbonReduction * 150;

    function updateStats() {
        powerGenerated += 1;
        carbonReduction = powerGenerated * 0.01;
        treeCount = carbonReduction * 150;

        document.getElementById('powerGenerated').textContent = powerGenerated + ' kWh';
        document.getElementById('carbonReduction').textContent = carbonReduction.toFixed(2) + ' トン CO2';
        document.getElementById('treeCount').textContent = treeCount.toFixed(0) + ' 本';
    }

    setInterval(updateStats, 1000);

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);

    // グラフ描画用の関数
    function drawChart(canvasId, data, label, color) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'bar', // 積み上げグラフ
            data: {
                labels: Array.from({length: data.length}, (_, i) => i + 1),
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: color,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: { title: { display: true, text: 'Time (seconds)' }},
                    y: { title: { display: true, text: label }, beginAtZero: true }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // クリックイベントでグラフを表示
    document.getElementById('powerStat').addEventListener('click', () => {
        document.getElementById('chartsSection').style.display = 'flex';
        const powerData = Array.from({length: 10}, (_, i) => powerGenerated + i);
        drawChart('powerChart', powerData, 'Power Generated (kWh)', 'green');
    });

    document.getElementById('carbonStat').addEventListener('click', () => {
        document.getElementById('chartsSection').style.display = 'flex';
        const carbonData = Array.from({length: 10}, (_, i) => (powerGenerated + i) * 0.01);
        drawChart('carbonChart', carbonData, 'Carbon Reduction (Ton)', 'green');
    });

    document.getElementById('treeStat').addEventListener('click', () => {
        document.getElementById('chartsSection').style.display = 'flex';
        const treeData = Array.from({length: 10}, (_, i) => ((powerGenerated + i) * 0.01) * 150);
        drawChart('treeChart', treeData, 'Number of Cedar Trees', 'green');
    });
});
