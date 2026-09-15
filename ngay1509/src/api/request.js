// Bài tập 2 buổi 
// Giả lập Axios Client với Interceptor
const request = {
  get(url) {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token')
      // Request Interceptor: Kiểm tra Token
      console.log('[API Request] Token gửi đi:', token)
      
      setTimeout(() => {
        if (url === '/products') {
          resolve({
            data: [
              { id: 1, name: 'Mũ bảo hiểm Fullface', price: '1.200.000đ' },
              { id: 2, name: 'Găng tay xe máy', price: '150.000đ' },
              { id: 3, name: 'Tai nghe Bluetooth', price: '450.000đ' }
            ]
          })
        } else {
          reject(new Error('404 Not Found'))
        }
      }, 500)
    })
  }
}

export default request