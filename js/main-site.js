(function() {
    var oLeftbtn = document.getElementById('leftbtn');
    var oLeftimgs = oLeftbtn.getElementsByTagName('img');
    var oRightbtn = document.getElementById('rightbtn');
    var oRightimgs = oRightbtn.getElementsByTagName('img');

    oLeftbtn.onmouseover = function() {
        oLeftimgs[0].style.display = 'none';
        oLeftimgs[1].style.display = 'block';
    }
    oLeftbtn.onmouseleave = function() {
        oLeftimgs[0].style.display = 'block';
        oLeftimgs[1].style.display = 'none';
    }
    oRightbtn.onmouseover = function() {
        oRightimgs[0].style.display = 'none';
        oRightimgs[1].style.display = 'block';
    }
    oRightbtn.onmouseleave = function() {
        oRightimgs[0].style.display = 'block';
        oRightimgs[1].style.display = 'none';
    }

    // 制作轮播图特效
    var oMainli1 = document.getElementById('mainli1');
    //idx代表当前处于第几张图，0代表第一张图
    var idx = 0;
    //函数节流锁
    lock = true;
    oRightbtn.onclick = function() {
        if(!lock) return;
        //关锁
        lock = false;
        if(idx < 5) {
            idx++;
            oMainli1.style.left = -221*idx + 'px';
            console.log(idx);
        }
        setTimeout(function(){
            lock = true;
        }, 500);
    }
    oLeftbtn.onclick = function() {
        if(!lock) return;
        //关锁
        lock = false;
        if(idx <= 5 && idx > 0) {
            idx--;
            oMainli1.style.left = -221*idx + 'px';
            console.log(idx);
        }
        setTimeout(function(){
            lock = true;
        }, 500);
    }

    var oMainli2 = document.getElementById('mainli2');
    var oLis = oMainli2.getElementsByTagName('li');
    var oDivs = oLis[2].getElementsByTagName('div');
    oDivs[0].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = oDivs[i].getAttribute('data-t');
        }
        oDivs[0].className += ' current';
    }
    oDivs[1].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = oDivs[i].getAttribute('data-t');
        }
        oDivs[1].className += ' current';
    }
    oDivs[2].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = oDivs[i].getAttribute('data-t');
        }
        oDivs[2].className += ' current';
    }
})();