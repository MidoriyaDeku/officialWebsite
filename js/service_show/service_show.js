var mains = [];
mains.push(document.getElementById('main1'));
mains.push(document.getElementById('main2'));
mains.push(document.getElementById('main3'));
mains.push(document.getElementById('main4'));

var mid = document.getElementById('mid_title');
var mid_set = ['互动体验设备', 'H5/APP', '创意方案', '营销推广'];

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

var main3_case = document.getElementById("main3_down_block");
var main3_case_children = main3_case.children;
main3_case_children[0].flag = true;
main3_case_children[1].flag = false;
main3_case_children[2].flag = false;
main3_case_children[0].onclick = function(e) {
    if (this.flag === false) {
        this.style.boxShadow = "0 0 10px rgb(128, 128, 128, 0.5)";
        this.flag = true;
        main3_case_children[1].flag = false;
        main3_case_children[1].style.boxShadow = "none";
        main3_case_children[2].flag = false;
        main3_case_children[2].style.boxShadow = "none";
    }
}
main3_case_children[1].onclick = function(e) {
    if (this.flag === false) {
        this.style.boxShadow = "0 0 10px rgb(128, 128, 128, 0.5)";
        this.flag = true;
        main3_case_children[0].flag = false;
        main3_case_children[0].style.boxShadow = "none";
        main3_case_children[2].flag = false;
        main3_case_children[2].style.boxShadow = "none";
    }
}
main3_case_children[2].onclick = function(e) {
    if (this.flag === false) {
        this.style.boxShadow = "0 0 10px rgb(128, 128, 128, 0.5)";
        this.flag = true;
        main3_case_children[0].flag = false;
        main3_case_children[0].style.boxShadow = "none";
        main3_case_children[1].flag = false;
        main3_case_children[1].style.boxShadow = "none";
    }
}