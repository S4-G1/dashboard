<style>
    .graphs {
    display:flex;
    flex-direction: row;
    min-width: 400px;
    min-height: 300px;
    max-width: 829px;
    width: 100%;
    height: 100%;
    padding-right: 40px;
    padding-bottom: 40px;
    position: relative;
    top: -1000px; left: 40px;
    background-color: lightgray;
}

.graphs-left {
    width: 45px;
    position: relative;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#graph-left {
    position: absolute;
    bottom: 100px;
    left: 15px;
    width: 215px;
    transform: rotate(270deg);
    transform-origin: 0 0;
}

.graphs-right {
    height: 100%;
    width: 100%;
}
.graphs-right > canvas {
    height: 100%;
    width: 100%;
}
#graph-top {
    /* height: 45px; */
    display: flex;
    justify-content: center;
}
#graph-top {
    color: #388DA6;
}

#graph {
    background-color: #DDDDDD;
}
</style>

<div class="graphs">
    <div class="graphs-left">
        <p id="graphs-left"></p>
    </div>
    <div class="graphs-right">
        <p id="graphs-top"></p>
        <canvas id="graph">
    </div>
</div>
