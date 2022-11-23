let display = document.querySelector(".res-text");
let copy = document.querySelector(".copy");
let range = document.querySelector("#range");
let range_res = document.querySelector(".range-res");
let num = document.querySelector("#number");
let char = document.querySelector("#special-char");
let generate = document.querySelector(".generate");

let strongest = `abcdefABCDEF12345!@#$%^&`;
let strong = `abcdefABCDEF!@#$%^&`;
let medium = `abcdefABCDEF12345`;
let weak = `abcdefABCDEF`;

generate.addEventListener("click", generatePassword);

function generatePassword(){
    let length = range.value;
    let numCheck = num.checked;
    let charCheck = char.checked;
    let password = "";

    if(numCheck && charCheck){
        for(let i = 0; i < length; i++){
            password += strongest[Math.floor(Math.random() * strongest.length)];
        }
    }else if(charCheck){
        for(let i = 0; i < length; i++){
            password += strong[Math.floor(Math.random() * strong.length)];
        }
    }else if(numCheck){
        for(let i = 0; i < length; i++){
            password += medium[Math.floor(Math.random() * medium.length)];
        }
    }else{
        for(let i = 0; i < length; i++){
            password += weak[Math.floor(Math.random() * weak.length)];
        }
    }
    display.value = password;
}

range.addEventListener("change", ()=>{
    range_res.innerHTML = range.value;
});

copy.addEventListener("click", () => {
    display.select();
    navigator.clipboard.writeText(display.value);
    alert("Copy Successful!");
});