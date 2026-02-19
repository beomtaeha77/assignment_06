
document.getElementById("product").addEventListener("click",function(){
    window.location.href="./products.html"

})


















const loadProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error loading products:", error);
    }
};

const displayProducts = (products) => {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = products.map(product => `
        <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
            <div class="h-48 flex items-center justify-center overflow-hidden mb-4">
                <img src="${product.image}" alt="${product.title}" class="max-h-full hover:scale-105 transition-transform">
            </div>
            <span class="text-xs font-semibold text-blue-500 uppercase">${product.category}</span>
            <h3 class="font-bold text-gray-800 text-sm mt-1 line-clamp-2 h-10">${product.title}</h3>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-xl font-bold text-gray-900">$${product.price}</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join("");
};

loadProducts();

















































