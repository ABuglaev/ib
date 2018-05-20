//Не то чтобы это норм, когда стили в навигации. Но, мб позже сюда еще что-то добавляться будет, тогда стили перенесу
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
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, wheat, oldlace, wheat, oldlace, wheat, oldlace)';
    document.getElementById('root').style.background = 'oldlace';
}

let setSecondThread = function() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, #ddf, #aaf, #ddf, #aaf, #ddf, #aaf)';
    document.getElementById('root').style.background = '#ddf';
}

let setThirdThread = function() {
    document.getElementsByTagName('body')[0].style.background = 'linear-gradient(to bottom right, #dfd, #afa, #dfd, #afa, #dfd, #afa)';
    document.getElementById('root').style.background = '#dfd';
}

window.addEventListener('hashchange', hashchangeHandler);
document.addEventListener('DOMContentLoaded', hashchangeHandler);