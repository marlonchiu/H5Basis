window.onload = function () {
    var ad = document.getElementById("ad");
    var list = document.getElementById("list");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var button = document.getElementById("button").getElementsByTagName("span");
    var change = false;
    var index = 1;
    var setTime = 2500;
    var timer;

    prev.onclick = function () {
        if (change) {
            return;
        }
        if (index == 1) {
            index = button.length;
        } else {
            index -= 1;
        }
        changeImg(520);
        showButton();
    };
    next.onclick = function () {
        if (change){
            return;
        }
        if (index ==button.length){
            index = 1;
        }else {
            index += 1;
        }
        changeImg(-520);
        showButton();
    };
    for(var i = 0;i < button.length;i++) {
        button[i].onclick = function () {
            if(change){
                return;
            }
            if(this.className == "on"){
                return;
            }
            var myIndex = parseInt(this.getAttribute("index"));
            var offset = -520 * (myIndex - index);
            changeImg(offset);
            index = myIndex;
            showButton();
        };
    }
    ad.onmouseover = stop;
    ad.onmouseout = play;
    play();

    //函数
    function changeImg(e) {
        if(e == 0){
            return;
        }
        change = true;
        var left = parseInt(list.style.left) + e ;
        var time = 300;//总位移时间
        var interval = 30;//位移时间间隔
        var speed = e/(time/interval);
        function go() {
            if ((speed<0 && parseInt(list.style.left)>left) || (speed>0 && parseInt(list.style.left)<left)){
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go,interval);
            }
            else {
                list.style.left = left + "px";
                if(parseInt(list.style.left) > -520){
                    list.style.left = -2600 + "px";
                }
                if(parseInt(list.style.left) < -2600){
                    list.style.left = -520 + "px";
                }
                change = false;
            }
        }
        go();
    }
    function showButton() {
        for(var i = 0; i<button.length; i++){
            if (button[i].className == "on"){
                button[i].className = "";
            }
            button[index-1].className = "on";
        }
    }
    function play() {
        timer = setInterval(
            function () {
                next.onclick();
                // play();
            },setTime)
    }
    function stop() {
        clearInterval(timer);
    }
};