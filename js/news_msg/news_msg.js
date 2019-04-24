var mains = [];
mains.push(document.getElementById('main1'));
mains.push(document.getElementById('main2'));
mains.push(document.getElementById('main3'));

var mid = document.getElementById('mid_title');
var mid_set = ['行业资讯', '活动咨询', '问题集锦'];

var btn = document.getElementById('mid_btn');
var btn_children = btn.children;
btn_children[0].flag = true;
btn_children[0].num = 0;
btn_children[1].flag = false;
btn_children[1].num = 1;
btn_children[2].flag = false;
btn_children[2].num = 2;

btn.onclick = function(e) {
    var e_target = e.target;
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
}