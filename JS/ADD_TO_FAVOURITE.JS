const  FavoriteIcon=document.querySelector(".Favorite-icon-list");
const  Favorite=document.querySelector(".Favorite");
const  FavoriteClose=document.querySelector('#Favorite-close');

FavoriteIcon.addEventListener("click",() =>Favorite.classList.add("active"));
FavoriteClose.addEventListener("click",() =>Favorite.classList.remove("active"));

const addfavButtons=document.querySelectorAll(".Add-Favourite");
addfavButtons.forEach(button=>{
    button.addEventListener('click',event=>{
    const productItem=event.target.closest(".product_item");
    addTOfav(productItem);
    
    });
});

const favouriteContent=document.querySelector(".FavoriteContent")
function addTOfav(productItem)
{
    const productImgSrc =productItem.querySelector("img").src;
    const productTitle=productItem.querySelector(".rightProductName").textContent;
    const productPrice=productItem.querySelector(".rightProductPrice").textContent;
    const favouriteItems=favouriteContent.querySelectorAll(".Favorite-product-title");
    for(Item of favouriteItems)
    {
        if (Item.textContent==productTitle)
        {
            alert("This item is already in Favourite.");
            return;
        }
    }
    const favouriteBox=document.createElement("div");
    favouriteBox.classList.add("FavouriteBox");
    favouriteBox.innerHTML=` <img src=${productImgSrc}>
                <div class="detail">
                    <h2 class="Favorite-product-title">${productTitle}</h2>
                    <span class="Favorite-price">${productPrice}</span>
                </div>
                <i class="fa fa-trash Favorite-remove" aria-hidden="true"></i>`
    favouriteContent.appendChild(favouriteBox);

    favouriteBox.querySelector(".Favorite-remove").addEventListener("click",function(){
        console.log('favourite remove is pressed');
        favouriteBox.remove();


    });
    // console.log("favourite content",favouriteContent);
     
}