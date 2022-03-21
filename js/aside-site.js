(function(){
    var oAsideli2 = document.getElementById('asideli2');
    var oAsideli1 = document.getElementById('asideli1');
    var oImgs = oAsideli1.getElementsByTagName('img');
    var oLi2s = oAsideli2.getElementsByTagName('li');

    oAsideli2.onclick = function(e) {
        if(e.target.tagName.toLowerCase() == 'li') {
            var n = Number(e.target.getAttribute('data-n'));
            // 排他操作，去除其他li项的className
            for(var j = 0; j < oLi2s.length; j++) {
                oLi2s[j].className = '';
            }
            e.target.className += ' current';
            // 利用for循环将对应的图片opacity变为1，其他的图片opacity变为0
            for(var i = 0; i < oImgs.length; i++) {
                if(i == n) {
                    oImgs[i].style.opacity = '1';
                }
                else {
                    oImgs[i].style.opacity = '0';
                }
            }
        }
    }
})();