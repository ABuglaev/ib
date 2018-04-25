
let hashchangeHandler = function(ev){
    switch (location.hash) {
        case '#first':
        setFirstThread();
        break;
        case '#second':
        setSecondThread();
        break;
        case '#third':
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
    document.getElementsByTagName('body')[0].style.backgroundColor = 'lightskyblue';
    document.getElementById('root').style.backgroundColor = 'lightblue';
}

let setThirdThread = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'palegreen';
    document.getElementById('root').style.backgroundColor = 'lightcyan';

}

window.addEventListener('hashchange', hashchangeHandler);
document.addEventListener('DOMContentLoaded', hashchangeHandler);