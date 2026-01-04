const  cartIcon=document.querySelector(".cart-icon-list");
const cart=document.querySelector(".cart");
const cartClose=document.querySelector('#cart-close');

cartIcon.addEventListener("click",() =>cart.classList.add("active"));
cartClose.addEventListener("click",() =>cart.classList.remove("active"));

const addCartButtons=document.querySelectorAll(".Add-cart");
addCartButtons.forEach(button=>{
    button.addEventListener('click',event=>{
    const productItem=event.target.closest(".product_item");//to get the closest product item 
    
    addTOCart(productItem);
    
    });
});
const cartContent=document.querySelector(".cartContent")
function addTOCart(productItem)
{   //catch the element of added product 
    const productImgSrc =productItem.querySelector("img").src;
    const productTitle=productItem.querySelector(".rightProductName").textContent;
    const productPrice=productItem.querySelector(".rightProductPrice").textContent;
    const cartItems=cartContent.querySelectorAll(".cart-product-title");
    //to chech if this aleardy exist in cart or not 
    for(Item of cartItems)
    {
        if (Item.textContent==productTitle)
        {
            alert("This item is already in cart.");
            return;
        }
    }
    const cartBox=document.createElement("div");
    cartBox.classList.add("cartbox");
    cartBox.innerHTML=`<img src=${productImgSrc}> 
                <div class="cartdetail">
                    <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>
                    </div>
                </div>
                <i class="fa fa-trash cart-remove" aria-hidden="true"></i>`
    cartContent.appendChild(cartBox);
    cartBox.querySelector(".cart-remove").addEventListener("click",function(){
        cartBox.remove();
        updateTotalPrice();
    })
   cartBox.querySelector(".cart-quantity").addEventListener("click",function(event){
     const numberElment =cartBox.querySelector(".number");
     const decrementButton =cartBox.querySelector("#decrement");
     var quantity=numberElment.textContent;
     if(event.target.id==='decrement'&& quantity>1){
        quantity--;
        if(quantity===1)
        {
            decrementButton.style.color="#999";
        }
     }
     else if(event.target.id==="increment")
     {
        quantity++;
        decrementButton.style.color="#333";
     }
     numberElment.textContent=quantity;
     updateTotalPrice();
   });
   updateTotalPrice();

}
function updateTotalPrice()
{  let total=0;
    
   const totalPriceElement=document.querySelector(".total-price");
   const cartBoxes=cartContent.querySelectorAll(".cartbox");
   console.log("cartBoxes",cartBoxes);
   total =0;
   cartBoxes.forEach(cartbox=>{
   console.log("cartbox in update price",cartbox)
   const priceElement =cartbox.querySelector(".cart-price");
   console.log("priceElmenet:",priceElement);
   const quantityElement=cartbox.querySelector(".cart-quantity .number");
   const price=priceElement.textContent.replace("$","");
   console.log(price);
   const quantity=quantityElement.textContent;
   console.log(quantity);
   total+=price*quantity;
   console.log("total",total)
   } );
   totalPriceElement.textContent=`$${total}`
}
