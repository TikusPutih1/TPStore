// Keranjang Belanja
const cart = [];

// Tambah Produk ke Keranjang
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    displayCart();
    alert("Produk berhasil ditambahkan ke keranjang! Lihat keranjang untuk checkout.");
}

// Tampilkan Keranjang Belanja
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
}

// Fungsi Checkout
function checkout() {
    const name = document.getElementById('customer-name').value;
    const address = document.getElementById('customer-address').value;
    if (!name || !address) {
        alert("Nama dan alamat harus diisi untuk checkout.");
        return;xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqa
    }

    const orderDetails = cart.map(item => `${item.name} - Rp ${item.price}`).join(', ');
    const message = `Pesanan baru dari ${name}\nAlamat: ${address}\nDetail Pesanan: ${orderDetails}`;
    const whatsappNumber = '0881022186022'; // Nomor WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

    // Setelah Checkout, Tampilkan Tombol Rating Setelah 3 Detik
    setTimeout(showRatingOptions, 3000);

    // Reset Keranjang setelah Checkout
    cart.length = 0;
    displayCart();
    alert("Checkout berhasil! Terima kasih telah berbelanja.");
}

// Fungsi untuk Menampilkan Tombol Rating
function showRatingOptions() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Reset daftar produk

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Beri Rating untuk ${item.name}`;

        const ratingButton = document.createElement('button');
        ratingButton.textContent = 'Beri Rating';
        ratingButton.onclick = () => rateProduct(index);

        li.appendChild(ratingButton);
        cartItems.appendChild(li);
    });
}

// Fungsi untuk Memberikan Rating
function rateProduct(index) {
    const rating = prompt("Berikan rating (0-10) untuk produk ini:");
    if (rating !== null) { // Hanya jika rating diisi
        if (rating >= 0 && rating <= 10) {
            alert(`Terima kasih! Kamu memberikan rating ${rating} untuk produk ini.`);
        } else {
            alert("Mohon masukkan rating antara 0 dan 10.");
        }
    } else {
        alert("Tidak ada rating yang diberikan. Tidak masalah! 👍");
    }
}
