$(function () {

  
  var content =$(".content");
  var cList = $(".contentList");
  var cLiNodes=$(".contentList>li");
  var head = $(".header");
  var nList =$(".navs li");
  var pList = $(".sideNav li");
  var firstImg = $("#wrap .content .contentList firstLi img");
  var secondLi1=$(".secondLi .second .left .photoList li:nth-of-type(1)");
  var secondLi2=$(".secondLi .second .left .photoList li:nth-of-type(2)");
  var secondLi3=$(".secondLi .second .left .photoList li:nth-of-type(3)");
  var secondRight=$(".secondLi .second .right");
  var thirdLi2=$(".thirdLi .third .left .photoList li:nth-of-type(2)");
  var thirdLi3=$(".thirdLi .third .left .photoList li:nth-of-type(3)");
  var thirdRight=$(".thirdLi .third .right ");
  var fourLi1=$(".fourthLi .four .left .photoList li:nth-of-type(1)");
  var fourLi2=$(".fourthLi .four .left .photoList li:nth-of-type(2)");
  var fourLi3=$(".fourthLi .four .left .photoList li:nth-of-type(3)");
  var fourRight=$(".fourthLi .four .right ");
  var fiveLi1=$(".fifthLi .five .left .photoList li:nth-of-type(1)");
  var fiveLi2=$(".fifthLi .five .left .photoList li:nth-of-type(2)");
  var fiveLi3=$(".fifthLi .five .left .photoList li:nth-of-type(3)");
  var fiveRight=$(".fifthLi .five .right ");

  //窗口重置
  window.onresize = function (){
    contentBind();
  }

  // 定义元素的出场动画
  var animations = [
    {
      in: function () {
        setTimeout(function () {
          $(firstImg).css({
            opacity: 1
          })
        }, 1000)
      },
      out: function () {
        setTimeout(function () {
          $(firstImg).css({
            opacity: 0
          })
        }, 1000)
      }
    },
    {
      in: function () {
        setTimeout(function () {
          $(secondLi1).css({
            transform : "translateY(0px)"
          })
        }, 800);
        setTimeout(function () {
          $(secondLi2).css({
            transform : "translateY(0px)"
          })
        }, 1000);
        setTimeout(function () {
          $(secondLi3).css({
            transform : "translateY(0px)"
          })
          $(secondRight).css({
            transform : "translateY(0px)"
          })
        }, 1200);
      },
      out: function () {
        setTimeout(function () {
          $(secondLi1).css({
            transform : "translateY(800px)"
          })
        }, 800);
        setTimeout(function () {
          $(secondLi2).css({
            transform : "translateY(800px)"
          })
        }, 800);
        setTimeout(function () {
          $(secondLi3).css({
            transform : "translateY(800px)"
          })
          $(secondRight).css({
            transform : "translateY(-800px)"
          })
        }, 800);
      }
    },
    {
      in: function () {
        setTimeout(function () {
          $(thirdLi2).css({transform : "translateX(0px)"})
          $(thirdLi3).css({transform : "translateX(0px)"})
          $(thirdRight).css({transform : "translateX(0px)"})
        }, 1000);
      },
      out: function () {
        setTimeout(function () {
          $(thirdLi2).css({transform : "translateX(-279px)"})
          $(thirdLi3).css({transform : "translateX(-558px)"})
          $(thirdRight).css({transform : "translateX(300px)"})
        }, 1000);
      }
    },
    {
      in: function () {
        $(fourLi1).css({display : "initial"});  // 规定应该从父元素继承 display 属性的值
        $(fourLi2).css({display : "initial"});
        $(fourLi3).css({display : "initial"});
        $(fourLi1).css({animation:"move1 2s 0.8s "});
        $(fourLi2).css({animation:"move2 2s 0.8s "});
        $(fourLi3).css({animation:"move3 2s 0.8s "});
        setTimeout(function () {
          $(fourLi1).css({transform : "translate(0px,0px)"})
          $(fourLi2).css({
            transform : "translate(0px,0px)"
          })
          $(fourLi3).css({
            transform : "translate(0px,0px)"
          })
          $(fourRight).css({
            opacity:1
          })
        }, 2000);
      },
      out: function () {
        $(fourLi1).css({display : "none"});
        $(fourLi2).css({display : "none"});
        $(fourLi3).css({display : "none"});
        $(fourLi1).css({transform : "translate(330px,-1000px)"});
        $(fourLi2).css({transform : "translate(0px,-1000px)"});
        $(fourLi3).css({transform : "translate(-330px,-1000px)"});
        $(fourRight).css({opacity:0});
      }
    },
    {
      in: function () {
        setTimeout(function () {
          $(fiveLi1).css({
            transform : "translate3d(0,0,0) rotateX(0deg)"
          })
        }, 800);
        setTimeout(function () {
          $(fiveLi2).css({
            transform : "translate3d(0,0,0) rotateX(0deg)"
          })
        }, 1000);
        setTimeout(function () {
          $(fiveLi3).css({
            transform : "translate3d(0,0,0) rotateX(0deg)"
          })
          $(fiveRight).css({
            opacity: 1
          })
        }, 1200);
      },
      out: function () {
        setTimeout(function () {
          $(fiveLi1).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"})
        }, 800);
        setTimeout(function () {
          $(fiveLi2).css({
            transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"
          })
        }, 1000);
        setTimeout(function () {
          $(fiveLi3).css({
            transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"
          })
          $(fiveRight).css({
            opacity: 0
          })
        }, 1200);
      }
    },
  ]
  // 循环遍历animations数组，依次调用out方法
  $.each(animations, function (i) {
    animations[i]["out"]()
  })


  var $list = $('.contentList');
  var PAGE_HEIGHT = 587;
  var HEIGHT = document.documentElement.clientHeight - $("#wrap .header").outerHeight();
  console.log(HEIGHT);
  // 小圆点集合
  var $points = $('.sideNav>li');
  // 头部导航点
  var $navsAll = $('#navs .navs>li');
  // 初始化index
  var nowIndex = 0
  var img_count = 5;
  var preIndex = 0;
  var timer = 0


  // 判断滚轮滚动方向
  var flag = 0;  // 定义滑动标识， 1上滑  -1下滑
  document.onmousewheel = mouseWheelFn;
  document.addEventListener && document.addEventListener('DOMMouseScroll',mouseWheelFn);
  // 定义鼠标滚轮事件函数
  function mouseWheelFn(event){
    event = event || window.event;
    if(event.wheelDelta){
      flag = event.wheelDelta>0 ? 1 : -1 ;
    }else if(event.detail){
      flag = event.detail<0 ? 1 : -1;
    };

    clearTimeout(timer);
    timer = setTimeout(function () {

      if((nowIndex == 0&& flag > 0)||(nowIndex == img_count - 1 && flag < 0)){
        // 如果 nowIndex = 0 并且滚轮向上  或者 nowIndex = img_count - 1 并且滚轮向下  都return
        return;
      }

      if(flag > 0){
        if(nowIndex > 0){
          nowIndex--;
        }
        nextPage (nowIndex)
      }else if(flag < 0){
        if(nowIndex < img_count - 1){
          nowIndex++;
        }
        nextPage (nowIndex)
      }
      preIndex = nowIndex;    // preIndex 为 前一个索引
    },200)
    // 取消浏览器的默认行为
    event.preventDefault && event.preventDefault();
    return false;
  };


  //  点击圆点图标切换到对应的页
  $points.click(function () {
    var targetIndex = $(this).index();
    nextPage(targetIndex);
  });
  $navsAll.click(function () {
    var targetIndex = $(this).index();
    nextPage(targetIndex);
  });

  //   为什么要重置页面呢？
  contentBind()
  function contentBind() {
    // 设置内容区的高度   视口高度 - 头部的高度
    $("#wrap .content").height(PAGE_HEIGHT + "px") ;

    // 循环遍历设置每个li的高度
    $.each( cLiNodes, function(i){
      $(cLiNodes[i]).height(PAGE_HEIGHT + "px");
    });
  }

  headBind();
  function headBind(){
    $.each(nList, function(i){       //  头部导航处理
      nList[i].index = i;			// 保存当前的i
      $(nList[i]).on("click",function(){
        preIndex = now;
        move(this.index);
        now = this.index;     // 更新now
      })
    });
    $.each(pList, function(i){   // 右侧导航处理
      pList[i].index = i;      // 保存当前的i
      $(pList[i]).on('click', function(){
        preIndex = now;
        move(this.index);
        now = this.index;   // 更新now
      })
    });
  }
  
  
  

  function nextPage (nowIndex) {
    // 获取目的地的top值
    var newTop =  - nowIndex * PAGE_HEIGHT ;
    $list.css('top', newTop);

    //  同步导航和小圆点
    updatePointAndNavsAll(nowIndex);
  }

  function updatePointAndNavsAll(nowIndex) {
    targetIndex = nowIndex;
    $points.eq(targetIndex).addClass('active');
    $points.eq(preIndex).removeClass('active');
    $navsAll.eq(targetIndex).addClass('active');
    $navsAll.eq(preIndex).removeClass('active');

    // 调用对应的进入动画
    if(animations[nowIndex] && animations[nowIndex]["in"]){
      animations[nowIndex]["in"]();
    }
    // 前一个调用对应的退出动画
    if(animations[preIndex] && animations[preIndex]["in"]){
      animations[preIndex]["out"]();
    }

    preIndex = targetIndex
  }
});
