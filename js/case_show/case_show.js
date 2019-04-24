var mains = [];
mains.push(document.getElementById('main1'));
mains.push(document.getElementById('main2'));
mains.push(document.getElementById('main3'));
mains.push(document.getElementById('main4'));
var mid = document.getElementById('mid_title');

var mid_set = ['网站建设', '微信系统', 'APP', '分类'];
var btn = document.getElementById('mid_btn');
var btn_children = btn.children;
btn_children[0].flag = true;
btn_children[0].num = 0;
btn_children[1].flag = false;
btn_children[1].num = 1;
btn_children[2].flag = false;
btn_children[2].num = 2;
btn_children[3].flag = false;
btn_children[3].num = 3;

btn.onclick = function(e) {
    var e_target = e.target;
    // 中心按钮切换
    if (e_target.flag === false) {
        for (var i = 0; i < btn_children.length; ++i) {
            if (btn_children[i].flag === true) {
                btn_children[i].flag = false;
                btn_children[i].style.color = 'black';
                btn_children[i].style.backgroundColor = 'rgb(230, 230, 230, 0.7)';
                mains[i].style.display = 'none';
            }
        }
        e_target.flag = true;
        e_target.style.color = 'white';
        e_target.style.backgroundColor = 'rgb(0, 172, 248)';
        mid.innerHTML = mid_set[e_target.num];
        mains[e_target.num].style.display = 'block';
    }
} // mid_btn 中心按钮

// main1_pages 页数
var main1_case_down_pages = [];
main1_case_down_pages.push(document.getElementById("classic_case_down_page1"));
main1_case_down_pages.push(document.getElementById("classic_case_down_page2"));
main1_case_down_pages.push(document.getElementById("classic_case_down_page3"));
main1_case_down_pages[0].flag = true;
main1_case_down_pages[1].flag = false;
main1_case_down_pages[2].flag = false;
// 主页内容选中状态的切换
for (var i = 0; i < main1_case_down_pages.length; ++i) {
    main1_case_down_pages[i].children[0].flag = true;
}
for (var i = 0; i < main1_case_down_pages.length; ++i) {
    var temp = main1_case_down_pages[i].children;
    for (var j = 1; j < temp.length; ++j) {
        temp[j].flag = false;
    }
}
for (var i = 0; i < main1_case_down_pages.length; ++i) {
    var temp = main1_case_down_pages[i].children;
    for (var j = 0; j < temp.length; ++j) {
        temp[j].onclick = function(e) {
            if (this.flag === false) {
                for (var m = 0; m < main1_case_down_pages.length; ++m) {
                    var tmp = main1_case_down_pages[m].children;
                    for (var n = 0; n < tmp.length; ++n) {
                        if (tmp[n].flag === true) {
                            tmp[n].flag = false;
                            tmp[n].style.boxShadow = "none";
                        }
                    }
                }
                this.flag = true;
                this.style.boxShadow = "0 0 10px rgb(128, 128, 128, 0.5)";
            }
        }
    }
}
// main1_pages 页数

// main1_page_menu 页菜单
var main1_page_menu = document.getElementById('page_menu');
var main1_page_num = document.getElementsByClassName('page_menu_num');
main1_page_num[0].flag = true;
main1_page_num[1].flag = false;
main1_page_num[2].flag = false;
window.current_page = 0;    // 开始的当前页数
main1_page_menu.onclick = function(e) {
    // 点击数字跳转页面
    var target_num = parseInt(e.target.innerHTML) - 1;
    if (target_num >= 0 && target_num < 3) {
        if (main1_page_num[target_num].flag === false) {
            for (var i = 0; i < main1_page_num.length; ++i) {
                if (main1_page_num[i].flag === true) {
                    main1_page_num[i].flag = false;
                    main1_page_num[i].style.color = 'black';
                    main1_page_num[i].style.backgroundColor = 'transparent';
                }
            }
            main1_page_num[target_num].flag = true;
            main1_page_num[target_num].style.color = 'white';
            main1_page_num[target_num].style.backgroundColor = 'rgb(0, 172, 248)';
            
            // 主页内容切换
            window.current_page = target_num; // 当前页数
            for (var j = 0; j < main1_case_down_pages.length; ++j) {
                if (main1_case_down_pages[j].flag === true) {
                    main1_case_down_pages[j].flag = false;
                    main1_case_down_pages[j].style.display = 'none';        
                }
            }
            main1_case_down_pages[target_num].flag = true;
            main1_case_down_pages[target_num].style.display = 'block';
            // end
        }
    }
}

// main1_arrow_big 左右箭头翻页
var main1_black_arrow_left = document.getElementById('black_arrow_left');
var main1_black_arrow_right = document.getElementById('black_arrow_right');
main1_black_arrow_left.onclick = function(e) {
    if (window.current_page !== 0) {
        window.current_page--;
        // 主页内容切换
        for (var i = 0; i < main1_case_down_pages.length; ++i) {
            if (main1_case_down_pages[i].flag === true) {
                main1_case_down_pages[i].flag = false;
                main1_case_down_pages[i].style.display = 'none';
            }
        }
        main1_case_down_pages[window.current_page].flag = true;
        main1_case_down_pages[window.current_page].style.display = 'block';
        // end
        // 菜单页数切换
        for (var i = 0; i < main1_page_num.length; ++i) {
            if (main1_page_num[i].flag === true) {
                main1_page_num[i].flag = false;
                main1_page_num[i].style.color = 'black';
                main1_page_num[i].style.backgroundColor = 'transparent';
            }
        }
        main1_page_num[window.current_page].flag = true;
        main1_page_num[window.current_page].style.color = 'white';
        main1_page_num[window.current_page].style.backgroundColor = 'rgb(0, 172, 248)';
        // end
    }
}
main1_black_arrow_right.onclick = function(e) {
    if (window.current_page !== 2) {
        window.current_page++;
        // 主页内容切换
        for (var i = 0; i < main1_case_down_pages.length; ++i) {
            if (main1_case_down_pages[i].flag === true) {
                main1_case_down_pages[i].flag = false;
                main1_case_down_pages[i].style.display = 'none';
            }
        }
        main1_case_down_pages[window.current_page].flag = true;
        main1_case_down_pages[window.current_page].style.display = 'block';
        // end
        // 菜单页数切换
        for (var i = 0; i < main1_page_num.length; ++i) {
            if (main1_page_num[i].flag === true) {
                main1_page_num[i].flag = false;
                main1_page_num[i].style.color = 'black';
                main1_page_num[i].style.backgroundColor = 'transparent';
            }
        }
        main1_page_num[window.current_page].flag = true;
        main1_page_num[window.current_page].style.color = 'white';
        main1_page_num[window.current_page].style.backgroundColor = 'rgb(0, 172, 248)';
        // end
    }
}
// main1_arrow_big

// main1_arrow_small 左右箭头翻页
var main1_small_arrow_left = document.getElementById('small_arrow_left');
var main1_small_arrow_right = document.getElementById('small_arrow_right');
main1_small_arrow_left.onclick = function(e) {
    if (window.current_page !== 0) {
        window.current_page--;
        // 主页内容切换
        for (var i = 0; i < main1_case_down_pages.length; ++i) {
            if (main1_case_down_pages[i].flag === true) {
                main1_case_down_pages[i].flag = false;
                main1_case_down_pages[i].style.display = 'none';
            }
        }
        main1_case_down_pages[window.current_page].flag = true;
        main1_case_down_pages[window.current_page].style.display = 'block';
        // end
        // 菜单页数切换
        for (var i = 0; i < main1_page_num.length; ++i) {
            if (main1_page_num[i].flag === true) {
                main1_page_num[i].flag = false;
                main1_page_num[i].style.color = 'black';
                main1_page_num[i].style.backgroundColor = 'transparent';
            }
        }
        main1_page_num[window.current_page].flag = true;
        main1_page_num[window.current_page].style.color = 'white';
        main1_page_num[window.current_page].style.backgroundColor = 'rgb(0, 172, 248)';
        // end
    }
}
main1_small_arrow_right.onclick = function(e) {
    if (window.current_page !== 2) {
        window.current_page++;
        // 主页内容切换
        for (var i = 0; i < main1_case_down_pages.length; ++i) {
            if (main1_case_down_pages[i].flag === true) {
                main1_case_down_pages[i].flag = false;
                main1_case_down_pages[i].style.display = 'none';
            }
        }
        main1_case_down_pages[window.current_page].flag = true;
        main1_case_down_pages[window.current_page].style.display = 'block';
        // end
        // 菜单页数切换
        for (var i = 0; i < main1_page_num.length; ++i) {
            if (main1_page_num[i].flag === true) {
                main1_page_num[i].flag = false;
                main1_page_num[i].style.color = 'black';
                main1_page_num[i].style.backgroundColor = 'transparent';
            }
        }
        main1_page_num[window.current_page].flag = true;
        main1_page_num[window.current_page].style.color = 'white';
        main1_page_num[window.current_page].style.backgroundColor = 'rgb(0, 172, 248)';
        // end
    }
}
// main1_arrow_small