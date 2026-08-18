/*Bai 1:*/ 
/*
// Khai báo các biến thông tin cá nhân
var hoTen = 'Nguyễn Văn An';
var namSinh = 2006;
var ngheNghiep = 'Sinh viên';
var thanhPho = 'Đà Nẵng';

// Lấy năm hiện tại để tính tuổi động (không nhập số cứng)
var namHienTai = 2026;

// Tính tuổi từ năm sinh
var tuoi = namHienTai - namSinh;// lấy năm hiện tại trừ cho năm sinh sẽ ra số tuổi

// In kết quả ra console bằng phương thức nối chuỗi +
console.log('Xin chào, tôi là ' + hoTen); 
console.log('Tôi ' + tuoi + ' tuổi, đang là ' + ngheNghiep); // sẽ hiện ra la tôi song đến số tuổi mà dòng 9 chạy được rồi tuổi, đang là rồi hiện nghề nghiệp ở dòng 5.
console.log('Tôi sống tại ' + thanhPho);
*/

/* Bài 2*/
/*
// Dùng prompt nhận hai số từ người dùng
var nhapA = prompt("Nhập số a:");
var nhapB = prompt("Nhập số b:");

// Ép kiểu chuỗi sang số bằng Number()
var a = Number(nhapA);
var b = Number(nhapB);

// Tính toán các phép tính cơ bản
var tong = a + b;
var hieu = a - b;
var tich = a * b;

// Kiểm tra điều kiện mẫu số b phải khác 0 mới thực hiện phép chia
if (b !== 0) {
    var thuong = a / b;
    var soDu = a % b;

    console.log("Tổng: " + tong);
    console.log("Hiệu: " + hieu);
    console.log("Tích: " + tich);
    console.log("Thương: " + thuong);
    console.log("Số dư: " + soDu);
} else if (b === 0) {
    // Trường hợp nhập b = 0
    console.log("Tổng: " + tong);
    console.log("Hiệu: " + hieu);
    console.log("Tích: " + tich);
    console.log("Không thể chia cho 0");
}
*/

/*Bài 3:*/
/*
var x = 5;
console.log(x++);   // (1) đoán trước: x = 6( giảo thích đoán sai ghi luôn kết quả ra nhưng khi máy trả về thì nó sẽ trả x ban đầu song nó sẽ ghi ra x ban đầu chứ k ghi ra kết quả)
console.log(x);     // (2) đoán trước: x = 5(giải thích tưởng lấy x=5 là lấy cái ban đầu nhưng khi chạy dòng 57 nó đã ghi nhớ kết quả và trả về luôn là kết quả của x mới tính)
console.log(++x);   // (3) đoán trước: sẽ có x=6 nhưng có 1 cái copy tra ve nua là x ban đầu chưa cộng la = 5(cái này lộn sang x ban đầu và lộn sang hậu tố vs tiền tố cái này mới ghi luôn kết quả )

var y = 10;
y -= 3;
y *= 2;
console.log(y);     // (4) đoán trước: y = 14: vì khi tính y đầu nó sẽ gán lại y và sẽ tính ra y 2 và trả ra kết quả là 14.

var z = 4;
console.log(z-- - --z);  // (5) đoán trước: z = 2
console.log(z);          // (6) đoán trước: z = 4 (giải thích cũng lộn sang là lấy z ở dòng 66)
*/

/*Bài 4*/
/*
typeof 42 //number vì 42 là số nguyên
typeof '42' // string vì có'' nên 42 là chuỗi ký tự
typeof true // Boolean vì true thuộc kiểu luận lý đúng/sai 
typeof undefined // Khái niệm biến/giá trị chưa được định nghĩa thuộc kiểu Undefined.
typeof null // object vì null là 1 trong nhưng giá trị rỗng

'5' == 5 // true vì == tự ép '5' thành 5 để ss
'5' === 5 // sai vì === nó so sánh cả kiểu chuỗi lên '5' là chuỗi lên sai
0 == false // đúng (tương tự nó cũng giống số 5 là tự ép false thành 0)
0 === false // sai (ngược lại k ép và để luôn là false)
null == undefined // Đ vì khi so sánh tương đối == xem null và undefined bằng nhau.
null === undefined // s vì này là ss tuyệt đối

Number('abc') // NaN vì 'abc' chứa ký tự chữ nên không thể chuyển thành số hợp lệ
typeof Number('abc') //"number" vì mang giá trị NaN (không phải số hợp lệ), kiểu dữ liệu của NaN trong js vẫn được định nghĩa là Number.
Number('') === 0 // true vì '' ép chuỗi rỗng thành số 0, sau đó so sánh
isNaN('12a') // true vì hàm isNaN() ép chuỗi '12a' thành số 

//Nên luôn ưu tiên sử dụng === trong hầu hết các trường hợp lập trình để tránh việc Js tự động ép kiểu ngầm định gây ra những logic sai sót bất ngờ; chỉ xem xét dùng == khi muốn kiểm tra đồng thời một giá trị có phải là null hoặc undefined hay không.
*/

/* Bài 5*/
/*
// Dùng prompt nhận dữ liệu từ người dùng
var nhapVao = prompt("Nhập vào một số bất kỳ:");

// Kiểm tra dữ liệu đầu vào có phải là số hợp lệ không
if (nhapVao === null || nhapVao.trim() === "" || isNaN(nhapVao)) {
    // Trường hợp bấm Cancel, để trống hoặc nhập chuỗi ký tự không phải số
    console.log("Dữ liệu không hợp lệ");
} else {
    // Chuyển chuỗi hợp lệ sang kiểu Số
    var so = Number(nhapVao);

    // 1. Kiểm tra số dương, số âm hay số 0
    if (so > 0) {
        console.log("Là số dương");
    } else if (so < 0) {
        console.log("Là số âm");
    } else {
        console.log("Là số 0");
    }

    // 2. Kiểm tra số chẵn hay số lẻ
    if (so % 2 === 0) {
        console.log("Là số chẵn");
    } else {
        console.log("Là số lẻ");
    }

    // 3. Kiểm tra số nguyên hay số thập phân
    // Nếu lấy số đó chia lấy dư cho 1 mà bằng 0 thì là số nguyên
    if (so % 1 === 0) {
        console.log("Là số nguyên");
    } else {
        console.log("Là số thập phân");
    }
}
*/

/* Bài 6 */
/*
// Nhập điểm 3 môn từ prompt
var nhapToan = prompt("Nhập điểm Toán (0 - 10):");
var nhapVan = prompt("Nhập điểm Văn (0 - 10):");
var nhapAnh = prompt("Nhập điểm Anh (0 - 10):");

// Ép kiểu dữ liệu nhập vào sang kiểu Số
var diemToan = Number(nhapToan);
var diemVan = Number(nhapVan);
var diemAnh = Number(nhapAnh);

// 1. Kiểm tra điểm hợp lệ: Phải là số và nằm trong khoảng từ 0 đến 10
var toanHopLe = !isNaN(diemToan) && nhapToan.trim() !== "" && diemToan >= 0 && diemToan <= 10;
var vanHopLe = !isNaN(diemVan) && nhapVan.trim() !== "" && diemVan >= 0 && diemVan <= 10;
var anhHopLe = !isNaN(diemAnh) && nhapAnh.trim() !== "" && diemAnh >= 0 && diemAnh <= 10;

if (!toanHopLe || !vanHopLe || !anhHopLe) {
    // Nếu có ít nhất 1 môn nhập sai hoặc nằm ngoài [0, 10]
    console.log("Điểm nhập vào không hợp lệ! Vui lòng nhập số từ 0 đến 10.");
} else {
    // 2. Tính điểm trung bình
    var diemTB = (diemToan + diemVan + diemAnh) / 3;

    // 3. Xếp loại học lực dựa trên điểm trung bình
    var xepLoai = "";
    if (diemTB >= 8.5) {
        xepLoai = "Giỏi";
    } else if (diemTB >= 7.0) {
        xepLoai = "Khá";
    } else if (diemTB >= 5.0) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }

    // In kết quả điểm trung bình và xếp loại
    console.log("Điểm trung bình: " + diemTB);
    console.log("Xếp loại: " + xepLoai);

    // 4. Kiểm tra điều kiện điểm liệt (cả 3 môn đều >= 5)
    if (diemToan >= 5 && diemVan >= 5 && diemAnh >= 5) {
        console.log("Không có môn nào bị điểm liệt");
    } else {
        console.log("Có môn dưới 5 điểm");
    }
}
*/

/* Bài 7*/
/*
// Nhận tên từ người dùng
var nhapTen = prompt("Nhập tên riêng của bạn (1 từ):");

// 1. Kiểm tra người dùng bấm Cancel hoặc để trống
if (nhapTen === null) {
    console.log("Bạn chưa nhập tên.");
} else {
    // Loại bỏ khoảng trắng thừa ở 2 đầu bằng .trim()
    var tenSach = nhapTen.trim();

    // 2. Kiểm tra nếu sau khi trim mà chuỗi bị rỗng
    if (tenSach === "") {
        console.log("Bạn chưa nhập tên.");
    } else {
        // Lấy chữ cái đầu tiên và chuyển thành chữ HOA
        var chuDau = tenSach.charAt(0).toUpperCase();

        // Lấy phần còn lại của tên (từ vị trí 1 đến hết) và chuyển thành chữ THƯỜNG
        var phanConLai = tenSach.slice(1).toLowerCase();

        // Ghép 2 phần lại để được tên chuẩn hoá
        var tenChuanHoa = chuDau + phanConLai;

        // In tên đã chuẩn hoá và độ dài chuỗi bằng .length
        console.log("Tên chuẩn hoá: " + tenChuanHoa);
        console.log("Độ dài tên: " + tenChuanHoa.length);
    }
}
*/

/* Bài 8 */
/*
// Nhận email từ người dùng
var email = prompt("Nhập vào email của bạn:");

if (email === null || email.trim() === "") {
    console.log("Email không hợp lệ.");
} else {
    var emailSach = email.trim();
    
    // Tìm vị trí của ký tự '@'
    var viTriA = emailSach.indexOf("@");

    // Tách email thành 2 phần: người dùng và tên miền
    if(viTriA === -1 || viTriA === 0 || viTriA === emailSach.length -1){
        // Không có @ nằm đầu, giữa hoăc chuỗi không chứa @ thì không hợp lệ
        console.log("Email không hợp lệ.");
    } else {
        var tenNguoiDung = emailSach.slice(0, viTriA);
        var tenMien = emailSach.slice(viTriA);

        var doDaiTen = tenNguoiDung.length;

        // Nếu phần tên có 2 ký tự trở xuống -> Giữ nguyên, không che
        if (doDaiTen <= 2) {
            console.log("Email sau khi che: " + emailSach);
        } else {
            // Lấy 2 ký tự đầu
            var haiKyTuDau = tenNguoiDung.slice(0, 2);
            
            // Số lượng dấu * cần tạo = độ dài tên - 2
            var soDauSaoCanTao = doDaiTen - 2;

            // Tạo chuỗi dấu sao tương ứng (không dùng repeat)
            // Cắt chuỗi dấu * có sẵn đúng bằng số lượng cần che
            var dauSaoMau = "*****";
            var dauSaoDaChe = dauSaoMau.slice(0, soDauSaoCanTao);

            var emailChe = haiKyTuDau + dauSaoDaChe + tenMien;
            console.log("Email sau khi che: " + emailChe);
        }
    }
}
*/

/* Bài 9*/
/*
// Nhận mật khẩu từ người dùng
var matKhau = prompt('Nhập mật khẩu kiểm tra')

if ( matKhau === null) {
    console.log('Chưa nhập mật khẩu')
}else{
    //Khởi tạo biến đếm tổng điểm
    var tongDiem =  0;

    //Tiêu chí 1: dài từ 8 ký tự trở lên
    var tieuChi1 = matKhau.length >=8;
    if(tieuChi1){
        tongDiem = tongDiem + 1;
        console.log('Tiêu chí 1 độ dài từ 8 trở lên "đạt"')
    }else{
        console.log('Tiêu chí 1 độ dài dưới 8 "Không đạt')
    }

    //Tiêu chí 2: có ít nhất một chữ hoa
    var tieuChi2 = matKhau.toLowerCase() !== matKhau;
    if(tieuChi2){
        tongDiem = tongDiem + 1;
        console.log('Tiêu chí 2 có ít nhất một chữ hoa "đạt"')
    }else{
        console.log('Tiêu chí 2 có ít nhất một chữ hoa "Không đạt')
    }

    //Tiêu chí 3: có ít nhất 1 chữ thường
    var tieuChi3 = matKhau.toUpperCase() !== matKhau;
    if(tieuChi3){
        tongDiem = tongDiem + 1;
        console.log('Tiêu chí 3 có ít nhất một chữ thường "đạt"')
    }else{
        console.log('Tiêu chí 3 có ít nhất một chữ thường "Không đạt')
    }

    //Tiêu chí 4: không chưa dấu cách
    var tieuChi4 = !matKhau.includes(" ");
    if (tieuChi4) {
        tongDiem = tongDiem + 1;
        console.log("✔ Tiêu chí 4: Không chứa dấu cách (Đạt)");
    } else {
        console.log("✘ Tiêu chí 4: Không chứa dấu cách (Không đạt)");
    }

    //In tổng điểm
    console.log("---");
    console.log("Tổng điểm: " + tongDiem + "/4");

    // Đánh giá độ mạnh/yếu của mật khẩu
    if (tongDiem === 4) {
        console.log("Đánh giá: Mật khẩu Mạnh");
    } else if (tongDiem === 3) {
        console.log("Đánh giá: Mật khẩu Trung bình");
    } else {
        console.log("Đánh giá: Mật khẩu Yếu");
    }
}
*/

/* Bài 10*/
/*
// Nhập số kWh từ người dùng
var nhapKwh = prompt("Nhập số kWh điện tiêu thụ:");

// Ép kiểu dữ liệu sang kiểu Số
var kwh = Number(nhapKwh);

// Từ chối đầu vào âm, rỗng, hoặc không phải số
if (nhapKwh === null || nhapKwh.trim() === "" || isNaN(kwh) || kwh < 0) {
    console.log("Dữ liệu không hợp lệ! Vui lòng nhập số kWh là số không âm.");
} else {
    var tienTruocThue = 0;

    // Tính tiền điện trước thuế theo các bậc
    if (kwh <= 50) {
        tienTruocThue = kwh * 1806;
    } else if (kwh <= 100) {
        tienTruocThue = (50 * 1806) + ((kwh - 50) * 1866);
    } else if (kwh <= 200) {
        tienTruocThue = (50 * 1806) + (50 * 1866) + ((kwh - 100) * 2167);
    } else if (kwh <= 300) {
        tienTruocThue = (50 * 1806) + (50 * 1866) + (100 * 2167) + ((kwh - 200) * 2729);
    } else if (kwh <= 400) {
        tienTruocThue = (50 * 1806) + (50 * 1866) + (100 * 2167) + (100 * 2729) + ((kwh - 300) * 3050);
    } else {
        tienTruocThue = (50 * 1806) + (50 * 1866) + (100 * 2167) + (100 * 2729) + (100 * 3050) + ((kwh - 400) * 3151);
    }

    // Tính thuế VAT 8%
    var thueVat = tienTruocThue * 0.08;

    // Tổng phải trả (làm tròn về số nguyên bằng parseInt + 0.5)
    var tongPhaiTra = parseInt(tienTruocThue + thueVat + 0.5);

    // Tính giá trung bình mỗi kWh
    var giaTrungBinh = 0;
    if (kwh > 0) {
        var giaTho = tongPhaiTra / kwh;
        // Làm tròn 2 chữ số thập phân bằng mẹo toán tử số học
        giaTrungBinh = parseInt(giaTho * 100 + 0.5) / 100;
    }

    // In kết quả ra Console
    console.log("Tiền điện trước thuế: " + tienTruocThue + " VNĐ");
    console.log("Thuế VAT (8%): " + thueVat + " VNĐ");
    console.log("Tổng phải trả: " + tongPhaiTra + " VNĐ");
    console.log("Giá trung bình mỗi kWh: " + giaTrungBinh + " VNĐ/kWh");
}
*/