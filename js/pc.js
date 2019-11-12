define([], function(){

    var Tips = (function(){

        var $tipBox = $(".tips-box");

        return {
            show: function(){
                $tipBox.removeClass("hide");
            },
            hide: function(){
                $tipBox.addClass("hide");
            },
            init: function(){
                
            }
        }
    })();

    var resetTags = function(){
        var tags = $(".tagcloud a");
        tags.css({"font-size": "12px"});
        for(var i=0,len=tags.length; i<len; i++){
            var num = tags.eq(i).html().length % 5 +1;
            tags[i].className = "";
            tags.eq(i).addClass("color"+num);
        }
    }

    var slide = function(idx){
        
        let transformCheck = true;//位移执行判断

        
        //修正跳转链接的位移
        if(idx == 3){//点击归档触发
            window.location.href = window.location.protocol + "//" + window.location.host + "/archives";
            transformCheck = false;//禁止位移
        }else if(idx == 2){//点击分类触发
            window.location.href = window.location.protocol + "//" + window.location.host + "/tags";
            transformCheck = false;//禁止位移
        }else if(idx == 5){//点击搜索触发
            transformCheck = false;//禁止位移
        }
        
        else if(idx == 4){
            idx = 2;//友情链接位移到对应的位置
        }

        
        // 修复IE10+切换无效的bug
        var $wrap = $(".switch-wrap"),
          transform = [
              '-webkit-transform: translate(-' + idx * 100 + '%, 0);',
              '-moz-transform: translate(-' + idx * 100 + '%, 0);',
              '-o-transform: translate(-' + idx * 100 + '%, 0);',
              '-ms-transform: translate(-' + idx * 100 + '%, 0);',
              'transform: translate(-' + idx * 100 + '%, 0);'
          ];
        //$wrap.css({
        //    "transform": "translate(-"+idx*100+"%, 0 )"
        //});
        if(transformCheck){
            $(".icon-wrap").addClass("hide");
            $(".icon-wrap").eq(idx).removeClass("hide");
            $wrap[0].style.cssText = transform.join('');
        }
        
        
    }

    var bind = function(){
        var switchBtn = $("#myonoffswitch");
        var tagcloud = $(".second-part");
        var navDiv = $(".first-part");
        switchBtn.click(function(){
            if(switchBtn.hasClass("clicked")){
                switchBtn.removeClass("clicked");
                tagcloud.removeClass("turn-left");
                navDiv.removeClass("turn-left");
            }else{
                switchBtn.addClass("clicked");
                tagcloud.addClass("turn-left");
                navDiv.addClass("turn-left");
                resetTags();
            }
        });

        var timeout;
        var isEnterBtn = false;
        var isEnterTips = false;

        $(".icon").bind("mouseenter", function(){
            isEnterBtn = true;
            Tips.show();
        }).bind("mouseleave", function(){
            isEnterBtn = false;
            setTimeout(function(){
                if(!isEnterTips){
                    Tips.hide();
                }
            }, 100);
        });

        $(".tips-box").bind("mouseenter", function(){
            isEnterTips = true;
            Tips.show();
        }).bind("mouseleave", function(){
            isEnterTips = false;
            setTimeout(function(){
                if(!isEnterBtn){
                    Tips.hide();
                }
            }, 100);
        });

        $(".tips-inner li").bind("click", function(){
            var idx = $(this).index();
            slide(idx);
            Tips.hide();
        });
    }

    

    return {
        init: function(){
            resetTags();
            bind();
            Tips.init();
        }
    }
});