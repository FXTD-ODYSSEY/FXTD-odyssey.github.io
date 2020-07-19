// NOTE 将图片路径改为 jsdelivr 的 cdn 路径
$(function () {
    var name = "FXTD-Odyssey";
    var repository = "FXTD-odyssey.github.io";
    var link;
    var src;
    $("img").each(function () {
        src = $(this).attr("src")
        if (src && (src.startsWith("/post_img") || src.startsWith("/img"))) {
            link = "//cdn.jsdelivr.net/gh/" + name + "/" + repository + src
            $(this).attr("src",link)
        } 
    })
    // if (document.domain != 'localhost') {
    //     if (document.getElementById("post")) {
    //         for (var key in document.getElementById("article-container").getElementsByTagName('img')) {
    //             if (isNaN(key)) {
    //                 continue;
    //             }
    //             var src = document.getElementById("article-container").getElementsByTagName('img')[key].src
    //             if (src.startsWith("/post_img")) {
    //                 src = "cdn.jsdelivr.net/gh/" + name + "/" + repository + src
    //             } else {
    //                 src = src.replace(document.domain, "cdn.jsdelivr.net/gh/" + name + "/" + repository)
    //             }
    //             document.getElementById("article-container").getElementsByTagName('img')[key].src = src
    //         }
    //     }
    // }
})


// Note 添加 comment 特殊样式
$(".comment").each(function () {
    let py_long_comment = $(this).text().slice(0, 6).toLowerCase()
    let c_long_comment = $(this).text().slice(0, 7).toLowerCase()
    let py_short_comment = $(this).text().slice(0, 3).toLowerCase()
    let c_short_comment = $(this).text().slice(0, 4).toLowerCase()

    if (py_long_comment == "# note" || c_long_comment == "// note") {
        $(this).css({
            "color": "#FFD700",
            "font-style": "normal"
        })
    }
    else if (py_long_comment == "# todo" || c_long_comment == "// todo") {
        $(this).css({
            "color": "#FF8C00",
            "font-style": "normal"
        })
    }
    if (py_short_comment == "# !" || c_short_comment == "// !") {
        $(this).css({
            "color": "#FF2D00",
            "font-style": "normal"
        })
    }
})
// NOTE 单个链接自动居中
$(".post-content>p").find("a").each(function () {
    $(this).parent().css('text-align', 'center')
})


// NOTE 将封面视频转换为 video 标签
$(".post_bg").each(function(){
    var src = $(this).attr('data-src')
    if (src.toString().endsWith(".mp4")){
        $(this).replaceWith($('<video class="post_bg" src="' + src + '" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>'));
    }
})