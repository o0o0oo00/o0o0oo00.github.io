<!--动态标题-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/TEP.ico");
        document.title = ' ヽ(`З’)ﾉ！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' (●ﾟωﾟ●) ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});