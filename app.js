const grid = document.getElementById("productGrid");
const cardTemplate = document.getElementById("cardTemplate");

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutError = document.getElementById("checkoutError");


let activeFilter = "all";
let searchTerm = "";



function money(cents){

return `Rs ${Math.round(cents/100).toLocaleString("en-PK")}`;

}





// ==========================
// PRODUCT DISPLAY
// ==========================


function renderGrid(){


grid.innerHTML="";



let items = PRODUCTS.filter(product=>{


let categoryMatch =
activeFilter==="all" ||
product.category===activeFilter;



let searchMatch =
product.title
.toLowerCase()
.includes(searchTerm);



return categoryMatch && searchMatch;


});





items.forEach(product=>{



const node =
cardTemplate.content.cloneNode(true);




node.querySelector(".stamp-price").textContent =
product.priceDisplay;



node.querySelector(".card-eyebrow").textContent =
product.category;



node.querySelector(".card-title").textContent =
product.title;



node.querySelector(".card-desc").textContent =
product.description;



const swatch =
node.querySelector(".card-swatch");



let images =
product.images || [];



if(images.length){


swatch.style.backgroundImage =
`url("${images[0]}")`;

swatch.style.backgroundSize="cover";

swatch.style.backgroundPosition="center";


}





// thumbnails


const thumbRow =
node.querySelector(".thumb-row");



images.forEach((img,index)=>{


let thumb=document.createElement("div");


thumb.className =
"thumb";



if(index===0){

thumb.classList.add("active");

}



thumb.style.backgroundImage =
`url("${img}")`;



thumb.onclick=function(e){


e.stopPropagation();


swatch.style.backgroundImage =
`url("${img}")`;



thumbRow.querySelectorAll(".thumb")
.forEach(t=>t.classList.remove("active"));


thumb.classList.add("active");



};



thumbRow.appendChild(thumb);



});







// STOCK


const soldOut =
product.stock<=0;



node.querySelector(".sold-flag").hidden =
!soldOut;



node.querySelector(".card-stock").innerText =
soldOut
?
"Out of stock"
:
`${product.stock} in stock`;






// ADD BUTTON


const addBtn =
node.querySelector(".add-btn");



if(soldOut){


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





// OPEN PRODUCT


node.querySelector(".card")
.onclick=function(){


window.location.href =
"product.html?id="+product.id;


};





grid.appendChild(node);



});



}









// ==========================
// CART
// ==========================



function renderCart(){



let items =
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
Your order is empty.
<br>
Add something from catalog.
</p>
`;


return;

}




cartItemsEl.innerHTML="";




items.forEach(({product,qty})=>{



let line=document.createElement("div");


line.className="cart-line";



line.innerHTML=`

<div class="cart-line-swatch"
style="
background-image:url('${product.images[0]}');
background-size:cover;
">
</div>


<div class="cart-line-info">

<span class="cart-line-title">
${product.title}
</span>


<span class="cart-line-price">
${money(product.priceCents)}
</span>



<div class="qty-row">

<button class="qty-btn dec">
-
</button>


<span class="qty-val">
${qty}
</span>


<button class="qty-btn inc">
+
</button>


<button class="remove-btn">
Remove
</button>


</div>


</div>


`;





line.querySelector(".inc")
.onclick=function(){


if(qty < product.stock){

Cart.setQty(product.id,qty+1);

}


renderCart();


};




line.querySelector(".dec")
.onclick=function(){


Cart.setQty(product.id,qty-1);


renderCart();


};




line.querySelector(".remove-btn")
.onclick=function(){


Cart.remove(product.id);


renderCart();


};



cartItemsEl.appendChild(line);



});



}








// ==========================
// CART OPEN CLOSE
// ==========================


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








// ==========================
// CATEGORY FILTER
// ==========================


document.querySelectorAll(".cat-btn")
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








// ==========================
// SEARCH
// ==========================



const searchInput =
document.querySelector(".search-box input");



if(searchInput){


searchInput.addEventListener(
"input",
function(){


searchTerm =
this.value
.toLowerCase();


renderGrid();


});


}









// ==========================
// START
// ==========================


renderGrid();

renderCart();
