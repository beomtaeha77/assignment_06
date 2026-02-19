

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    
    .then((json) => displayLesson(json)) 
    .catch(err => console.error("Fetch error:", err));
}

const loadLevelCard=(category)=>{
    console.log(category);
    const url =`https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
    .then(res=>res.json())
    .then((json)=>displayLevelCard(json))
    .catch(err => console.error("Fetch error:", err));

    
};

//const loadDetails=(id)=>{
   // console.log(id);
    //const url =`https://fakestoreapi.com{id}`;
    //fetch(url)
    //.then(res=>res.json())
    //.then((json)=>displayLevelCard(json))
    //.catch(err => console.error("Fetch error:", err));

    
//};



const displayLevelCard=(cards)=>{
    const cardContainer=document.getElementById("card-container");
      cardContainer.innerHTML="";

      if(cards.length == 0){
        alert("no item detected");
        return;
      }

    //  {
    //"id": 10,
   // "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
   // "price": 109,
    //"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
   // "category": "electronics",
   // "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
   // "rating": {
     //   "rate": 2.9,
      //  "count": 470
   // }

cards.forEach((carddata)=>{
    console.log(carddata);
    const card = document.createElement("div");
  card.innerHTML = `
<div class="card bg-base-100 shadow-md border border-gray-100 h-full flex flex-col">
    <!-- Image Section -->
    <figure class="px-4 pt-4 h-48 bg-white">
        <img class="h-full w-full object-contain" src="${carddata.image}" alt="${carddata.title}">
    </figure>

    <!-- Content Section -->
    <div class="card-body p-4 flex flex-col grow">
        <div class="flex justify-between items-center mb-2">
            <span class="badge badge-sm font-medium">Clothing</span>
            <div class="text-sm text-gray-500">
                <span class="text-yellow-400">★</span> ${carddata.rating.rate} (${carddata.rating.count})
            </div>
        </div>

        <h3 class="card-title text-sm line-clamp-2 mb-2">${carddata.title}</h3>
        <p class="font-bold text-xl text-primary">$${carddata.price}</p>

        <!-- Actions Section -->
        <div class="card-actions justify-between items-center mt-auto pt-4 border-t border-gray-50">
            <button data-id="${carddata.id}" class="view-details-btn btn btn-sm btn-ghost gap-2">
                <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="btn btn-sm btn-primary gap-2">
                <i class="fa-solid fa-cart-arrow-down"></i> Add
            </button>
        </div>
    </div>
</div>
`;
   // const detailsBtn = card.querySelector('.view-details-btn');
 
   // detailsBtn.addEventListener('click', () => {
      //  const productId = detailsBtn.getAttribute('data-id');
      //  fetchSingleProduct(productId);
    //});
    cardContainer.append(card);
   })

}






const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    lessons.forEach(category => {
        const btnDiv = document.createElement("div");
       
        btnDiv.innerHTML = `
            <button onClick="loadLevelCard('${category}')" class="btn btn-outline btn-primary btn1">
                ${category}
            </button>`;
        levelContainer.append(btnDiv);
         
    });
};

loadProducts();



       

           