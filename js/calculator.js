document.getElementById('clear-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerText = "";
});
document.getElementById('0-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 0;
});
document.getElementById('1-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 1;
});
document.getElementById('2-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 2;
});
document.getElementById('3-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 3;
});
document.getElementById('4-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 4;
});
document.getElementById('5-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 5;
});
document.getElementById('6-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 6;
});
document.getElementById('7-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 7;
});
document.getElementById('8-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 8;
});
document.getElementById('9-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += 9;
});
document.getElementById('decimal-btn').addEventListener('click', function () {
    document.querySelector('.current-operand').innerHTML += '.';
});
document.getElementById('plus-btn').addEventListener('click', function () {
    let arr = [];
    arr.push(document.querySelector('.current-operand').innerHTML);
});