* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: url('img/top.png') no-repeat center center fixed;
    background-size: cover;
}

.main-header {
    background-color: rgba(46, 125, 50, 0.8);
    color: white;
    padding: 1rem;
    text-align: center;
}

.clock {
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.power-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background-color: rgba(232, 245, 233, 0.8);
    margin-top: -1rem;
}

.stat {
    text-align: center;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
}

h2 {
    color: #2e7d32;
    margin-bottom: 1rem;
}

h3 {
    color: #2e7d32;
}

.hero {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    position: relative;
    top: -2cm;
}

.hero-text {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
    z-index: 1;
}

.hero::before {
    content: "";
    position: absolute;
    top: 1.5cm;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: #2e7d32;
    color: white;
    margin-top: 2rem;
}

/* グラフセクションのスタイル */
#chartsSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: -10px 0 20px 0; /* グラフ全体を1センチ(約10px)上に移動 */
    background-color: black;
}

.chart-container {
    width: 20%;
}

canvas {
    background-color: black;
}
