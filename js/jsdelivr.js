// NOTE 将图片路径改为 jsdelivr 的 cdn 路径
var name = "FXTD-odyssey";
var repository = "FXTD-odyssey.github.io";
var link = "https://cdn.jsdelivr.net/gh/" + name + "/" + repository + "@master"
function changeImgUrl(that, src) {
    if (src.startsWith(link)) {
        // $(that).attr("data-lazy-src", link)
        $(that).attr("onerror", "this.src='" + src.replace(link,"") + "'")
    }
    if (src.endsWith(".mp4")) {
        // $(that).replaceWith($('<video class="post_bg" src="' + link + '" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>'));
        $(that).replaceWith($('<video onerror="' + src.replace(link,"") + '" class="post_bg" src="' + src + '" autoplay="autoplay" loop="loop" style="width: 100%; height:100%;"></video>'));
    }
}
function updateImage() {
    // if (document.domain != 'localhost')
    $("img").each(function () {
        src = $(this).attr("data-lazy-src")
        if (src) {
            changeImgUrl(this, src)
        } else {
            src = $(this).attr("src")
            if (src)
                changeImgUrl(this, src)
        }
    })
}


function updateVideo() {
    // if (document.domain != 'localhost')
    $("video").each(function () {
        src = $(this).attr("src")
        if (src) {
            $(this).attr("onerror", "this.src='" + src.replace(link,"") + "'")
        }
    })
}

// NOTE 识别失败自动用本地路径
updateImage()
updateVideo()


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

