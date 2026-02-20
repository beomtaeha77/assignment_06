
document.getElementById("product").addEventListener("click",function(){
    window.location.href="./products.html"

})



const loadTrendingProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then((json) => {
            console.log(json)
                      const TrendingItems = json.slice(0, 3); 
                         displayTrendingProducts(TrendingItems);
                         //displayProductCard(json);
});
        };
            




const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById("trending-products");



 products.forEach(card=> {
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

        trendingContainer.appendChild(word);

    
});
}

loadTrendingProducts();































































