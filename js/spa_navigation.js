
if (!location.hash) location.hash = '#thread1';

let hashchangeHandler = function(ev){
    switch (location.hash) {
        case '#thread1':
        setFirstThread();
        break;
        case '#thread2':
        setSecondThread();
        break;
        case '#thread3':
        setThirdThread();
        break;

        default:
        setFirstThread();
        break;
    }
}

let setFirstThread = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'wheat';
    document.getElementById('root').style.backgroundColor = 'oldlace';
}

let setSecondThread = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#aaf';
    document.getElementById('root').style.backgroundColor = '#ccf';
}

let setThirdThread = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#afa';
    document.getElementById('root').style.backgroundColor = '#cfc';
}

window.addEventListener('hashchange', hashchangeHandler);
document.addEventListener('DOMContentLoaded', hashchangeHandler);