const grid = document.getElementById("productGrid");

const cardTemplate = document.getElementById("cardTemplate");

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutError = document.getElementById("checkoutError");



let activeFilter="all";
let searchTerm="";



const STORE_WHATSAPP_NUMBER="923064322613";





function money(cents){

return `Rs ${Math.round(cents/100).toLocaleString("en-PK")}`;

}







// ==========================
// PRODUCTS
// ==========================


function renderGrid(){


grid.innerHTML="";



const products =
PRODUCTS.filter(product=>{


let category =
activeFilter==="all" ||
product.category===activeFilter;



let search =
product.title
.toLowerCase()
.includes(searchTerm);



return category && search;


});





products.forEach(product=>{


const node =
cardTemplate.content.cloneNode(true);



node.querySelector(".stamp-price").innerText =
product.priceDisplay;


node.querySelector(".card-title").innerText =
product.title;


node.querySelector(".card-eyebrow").innerText =
product.category;


node.querySelector(".card-desc").innerText =
product.description;




const image =
node.querySelector(".card-swatch");



image.style.backgroundImage =
`url("${product.images[0]}")`;

image.style.backgroundSize="cover";

image.style.backgroundPosition="center";






const addBtn =
node.querySelector(".add-btn");



if(product.stock<=0){

addBtn.disabled=true;

addBtn.innerText="Sold Out";

}

else{


addBtn.onclick=function(e){


e.stopPropagation();


Cart.add(product.id);


renderCart();


openCart();


};


}






node.querySelector(".card")
.onclick=function(){

location.href=
"product.html?id="+product.id;

};




grid.appendChild(node);


});



}










// ==========================
// CART
// ==========================


function renderCart(){


const items =
Cart.lineItems();



cartCountEl.innerText =
Cart.totalCount();



cartSubtotalEl.innerText =
money(
Cart.subtotalCents()
);





checkoutBtn.disabled =
items.length===0;




if(items.length===0){


cartItemsEl.innerHTML=
`
<p class="cart-empty">

Your cart is empty

</p>
`;

return;


}




cartItemsEl.innerHTML="";




items.forEach(({product,qty})=>{


let div=document.createElement("div");


div.className="cart-line";



div.innerHTML=`

<div class="cart-line-swatch"
style="
background-image:url('${product.images[0]}');
background-size:cover;">
</div>


<div class="cart-line-info">


<strong>
${product.title}
</strong>


<span>
${money(product.priceCents)}
</span>


<div class="qty-row">


<button class="minus">
-
</button>


<span>
${qty}
</span>


<button class="plus">
+
</button>



<button class="remove-btn">
Remove
</button>


</div>


</div>

`;




div.querySelector(".plus")
.onclick=function(){


if(qty < product.stock){

Cart.setQty(
product.id,
qty+1
);

}


renderCart();


};





div.querySelector(".minus")
.onclick=function(){


Cart.setQty(
product.id,
qty-1
);


renderCart();


};





div.querySelector(".remove-btn")
.onclick=function(){


Cart.remove(product.id);


renderCart();


};




cartItemsEl.appendChild(div);



});


}








// ==========================
// CHECKOUT WHATSAPP
// ==========================


checkoutBtn.onclick=function(){



checkoutError.hidden=true;



const name =
document
.getElementById("custName")
.value.trim();



const phone =
document
.getElementById("custPhone")
.value.trim();



const address =
document
.getElementById("custAddress")
.value.trim();





if(!name || !phone || !address){


checkoutError.innerText=
"Please complete your details";


checkoutError.hidden=false;


return;


}





const items =
Cart.lineItems();



if(items.length===0){

return;

}





let message=
`🛒 *NEW ORDER - SAAD STORE*

`;



message+=
`---------------------

`;



items.forEach(({product,qty})=>{


message+=
`📦 ${product.title}

Quantity: ${qty}

Price: ${money(product.priceCents*qty)}

---------------------

`;


});




message+=
`
💰 Total:
${money(Cart.subtotalCents())}


👤 Customer:
${name}


📱 Phone:
${phone}


📍 Address:
${address}


Payment:
Cash On Delivery
`;





const url =
"https://wa.me/"
+
STORE_WHATSAPP_NUMBER
+
"?text="
+
encodeURIComponent(message);




window.open(
url,
"_blank"
);





localStorage.removeItem(
Cart.KEY
);



document
.getElementById("custName")
.value="";


document
.getElementById("custPhone")
.value="";


document
.getElementById("custAddress")
.value="";



renderCart();

closeCart();



};









// ==========================
// FILTER
// ==========================


document
.querySelectorAll(".cat-btn")
.forEach(btn=>{


btn.onclick=function(){


document
.querySelectorAll(".cat-btn")
.forEach(b=>b.classList.remove("active"));



btn.classList.add("active");


activeFilter =
btn.dataset.filter;



renderGrid();


};


});







// SEARCH


const search =
document.querySelector(".search-box input");



if(search){


search.oninput=function(){


searchTerm =
this.value
.toLowerCase();


renderGrid();


};


}








// CART DRAWER


function openCart(){

cartDrawer.classList.add("open");

cartOverlay.classList.add("open");

}



function closeCart(){

cartDrawer.classList.remove("open");

cartOverlay.classList.remove("open");

}




document
.getElementById("cartToggle")
.onclick=openCart;



document
.getElementById("cartClose")
.onclick=closeCart;



cartOverlay.onclick=closeCart;







renderGrid();

renderCart();
let slideIndex = 0;

showSlides();

function showSlides(){

    let slides = document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000);

}

document.querySelector(".next").onclick=function(){

    slideIndex++;

    showManual();

};

document.querySelector(".prev").onclick=function(){

    slideIndex--;

    showManual();

};

function showManual(){

    let slides=document.getElementsByClassName("slides");

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    if(slideIndex<1){
        slideIndex=slides.length;
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display="block";

}
// =========================
// HOME SLIDER
// =========================

let slideIndex = 0;

showSlides();

function showSlides(){

    const slides = document.getElementsByClassName("slide");

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,3000);

}

document.querySelector(".next").onclick=function(){

    slideIndex++;

    manualSlide();

}

document.querySelector(".prev").onclick=function(){

    slideIndex--;

    manualSlide();

}

function manualSlide(){

    const slides=document.getElementsByClassName("slide");

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    if(slideIndex<1){
        slideIndex=slides.length;
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }

    slides[slideIndex-1].style.display="block";

}
