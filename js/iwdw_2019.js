$(document).ready(function () {
  console.log('ready')
  //head 添加meta
  $('title').after('<meta name="keywords" content="IWDW2019, IWDW 2019, iwdw, 2019, meeting">');
  $('title').after('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1">');

  // 修改title
  document.title = "IWDW2019";
  var descrp = "IWDW2019, IWDW, 2019, IWDW 2019,meeting, IWDW2019 IWDW 2019 The 18th International Workshop on Digital-forensics and Watermarking (IWDW 2019), Chengdu, China";
  $('meta[name="description"]').attr("content", descrp);

  /********************************************************************/
  // 图像集
  var theme_title = '<div class="head-img"><a href="index.html"><img src="images/headimg.png" title="IWDW2019"></a></div>\
    <div id="sub-logimg" style="width:inherit">\
    <div class="logo"><a href="index.html"><img src="images/qcs2.jpg" alt="IWDW2019" title="IWDW2019"/></a></div>\
    <div class="slider">\
        <div class="conbox">\
            <div><img src="images/xm.jpg" title="Sight"/></div>\
            <div><img src="images/1.jpg" title="Sight"/></div>\
            <div><img src="images/2.jpg" title="Sight"/></div>\
        </div>\
        <div class="switcher">\
            <a href="#" class="cur">1</a>\
            <a href="#">2</a>\
            <a href="#">3</a>\
        </div>\
    </div>\
    </div>\
    <div class="sk-fading-circle" id="tmp-img" style="margin:auto; height:100px">\
        <div class="sk-circle1 sk-circle"></div>\
        <div class="sk-circle2 sk-circle"></div>\
        <div class="sk-circle3 sk-circle"></div>\
        <div class="sk-circle4 sk-circle"></div>\
        <div class="sk-circle5 sk-circle"></div>\
        <div class="sk-circle6 sk-circle"></div>\
        <div class="sk-circle7 sk-circle"></div>\
        <div class="sk-circle8 sk-circle"></div>\
        <div class="sk-circle9 sk-circle"></div>\
        <div class="sk-circle10 sk-circle"></div>\
        <div class="sk-circle11 sk-circle"></div>\
        <div class="sk-circle12 sk-circle"></div>\
    </div>';
  $('.theme-title').html(theme_title);  

  /**************** 导航栏 **************************************/
  var navbox = '<div class="nav" id="smoothmenu1">\
    <ul class="clearfix">\
        <li class="selected home"><a href="index.html"><span>Home</span></a></li>\
        <li class="committee">\
            <a  href="Committee.html"><span>Program Committee</span></a></li>\
        <li class="keynote">\
            <a  href="keynote.html"><span>Invited Speakers</span></a></li>\
        <li class="submission">\
            <a  href="callPaper.html"><span>Submission</span></a></li>\
        <li class="navspecial-sessions">\
            <a  href="#"><span>Special Sessions</span></a></li>\
        <li class="navpaperlist">\
            <a  href="paper-lists.html"><span>List of Accepted Papers</span></a></li>\
        <li class="registration">\
            <a  href="regist.html"><span>Registration</span></a></li>\
        <li class="program">\
            <a  href="program.html"><span>Technical Program</span></a></li>\
        <li class="venue">\
            <a  href="accormado.html"><span>Venue & Accommodation</span></a></li>\
        <li class="sight">\
            <a  href="sight.html"><span>Sightseeing</span></a></li>\
        <li class="navprework">\
            <a href="#"><span>Previous Workshops</span></a>\
        </li>\
    </ul>\
    </div>';
  if (document.documentElement.clientWidth > 460) {
    $('.navbox').html(navbox);
  } else {
    mobile_nav();
  }

  // 添加 Special Sessions
  var special_sessions = '<div class="textbox">\
        <h2>Special Sessions</h2>\
        <hr class="line">\
        <div class="text indentation">\
            <p>Special session proposals are invited to IWDW 2019, and inquiries regarding your submission should be directed to the General Chair.\
                The proposal needs to be submitted to the General Chair (Hongxia Wang, <a>hxwang@scu.edu.cn</a>) by 1 July, 2019.</p>\
        </div>\
        </div>';

  $(".navspecial-sessions").click(function () {
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navspecial-sessions').addClass('selected');
    $(".content-home").html(special_sessions);
  });

  // 添加 previous Work
  var prework = '<ul class="prework">\
    <li><a href="http://iwdw2018.org/">IWDW 2018</a></li>\
    <li><a href="https://iwdw2017.cs.ovgu.de/cms/front_content.php">IWDW 2017</a></li>\
    <li><a href="resource/CFP_IWDW2016.pdf">IWDW 2016</a></li>\
    <li><a href="https://www.i.h.kyoto-u.ac.jp/site/iwdw2015/">IWDW 2015</a></li>\
    <li><a href="resource/CFP_IWDW2014.pdf">IWDW 2014</a></li>\
    <li><a href="resource/CFP_IWDW2013.pdf">IWDW 2013</a></li>\
    <li><a href="resource/CFP_IWDW2012.pdf">IWDW 2012</a></li>\
    <li><a href="https://web.njit.edu/~shi/iwdw11">IWDW 2011</a></li>\
    </ul>';

  $(".navprework").click(function () {
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navprework').addClass('selected');
    $(".content-home").removeClass().addClass('content-home');
    $(".content-home").html(prework);
  });

  // sponsor
  var sponsors = '<ul>\
                <li><a href="http://www.scu.edu.cn/"><img src="images/sichuan.jpg" title="Sichuan University"/></a></li>\
                <li><a href="http://www.cie-info.org.cn/"><img src="images/mesccie.png" title="Multimedia Security Expert Committee Chinese Institute of Electronics"/></a></li>\
                <li><a href="http://www.csig.org.cn/"><img src="images/csig.png"   title="CSIG Special Committee of Digital Media Forensics and Security"/></a></li>\
                <li id="springerlogo"><a href="https://www.springer.com/gp"><img src="images/springer.png"  title="Springer"/></a></li>\
                <li style="display:inline-block;width:100%;height:0"></li>\
            </ul>';
  $('.sponsors').html(sponsors);

  var footer = '<p>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</p>';
  $('footer').html(footer);

  // 导航栏高亮
  var elid = $('body').attr('id') || 'home';
  elid = '.' + elid;
  document.querySelector('.nav .selected').classList.remove('selected');
  document.querySelector('.nav ' + elid).classList.add('selected');

  // 风景照链接
  $(".slider").click(function () {
    window.location.href = "sight.html";
  });  

  /***************** 移除加载动画 **********************************/    
  document.querySelector('.logo img').onload = function () {
    document.getElementById("sub-logimg").setAttribute("style", "display:block;");
    var tmpNode = document.getElementById("tmp-img");
    tmpNode.parentNode.removeChild(tmpNode);
    resizeEvent();
  }

  // 函数节流
  function throttle(fn) {
    fn._timer = false;
    return function (e) {
      if (!fn._timer) {
        fn._timer = setTimeout(function () {
          fn();
          fn._timer = false;
        }, 500);
      }
    }
  }
  function resizeEvent() {
    var htmlWidth = $("div.head-img").width();
    $("div#sub-logimg").width(htmlWidth).height(0.3 * htmlWidth);
    $("div.logo").width(0.7 * htmlWidth).height(0.3 * htmlWidth);
    $("div.slider").width(0.3 * htmlWidth).height(0.3 * htmlWidth);
  }
  window.onresize = throttle(resizeEvent);
});

// 移动端导航栏
function mobile_nav() {
  console.log('mobile');
  /* 修改logo图像为 min */
  document.querySelector('.logo img').src = 'images/qcs2-min.jpg';
  var sideImgs = document.querySelectorAll('.conbox img');
  sideImgs[0].src = "images/xm-min.jpg";
  sideImgs[1].src = "images/1-min.jpg";
  sideImgs[2].src = "images/2-min.jpg";


  /* 导航栏修改 */
  $('div#main, div.body-wrapper').css("width", "100%");
  $("div.navbox").remove();
  $('div.switcher').remove();

  var navbox = '<div class="navbox" id="smoothmenu1">\
      <table class="nav clearfix">\
        <tr>\
          <td class="selected home"><a href="index.html"><span>Home</span></a></td>\
          <td class="committee"><a href="Committee.html"><span>Program Committee</span></a></td>\
          <td class="keynote"><a href="keynote.html"><span>Invited Speakers</span></a></td>\
          <td class="submission"><a href="callPaper.html"><span>Submission</span></a></td>\
        </tr>\
        <tr>\
          <td class="navspecial-sessions"><a href="#"><span>Special Sessions</span></a></td>\
          <td class="navpaperlist"><a href="paper-lists.html"><span>List of Accepted Papers</span></a></td>\
          <td class="registration"><a href="regist.html"><span>Registration</span></a></td>\
          <td class="program"><a href="program.html"><span>Technical Program</span></a></td>\
        </tr>\
        <tr>\
          <td class="venue"><a href="accormado.html"><span>Venue & Accommodation</span></a></td>\
          <td class="sight"><a href="sight.html"><span>Sightseeing</span></a></td>\
          <td class="navprework" colspan="2"><a href="#"><span>Previous Workshops</span></a></td>\
        </tr>\
      </table>\
    </div>';

  $("div#table").before(navbox);

  /* 设置样式 */
  $('.content-home').css({
    "padding": "0 5px"
  });
  document.querySelector('.conbox').firstElementChild.setAttribute('style', 'z-index: 1');

  $('div.theme-title').css("margin-bottom", "0px");
  $("div.navbox").css({
    "display": "block",
    "margin": "0 0 1em 0",
    "padding": "0",
    "width": "100%",
    "height": "auto"
  });
  $("table.nav").css({
    "width": "100%",
    "border-collapse": "collapse",
    "background-color": "rgb(100, 131, 216)"
  });
  $("table.nav td").css({
    "border-right": "1px solid black",
    "border-bottom": "1px solid black",
    "text-align": "center"
  });
  $(".nav a").css({
    "text-decoration": "none"
  });
  $('.nav span').css({
    "color": "#FFF",
    "font-weight": "lighter",
    "font-size": "12px"
  });
}