 // 轮播
 var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-p1',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
// 文字效果
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });

// 价格轮播
window.onload = function() {
    var swiper = new Swiper('.swiper-container2',{
      autoplay:3000,
      speed:1000,
      autoplayDisableOnInteraction : false,
      loop:true,
      centeredSlides : true,
      slidesPerView:2,
      onInit:function(swiper){
        swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
        },
          breakpoints: { 
                  668: {
                      slidesPerView: 1,
                   }
              }
      });
    }


// header-up
  $(document).ready(function(){
   
    $(".header-up").click(function(){
      $(".navbar-right").slideUp();
    });
    $(".navbar-toggle").click(function(){
      $(".navbar-right").slideDown();
    });
  });


// 导航条
$(window).scroll(function(){
  handleTopNavAnimation();
});

$(window).load(function(){
  handleTopNavAnimation();
});

function handleTopNavAnimation() {
  var top=$(window).scrollTop();

  if(top>10){
    $('#site-nav').addClass('navbar-solid'); 
  }
  else{
    $('#site-nav').removeClass('navbar-solid'); 
  }
}


// section3业务介绍
$(document).ready(function(){
  $(".section2-box2").mouseenter(function(){
    $(".section2-box2 p").show();
    $(".section2-box2 img").animate({
      width:"60%",
      height: "100%",
      padding:"15px"
    });
    $(".section2-box2 p").animate({
      opacity:'1'
    },1000);
  });
  $(".section2-box2").mouseleave(function(){
    $(".section2-box2 p").hide();
    $(".section2-box2 img").animate({
      width:"100%",
      height: "100%",
      padding:"0px"
    });
    $(".section2-box2 p").animate({
      opacity:'0'
    });
  });

  $(".section2-box3").mouseenter(function(){
    $(".section2-box3 p").show();
    $(".section2-box3 img").animate({
      width:"100%",
      height: "65%",
      padding:"15px"
    });
    $(".section2-box3 p").animate({
      opacity:'1'
    },1000);
  });
  $(".section2-box3").mouseleave(function(){
    $(".section2-box3 p").hide();
    $(".section2-box3 img").animate({
      width:"100%",
      height: "100%",
      padding:"0px"
    });
    $(".section2-box3 p").animate({
      opacity:'0'
    });
  });

  $(".section2-box4").mouseenter(function(){
    $(".section2-box4 p").show();
    $(".section2-box4 img").animate({
      width:"100%",
      height: "65%",
      padding:"15px",
    });
    $(".section2-box4 p").animate({
      opacity:'1'
    },1000);
  });
  $(".section2-box4").mouseleave(function(){
    $(".section2-box4 p").hide();
    $(".section2-box4 img").animate({
      width:"100%",
      height: "100%",
      padding:"0px"
    });
    $(".section2-box4 p").animate({
      opacity:'0'
    });
  });

   $(".section2-box5").mouseenter(function(){
    $(".section2-box5 p").show();
    $(".section2-box5 img").animate({
      width:"60%",
      height: "100%",
      padding:"15px",
    });
    $(".section2-box5 p").animate({
      opacity:'1'
    },1000);
  });
  $(".section2-box5").mouseleave(function(){
    $(".section2-box5 p").hide();
    $(".section2-box5 img").animate({
      width:"100%",
      height: "100%",
      padding:"0px"
    });
    $(".section2-box5 p").animate({
      opacity:'0'
    });
  });

   $(".section2-box6").mouseenter(function(){
    $(".section2-box6 p").show();
    $(".section2-box6 img").animate({
      width:"100%",
      height: "60%",
      padding:"10px"
    });
    $(".section2-box6 p").animate({
      opacity:'1'
    },1000);
  });
  $(".section2-box6").mouseleave(function(){
    $(".section2-box6 p").hide();
    $(".section2-box6 img").animate({
      width:"100%",
      height: "100%",
      padding:"0px"
    });
    $(".section2-box6 p").animate({
      opacity:'0'
    });
  });
});

//section4时光轴
(function($) {
    $.fn.cntl = function( options ) {

        var settings = $.extend({
            revealbefore : 200, 
            anim_class  : 'cntl-animate', 
        }, options);

        return this.each( function() {

            var statelist = $(this).find('.cntl-state');
            var bar_fill = $(this).find('.cntl-bar-fill');
            var states = [];
            var tbf = 0;


            function setupElements( )
            {

                for (var i = 0; i < statelist.length; i++) {

                    states[i] = {};
                    states[i]['top'] = $(statelist[i]).offset().top + settings.revealbefore;
                    states[i]['elm'] = $(statelist[i]);

                };


                revealElements();

            }

            function revealElements( )
            {

                var windowtop = $(window).scrollTop();
                var windowbtm = windowtop + $(window).height();

                for( var i = 0; i < states.length; i++) {

                    if( states[i].top > windowtop && states[i].top < windowbtm )
                    {
                        if ( 
                            !states[i].elm.hasClass( settings.anim_class ) && 
                            $.isFunction( settings.onreveal ) )
                        {
                            settings.onreveal.call( this, states[i].elm );
                        }

                        states[i].elm.addClass( settings.anim_class );
                        var h = states[i].elm.position().top;

                        if( h > tbf )
                        {
                            tbf = h;
                        }
                        bar_fill.height( tbf );

                    }
                };

            }

            $(window).on('scroll',revealElements);
            $(window).on('load',setupElements)

        });
    }

}(jQuery));

//section5攻城狮介绍
$(function() {
  
  var Photo = (function() {
    
    var $list   = $('#pe-thumbs'),

      listW   = $list.width(),
      listL   = $list.offset().left,
      $elems    = $list.find('img'),
      $descrp   = $list.find('div.pe-description'),
      settings  = {
        maxScale  : 1.2,
        maxOpacity  : 0.9,
        minOpacity  : Number( $elems.css('opacity') )
      },
      init    = function() {
        settings.minScale = _getScaleVal() || 1;
        _loadImages( function() {
          
          _calcDescrp();
          _initEvents();
        
        });
      
      },
      _getScaleVal= function() {
      
        var st = window.getComputedStyle($elems.get(0), null),
          tr = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "fail...";

        if( tr !== 'none' ) {  

          var values = tr.split('(')[1].split(')')[0].split(','),
            a = values[0],
            b = values[1],
            c = values[2],
            d = values[3];

          return Math.sqrt( a * a + b * b );
        
        }
        
      },
      _calcDescrp = function() {
        
        $descrp.each( function(i) {
        
          var $el   = $(this),
            $img  = $el.prev(),
            img_w = $img.width(),
            img_h = $img.height(),
            img_n_w = settings.maxScale * img_w,
            img_n_h = settings.maxScale * img_h,
            space_t = ( img_n_h - img_h ) / 2,
            space_l = ( img_n_w - img_w ) / 2;
          
          $el.data( 'space_l', space_l ).css({
            height  : settings.maxScale * $el.height(),
            top   : -space_t,
            left  : img_n_w - space_l
          });
        
        });
      
      },
      _initEvents = function() {
      
        $elems.on('proximity.Photo', { max: 80, throttle: 10, fireOutOfBounds : true }, function(event, proximity, distance) {
          
          var $el     = $(this),
            $li     = $el.closest('li'),
            $desc   = $el.next(),
            scaleVal  = proximity * ( settings.maxScale - settings.minScale ) + settings.minScale,
            scaleExp  = 'scale(' + scaleVal + ')';
          if( scaleVal === settings.maxScale ) {
            
            $li.css( 'z-index', 1000 );
            // -200为改变反向值
            if( $desc.offset().left + $desc.width() > listL + listW + 300) {
              
              $desc.css( 'left', -$desc.width() - $desc.data( 'space_l' ) );
            
            }
            $desc.fadeIn( 800 );
            
          } 
          else {
            
            $li.css( 'z-index', 1 );
          
            $desc.stop(true,true).hide();
          
          } 
          
          $el.css({
            '-webkit-transform' : scaleExp,
            '-moz-transform'  : scaleExp,
            '-o-transform'    : scaleExp,
            '-ms-transform'   : scaleExp,
            'transform'     : scaleExp,
            'opacity'     : ( proximity * ( settings.maxOpacity - settings.minOpacity ) + settings.minOpacity )
          });

        });
      
      },
      _loadImages = function( callback ) {
        
        var loaded  = 0,
          total = $elems.length;
        
        $elems.each( function(i) {
          
          var $el = $(this);
          
          $('<img/>').load( function() {
            
            ++loaded;
            if( loaded === total )
              callback.call();
            
          }).attr( 'src', $el.attr('src') );
        
        });
      
      };
    
    return {
      init  : init
    };
  
  })();
  
  Photo.init();
  
});

// section5攻城狮介绍
(function($){
    
    var elems = $([]),
        doc = $(document);
    
    $.event.special.proximity = {
        
        defaults: {
            max: 100,
            min: 0,
            throttle: 0,
            fireOutOfBounds: 1
        },
        
        setup: function(data) {
            
            if (!elems[0])
                doc.mousemove(handle);
            
            elems = elems.add(this);
            
        },
        
        add: function(o) {
            
            var handler = o.handler,
                data = $.extend({}, $.event.special.proximity.defaults, o.data),
                lastCall = 0,
                nFiredOutOfBounds = 0,
                hoc = $(this);
            
            o.handler = function(e, pageX, pageY) {
                
                var max = data.max,
                    min = data.min,
                    throttle = data.throttle,
                    date = +new Date,
                    distance,
                    proximity,
                    inBounds,
                    fireOutOfBounds = data.fireOutOfBounds;
                
                if (throttle && lastCall + throttle > date) {
                    return;
                }
                
                lastCall = date;
                
                distance = calcDistance(hoc, pageX, pageY);
                inBounds = distance < max && distance > min;
                
                if (fireOutOfBounds || inBounds) {
                    
                    if (inBounds) {
                        nFiredOutOfBounds = 0;
                    } else {
                        
                        
                        if (typeof fireOutOfBounds === 'number' && nFiredOutOfBounds > fireOutOfBounds) {
                            return;
                        }
                        ++nFiredOutOfBounds;
                    }
                
                    proximity = e.proximity = 1 - (
                        distance < max ? distance < min ? 0 : distance / max : 1
                    );
                    
                    e.distance = distance;
                    e.pageX = pageX;
                    e.pageY = pageY;
                    e.data = data;
                    
                    return handler.call(this, e, proximity, distance);
                
                }
                
            };
            
        },
        
        teardown: function(){
            
            elems = elems.not(this);
            
            if (!elems[0])
                doc.unbind('mousemove', handle);
            
        }
        
    };
    
    function calcDistance(el, x, y) {

        
        var left, right, top, bottom, offset,
            cX, cY, dX, dY,
            distance = 0;
        
        offset = el.offset();
        left = offset.left;
        top = offset.top;
        right = left + el.outerWidth();
        bottom = top + el.outerHeight();
        
        cX = x > right ? right : x > left ? x : left;
        cY = y > bottom ? bottom : y > top ? y : top;
        
        dX = Math.abs( cX - x );
        dY = Math.abs( cY - y );
        
        return Math.sqrt( dX * dX + dY * dY );
            
    }
    
    function handle(e) {
        
        var x = e.pageX,
            y = e.pageY,
            i = -1,
            fly = $([]);
        
        while (fly[0] = elems[++i]) {
            fly.triggerHandler('proximity', [x,y]);
        }
        
    }
    
}(jQuery));
