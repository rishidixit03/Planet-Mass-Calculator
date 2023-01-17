let button = document.querySelector(".btn");
let st = document.querySelector(".drop-down");
let input = document.querySelector(".input");
let image = document.querySelector(".planet-image");
let weightvalue = document.querySelector(".weight-value"); 
let planetname = document.querySelector(".planet-name");

function acc( M , r){
const G = 6.67 * Math.pow(10,-11);
let result = (G*M)/r*r;
return result;
}

function callback(){
    // code to get the image of the planet 
    let text = st.value+".png";
    let newsrc = "images/"+text;
    image.src = newsrc;
    // Code to get the value of the weight on a particular planet 
    let weight = 0;
    if(st.value == "Earth"){
    weight = Math.round(9.8 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Earth";
    }
    else if(st.value == "Mars"){
    weight = Math.round(3.7 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Mars";
    }
    else if(st.value == "Jupiter"){
    weight = Math.round(24.58 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Jupiter";
    }
    else if(st.value == "Moon"){
    weight = Math.round(1.625 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Moon";
    }
    else if(st.value == "Mercury"){
    weight = Math.round(3.7 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Mercury";
    }
    else if(st.value == "Venus"){
    weight = Math.round(8.87 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Venus";
    }
    else if(st.value == "Neptune"){
    weight = Math.round(11.15 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Neptune";
    }
    else if(st.value == "Uranus"){
    weight = Math.round(8.69 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Uranus";
    }
    else if(st.value == "Pluto"){
    weight = Math.round(0.62 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Pluto";
    }
    else if(st.value == "Saturn"){
    weight = Math.round(8.96 * input.value);
    weightvalue.innerHTML = weight+" Newton";
    planetname.innerHTML = "Saturn";
    }
}

button.addEventListener('click',callback);