let canvas = document.getElementById("canvas");
let wrapper = document.getElementById("wrapper");
let menu = document.getElementById("menu");
let menu_buttons = menu.querySelectorAll("input");
let category_wrapper = document.getElementById("category_wrapper");
let body = document.querySelector("body");
let hue = document.getElementById("slider_1");
let saturation = document.getElementById("slider_2");
let brightness = document.getElementById("slider_3");

//Declaring the variables that will be used for checks and loops on elements of the HTML.

let iconsArr = ["media/icons/body_icon.png", "media/icons/hat_icon.png", "media/icons/hair_icon.png", "media/icons/bangs_icon.png", "media/icons/eyes_icon.png", "media/icons/mouth_icon.png", 
"media/icons/shirt_icon.png", "media/icons/face_acc_icon.png", "media/icons/facial_hair_icon.png"];

let bodyArr = ["media/body/head.png", "media/body/body.png"];

let bodyOutlineArr = ["", "media/outlines/body/outline_body_main.png"];

let hatsArr = ["media/hats/aviator_goggles.png", "media/hats/beret_military.png", "media/hats/beret_military_var2.png", "media/hats/bow.png", "media/hats/bow_double.png", "media/hats/brimmed_hat.png",
"media/hats/cap_front.png", "media/hats/cap_backwards.png", "media/hats/french_beret.png", "media/hats/headphones.png", "media/hats/headphones_cat.png", "media/hats/mobcap.png", "media/hats/peaked_cap_black.png",
"media/hats/peaked_cap_white.png", "media/hats/plumbob.png", "media/hats/top_hat.png", "media/hats/top_hat_var2.png"];

let hatsOutlineArr = ["media/outlines/hat/aviator_goggles_outline.png", "media/outlines/hat/beret_military_outline.png", "media/outlines/hat/beret_military_outline_var2.png", "media/outlines/hat/bow_outline.png",
"media/outlines/hat/bow_double_outline.png", "", "media/outlines/hat/cap_outline.png", "media/outlines/hat/cap_outline.png", "media/outlines/hat/french_beret_outline.png", "media/outlines/hat/headphones_outline.png",
"media/outlines/hat/headphones_cat_outline.png", "media/outlines/hat/mobcap_outline.png", "media/outlines/hat/peaked_cap_outline.png", "media/outlines/hat/peaked_cap_outline.png", "media/outlines/hat/plumbob_outline.png",
"media/outlines/hat/top_hat_outline.png", "media/outlines/hat/top_hat_var2_outline.png"];

let hairArr = ["media/hair/hair_long_var1.png", "media/hair/longest_hair.png", "media/hair/scruffy.png", "media/hair/sorta_short_hair.png"];

let hairOutlineArr = ["media/outlines/hair/outline_hair_long.png", "media/outlines/hair/longest_hair_outline.png", "media/outlines/hair/scruffy_outline.png", "media/outlines/hair/sorta_short_outline.png"];

let bangsArr = ["media/bangs/anime_hair_vents.png", "media/bangs/bangs_split.png", "media/bangs/hairstyle2.png", "media/bangs/hime_bangs.png", "media/bangs/side_bangs.png", "media/bangs/twintails.png"];

let bangsOutlineArr = ["media/outlines/bangs/vent_outline.png", "media/outlines/bangs/outline_bangs_split.png", "media/outlines/bangs/hairstyle2.png", "media/outlines/bangs/hime_bangs_outline.png", "media/outlines/bangs/side_bangs_outline.png", "media/outlines/bangs/twintails_outline.png"];

let eyesArr = ["media/eyes/eyes_chill.png", "media/eyes/eyes_closed.png", "media/eyes/eyes_evil.png", "media/eyes/eyes_psycho.png", "media/eyes/hmmm.png", "media/eyes/sus.png", "media/eyes/wink.png", 
"media/eyes/X.png"];

let mouthArr = ["media/mouth/mouth_happy.png", "media/mouth/mouth_cat.png", "media/mouth/mouth_minecraftskin.png", "media/mouth/mouth_morbintime.png", "media/mouth/mouth_neco.png", "media/mouth/mouth_neutral.png", "media/mouth/mouth_sad.png",
"media/mouth/mouth_sick.png", "media/mouth/mouth_smile.png", "media/mouth/mouth_stolfer.png"];

let clothesArr = ["media/clothes/tshirt.png", "media/clothes/dress_shirt.png", "media/clothes/suit.png", "media/clothes/waistcoat.png", "media/clothes/bra.png", "media/clothes/spaghettistrap.png", "media/clothes/tubetoplol.png", "media/clothes/wifebeater.png"];

let faceAccArr = ["media/face_acc/aviators_black.png", "media/face_acc/aviators_empty.png", "media/face_acc/blindfold.png", "media/face_acc/browline.png", "media/face_acc/cancer.png", "media/face_acc/facemask.png", "media/face_acc/rectangle_glasses.png", "media/face_acc/round.png",
 "media/face_acc/shutter_shades.png", "media/face_acc/uohhh.png"];

let faceHairArr = ["media/facial_hair/bri_ish.png", "media/facial_hair/fu_manchu.png", "media/facial_hair/mustache.png", "media/facial_hair/walrus.png"];

//Arrays composed of links to images in the media folder, those will be used to loop on length to display buttons on the UI, 
//but also to get to links towards the images to get them on both the buttons and the character creator itself.

//Loop to create dynamically the buttons to switch between categories of character pieces.

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
    };

//The next loops are made for all buttons of each categories, to create the buttons dynamically when the category button assigned to it
//while also removing the buttons from the last category that was clicked, the loop creates a button, label and image for everything contained in the
//array for the category. Additionally, it gives a number as value for the div that has the menu id in the HTML.

category0.addEventListener("click", function(){
    console.log("body");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 0){
        localStorageRegister(menu.getAttribute("value"));
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
            img.setAttribute("class", "body_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        };
    };
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});   

category1.addEventListener("click", function(){
    console.log("hats");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 1){
        localStorageRegister(menu.getAttribute("value"));
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
        localStorageRegister(menu.getAttribute("value"));
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
        localStorageRegister(menu.getAttribute("value"));
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
        localStorageRegister(menu.getAttribute("value"));
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
        localStorageRegister(menu.getAttribute("value"));
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
        localStorageRegister(menu.getAttribute("value"));
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

category7.addEventListener("click", function(){
    console.log("face_accessory");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 7){
        localStorageRegister(menu.getAttribute("value"));
        menu.setAttribute("value", 7);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < faceAccArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "face_acc");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + faceAccArr[i] + "")
            img.setAttribute("class", "face_acc_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});

category8.addEventListener("click", function(){
    console.log("face_accessory");
    console.log(menu_buttons.length);
    if(menu.getAttribute("value") != 8){
        localStorageRegister(menu.getAttribute("value"));
        menu.setAttribute("value", 8);
        while(menu.firstChild){
            menu.removeChild(menu.firstChild);
        }
        for(let i = 0; i < faceHairArr.length; i++){
            console.log("hi");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", ("button"+i));
            input.setAttribute("name", "face_acc");
            input.setAttribute("class", "radio");
            input.setAttribute("onclick", "display(this.value)");
            input.setAttribute("value", i);
            const label = document.createElement("label");
            label.setAttribute("for", ("button"+i));
            label.setAttribute("class", "style_button");
            const img = document.createElement("img");
            img.setAttribute("src", "" + faceHairArr[i] + "")
            img.setAttribute("class", "hair_icon selection_icon");
            label.appendChild(img);
            menu.appendChild(input);
            menu.appendChild(label);
        }
    }
    menu_buttons = menu.querySelectorAll("input");
    return menu_buttons;
});


//When an object button is clicked it triggers a function that takes as parameter the button's value
//it then checks for the value currently on the menu, and runs a switch on it, the values being linked to each categories.
//it then looks for the appropriate img tag in the HTML page and gives it the item in the array linked to the value of the button that was clicked as an src attribute.
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
                canvas.classList.add("head");
                localStorage.setItem("category0hue_2", hue.value)
                document.getElementById("head_sprite").src = ("" + bodyArr[val] + "");
            }
            else{                
                canvas.classList.remove("head");
                document.getElementById("body_sprite").src = ("" + bodyArr[val] + "");
                document.getElementById("body_outline").src = ("" + bodyOutlineArr[val] + "");
            }
            break;
        case 1:
            document.getElementById("hat_sprite").src = ("" + hatsArr[val] + "");
            if(hatsOutlineArr[val] != ""){
                document.getElementById("hat_outline").src = ("" + hatsOutlineArr[val] + "");
            }
            else{
                console.log("Missing outline, fix this mr Balls.");
            }
            break;
        case 2:
            document.getElementById("hair_sprite").src = ("" + hairArr[val] + "");
            if(hairOutlineArr[val] != ""){
                document.getElementById("hair_outline").src = ("" + hairOutlineArr[val] + "");
            }
            else{
                console.log("Missing outline, fix this mr Balls.");
            }
            break;
        case 3:
            document.getElementById("bangs_sprite").src = ("" + bangsArr[val] + "");
            if(bangsOutlineArr[val] != ""){
                document.getElementById("bangs_outline").src = ("" + bangsOutlineArr[val] + "");
            }
            else{
                console.log("Missing outline, fix this mr Balls.");
            }
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
        case 7:
            document.getElementById("face_acc_sprite").src = ("" + faceAccArr[val] + "");
            break;
        case 8:
            document.getElementById("face_hair_sprite").src = ("" + faceHairArr[val] + "");
            break;
    }
}


hue.addEventListener("input", function(){
    switch(Number(menu.getAttribute("value"))){
        case 0:
            if(canvas.classList.contains("head")){
                document.getElementById("head_sprite").style.setProperty("--head_hue", hue.value + "deg");
            }
            else{
                document.getElementById("body_sprite").style.setProperty("--body_hue", hue.value + "deg");
            }
            break;
        case 1:
            document.getElementById("hat_sprite").style.setProperty("--hat_hue", hue.value + "deg");
            break;
        case 2:
            document.getElementById("hair_sprite").style.setProperty("--hair_hue", hue.value + "deg");
            break;
        case 3:
            document.getElementById("bangs_sprite").style.setProperty("--bangs_hue", hue.value + "deg");
            break;
        case 4:
            document.getElementById("eyes_sprite").style.setProperty("--eyes_hue", hue.value + "deg");
            break;
        case 5:
            document.getElementById("mouth_sprite").style.setProperty("--mouth_hue", hue.value + "deg");
            break;
        case 6:
            document.getElementById("clothes_sprite").style.setProperty("--clothes_hue", hue.value + "deg");
            break;
        case 7:
            document.getElementById("face_acc_sprite").style.setProperty("--faceAcc_hue", hue.value + "deg");
            break;
        case 8:
            document.getElementById("face_hair_sprite").style.setProperty("--faceHair_hue", hue.value + "deg");
            break;
    }
});

saturation.addEventListener("input", function(){
    switch(Number(menu.getAttribute("value"))){
        case 0:
            if(canvas.classList.contains("head")){
                document.getElementById("head_sprite").style.setProperty("--head_saturation", saturation.value + "%");
            }
            else{
                document.getElementById("body_sprite").style.setProperty("--body_saturation", saturation.value + "%");
            }
            break;
        case 1:
            document.getElementById("hat_sprite").style.setProperty("--hat_saturation", saturation.value + "%");
            break;
        case 2:
            document.getElementById("hair_sprite").style.setProperty("--hair_saturation", saturation.value + "%");
            break;
        case 3:
            document.getElementById("bangs_sprite").style.setProperty("--bangs_saturation", saturation.value + "%");
            break;
        case 4:
            document.getElementById("eyes_sprite").style.setProperty("--eyes_saturation", saturation.value + "%");
            break;
        case 5:
            document.getElementById("mouth_sprite").style.setProperty("--mouth_saturation", saturation.value + "%");
            break;
        case 6:
            document.getElementById("clothes_sprite").style.setProperty("--clothes_saturation", saturation.value + "%");
            break;
        case 7:
            document.getElementById("face_acc_sprite").style.setProperty("--faceAcc_saturation", saturation.value + "%");
            break;
        case 8:
            document.getElementById("face_hair_sprite").style.setProperty("--faceHair_saturation", saturation.value + "%");
            break;
    }
});

brightness.addEventListener("input", function(){
    switch(Number(menu.getAttribute("value"))){
        case 0:
            if(canvas.classList.contains("head")){
                document.getElementById("head_sprite").style.setProperty("--head_brightness", brightness.value + "%");
            }
            else{
                document.getElementById("body_sprite").style.setProperty("--body_brightness", brightness.value + "%");
            }
            break;
        case 1:
            document.getElementById("hat_sprite").style.setProperty("--hat_brightness", brightness.value + "%");
            break;
        case 2:
            document.getElementById("hair_sprite").style.setProperty("--hair_brightness", brightness.value + "%");
            break;
        case 3:
            document.getElementById("bangs_sprite").style.setProperty("--bangs_brightness", brightness.value + "%");
            break;
        case 4:
            document.getElementById("eyes_sprite").style.setProperty("--eyes_brightness", brightness.value + "%");
            break;
        case 5:
            document.getElementById("mouth_sprite").style.setProperty("--mouth_brightness", brightness.value + "%");
            break;
        case 6:
            document.getElementById("clothes_sprite").style.setProperty("--clothes_brightness", brightness.value + "%");
            break;
        case 7:
            document.getElementById("face_acc_sprite").style.setProperty("--faceAcc_brightness", brightness.value + "%");
            break;
        case 8:
            document.getElementById("face_hair_sprite").style.setProperty("--faceHair_brightness", brightness.value + "%");
            break;
    }
});

function localStorageRegister(index){
    switch(Number(index)){
        case 0:
            if(menu.classList.contains("head")){
                localStorage.setItem("category" + index + "hue_1", hue.value);
                localStorage.setItem("category" + index + "saturation_1", saturation.value);
                localStorage.setItem("category" + index + "brightness_1" + brightness.value);
            }
            else{
                localStorage.setItem("category" + index + "hue_2", hue.value);
                localStorage.setItem("category" + index + "saturation_2", saturation.value);
                localStorage.setItem("category" + index + "brightness_2", brightness.value);
            }
            break;
        default:
                localStorage.setItem("category" + index + "hue", hue.value);
                localStorage.setItem("category" + index + "saturation", saturation.value);
                localStorage.setItem("category" + index + "brightness", brightness.value);
            break;
    }
}

function localStorageApply(index){
    switch(Number(index)){
        case 0:
            if(menu.classList.contains("head")){
                if(localStorage.getItem("category0hue_1") != undefined){
                    hue.value = localStorage.getItem("category0hue_1");
                    saturation.value = localStorage.getItem("category0saturation_1");
                    brightness.value = localStorage.getItem("category0brightness_1");
                }
                else{
                    hue.value = 39;
                    saturation.value = 80;
                    brightness.value = 113;
                }
            }
            else{
                if(localStorage.getItem("category0hue_2") != undefined){
                    hue.value = localStorage.getItem("category0hue_2");
                    saturation.value = localStorage.getItem("category0saturation_2");
                    brightness.value = localStorage.getItem("category0brightness_2");
                }
                else{
                    hue.value = 39;
                    saturation.value = 80;
                    brightness.value = 113;
                }
            }
    }
}

//Script not made by myself, used to make a downloadable image out of what is contained in the div with the canvas ID,
//there is an issue with filters not being taken in account so the function might be removed in the future.

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