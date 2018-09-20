<!--动态标题-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = ' ヽ(`З’)ﾉ！';
        clearTimeout(titleTime);
    }
    else {
        document.title = ' (●ﾟωﾟ●) ';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});