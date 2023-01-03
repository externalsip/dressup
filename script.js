let canvas = document.getElementById("canvas");
let wrapper = document.getElementById("wrapper");
let menu = document.getElementById("menu");
let menu_buttons = menu.querySelectorAll("input");
let category_wrapper = document.getElementById("category_wrapper");
let body = document.querySelector("body");
let hat = document.querySelector(".hat_sprite");

let iconsArr = ["media/icons/hat_icon.png", "media/icons/hair_icon.png", "media/icons/bangs_icon.png", "media/icons/eyes_icon.png", "media/icons/mouth_icon.png", 
"media/icons/shirt_icon.png", "media/icons/face_acc_icon.png", "media/icons/facial_hair_icon.png"];
let hatsArr = ["media/hats/aviator_goggles.png", "media/hats/beret_military.png", "media/hats/beret_military_var2.png", "media/hats/bow.png", "media/hats/bow_double.png", "media/hats/brimmed_hat.png",
"media/hats/cap_front.png", "media/hats/cap_backwards.png", "media/hats/french_beret.png", "media/hats/headphones.png", "media/hats/headphones_cat.png", "media/hats/mobcap.png", "media/hats/peaked_cap_black.png",
"media/hats/peaked_cap_white.png", "media/hats/plumbob.png", "media/hats/top_hat.png", "media/hats/top_hat_var2.png"];
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
category0.addEventListener("click", function(){
    console.log("hats");
    console.log(menu_buttons.length);
    if(menu.classList.contains("hats")){
        console.log(menu_buttons);
    }
    else{
        menu.className = "";
        menu.classList.add("hats");
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < hatsArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "bangs");
            input.setAttribute("class", "radio selection");
            input.setAttribute("onclick", "display()");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + hatsArr[i] + "")
            img.setAttribute("class", "hat_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
        
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

category2.addEventListener("click", function(){
    console.log("bangs");
    console.log(menu_buttons.length);
    if(menu.classList.contains("bangs")){
    }
    else{
        menu.className = "";
        menu.classList.add("bangs");
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < bangsArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "bangs");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display()");
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
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

function display(){
    let val = this.value;
    console.log(val);
    console.log("hi");
    if(menu.classList.contains("hats")){
    }
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}
    
function printToFile(div) {
    console.log(div);
    html2canvas(div).then(canvas => {
        console.log("rendered");
        var myImage = canvas.toDataURL("image/png");
        //create your own dialog with warning before saving file
        //beforeDownloadReadMessage();
        //Then download file
        downloadURI("data:" + myImage, "yourImage.png");
    })
};
    
document.querySelector("#upload").addEventListener("click", function(){
    printToFile(document.querySelector("#canvas"));
});