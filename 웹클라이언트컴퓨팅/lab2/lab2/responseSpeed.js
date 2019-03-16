
function callWebService(callback) {
    let second = 0;

    let id = setInterval(function () {

// (실습2-2)  이 위치에 채워 넣을 것

    }, 1000);

    let stoptime = Math.floor(Math.random() * 6) + 2;

    setTimeout(function () {
        clearInterval(id); callback(stoptime);
    }, stoptime * 1000);

}

let evaluateSpeed = (stoptime) =>  {

// (실습2-2)  이 위치에 채워 넣을 것

};

callWebService(evaluateSpeed);
