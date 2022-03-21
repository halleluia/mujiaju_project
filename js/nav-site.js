(function(){
    var oNavli1 = document.getElementById('navli1');
    var oDivs = oNavli1.getElementsByTagName('div');
    oDivs[0].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = '';
        }
        oDivs[0].className = 'current';
    }
    oDivs[1].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = '';
        }
        oDivs[1].className = 'current';
    }
    oDivs[2].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = '';
        }
        oDivs[2].className = 'current';
    }
    oDivs[3].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = '';
        }
        oDivs[3].className = 'current';
    }
    oDivs[4].onclick = function() {
        for(var i = 0; i < oDivs.length; i++) {
            oDivs[i].className = '';
        }
        oDivs[4].className = 'current';
    }
})();