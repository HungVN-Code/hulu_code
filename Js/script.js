let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let element_list = document.getElementsByClassName("element_list")[0];

let tabLive_s1 = document.getElementsByClassName("tabLive_s1")[0];
let tabLive_s2 = document.getElementsByClassName("tabLive_s2")[0];
let tabLive_s3 = document.getElementsByClassName("tabLive_s3")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

const toggle = document.getElementById('toggle');
let lightHeRight_item_btn = document.getElementsByClassName("lightHeRight_item_btn")[0];
let navLiCente_right_list_btn = document.getElementsByClassName("navLiCente_right_list_btn")[0];

let planLightQueiz_px = document.getElementsByClassName("planLightQueiz_px")[0];
let planLightQueiz_navbar = document.getElementsByClassName("planLightQueiz_navbar")[0];
let icon_Queiz = document.getElementsByClassName("icon_Queiz")[0];
let LightQueiz_text1 = document.getElementsByClassName("LightQueiz_text1")[0];
let LightQueiz_text2 = document.getElementsByClassName("LightQueiz_text2")[0];

let modal = document.getElementsByClassName("modal")[0];
let close_modal_form = document.getElementsByClassName("close_modal_form")[0];
let login = document.getElementsByClassName("login")[0];

// chuyển tab
for(let i=0;i<tabsPane.length;i++){
    tabsPane[i].addEventListener("click",function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`;

        tabLive_s1.onclick = function(){
            element_list.style.backgroundImage = "url('./Img/element_1.jpg')";
        };
        tabLive_s2.onclick = function(){
            element_list.style.backgroundImage = "url('./Img/element_2.jpg')";
        };
        tabLive_s3.onclick = function(){
            element_list.style.backgroundImage = "url('./Img/element_3.jpg')";
        };
    });
}

// ẩn hiện navLiCente_right_list
toggle.onclick = function(){
    toggle.classList.toggle('active');
    lightHeRight_item_btn.classList.toggle('item_btn');
    navLiCente_right_list_btn.classList.toggle('item_btn');
};

// ẩn hiện 
planLightQueiz_navbar.onclick = function(){
    planLightQueiz_px.classList.toggle('queizPx_btn');
    icon_Queiz.classList.toggle('queizPx_btn');
    LightQueiz_text1.classList.toggle('queizPx_btn');
    LightQueiz_text2.classList.toggle('queizPx_btn');
};

// ẩn hiện modal
login.onclick = function(){
    modal.classList.toggle('login_btn');
};
close_modal_form.onclick = function(){
    modal.classList.toggle('login_btn');
};
