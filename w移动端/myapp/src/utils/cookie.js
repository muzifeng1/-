
//写cookies
function setCookie(name, value, expires) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expires * 1000);

    if(expires) { // 是否需要过期时间
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }else{ // 不需要过期时间
        document.cookie = name + "=" + escape(value);
    }
    
}

//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
//删除cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export default {
    setCookie,
    getCookie,
    delCookie
}




