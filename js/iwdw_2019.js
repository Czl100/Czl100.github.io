$(document).ready(function(){
    //<!--图像集-->
    var theme_title='<div class="head-img"><a href="index.html"><img src="images/headimg.png" title="IWDW2019"></a></div>\
    <div id="sub-logimg" style="width:inherit">\
    <div class="logo"><a href="index.html"><img src="images/qcs2.jpg" alt="IWDW2019" title="IWDW2019"/></a></div>\
    <div class="slider">\
        <div class="conbox">\
            <div><img src="images/1.jpg" title="Sight"/></div>\
            <div><img src="images/2.jpg" title="Sight"/></div>\
            <div><img src="images/xm.jpg" title="Sight"/></div>\
        </div>\
        <div class="switcher">\
            <a href="#" class="cur">1</a>\
            <a href="#">2</a>\
            <a href="#">3</a>\
        </div>\
    </div>\
    </div>\
    <div id="tmp-img"><img  style="width:100%; height:300px" src="images/loading.png"></div>';    
    $('.theme-title').html(theme_title);

    //导航栏
    var navbox='<div class="nav" id="smoothmenu1">\
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
                    <a  href="#"><span>List of Accepted Papers</span></a></li>\
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
    $('.navbox').html(navbox);

    //添加 Special Sessions
    var special_sessions='<div class="textbox">\
        <h2>Special Sessions</h2>\
        <hr class="line">\
        <div class="text indentation">\
            <p>Special session proposals are invited to IWDW 2019, and inquiries regarding your submission should be directed to the General Chair.\
                The proposal needs to be submitted to the General Chair (Hongxia Wang, <a>hxwang@scu.edu.cn</a>) by 1 July, 2019.</p>\
        </div>\
        </div>';

    $(".navspecial-sessions").click(function(){
        $('.clearfix').children('.selected').removeClass('selected');
        $('.clearfix').children('.navspecial-sessions').addClass('selected');
        $(".content-home").html(special_sessions);
    });

    //添加 previous Work
    var prework='<ul class="prework">\
    <li><a href="http://iwdw2018.org/">IWDW 2018</a></li>\
    <li><a href="https://iwdw2017.cs.ovgu.de/cms/front_content.php">IWDW 2017</a></li>\
    <li><a href="resource/CFP_IWDW2016.pdf">IWDW 2016</a></li>\
    <li><a href="https://www.i.h.kyoto-u.ac.jp/site/iwdw2015/">IWDW 2015</a></li>\
    <li><a href="resource/CFP_IWDW2014.pdf">IWDW 2014</a></li>\
    <li><a href="resource/CFP_IWDW2013.pdf">IWDW 2013</a></li>\
    <li><a href="resource/CFP_IWDW2012.pdf">IWDW 2012</a></li>\
    <li><a href="https://web.njit.edu/~shi/iwdw11">IWDW 2011</a></li>\
    </ul>';

    $(".navprework").click(function(){
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navprework').addClass('selected');
    $(".content-home").removeClass().addClass('content-home');
    $(".content-home").html(prework);
    });

    // list of papers 改用Vue实现
    var papers=
    '<div class="textbox papers">\
    <h2>List of Accepted Papers</h2>\
    <hr class="line">\
    <ul>\
        <li>*********</li>\
        <li>*********</li>\
        <li>*********</li>\
    </ul>\
    </div>';
    $(".navpaperlist").click(function(){
    $('.clearfix').children('.selected').removeClass('selected');
    $('.clearfix').children('.navpaperlist').addClass('selected');
    $(".content-home").removeClass().addClass('content-home');
    $(".content-home").html(papers);
    });

    // sponsor
    var sponsors='<div id="bottom">\
        <hr width="100%" noshade class="line-gray"/>\
        <div id="sponsor">\
            <ul>\
                <li><a href="https://www.springer.com/gp"><img src="images/springer.png"  title="Springer"/></a></li>\
                <li><a href="http://www.scu.edu.cn/"><img src="images/sichuan.jpg" title="Sichuan University"/></a></li>\
                <li style="display:inline-block;width:100%;height:0"></li>\
            </ul>\
        </div>\
        </div>';            
    $('.sponsors').html(sponsors);

    var footer='<p>Copyright(c) IWDW 2019 Conference committees. All rights reserved.</p>';
    $('footer').html(footer);

    //导航栏高亮
    var elid = $('body').attr('id') || 'home';
    elid = '.' + elid;
    $('.clearfix').children('.selected').removeClass('selected');    
    $('.clearfix').children(elid).addClass('selected');

    //风景照链接
    $(".slider").click(function(){
        window.location.href="sight.html";
    });
    

    //删除子菜单
    $(".clearfix li ul").remove();
});


window.onload = function(){
    // 显示log图像
    document.getElementById("sub-logimg").removeAttribute("id");
    var tmpNode = document.getElementById("tmp-img");
    tmpNode.parentNode.removeChild(tmpNode);
}


/*
    <li class="cfp">\
        <a  href="callPaper.html"><span>Call for Papers</span></a>\
        <ul class="submenu">\
            <li><a href="callPaper.html">Call for papers</a></li>\
            <li><a href="submission.html">Submission of papers</a></li>\
            <li><a href="paperRe.html">Paper Review</a></li>\
        </ul>\
    </li>\

    <li class="program">\
        <a  href="#"><span>Program</span></a>\
        <ul class="submenu">\
            <li><a href="keynote.html">Keynote speakers</a></li>\
            <li><a href="program.html">Program</a></li>\
        </ul>\
    </li>\

    <li class="location">\
        <a  href="#"><span>Local Information</span></a>\
        <ul class="submenu">\
            <li><a href="venueIn.html">Venue Information</a></li>\
            <li><a href="accormado.html">Accommodation</a></li>\
            <li><a href="transpor.html">Transportation</a></li>\
            <li><a href="sight.html">Sightseeing</a></li>\
        </ul>\
    </li> -->\
 */