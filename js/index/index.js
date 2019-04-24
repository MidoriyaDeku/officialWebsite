var menu_img = document.getElementById('menu_img');
var menu_list = document.getElementById('menu_list');

menu_img.onmouseover = function(e) {
    menu_list.style.display = 'block';
}
menu_img.onmouseleave = function(e) {
    menu_list.style.display = 'none';
}
menu_list.onmouseover = function(e) {
    menu_list.style.display = 'block';
}
menu_list.onmouseleave = function(e) {
    menu_list.style.display = 'none';
}

// main1_pages 页数
var main_case_down_pages = [];
main_case_down_pages.push(document.getElementById("classic_case_down_page1"));
main_case_down_pages.push(document.getElementById("classic_case_down_page2"));
main_case_down_pages.push(document.getElementById("classic_case_down_page3"));
main_case_down_pages[0].flag = true;
main_case_down_pages[1].flag = false;
main_case_down_pages[2].flag = false;
window.current_page = 0;    // 当前页数

// main1_arrow_big 左右箭头翻页
var main1_black_arrow_left = document.getElementById('black_arrow_left');
var main1_black_arrow_right = document.getElementById('black_arrow_right');
main1_black_arrow_left.onclick = function(e) {
    if (window.current_page !== 0) {
        window.current_page--;
        // 主页内容切换
        for (var i = 0; i < main_case_down_pages.length; ++i) {
            if (main_case_down_pages[i].flag === true) {
                main_case_down_pages[i].flag = false;
                main_case_down_pages[i].style.display = 'none';
            }
        }
        main_case_down_pages[window.current_page].flag = true;
        main_case_down_pages[window.current_page].style.display = 'block';
        // end
    }
    console.log("left: ", window.current_page);
}
main1_black_arrow_right.onclick = function(e) {
    if (window.current_page !== 2) {
        window.current_page++;
        // 主页内容切换
        for (var i = 0; i < main_case_down_pages.length; ++i) {
            if (main_case_down_pages[i].flag === true) {
                main_case_down_pages[i].flag = false;
                main_case_down_pages[i].style.display = 'none';
            }
        }
        main_case_down_pages[window.current_page].flag = true;
        main_case_down_pages[window.current_page].style.display = 'block';
        // end
    }
    console.log("right: ", window.current_page);
}
// main1_arrow_big

// 首页banner 左右切图
var mark = false;   // 标记轮播是否到底了
var banner_img = document.getElementById('banner_img');
var banners = [
    "../res/image/index/banner/banner.jpg",
    "../res/image/index/banner/banner1.jpg",
    "../res/image/index/banner/banner2.jpg",
    "../res/image/index/banner/banner3.jpg"
];
var banner_left_arrow = document.getElementById('banner_left_arrow');
var banner_right_arrow = document.getElementById('banner_right_arrow');
window.banner_cur_page = 0;
banner_left_arrow.onclick = function(e) {
    mark = true;
    if (window.banner_cur_page !== 0) {
        window.banner_cur_page--;
        banner_img.style.animation = 'fade_out 1s';
        setTimeout(function() {
            banner_img.src = banners[window.banner_cur_page];
            banner_img.style.animation = 'fade_in 1s';
        }, 500);
    }
}
banner_right_arrow.onclick = function(e) {
    mark = false;
    if (window.banner_cur_page !== 3) {
        window.banner_cur_page++;
        banner_img.style.animation = 'fade_out 1s';
        setTimeout(function() {
            banner_img.src = banners[window.banner_cur_page];
            banner_img.style.animation = 'fade_in 1s';
        }, 500);
    }
}
// end
// 首页banner轮播
setInterval(function() {
    if (window.banner_cur_page !== 3 && mark === false) {
        window.banner_cur_page++;
        banner_img.style.animation = 'fade_out 1s';
        setTimeout(function() {
            banner_img.src = banners[window.banner_cur_page];
            banner_img.style.animation = 'fade_in 1s';
        }, 500);
    }
    else {
        mark = true;
        if (window.banner_cur_page !== 0) {
            window.banner_cur_page--;
            banner_img.style.animation = 'fade_out 1s';
            setTimeout(function() {
                banner_img.src = banners[window.banner_cur_page];
                banner_img.style.animation = 'fade_in 1s';
            }, 500);
            if (window.banner_cur_page === 0) {
                mark = false;
            }
        }
    }
}, 4000);
// end

// 页面内的关键字搜索高光显示
var container = document.querySelector(".container"); // 需要搜索标记的类
var instance = new Mark(container); // 将这个类标记起来作为待会搜索的对象
var search_input = document.getElementById('search_input');
var search_btn = document.getElementById('search_btn');
search_input.mark = false;
search_btn.mark = false;

search_btn.onclick = function(e) {  // 点击搜索标记内容
    instance.unmark();
    instance.mark(search_input.value);
}
search_input.onkeyup = function(e) {    // 在输入框输入内容会实时标记
    instance.unmark();
    instance.mark(search_input.value);
}

var html = document.getElementsByTagName('html')[0];
html.onclick = function(e) {    // 点击搜索区外取消标记
    if (e.target.mark !== search_input.mark || e.target.mark !== search_btn.mark) {
        instance.unmark();
    }
}
// end

// fadeIn 弹窗效果
var popups = document.getElementsByClassName('popups')[0];
var fixed_right = document.getElementById('fixed_right');
var fixed_right_children = fixed_right.children;
fixed_right_children[1].onclick = function(e) {
    popups.style.width = window.visualViewport.width + 'px';
    popups.style.height = window.visualViewport.height + 'px';
    popups.style.top = window.scrollY + 'px';
    popups.style.display = 'block';
    popups.style.animation = 'popups_fade_in 0.5s';
    setTimeout(function() {
        popups.style.opacity = 0.5;
    }, 500);
}
fixed_right_children[2].onclick = function(e) {
    popups.style.width = window.visualViewport.width + 'px';
    popups.style.height = window.visualViewport.height + 'px';
    popups.style.top = window.scrollY + 'px';
    popups.style.display = 'block';
    popups.style.animation = 'popups_fade_in 0.5s';
    setTimeout(function() {
        popups.style.opacity = 0.5;
    }, 500);
}
popups.onclick = function(e) {
    popups.style.display = 'none';
}
// end