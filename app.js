const grid = document.getElementById("productGrid");

const cardTemplate = document.getElementById("cardTemplate");

const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

const checkoutBtn = document.getElementById("checkoutBtn");



let activeFilter = "all";
let searchTerm = "";




// PRICE FORMAT

function money(cents){

return `Rs ${Math.round(cents/100).toLocaleString("en-PK")}`;

}





// ==========================
// PRODUCTS RENDER
// ==========================


function renderGrid(){


grid.innerHTML="";



const items = PRODUCTS.filter(product=>{


const categoryMatch =
activeFilter==="all" ||
product.category===activeFilter;



const searchMatch =
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




// IMAGE


const swatch =
node.querySelector(".card-swatch");


if(product.images.length){


swatch.style.backgroundImage =
`url("${product.images[0]}")`;


swatch.style.backgroundSize="cover";

swatch.style.backgroundPosition="center";


}




// WISHLIST BUTTON


const wishBtn =
node.querySelector(".wish-btn");



if(wishBtn){


wishBtn.innerHTML =
Wishlist.has(product.id)
?
"♥"
:
"♡";



wishBtn.onclick=function(e){


e.stopPropagation();



Wishlist.toggle(product.id);



wishBtn.innerHTML =
Wishlist.has(product.id)
?
"♥"
:
"♡";



};


}






// THUMBNAILS


const thumbRow =
node.querySelector(".thumb-row");



product.images.forEach((img,index)=>{


const thumb=document.createElement("div");


thumb.className="thumb";


if(index===0){

thumb.classList.add("active");

}


thumb.style.backgroundImage =
`url("${img}")`;



thumb.onclick=function(e){


e.stopPropagation();


swatch.style.backgroundImage =
`url("${img}")`;



thumbRow
.querySelectorAll(".thumb")
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



node.querySelector(".card-stock").textContent =
soldOut
?
"Out of stock"
:
`${product.stock} in stock`;







// ADD CART


const addBtn =
node.querySelector(".add-btn");



if(soldOut){


addBtn.disabled=true;

addBtn.textContent="Sold Out";


}

else{


addBtn.onclick=function(e){


e.stopPropagation();



Cart.add(product.id);



renderCart();


openCart();


};



}







// PRODUCT PAGE OPEN


node.querySelector(".card")
.onclick=function(){


location.href =
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



cartCountEl.textContent =
Cart.totalCount();



cartSubtotalEl.textContent =
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



const div=document.createElement("div");


div.className="cart-line";



div.innerHTML=`

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


<button class="qty-btn minus">
-
</button>


<span class="qty-val">
${qty}
</span>


<button class="qty-btn plus">
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

Cart.setQty(product.id,qty+1);

}


renderCart();


};




div.querySelector(".minus")
.onclick=function(){


Cart.setQty(product.id,qty-1);


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






renderGrid();

renderCart();
