const products = [
    {
      name: "Polygon Strattos S5",
      price: 11500000,
      category: "Fullbike",
      image: "https://via.placeholder.com/400x300?text=Strattos+S5"
    },
    {
      name: "United Gavriil",
      price: 9800000,
      category: "Fullbike",
      image: "https://via.placeholder.com/400x300?text=United+Gavriil"
    },
    {
      name: "Shimano 105 Groupset",
      price: 7800000,
      category: "Groupset",
      image: "https://via.placeholder.com/400x300?text=Shimano+105"
    },
    {
      name: "Trek Emonda Frame",
      price: 14500000,
      category: "Frameset",
      image: "https://via.placeholder.com/400x300?text=Trek+Emonda"
    }
  ];
  
  // Ambil parameter kategori dari URL (misal: ?kategori=Fullbike)
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get('kategori');
  
  // Filter produk sesuai kategori
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;
  
  // Tampilkan produk
  const container = document.getElementById("product-list");
  
  filteredProducts.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-primary">Rp${product.price.toLocaleString()}</p>
          <a href="detail.html?name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.image)}" class="btn btn-primary mt-auto">Lihat Detail</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
  