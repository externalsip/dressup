let canvas = document.getElementById("canvas");
let wrapper = document.getElementById("wrapper");
let menu = document.getElementById("menu");
let menu_buttons = menu.querySelectorAll("input");
let category_wrapper = document.getElementById("category_wrapper");
let bangs_button = document.getElementById("bangs_button");
let body = document.querySelector("body");

let iconsArr = ["media/icons/hat_icon.png", "media/icons/hair_icon.png", "media/icons/bangs_icon.png", "media/icons/eyes_icon.png", "media/icons/mouth_icon.png", 
"media/icons/shirt_icon.png", "media/icons/face_acc_icon.png", "media/icons/facial_hair_icon.png"];
let bangsArr = ["media/bangs/anime_hair_vents.png", "media/bangs/bangs_split.png", "media/bangs/hairstyle2.png", "media/bangs/hime_bangs.png", "media/bangs/side_bangs.png", "media/bangs/twintails.png"];


    for(let i = 0; i < iconsArr.length; i++){
        const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("category"+i));
            input.setAttribute("name", "category_select");
            input.setAttribute("class", "radio");
            const label = document.createElement("label");
            label.setAttribute("for", ("category"+i));
            label.setAttribute("class", "category_label");
            const img = document.createElement("img");
            img.setAttribute("src", "" + iconsArr[i] + "")
            img.setAttribute("class", "icon");
            label.appendChild(img);
            category_wrapper.appendChild(input);
            category_wrapper.appendChild(label);
    }
category2.addEventListener("click", function(){
    console.log("bangs");
    console.log(menu_buttons.length);
    if(menu.classList.contains("bangs")){
    }
    else{
        menu.classList.add("bangs");
        for(let x = 0; x < menu_buttons.length; x++){
            menu.removeChild("input")[x];
            menu.removeChild("label")[x];
        }
        for(let i = 0; i < bangsArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "bangs");
            input.setAttribute("class", "radio");
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + bangsArr[i] + "")
            img.setAttribute("class", "hair_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
});
