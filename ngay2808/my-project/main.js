new Vue({
      el: '#app',
      data: {
        storeName: 'Tech Zone',
        isLoggedIn: true,
        currentUser: 'Nguyễn Văn A',
        newProductName: '',
        newProductPrice: '',
        newProductImage: '',
        showBanner: true,
        
        // Sửa phần khởi tạo products: Lấy từ localStorage nếu có, không thì lấy mặc định
        products: JSON.parse(localStorage.getItem('myProducts')) || [
          { 
            id: 1, 
            name: 'Bàn phím cơ', 
            price: 50, 
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&auto=format&fit=crop&q=80' 
          },
          { 
            id: 2, 
            name: 'Chuột không dây', 
            price: 20, 
            image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150&auto=format&fit=crop&q=80' 
          }
        ],
        cart: []
      },
      computed: {
        calculateTotal() {
          return this.cart.reduce((total, item) => total + item.price, 0);
        }
      },
      methods: {
        // Hàm lưu vào localStorage để dùng chung
        saveProductsToStorage() {
          localStorage.setItem('myProducts', JSON.stringify(this.products));
        },
        toggleLogin() {
          this.isLoggedIn = !this.isLoggedIn;
        },
        addProduct() {
          if (!this.newProductName || !this.newProductPrice) return;
          
          this.products.push({
            id: Date.now(),
            name: this.newProductName,
            price: Number(this.newProductPrice),
            image: this.newProductImage ? this.newProductImage : 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80'
          });

          // Gọi hàm lưu lại vào bộ nhớ trình duyệt
          this.saveProductsToStorage();

          // Reset form
          this.newProductName = '';
          this.newProductPrice = '';
          this.newProductImage = '';
        },
        removeProduct(index) {
          this.products.splice(index, 1);
          // Cập nhật lại bộ nhớ sau khi xóa
          this.saveProductsToStorage();
        },
        buyItem(item) {
          this.cart.push(item);
        }
      }
    });