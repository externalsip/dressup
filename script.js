let canvas = document.getElementById("canvas");
let wrapper = document.getElementById("wrapper");
let menu = document.getElementById("menu");
let menu_buttons = menu.querySelectorAll("input");
let category_wrapper = document.getElementById("category_wrapper");
let body = document.querySelector("body");
let hat = document.querySelector(".hat_sprite");

let iconsArr = ["media/icons/body_icon.png", "media/icons/hat_icon.png", "media/icons/hair_icon.png", "media/icons/bangs_icon.png", "media/icons/eyes_icon.png", "media/icons/mouth_icon.png", 
"media/icons/shirt_icon.png", "media/icons/face_acc_icon.png", "media/icons/facial_hair_icon.png"];
let bodyArr = ["media/body/head.png", "media/body/body.png"];
let hatsArr = ["media/hats/aviator_goggles.png", "media/hats/beret_military.png", "media/hats/beret_military_var2.png", "media/hats/bow.png", "media/hats/bow_double.png", "media/hats/brimmed_hat.png",
"media/hats/cap_front.png", "media/hats/cap_backwards.png", "media/hats/french_beret.png", "media/hats/headphones.png", "media/hats/headphones_cat.png", "media/hats/mobcap.png", "media/hats/peaked_cap_black.png",
"media/hats/peaked_cap_white.png", "media/hats/plumbob.png", "media/hats/top_hat.png", "media/hats/top_hat_var2.png"];
let hairArr = ["media/hair/hair_long_var1.png", "media/hair/longest_hair.png", "media/hair/scruffy.png", "media/hair/sorta_short_hair.png"];
let bangsArr = ["media/bangs/anime_hair_vents.png", "media/bangs/bangs_split.png", "media/bangs/hairstyle2.png", "media/bangs/hime_bangs.png", "media/bangs/side_bangs.png", "media/bangs/twintails.png"];
let eyesArr = ["media/eyes/eyes_chill.png", "media/eyes/eyes_closed.png", "media/eyes/eyes_evil.png", "media/eyes/eyes_psycho.png", "media/eyes/hmmm.png", "media/eyes/sus.png", "media/eyes/wink.png", 
"media/eyes/X.png"];
let mouthArr = ["media/mouth/mouth_happy.png", "media/mouth/mouth_cat.png", "media/mouth/mouth_minecraftskin.png", "media/mouth/mouth_morbintime.png", "media/mouth/mouth_neco.png", "media/mouth/mouth_neutral.png", "media/mouth/mouth_sad.png",
"media/mouth/mouth_sick.png", "media/mouth/mouth_smile.png", "media/mouth/mouth_stolfer.png"];
let clothesArr = ["media/clothes/tshirt.png", "media/clothes/dress_shirt.png", "media/clothes/suit.png", "media/clothes/waistcoat.png", "media/clothes/bra.png", "media/clothes/spaghettistrap.png", "media/clothes/tubetoplol.png", "media/clothes/wifebeater.png"];
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
    console.log("body");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 0){
        menu.setAttribute("value", 0);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < bodyArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "body");
            input.setAttribute("class", "radio selection");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + bodyArr[i] + "");
            img.setAttribute("class", "hat_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        } 
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});   
category1.addEventListener("click", function(){
    console.log("hats");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 1){
        menu.setAttribute("value", 1);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < hatsArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "hats");
            input.setAttribute("class", "radio selection");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + hatsArr[i] + "");
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
    console.log("hair");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 2){
        menu.setAttribute("value", 2);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < hairArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "hair");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + hairArr[i] + "")
            img.setAttribute("class", "hair_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

category3.addEventListener("click", function(){
    console.log("bangs");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 3){
        menu.setAttribute("value", 3);
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
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
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

category4.addEventListener("click", function(){
    console.log("eyes");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 4){
        menu.setAttribute("value", 4);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < eyesArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "eyes");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + eyesArr[i] + "")
            img.setAttribute("class", "eyes_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

category5.addEventListener("click", function(){
    console.log("mouth");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 5){
        menu.setAttribute("value", 5);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < mouthArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "mouth");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + mouthArr[i] + "")
            img.setAttribute("class", "mouth_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

category6.addEventListener("click", function(){
    console.log("clothes");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 6){
        menu.setAttribute("value", 6);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < clothesArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "clothes");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + clothesArr[i] + "")
            img.setAttribute("class", "clothes_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});


function display(val){
    console.log(val);
    console.log("hi");
    console.log(menu.getAttribute("value"));
    switch(Number(menu.getAttribute("value"))){
        default:
            console.log("bug");
            break;
        case 0:
            if(val == 0){
                document.getElementById("head_sprite").src = ("" + bodyArr[val] + "");
            }
            else{
                document.getElementById("body_sprite").src = ("" + bodyArr[val] + "");
            }

            break;
        case 1:
            document.getElementById("hat_sprite").src = ("" + hatsArr[val] + "");
            break;
        case 2:
            document.getElementById("hair_sprite").src = ("" + hairArr[val] + "");
            break;
        case 3:
            document.getElementById("bangs_sprite").src = ("" + bangsArr[val] + "");
            break;
        case 4:
            document.getElementById("eyes_sprite").src = ("" + eyesArr[val] + "");
            break;
        case 5:
            document.getElementById("mouth_sprite").src = ("" + mouthArr[val] + "");
            break;
        case 6:
            document.getElementById("clothes_sprite").src = ("" + clothesArr[val] + "");
            break;
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