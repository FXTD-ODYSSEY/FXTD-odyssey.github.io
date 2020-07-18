classifyclick = function(classify){
    var expan = $(classify).parent().parent().next();
    var temp = expan
    if(expan.css("display") == "none"){
        $(classify).rotate({animateTo: -90})
        expan.css('height', '');
        expan.css("display", "block");
        height = expan.height();
        expan.css("height", "0px");
        expan.animate({height: height + 'px'});
        while(temp.parent().hasClass("child")){
            temp.parent().animate({height: temp.parent().height() + height + 'px'})
            temp = temp.parent()
        }
    }
    else{
        $(classify).rotate({animateTo: 0})
        temp_classify = classify;
        height = expan.height();
        expan.animate({height: '0px'}, {complete: function() {$(temp_classify).parent().parent().next().css("display", "none");}});
        while(temp.parent().hasClass("child")){
            temp.parent().animate({height: (temp.parent().height() - height) + 'px'})
            temp = temp.parent()
        }
    }
}