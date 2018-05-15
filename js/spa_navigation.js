
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
//Стили в скрипте навигации? А что...
let setFirstThread = function() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, wheat, oldlace, wheat, oldlace, wheat, oldlace)';
    document.getElementById('root').style.background = 'oldlace';
}

let setSecondThread = function() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, #ccf, #aaf, #ccf, #aaf, #ccf, #aaf)';
    document.getElementById('root').style.background = '#ddf';
}

let setThirdThread = function() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, #cfc, #afa, #cfc, #afa, #cfc, #afa)';
    document.getElementById('root').style.background = '#dfd';
}

window.addEventListener('hashchange', hashchangeHandler);
document.addEventListener('DOMContentLoaded', hashchangeHandler);