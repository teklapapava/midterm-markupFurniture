

    const burgerBtn = document.getElementById("burger-btn");
    const headerMenu = document.querySelector(".header-menu");
    const burgerCls = document.getElementById("burger-Cls");


    burgerBtn.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
        burgerCls.style.display = "flex";
    
    
        burgerCls.addEventListener('click', ()=>{
            headerMenu.classList.remove('open');
            burgerCls.style.display = "none";
        })
    });

// cart


const PadlockIcon = document.getElementById("PadlockIcon");
const Cost = document.getElementById("Cost"); 

PadlockIcon.addEventListener("click", cart);
Cost.addEventListener("click", cart);


// PadlockIcon.addEventListener("click", ()=>{


//     const cartDiv = document.createElement("div");
//     cartDiv.classList.add("cartDiv");

//     cartDiv.innerHTML = `

//     <button class="closeButton">    
//     <img src= "./photo/close.png" alt="Close">
//     </button>   

//     <div class="cartHeader">
//         <img src= "./photo/lock.png" alt="Lock Icon" class="cartIcon">
//         <h2>Cart </h2>
//     </div>

//     <div class="cartEmpty">
//         <img src= "./photo/lock.png" alt="Lock Icon" >
//         <h2>Your cart is currently empty.</h2>
//     </div>


// <div class=scdDiv>   
//     <div class="subtotal">
//     <span>Subtotal:</span>
//     <span>$0.00</span>
//     </div>

//     <div class="total">
//     <span class ="ttl">Total:</span>
//     <span>$0.00</span>
//     </div>

    
//     <div class="viewCart">
    
//     <button class="Button">    
//     Proceed to checkout
//     </button> 
//     <span> View cart</span>
//     </div> 
    
// </div>`



//     document.body.appendChild(cartDiv);

//     const closeBtn = document.querySelector(".closeButton");
//     closeBtn.addEventListener("click", ()=>{
//         cartDiv.remove();
//     })
// });



function cart(){
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cartDiv");

    cartDiv.innerHTML = `

    <button class="closeButton">    
    <img src= "./photo/close.png" alt="Close">
    </button>   

    <div class="cartHeader">
        <img src= "./photo/lock.png" alt="Lock Icon" class="cartIcon">
        <h2>Cart </h2>
    </div>

    <div class="cartEmpty">
        <img src= "./photo/lock.png" alt="Lock Icon" >
        <h2>Your cart is currently empty.</h2>
    </div>


<div class=scdDiv>   
    <div class="subtotal">
    <span>Subtotal:</span>
    <span>$0.00</span>
    </div>

    <div class="total">
    <span class ="ttl">Total:</span>
    <span>$0.00</span>
    </div>

    
    <div class="viewCart">
    
    <button class="Button">    
    Proceed to checkout
    </button> 
    <span> View cart</span>
    </div> 
    
</div>`



    document.body.appendChild(cartDiv);

    const closeBtn = document.querySelector(".closeButton");
    closeBtn.addEventListener("click", ()=>{
     cartDiv.remove();
    })
}



const userIcon = document.getElementById("userIcon");

userIcon.addEventListener("click", ()=>{
    const user = document.createElement("div");
    user.classList.add("user");
    user.innerHTML = `
    <div class = "hdr">
    <h2>Login</h2>
    <img src= "./photo/close.png" alt="Close">
    </div>

    <div class="Registration">
        <div class="input-with-icon">
            <img src= "./photo/user.png" alt="user">
            <input type="text" placeholder="Username or email * ">
        </div>

        <div class="input-with-icon">
            <img src= "./photo/ბოქლომი.png" alt="lock">
            <input type="text" placeholder="Password *">
        </div>
        </div>    
        <div class= "chckbox" >
            <input type="checkbox" id="rememberMe" name="remember" value="yes">
            <label for="rememberMe">Remember me</label>
        </div>

        <div class="login">
            <button class="bt">    
                Login
            </button> 
            <span>Lost your password?</span>
        </div> 
        `

    document.body.appendChild(user);

    const cBtn = document.querySelector(".hdr");
    cBtn.addEventListener("click", ()=>{
        user.remove();
    })
})

// mouseover menu modal

    const menuItem = document.querySelectorAll(".menu-item");
    const body = document.querySelector(".body");
    // const springPromoImgWrapper = document.querySelector(".spring-promo-img-wrapper");
    const overlay = document.querySelector(".bckcolor")

    menuItem.forEach(item => {
        const submenu = item.querySelector(".submenu");

        item.addEventListener("mouseover", ()=>{
            submenu.style.display = "flex";
            // body.style.backgroundColor = "gray";
            overlay.style.display = "block"

            // springPromoImgWrapper.style.opacity = "0.05";

        })

        item.addEventListener("mouseout", ()=>{
            submenu.style.display = "none";
            // body.style.backgroundColor = "";
            overlay.style.display = "none"

            // springPromoImgWrapper.style.opacity = "1";

        })
    })


















































































































// const chairs = document.getElementById("CHAIRS");
// let chair; 

// function createChair() {
//   if (!chair) {
//     chair = document.createElement("div");
//     chair.classList.add("chair");
//     chair.innerHTML = `
//       <div class="frstDiv">
//         <span>ARMCHAIRS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>BAR STOOLS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAIR PADS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAISE LOUNGES<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAISE LOUNGES<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>DINING CHAIRS<img src="./photo/right-arrow.png" alt="right-arrow"></span>
//       </div>
//     `;
//     document.body.appendChild(chair);

//     // მივამაგროთ .chair-ზეც mouseleave
//     chair.addEventListener("mouseleave", handleMouseLeave);
//     chair.addEventListener("mouseenter", () => {
//     });
//   }
// }

// function handleMouseLeave() {
//   setTimeout(() => {
//     if (
//       !chairs.matches(":hover") &&
//       (!chair || !chair.matches(":hover"))
//     ) {
//       if (chair) {
//         chair.remove();
//         chair = null;
//       }
//     }
//   }, 150);
// }

// chairs.addEventListener("mouseenter", createChair);
// chairs.addEventListener("mouseleave", handleMouseLeave);
