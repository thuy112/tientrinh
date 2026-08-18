/* Bài 1 */
/*
//Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    // Kiểm tra đầu vào hợp lệ: phải là số, là số nguyên và lớn hơn hoặc bằng 0
    if (typeof n !== 'number' || isNaN(n) || n < 0 || n % 1 !== 0) {
        return null;
    }
    
    // Các số nhỏ hơn 2 không phải số nguyên tố
    if (n < 2) {
        return false;
    }
    
    // Kiểm tra xem n có chia hết cho số nào từ 2 đến n - 1 không
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Tìm thấy ước số -> Không phải số nguyên tố
        }
    }
    
    return true; // Không chia hết cho số nào -> Là số nguyên tố
}

//Hàm tính giai thừa(dùng vòng lặp for)
function tinhGiaiThua(n) {
    //Đầu vào phải là số nguyên không âm
    if (typeof n !== 'number' || isNaN(n) || n < 0 || n % 1 !== 0) {
        return null;
    }

    var ketQua = 1;
    for (var i = 1; i <= n; i++){
        ketQua *=i;
    } 

    return ketQua;
}

//Hàm đếm dố chữ số của một số nguyên dương
function demChuSo(n){
    //Dau vao nguyen duong
    if (typeof n !== 'number' || isNaN(n) || n <= 0 || n % 1 !==0){
        return null;
    }

    //chuyen so thanh chuoi va lay do dai (.length)
    var chuoiSo = String(n);
    return chuoiSo.length;
}

//Ham tinh tong cac chu so dung while
function tongChuSo(n){
    //Dau vao la so nguyen duong
    if (typeof n !== 'number' || isNaN(n) || n <= 0 || n % 1 !== 0){
        return null;
    }

    var tong = 0;
    var soHienTai = n;

    //Dung vong lap While
    while (soHienTai > 0) {
        var chuSoCuoi = soHienTai % 10;
        //lay chu so don vi
        tong += chuSoCuoi;
        soHienTai = Math.floor(soHienTai / 10);
    }

    return tong;
}

console.log(laSoNguyenTo(17));  // true
console.log(laSoNguyenTo(1));   // false
console.log(tinhGiaiThua(5));   // 120
console.log(demChuSo(20260818));// 8
console.log(tongChuSo(1234));   // 10
console.log(tongChuSo(-5));     // null
*/

/* Bai 2 */
/*
//Ham in bang cuu chuong
function inBangCuuChuong(tu, den){
    //Kiem tra dau vao hop le
    if (typeof tu !== 'number' || typeof den !== 'number' || isNaN(tu) || isNaN(den) || tu < 1 || den < 1 || tu > den || tu % 1 !==0 || den % 1 !== 0){
        console.log('Dau vao khong hop le');
        return false;
    }
    var ketQua = "";

    //Vong lap ngoai: Duyet qua tung bang cuu chuong
    for (var i = tu; i <= den; i++) {
        //duyet qua so tu 1->10
        for (var j = 1; j <= 10; j++){
            var tich = i * j;

            //ep sang chuoi
            padStrart(2, ' ');
            var strI = String(i).padStart(2,' ');
            var strJ = String(j).padStart(2,' ');
            var stringTich = String(tich).padStart(3, ' ');

            ketQua += strI + " x " + strJ + " = " + stringTich + "\n";
        }
        //Them dong trong giua cac bang cua chuong
        if (i < den) {
            ketQua += "\n";
        }
    }
    //In ra toan bo ket qua
    console.log(ketQua);
    return true;
}

//Hamf in tam giac sao can voi do cao n
function inTamGiac(n){
    //Kiem tra dau vao:
    if (typeof n !== 'number' || isNaN(n) || n < 1 || n % 1 !==0){
        console.log('Dau vao khong hop le');
        return false;
    }

    var tamGiac = "";

    //duyet tu 1 den n
    for (var i = 1; i <= n; i++){
        //So khoang trang o dong i = n - i
        var soKhoangTrang = n - i;

        //So dau sao o dong i = 2* i - 1
        var soDauSao = 2* i - 1;

        // Tạo chuỗi khoảng trắng và chuỗi dấu sao cho dòng hiện tại
        var khoangTrang = " ".repeat(soKhoangTrang);
        var dauSao = "*".repeat(soDauSao);

        //Ghep dong va them ky tu xuong dong 
        tamGiac += khoangTrang + dauSao + "\n";
    }

    //In ra ket qua
    console.log(tamGiac);
    return true
}

inTamGiac(4);
*/

/* Bai 3*/

var diem = [7, 9.5, 4, 8, 6.5, 10, 3, 8];