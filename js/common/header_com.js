var icon = document.getElementById('icon');
var icon_children = icon.children;
var header_icon = document.getElementById('header_icon');
var header_icons = [
    "../res/image/common/contact_way/en.jpg",
    "../res/image/common/contact_way/people.jpg",
    "../res/image/common/contact_way/mailbox.jpg",
    "../res/image/common/contact_way/oa.jpg",
    "../res/image/common/contact_way/wechat.jpg",
    "../res/image/common/contact_way/sina.jpg"
];

icon_children[0].onclick = function(e) {
    header_icon.src = header_icons[0];
    header_icon.style.display = 'block';
};
icon_children[1].onclick = function(e) {
    header_icon.src = header_icons[1];
    header_icon.style.display = 'block';
};
icon_children[2].onclick = function(e) {
    header_icon.src = header_icons[2];
    header_icon.style.display = 'block';
};
icon_children[3].onclick = function(e) {
    header_icon.src = header_icons[3];
    header_icon.style.display = 'block';
};
icon_children[4].onclick = function(e) {
    header_icon.src = header_icons[4];
    header_icon.style.display = 'block';
};
icon_children[5].onclick = function(e) {
    header_icon.src = header_icons[5];
    header_icon.style.display = 'block';
};

for (var i = 0; i < icon_children.length; ++i) {
    icon_children[i].onmouseleave = function(e) {
        header_icon.style.display = 'none';
    };
}