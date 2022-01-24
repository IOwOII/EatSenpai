function click(index) {
    let p = _gameBBList[_gameBBListIndex];
    let base = parseInt(document.getElementById(p.id).getAttribute("num")) - p.cell;
    let num = base + index - 1;
    let id = p.id.substring(0, 11) + num;

    let fakeEvent = {
        clientX: ((index - 1) * blockSize + index * blockSize) / 2,
        // Make sure that it is in the area
        clientY: (touchArea[0] + touchArea[1]) / 2,
        target: document.getElementById(id),
    };

    gameTapEvent(fakeEvent)
}

document.onkeydown = function(e) {
    const map = {
        '1': 1, '2': 2, '3': 3, '4': 4
    }
    let key = e.key.toLowerCase();

    if (Object.keys(map).indexOf(key) !== -1) {
        click(map[key])
    }
}
