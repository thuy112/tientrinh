/* Bai1,2 ở ngay1808 */
/* Bai 3*/
/*
//Kai bao mang diem ban dau
var diem = [7, 9.5, 4, 8, 6.5, 10, 3, 8];

//Tinh diem trung binh 
function tinhTrungBinh(mang){
    if (!Array.isArray (mang) || mang.length === 0) return null;

    var tong = 0;
    for (var d of mang) {
        tong += d;
    }

    var trungBinh = tong / mang.length;
    
    //lam tron 2 chu so thap phan
    return Math.round (trungBinh * 100) / 100;
}

//Tim diem lon nhat
function timLonNhat(mang){
    if (!Array.isArray (mang) || mang.length === 0) return null;

    var max = mang[0];
    for (var d of mang){
        if (d > max){
            max = d;
        }
    }

    return max;
}

//tim diem nho nhat
function timNhoNhat(mang) {
    if (!Array.isArray(mang) || mang.length === 0) return null;

    var min = mang[0];
    for (var d of mang){
        if (d < min){
            min = d;
        }
    }
     return min;
}

// dem so dem dat
function demDat(mang) {
    if (!Array.isArray(mang)) return null;

    var soLuongDat = 0;
    for (var d of mang) {
        if (d >= 5){
            soLuongDat++;
        }
    }
    return soLuongDat;
}

//sap xep giam dan
function sapXepGiam(mang){
    if(!Array.isArray(mang))return null;

    // Nhân bản mảng bằng .slice() để tránh đột biến mảng gốc
    var mangMoi = mang.slice();
    
    return mangMoi.sort(function(a, b) {
        return b - a;
    });
}

console.log("=== BÁO CÁO THỐNG KÊ MẢNG ĐIỂM ===");
console.log("Điểm trung bình:", tinhTrungBinh(diem)); // 7
console.log("Điểm lớn nhất:", timLonNhat(diem)); // 10
console.log("Điểm nhỏ nhất:", timNhoNhat(diem)); // 3
console.log("Số điểm đạt (>= 5):", demDat(diem));// 6
console.log("Mảng sắp xếp giảm dần:", sapXepGiam(diem)); //[10,9.5,8,8,7,6.5,4,3]
console.log("Mảng gốc ban đầu:", diem);
*/

/* Bai 4 */
/*
function tinhToan(a, pheptoan, b){
    //Kiem tra dau vao
    if(typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)){
        return "Dữ liệu không hợp lệ"
    }

    var ketQua;

    // phan loai phep toan
    switch (pheptoan) {
        case "+":
            ketQua = a + b;
            break;
        case "-":
            ketQua = a - b;
            break;
        case "*":
            ketQua = a * b;
            break;
        case "/":
            if (b === 0){
                return "Không thể chia cho 0"
            }
            ketQua = a / b;
            break;
        case "%":
            if (b === 0){
                return "Không thể chia cho 0"
            }
            ketQua = a % b;
            break;
        case "^":
            ketQua = Math.pow(a,b);
            break;
        default:
            return "Phép toán không hợp lệ";
    }

    // Xử lý định dạng kết quả bằng toán tử 3 ngôi
    // Nếu chia hết cho 1 (số nguyên) -> giữ nguyên
    // Ngược lại (số thập phân) -> làm tròn 2 chữ số thập phân
    var ketQuaChuan = (ketQua % 1 === 0) ? ketQua : Math.round(ketQua * 100) / 100;

    return ketQuaChuan;
}
console.log(tinhToan(7, '+', 2));   // 9
console.log(tinhToan(7, '/', 2));   // 3.5
console.log(tinhToan(2, '^', 10));  // 1024
console.log(tinhToan(5, '/', 0));  // 'Không thể chia cho 0'
console.log(tinhToan(5, '&', 2));   // 'Phép toán không hợp lệ'
*/

/* Bai 5 */
/*
//Dữ liệu ban đầu
var ds = [
  { id: 1, hoTen: 'Nguyễn Văn An', tuoi: 20, diem: 8.5 },
  { id: 2, hoTen: 'Trần Thị Bình', tuoi: 21, diem: 6 },
  { id: 3, hoTen: 'Lê Văn Cường', tuoi: 19, diem: 4 },
];

//Thêm sinh viên nếu trùng id chặn
function themSinhVien(ds,sv){
    if (!Array.isArray(ds) || !sv || typeof sv.id === "undefined") return flase;

    //Kiểm tra id đã tồn tại chưa
    var svTonTai = ds.find(function (item){
        return item.id === sv.id;
    });

    if(svTonTai) {
        console.log("Thêm thất bại: ID " + sv.id + "đã tồn tại");
        return false;
    }

    ds.push(sv);
    return true;
}

// Tìm sinh viên theo id
function timTheoId(ds, id){
    if (!Array.isArray(ds))
    return undefined;

    return ds.find(function(item){
        return item.id === id;
    });
}

// Xoá sinh viên theo id
function xoaTheoId(ds, id){
    if (!Array.isArray(ds))
    return false;

    for (var i = 0; i < ds.length; i++){
        if (ds[i].id === id){
            ds.splice(i,1);
            return true;
        }
    }
    return flase;
}

// cập nhật diểm cho sinh viên
function capNhatDiem(ds, id, diemMoi){
    var sv = timTheoId(ds,id);
    if (sv) {
        sv.diem = diemMoi;
        return true;
    }
    return flase;
}

//In danh sách mỗi sinh viên 1 dòng, kèm xếp loại tính toán bằng toán tử 3 ngôi
function inDanhSach(ds){
    if (!Array.isArray(ds) || ds.length === 0)
    {
        console.log("Danh sách rỗng!");
        return;
    }

    for (var sv of ds) {
        //Xếp loại dùng toán tử 3 ngôi
        var xepLoai = sv.diem >= 8 ? 'Giỏi' : sv.diem >= 6.5 ? 'Khá' : sv.diem >= 5 ? 'Trung binh' : 'Yếu';

        console.log(sv.id + " | " + sv.hoTen + " | " + sv.tuoi + " | " + sv.diem + " | " + xepLoai);
    }
}
console.log(themSinhVien(ds, {id: 4, hoTen: 'Lê Văn Trọng', tuoi: 19, diem:7 } ))
console.log(timTheoId(ds, 2));
console.log(capNhatDiem(ds, 3, 9.0));
console.log(xoaTheoId(ds, 2));
console.log(inDanhSach(ds));
*/

/* Bài 6 */
/*
// 1. Hàm đếm tần suất xuất hiện của từng ký tự
function demKyTu(chuoi) {
    if (typeof chuoi !== "string") return {};

    var ketQua = {};
    // Chuyển toàn bộ chuỗi về chữ thường
    var chuoiThuong = chuoi.toLowerCase();

    for (var i = 0; i < chuoiThuong.length; i++) {
        var kyTu = chuoiThuong[i];

        // Bỏ qua khoảng trắng
        if (kyTu === " ") continue;

        // Nếu ký tự đã có trong object thì tăng lên 1, chưa có thì gán bằng 1
        if (ketQua[kyTu]) {
            ketQua[kyTu]++;
        } else {
            ketQua[kyTu] = 1;
        }
    }

    return ketQua;
}

// 2. Hàm tìm ký tự xuất hiện nhiều nhất (dùng for/in)
function kyTuNhieuNhat(chuoi) {
    var tanSuat = demKyTu(chuoi);
    var maxSoLan = 0;
    var kyTuMax = "";

    // Duyệt qua từng key (ký tự) trong object tanSuat
    for (var key in tanSuat) {
        if (tanSuat[key] > maxSoLan) {
            maxSoLan = tanSuat[key];
            kyTuMax = key;
        }
    }

    return kyTuMax;
}
var chuoiMau = ('Hoc JavaScript');
console.log(demKyTu(chuoiMau));
console.log(kyTuNhieuNhat(chuoiMau));
*/

/* Bai 7 */
/*
//Khởi tạo giỏ ban đầu
var gio = [
  { ten: 'Bàn phím', gia: 550000, soLuong: 2, danhMuc: 'phu-kien' },
  { ten: 'Chuột',    gia: 250000, soLuong: 1, danhMuc: 'phu-kien' },
  { ten: 'Màn hình', gia: 3200000, soLuong: 1, danhMuc: 'man-hinh' },
];
tongTien(gio); // 4550000

// 1. Map: Trả về mảng mới có thêm khoá thanhTien = gia * soLuong
function themThanhTien(gio) {
    return gio.map(function (item) {
        return Object.assign({}, item, { thanhTien: item.gia * item.soLuong });
    });
}

// 2. Filter: Lọc danh sách theo danh mục
function locTheoDanhMuc(gio, danhMuc) {
    return gio.filter(function (item) {
        return item.danhMuc === danhMuc;
    });
}

// 3. Reduce: Tính tổng tiền toàn bộ giỏ hàng
function tongTien(gio) {
    return gio.reduce(function (tong, item) {
        return tong + (item.gia * item.soLuong);
    }, 0);
}

// 4. Map + Join: Lấy danh sách tên sản phẩm nối thành chuỗi 'A, B, C'
function tenSanPham(gio) {
    return gio.map(function (item) {
        return item.ten;
    }).join(', ');
}

// 5. Reduce: Tìm sản phẩm có đơn giá cao nhất
function sanPhamDatNhat(gio) {
    return gio.reduce(function (maxItem, currentItem) {
        return currentItem.gia > maxItem.gia ? currentItem : maxItem;
    });
}
console.log(themThanhTien(gio));
console.log(locTheoDanhMuc(gio, 'phu-kien'));
console.log(tongTien(gio)); // Đoán: 4550000
console.log(tenSanPham(gio)); // Đoán: 'Bàn phím, Chuột, Màn hình'
console.log(sanPhamDatNhat(gio)); // Đoán: Object Màn hình (3200000)
*/

/*Bai 9 */
/*
function kiemTraFrom(nguoiDung){
    var loi = [];

    if (!nguoiDung || typeof nguoiDung !== 'object'){
        return 'Dữ liệu không hợp lệ'
    }

    //Kiểm tra họ tên có rỗng sau khi trim không
    if (!nguoiDung.hoTen || nguoiDung.hoTen.trim() === ''){
        loi.push('Họ tên không được để trống');
    }

    //Kiểm tra email phải có @ và . 
    if (!nguoiDung.email || !nguoiDung.email.includes('@') || !nguoiDung.email.includes('.')){
        loi.push('Email không hợp lệ');
    }

    //Kiểm tra mật khẩu
    if (!nguoiDung.matKhau || nguoiDung.matKhau.length < 8){
        loi.push('Mật khẩu phải dài ít nhất 8 ký tự');
    } else {
        //tách mk thành mảng ký tự some
        var mangKyTu = nguoiDung.matKhau.split('');
        var coChuSo = mangKyTu.some(function (char){
            return !isNaN(char) && char !== ' ';
        });

        if (!coChuSo) {
            loi.push('Mật khẩu phải có ít nhất 1 chữ số');
        }
    }

    //Kiểm tra tuổi
    if (typeof nguoiDung.tuoi !== 'number' || nguoiDung.tuoi < 16 || nguoiDung.tuoi > 100){
        loi.push('Tuổi phải từ 16 đến 100');
    }

    //Kiểm tra sở thích 
    if (!Array.isArray(nguoiDung.soThich) || nguoiDung.soThich.length === 0){
        loi.push('Phải chọn ít nhất một sở thích');
    }else {
        var hopLe = nguoiDung.soThich.every(function (item){
            return typeof item === 'string' && item.trim() !== '';
        });

        if (!hopLe) {
            loi.push('Sở thích không được chứa giá trị rỗng');
        }
    }
    return loi;
}

console.log("=== TEST BÀI 9 ===");

// Test trường hợp dữ liệu sai toàn bộ
var duLieuLoi = {
    hoTen: '   ',
    email: 'abc@gmail',
    matKhau: 'abcdefgh',
    tuoi: 15,
    soThich: []
};

console.log("1. Kiểm tra form lỗi:");
console.log(kiemTraFrom(duLieuLoi));

// Test trường hợp dữ liệu hợp lệ
var duLieuChuan = {
    hoTen: 'Nguyễn Văn A',
    email: 'ana@gmail.com',
    matKhau: 'abcdefe2',
    tuoi: 20,
    soThich: ['Đọc sách', 'Đá bóng']
};

console.log("\n2. Kiểm tra form hợp lệ:");
console.log(kiemTraFrom(duLieuChuan)); // Trả về mảng rỗng []
*/

/*Bai 10*/
/*
// 1. Tạo số nguyên ngẫu nhiên trong khoảng [min, max]
function taoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Tạo mã OTP độ dài tùy chọn
function taoMaOTP(doDai) {
    var otp = '';
    for (var i = 0; i < doDai; i++) {
        var soNgauNhien = taoSoNgauNhien(0, 9);
        otp = otp + soNgauNhien;
    }
    return otp;
}

// 3. Tạo mật khẩu ngẫu nhiên (chữ hoa, chữ thường, số)
function taoMatKhau(doDai) {
    var kyTu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var matKhau = '';
    for (var i = 0; i < doDai; i++) {
        var viTriNgauNhien = Math.floor(Math.random() * kyTu.length);
        matKhau += kyTu.charAt(viTriNgauNhien);
    }
    return matKhau;
}

// 4. Trò chơi đoán số
function choiDoanSo() {
    var soBiMat = taoSoNgauNhien(1, 100);
    var luotDoan = 0;
    var toiDaLuot = 7;
    var doanDung = false;

    console.log("=== BẮT ĐẦU TRÒ CHƠI ĐOÁN SỐ (1 - 100) ===");

    do {
        luotDoan++;
        var nhap = prompt("Lượt " + luotDoan + "/" + toiDaLuot + ": Nhập số bạn đoán (1-100) hoặc gõ 'huy' để thoát:");

        // Nếu bấm Cancel hoặc nhập 'huy'
        if (nhap === null || nhap.trim().toLowerCase() === 'huy') {
            console.log("Đã thoát game.");
            return;
        }

        var soDoan = Number(nhap);

        if (isNaN(soDoan)) {
            alert("Vui lòng nhập một số hợp lệ!");
            luotDoan--; // Không tính lượt nếu nhập sai định dạng
            continue;
        }

        if (soDoan === soBiMat) {
            console.log("Chúc mừng! Bạn đã đoán đúng số " + soBiMat + " ở lượt thứ " + luotDoan + "!");
            doanDung = true;
            break;
        } else if (soDoan < soBiMat) {
            alert("Lớn hơn! (Số secret lớn hơn số bạn vừa nhập)");
        } else {
            alert("Nhỏ hơn! (Số secret nhỏ hơn số bạn vừa nhập)");
        }

    } while (luotDoan < toiDaLuot);

    if (!doanDung) {
        console.log("Bạn đã hết 7 lượt đoán! Số bí mật là: " + soBiMat + ". Bạn đã thua.");
    }
}

// 5. Thống kê số lần xuất hiện mặt xúc xắc
function thongKeRandom(soLan) {
    var dem = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    for (var i = 0; i < soLan; i++) {
        var mat = taoSoNgauNhien(1, 6);
        dem[mat]++;
    }

    console.log("Thống kê " + soLan + " lần gieo xúc xắc:");
    for (var mặt in dem) {
        console.log("Mặt " + mặt + ": " + dem[mặt] + " lần");
    }
}
console.log(taoSoNgauNhien(3, 66));
console.log(taoMaOTP(6));
console.log(taoMatKhau(10));
console.log(choiDoanSo());
console.log(thongKeRandom())
*/

/* Bài 11 */
/*
// 1. Định dạng ngày 'DD/MM/YYYY'
function dinhDangNgay(date) {
    var ngay = date.getDate();
    var thang = date.getMonth() + 1; // Month bắt đầu từ 0
    var nam = date.getFullYear();

    if (ngay < 10) {
        ngay = '0' + ngay;
    }
    if (thang < 10) {
        thang = '0' + thang;
    }

    return ngay + '/' + thang + '/' + nam;
}

// 2. Lấy thứ trong tuần bằng mảng tra cứu
function thuTrongTuan(date) {
    var cacThu = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var viTri = date.getDay();
    return cacThu[viTri];
}

// 3. Tính tuổi chính xác
function tinhTuoi(ngaySinh) {
    var homNay = new Date();
    var tuoi = homNay.getFullYear() - ngaySinh.getFullYear();

    var thangHienTai = homNay.getMonth();
    var thangSinh = ngaySinh.getMonth();

    if (thangHienTai < thangSinh) {
        tuoi--;
    } else if (thangHienTai === thangSinh && homNay.getDate() < ngaySinh.getDate()) {
        tuoi--;
    }

    return tuoi;
}

// 4. Tính số ngày còn lại
function soNgayConLai(ngayDich) {
    var homNay = new Date();
    
    var msHomNay = homNay.getTime();
    var msDich = ngayDich.getTime();

    var khoangCachMs = msDich - msHomNay;
    var soNgay = Math.ceil(khoangCachMs / (1000 * 60 * 60 * 24));

    return soNgay;
}

// 5. Kiểm tra năm nhuận
function laNamNhuan(nam) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
        return true;
    }
    return false;
}

// 6. Lấy số ngày trong tháng
function soNgayTrongThang(thang, nam) {
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        return 31;
    }
    if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        return 30;
    }
    if (thang === 2) {
        if (laNamNhuan(nam)) {
            return 29;
        } else {
            return 28;
        }
    }
}
console.log(dinhDangNgay(new Date(2026, 7, 18))); // '18/08/2026'
console.log(laNamNhuan(2024));                    // true
console.log(soNgayTrongThang(2, 2026));           // 28
*/

/* Bai 8 */
/*
var gio = [
    { ten: 'Bàn phím', gia: 550000, soLuong: 2, danhMuc: 'phu-kien' },
    { ten: 'Chuột', gia: 250000, soLuong: 1, danhMuc: 'phu-kien' },
    { ten: 'Màn hình', gia: 3200000, soLuong: 1, danhMuc: 'man-hinh' }
];

// 1. Nhóm mảng tên sản phẩm theo danh mục
function nhomTheoDanhMuc(gio) {
    return gio.reduce(function (acc, item) {
        var dm = item.danhMuc;
        // Nếu danh mục chưa tồn tại trong object tích lũy thì khởi tạo mảng rỗng
        if (!acc[dm]) {
            acc[dm] = [];
        }
        acc[dm].push(item.ten);
        return acc;
    }, {});
}

// 2. Đếm số lượng sản phẩm theo danh mục
function demTheoDanhMuc(gio) {
    return gio.reduce(function (acc, item) {
        var dm = item.danhMuc;
        if (!acc[dm]) {
            acc[dm] = 0;
        }
        acc[dm] = acc[dm] + 1;
        return acc;
    }, {});
}

// 3. Tính tổng thành tiền (gia * soLuong) theo danh mục
function tongTienTheoDanhMuc(gio) {
    return gio.reduce(function (acc, item) {
        var dm = item.danhMuc;
        var thanhTien = item.gia * item.soLuong;
        if (!acc[dm]) {
            acc[dm] = 0;
        }
        acc[dm] = acc[dm] + thanhTien;
        return acc;
    }, {});
}
console.log(nhomTheoDanhMuc(gio)); // Đoán: { 'phu-kien': ['Bàn phím', 'Chuột'], 'man-hinh': ['Màn hình'] }
console.log(demTheoDanhMuc(gio)); // Đoán: { 'phu-kien': 2, 'man-hinh': 1 }
console.log(tongTienTheoDanhMuc(gio)); // Đoán: { 'phu-kien': 1350000, 'man-hinh': 3200000 }
*/

/* Bài 12 */
/*
// 1. myForEach
function myForEach(mang, callback) {
    for (var i = 0; i < mang.length; i++) {
        callback(mang[i], i, mang);
    }
}

// 2. myMap
function myMap(mang, callback) {
    var ketQua = [];
    for (var i = 0; i < mang.length; i++) {
        var res = callback(mang[i], i, mang);
        ketQua.push(res);
    }
    return ketQua;
}

// 3. myFilter
function myFilter(mang, callback) {
    var ketQua = [];
    for (var i = 0; i < mang.length; i++) {
        if (callback(mang[i], i, mang)) {
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}

// 4. mySome
function mySome(mang, callback) {
    for (var i = 0; i < mang.length; i++) {
        if (callback(mang[i], i, mang)) {
            return true;
        }
    }
    return false;
}

// 5. myEvery
function myEvery(mang, callback) {
    for (var i = 0; i < mang.length; i++) {
        if (!callback(mang[i], i, mang)) {
            return false;
        }
    }
    return true;
}

// 6. myReduce
function myReduce(mang, callback, giaTriBanDau) {
    var acc = giaTriBanDau;
    var start = 0;

    // Nếu không truyền giá trị ban đầu, lấy phần tử đầu tiên làm acc
    if (typeof giaTriBanDau === 'undefined') {
        acc = mang[0];
        start = 1;
    }

    for (var i = start; i < mang.length; i++) {
        acc = callback(acc, mang[i], i, mang);
    }
    return acc;
}

// 7. xuLyMang - Cho mảng đi qua lần lượt từng hàm trong mảng cacBuoc
function xuLyMang(mang, cacBuoc) {
    var ketQua = mang;
    for (var i = 0; i < cacBuoc.length; i++) {
        var fn = cacBuoc[i];
        ketQua = fn(ketQua);
    }
    return ketQua;
}

console.log("\n=== TEST BÀI 12 ===");

var mangMau = [1, 2, 3, 4, 5, 6];

// Test xuLyMang
var ketQuaXuLy = xuLyMang(mangMau, [
    function (m) {
        return myFilter(m, function (x) {
            return x % 2 === 0;
        });
    },
    function (m) {
        return myMap(m, function (x) {
            return x * 10;
        });
    }
]);

console.log("Kết quả xuLyMang:", ketQuaXuLy);
// Đoán: [20, 40, 60]

// Test myReduce
var tong = myReduce(mangMau, function (acc, item) {
    return acc + item;
}, 0);

console.log("Tổng mảng bằng myReduce:", tong);
// Đoán: 21
/*console.log(xuLyMang([1, 2, 3, 4, 5, 6], [
  function (m) { return myFilter(m, function (x) { return x % 2 === 0; }); },
  function (m) { return myMap(m, function (x) { return x * 10; }); },
]));*/

/* Bài 13 */
/*
// 1. Tính giai thừa n! = n * (n - 1)!
function giaiThua(n) {
    if (n <= 1) return 1;
    return n * giaiThua(n - 1);
}

// 2. Tìm số Fibonacci thứ n (f(1) = 1, f(2) = 1, f(n) = f(n-1) + f(n-2))
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 3. Tính tổng dãy S(n) = 1 + 2 + ... + n
function tongDay(n) {
    if (n <= 1) return n;
    return n + tongDay(n - 1);
}

// 4. Đảo ngược chuỗi bằng đệ quy
function daoNguocChuoi(s) {
    if (s === "") return "";
    // Lấy ký tự cuối + đảo ngược phần còn lại trừ ký tự cuối
    return s.charAt(s.length - 1) + daoNguocChuoi(s.slice(0, -1));
}

// 5. Kiểm tra chuỗi đối xứng (Palindrome)
function laChuoiDoiXung(s) {
    if (s.length <= 1) return true;
    // Nếu ký tự đầu và ký tự cuối khác nhau -> false
    if (s.charAt(0) !== s.charAt(s.length - 1)) return false;
    // Cắt bỏ ký tự đầu và cuối rồi đệ quy kiểm tra phần còn lại
    return laChuoiDoiXung(s.slice(1, -1));
}

// 6. Làm phẳng mảng lồng nhau nhiều tầng
function lamPhang(mang) {
    // Dùng concat kết hợp slice/đệ quy
    if (!Array.isArray(mang) || mang.length === 0) return [];

    var dau = mang[0];
    var duoi = mang.slice(1);

    var mangDau = Array.isArray(dau) ? lamPhang(dau) : [dau];
    var mangDuoi = lamPhang(duoi);

    return mangDau.concat(mangDuoi);
}

// 7. Cộng mọi giá trị số trong object lồng nhau
function tongTatCaSo(obj) {
    var tong = 0;

    // Dùng đệ quy trên mảng keys của object
    function duyetKeys(keys, idx) {
        if (idx >= keys.length) return 0;

        var key = keys[idx];
        var giaTri = obj[key];
        var giaTriKeyHienTai = 0;

        if (typeof giaTri === 'number') {
            giaTriKeyHienTai = giaTri;
        } else if (typeof giaTri === 'object' && giaTri !== null) {
            giaTriKeyHienTai = tongTatCaSo(giaTri);
        }

        return giaTriKeyHienTai + duyetKeys(keys, idx + 1);
    }

    var dsKeys = Object.keys(obj);
    return duyetKeys(dsKeys, 0);
}
console.log("giaiThua(5):", giaiThua(5)); 
console.log("fibonacci(6):", fibonacci(6)); 
console.log("tongDay(10):", tongDay(10)); 
console.log("daoNguocChuoi('hello'):", daoNguocChuoi('hello')); 
console.log("laChuoiDoiXung('radar'):", laChuoiDoiXung('radar')); 
console.log("laChuoiDoiXung('hello'):", laChuoiDoiXung('hello')); 
console.log("lamPhang([1, [2, [3, [4, 5]], 6]]):", lamPhang([1, [2, [3, [4, 5]], 6]])); 
console.log("tongTatCaSo({ a: 1, b: { c: 2, d: { e: 3 } } }):", tongTatCaSo({ a: 1, b: { c: 2, d: { e: 3 } } }));
*/

/*Bai 14 */

//giải thích: innerText → lấy chữ mà người dùng nhìn thấy, textContent → lấy toàn bộ chữ bên trong còn innerHTML → lấy cả HTML bên 

// 1. Lấy tất cả li.mon bằng querySelectorAll và in ra innerText
var danhSachMon = document.querySelectorAll('li.mon');

console.log('--- 1. Danh sách môn học ---');
for (var i = 0; i < danhSachMon.length; i++) {
    console.log(danhSachMon[i].innerText);
}

// 2 & 3 & 4. Đọc điểm, tính điểm TB, sửa môn < 5, gắn attribute title
var tongDiem = 0;

for (var i = 0; i < danhSachMon.length; i++) {
    var monElement = danhSachMon[i];
    
    // Đọc điểm qua getAttribute('data-diem') và ép kiểu về Number
    var diem = Number(monElement.getAttribute('data-diem'));
    tongDiem = tongDiem + diem;

    // Yêu cầu 3: Nếu điểm < 5, bọc tên môn trong <strong> và thêm chữ (cần cải thiện)
    if (diem < 5) {
        var tenMonHienTai = monElement.innerText;
        monElement.innerHTML = '<strong>' + tenMonHienTai + '</strong> (cần cải thiện)';
    }

    // Yêu cầu 4: Dùng setAttribute gắn title là 'Điểm: [số điểm]'
    monElement.setAttribute('title', 'Điểm: ' + diem);
}

// Tính điểm trung bình và ghi vào #ket-qua bằng textContent
var diemTrungBinh = tongDiem / danhSachMon.length;
var ketQuaElement = document.querySelector('#ket-qua');
// Làm tròn 2 chữ số thập phân
ketQuaElement.textContent = 'Điểm trung bình: ' + diemTrungBinh.toFixed(2);

// 5. In các thuộc tính Node & Element Properties
var ulDanhSach = document.querySelector('#danh-sach');
var monDauTien = danhSachMon[0];

console.log('\n--- 5. Thông tin Node / DOM Properties ---');
console.log('nodeName của #danh-sach:', ulDanhSach.nodeName);
console.log('Số phần tử con (children.length):', ulDanhSach.children.length);
console.log('firstElementChild.innerText:', ulDanhSach.firstElementChild.innerText);
console.log('lastElementChild.innerText:', ulDanhSach.lastElementChild.innerText);
console.log('parentNode.nodeName của li đầu tiên:', monDauTien.parentNode.nodeName);

/* Bài 15 */

var nhanVien = [
    { id: 1, ten: 'An', phong: 'Dev', luong: 20000000, namVao: 2021 },
    { id: 2, ten: 'Bình', phong: 'Design', luong: 15000000, namVao: 2023 },
    { id: 3, ten: 'Cường', phong: 'Dev', luong: 28000000, namVao: 2019 },
    { id: 4, ten: 'Dung', phong: 'QA', luong: 17000000, namVao: 2022 }
];

// 1. Hàm định dạng tiền tệ không dùng thư viện ('20.000.000 đ')
function dinhDangTien(so) {
    var chuoiSo = so.toString();
    var ketQua = '';
    var dem = 0;

    for (var i = chuoiSo.length - 1; i >= 0; i--) {
        dem++;
        ketQua = chuoiSo.charAt(i) + ketQua;
        if (dem % 3 === 0 && i !== 0) {
            ketQua = '.' + ketQua;
        }
    }

    return ketQua + ' đ';
}

// 2. Hàm tạo bảng HTML
function taoBang(ds) {
    var namHienTai = new Date().getFullYear();

    var trList = ds.map(function (nv, index) {
        var thamNien = namHienTai - nv.namVao;
        var stt = index + 1;

        return '<tr data-id="' + nv.id + '">' +
            '<td>' + stt + '</td>' +
            '<td>' + nv.ten + '</td>' +
            '<td>' + nv.phong + '</td>' +
            '<td>' + dinhDangTien(nv.luong) + '</td>' +
            '<td>' + thamNien + ' năm</td>' +
            '</tr>';
    });

    var htmlTable = '<table>' +
        '<thead>' +
        '<tr>' +
        '<th>STT</th>' +
        '<th>Tên</th>' +
        '<th>Phòng</th>' +
        '<th>Lương</th>' +
        '<th>Thâm niên</th>' +
        '</tr>' +
        '</thead>' +
        'tbody>' + trList.join('') + '</tbody>' +
        '</table>';

    return htmlTable;
}

// 3. Render bảng vào #app
var appElement = document.querySelector('#app');
var htmlBang = taoBang(nhanVien);

// 4. Tạo khối tổng kết bằng reduce
var tongQuyLuong = nhanVien.reduce(function (acc, nv) {
    return acc + nv.luong;
}, 0);

var luongTrungBinh = tongQuyLuong / nhanVien.length;

var demTheoPhong = nhanVien.reduce(function (acc, nv) {
    var phong = nv.phong;
    if (!acc[phong]) {
        acc[phong] = 0;
    }
    acc[phong] = acc[phong] + 1;
    return acc;
}, {});

// Chuỗi HTML cho số nhân viên theo phòng
var chuoiPhong = Object.keys(demTheoPhong).map(function (phong) {
    return phong + ': ' + demTheoPhong[phong] + ' người';
}).join(', ');

var htmlTongKet = '<div class="tong-ket">' +
    '<h3>Khối Tổng Kết</h3>' +
    '<p><strong>Tổng quỹ lương:</strong> ' + dinhDangTien(tongQuyLuong) + '</p>' +
    '<p><strong>Lương trung bình:</strong> ' + dinhDangTien(Math.round(luongTrungBinh)) + '</p>' +
    '<p><strong>Số nhân viên theo phòng:</strong> ' + chuoiPhong + '</p>' +
    '</div>';

// Gán toàn bộ vào #app qua innerHTML
appElement.innerHTML = htmlBang + htmlTongKet;

// 5. Kiểm chứng bằng querySelectorAll('tbody tr')
var dsDong = document.querySelectorAll('tbody tr');
console.log('--- KIỂM CHỨNG DOM ---');
console.log('Số dòng render trong DOM:', dsDong.length);
console.log('Số phần tử mảng nhanVien:', nhanVien.length);
console.log('Khớp dữ liệu?:', dsDong.length === nhanVien.length);

// 6. Lấy data-id dòng cuối cùng
var dongCuoiCung = dsDong[dsDong.length - 1];
var idDongCuoi = dongCuoiCung.getAttribute('data-id');
console.log('data-id của dòng cuối cùng:', idDongCuoi);