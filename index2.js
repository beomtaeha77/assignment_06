const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((json) => {
            console.log(json)
                         displayProducts(json);
                         displayProductCard(json);
});
        };
            




const displayProducts = (products) => {
    const levelContainer = document.getElementById("category-container");
    
    levelContainer.innerHTML = "";

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onClick="loadProducts()" class="btn btn-outline btn-primary btn1">All - ${products.length}</button>
    `;

    levelContainer.append(btnDiv);
};





const loadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then((json) => displayCategories(json));
};


const loadProductDetail=async(id)=>{
    const url=`https://fakestoreapi.com/products/${id}`;
    //console.log(url);
    const res=await fetch(url);
    const details=await res.json();
    displayProductDetails(details);

};

const displayProductDetails=(product)=>{
    console.log(product);
    const detailsBox=document.getElementById("details-container");
    detailsBox.innerHTML=`
    <div>
            <div class="card bg-base-100 w-full h-full flex-grow shadow-sm">
                <figure>
                  <img 
                  src="${product.image}"
                  alt="" />
                 </figure>
                 <div class="flex justify-between py-5"> 
                          <div >
                         <p class="bg-blue-200 text-blue-800 rounded-xl px-2">${product.category}</p>
                            </div>
                            <div class="flex">
                              <i class="fa-solid fa-star py-1"></i>
                              <p class="pr-2">${product.rating.rate}</p>
                              <p>${product.rating.count}</p>
                            </div>
                    </div>

           <div class="card-body">
             <h2 class="card-title">${product.title}</h2>
             <h2 class="card-title font-bold">$ ${product.price}</h2>
               <p>${product.description}</p>
                  <div class="card-actions justify-between flex">
                          <button onclick="loadProductDetail(${product.id})" class="btn btn-outline btn-primary">Buy Now</button>
                         <button class="btn btn-primary">Add to Cart</button>
                    </div>
             </div>
          </div>
    </div>
    
    `;

    document.getElementById("my_modal_5").showModal();

};

















const loadLevelWord=(category)=>{
   
    const url = `https://fakestoreapi.com/products/category/${category}`;
   
   fetch(url)
   .then(res=> res.json())
   .then((data)=>displayProductCard(data))
};

const displayProductCard=(cards)=>{
    //console.log(cards);
    const allContainer=document.getElementById("all-container");
    allContainer.innerHTML = "";
    if(cards.length == 0){
        alert("no product detected");
        return;
    }



   // {
   // "id": 12,
   // "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
   // "price": 114,
   // "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
   // "category": "electronics",
   // "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
   // "rating": {
      //  "rate": 4.8,
       // "count": 400
   // }
//}

    cards.forEach(card=> {
        console.log(card);
        const word=document.createElement("div")
        word.innerHTML=`
        <div>
            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                  <img 
                  src="${card.image}"
                  alt="${card}" />
                 </figure>
                 <div class="flex justify-between py-5"> 
                          <div >
                         <p class="bg-blue-200 text-blue-800 rounded-xl px-2">${card.category}</p>
                            </div>
                            <div class="flex">
                              <i class="fa-solid fa-star py-1"></i>
                              <p class="pr-2">${card.rating.rate}</p>
                              <p>${card.rating.count}</p>
                            </div>
                    </div>

           <div class="card-body">
             <h2 class="card-title">${card.title}</h2>
             <h2 class="card-title font-bold">$ ${card.price}</h2>
               
                  <div class="card-actions justify-between flex">
                          <button onclick="loadProductDetail(${card.id})" class="btn btn-outline btn-primary">Details</button>
                         <button class="btn btn-primary">Add to Cart</button>
                    </div>
             </div>
          </div>
    </div>
        
        `;

        allContainer.append(word);
        
    });


}



const displayCategories = (categories) => {
    const cardContainer = document.getElementById("div-container");
    
    cardContainer.innerHTML="";
    
    for (let category of categories) {
        console.log(category);
        const btnDiv2 = document.createElement("div");
        btnDiv2.innerHTML = `
            <button onClick="loadLevelWord('${category}')" class="btn btn-outline btn-primary btn1">${category}</button>
        `;
        cardContainer.append(btnDiv2);
    }
};


loadProducts();
loadCategories();



       

           