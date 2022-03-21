(function(){
    var oLeftbtnjr = document.getElementById('leftbtnjr');
    var oLeftimgs = oLeftbtnjr.getElementsByTagName('img');
    var oRightbtnjr = document.getElementById('rightbtnjr');
    var oRightimgs = oRightbtnjr.getElementsByTagName('img');

    oLeftbtnjr.onmouseenter = function() {
        oLeftimgs[0].style.display = 'none';
        oLeftimgs[1].style.display = 'block';
    }
    oLeftbtnjr.onmouseleave = function() {
        oLeftimgs[0].style.display = 'block';
        oLeftimgs[1].style.display = 'none';
    }
    oRightbtnjr.onmouseenter = function() {
        oRightimgs[0].style.display = 'none';
        oRightimgs[1].style.display = 'block';
    }
    oRightbtnjr.onmouseleave = function() {
        oRightimgs[0].style.display = 'block';
        oRightimgs[1].style.display = 'none';
    }

    //制作轮播图特效
    var oArticleli = document.getElementById('articleli');
    //idx表示当前在第几张图，0代表在第一张图
    var idx = 0;
    //函数节流
    var lock = true;
    oRightbtnjr.onclick = function() {
        if(!lock) return;
        //关锁
        lock = false;
        if(idx <= 5) {
            idx++;
            oArticleli.style.left = -369*idx + 'px';
            console.log(idx);
        }
        setTimeout(function(){
            lock = true;
        }, 500);
    }
    oLeftbtnjr.onclick = function() {
        if(!lock) return;
        //关锁
        lock = false;
        if(idx > 0 && idx <= 6) {
            idx--;
            oArticleli.style.left = -369*idx + 'px';
            console.log(idx);
        }
        setTimeout(function(){
            lock = true;
        }, 500);
    }
})();