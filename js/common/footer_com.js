var bottom_3_bottom = document.getElementById('bottom_3_bottom');
var bottom_3_bottom_children = bottom_3_bottom.children;
var footer_icon = document.getElementById('footer_icon');
var footer_icons = [
    "../res/image/common/contact_way/wechat.jpg",
    "../res/image/common/contact_way/sina.jpg",
    "../res/image/common/contact_way/qq.jpg"
];

bottom_3_bottom_children[1].onclick = function(e) {
    footer_icon.src = footer_icons[0];
    footer_icon.style.display = 'block';
    footer_icon.style.top = e.view.scrollY + 'px';
};
bottom_3_bottom_children[2].onclick = function(e) {
    footer_icon.src = footer_icons[1];
    footer_icon.style.display = 'block';
    footer_icon.style.top = e.view.scrollY + 'px';
};
bottom_3_bottom_children[3].onclick = function(e) {
    footer_icon.src = footer_icons[2];
    footer_icon.style.display = 'block';
    footer_icon.style.top = e.view.scrollY + 'px';
};

for (var i = 1; i < bottom_3_bottom_children.length; ++i) {
    bottom_3_bottom_children[i].onmouseleave = function(e) {
        footer_icon.style.display = 'none';
    };
}