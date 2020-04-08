require([], function (){

    require(["https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.1/clipboard.min.js"],function(clipboard){
        window['Clipboard']=clipboard;
        var clipboard = new Clipboard('.copy-path');

        //复制代码按钮
        if($(".highlight").length > 0) {//判断代码块是否存在
            $(".highlight").each(function(index){//遍历代码块
                var copybtn = new Clipboard('#copyBtn'+index);
            });
        }

    });
    require(["https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.1/velocity.js"],function(velocity){
        window['Velocity']=velocity;

    });
    require(["../js/jquery.event.move.js","../js/jquery.twentytwenty.js"])



    var isMobileInit = false;
    var loadMobile = function(){
        require([yiliaConfig.rootUrl + 'js/mobile.js'], function(mobile){
            mobile.init();
            isMobileInit = true;
        });
    }
    var isPCInit = false;
    var loadPC = function(){
        require([yiliaConfig.rootUrl + 'js/pc.js'], function(pc){
            pc.init();
            isPCInit = true;
        });
    }

    var browser={
        versions:function(){
        var u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1, //是否为iPad
            webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
            };
        }()
    }

    $(window).bind("resize", function(){
        if(isMobileInit && isPCInit){
            $(window).unbind("resize");
            return;
        }
        var w = $(window).width();
        if(w >= 700){
            loadPC();
        }else{
            loadMobile();
        }
    });

    if(browser.versions.mobile === true || $(window).width() < 700){
        loadMobile();
    }else{
        loadPC();
    }

    //是否使用fancybox
    if(yiliaConfig.fancybox === true){
        require([yiliaConfig.rootUrl + 'fancybox/jquery.fancybox.js'], function(pc){
            var isFancy = $(".isFancy");
            if(isFancy.length != 0){
                var imgArr = $(".article-inner img");
                for(var i=0,len=imgArr.length;i<len;i++){
                    var src = imgArr.eq(i).attr("src");
                    var title = imgArr.eq(i).attr("alt");
                    imgArr.eq(i).replaceWith("<a data-fancybox-href='"+src+"' title='"+title+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+src+"' title='"+title+"'></a>");
                }
                $(".article-inner .fancy-ctn").fancybox({type: 'image',});
            }
        });

    }
    //是否开启动画
    if(yiliaConfig.animate === true){

        require([yiliaConfig.rootUrl + 'js/jquery.lazyload.js'], function(){
            //avatar
            $(".js-avatar").attr("src", $(".js-avatar").attr("lazy-src"));
            $(".js-avatar")[0].onload = function(){
                $(".js-avatar").addClass("show");
            }
        });

      if(yiliaConfig.isHome === true) {
        // 滚动条监听使用scrollreveal.js
        // https://github.com/jlmakes/scrollreveal.js
        // 使用cdn[//cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.0.5/scrollreveal.js]
        require([
          '//cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.0.5/scrollreveal.js'
        ], function (ScrollReveal) {
          // 更多animation:
          // http://daneden.github.io/animate.css/
          var animationNames = [
            "pulse", "fadeIn","fadeInRight", "flipInX", "lightSpeedIn","rotateInUpLeft", "slideInUp","zoomIn",
            ],
            len = animationNames.length,
            randomAnimationName = animationNames[Math.ceil(Math.random() * len) - 1];

          // ie9 不支持css3 keyframe动画, safari不支持requestAnimationFrame, 不使用随机动画，切回原来的动画
          if (!window.requestAnimationFrame) {
              $('.body-wrap > article').css({opacity: 1});

              if (navigator.userAgent.match(/Safari/i)) {
                  function showArticle(){
                      $(".article").each(function(){
                          if( $(this).offset().top <= $(window).scrollTop()+$(window).height() && !($(this).hasClass('show')) ) {
                              $(this).removeClass("hidden").addClass("show");
                              $(this).addClass("is-hiddened");
                          }else{
                              if(!$(this).hasClass("is-hiddened")){
                                  $(this).addClass("hidden");
                              }
                          }
                      });
                  }
                  $(window).on('scroll', function(){
                      showArticle();
                  });
                  showArticle();
              }
              return;
          }
          // document.body有些浏览器不支持监听scroll，所以使用默认的document.documentElement
          ScrollReveal({
            duration: 0,
            afterReveal: function (domEl) {
              // safari不支持requestAnimationFrame不支持document.documentElement的onscroll所以这里不会执行
              // 初始状态设为opacity: 0, 动画效果更平滑一些(由于脚本加载是异步，页面元素渲染后在执行动画，感觉像是延时)
              $(domEl).addClass('animated ' + randomAnimationName).css({opacity: 1});
            }
          }).reveal('.body-wrap > article');

        });
      } else {
        $('.body-wrap > article').css({opacity: 1});
      }

    }

    //是否新窗口打开链接
    if(yiliaConfig.open_in_new == true){
        $(".article a[href]").attr("target", "_blank")
    }
    $(".archive-article-title").attr("target", "_blank");


    // Note 添加 comment 特殊样式
    $(".comment").each(function(){
        let py_long_comment = $(this).text().slice(0,6).toLowerCase()
        let c_long_comment = $(this).text().slice(0,7).toLowerCase()
        let py_short_comment = $(this).text().slice(0,3).toLowerCase()
        let c_short_comment = $(this).text().slice(0,4).toLowerCase()
        
        if (py_long_comment == "# note" || c_long_comment == "// note"){
            $(this).css({
                "color":"#FFD700",
                "font-style": "normal"
            })
        }
        else if (py_long_comment == "# todo" || c_long_comment == "// todo"){
            $(this).css({
                "color":"#FF8C00",
                "font-style": "normal"
            })
        }
        if (py_short_comment == "# !" || c_short_comment == "// !"){
            $(this).css({
                "color":"#FF2D00",
                "font-style": "normal"
            })
        }
    })


});



