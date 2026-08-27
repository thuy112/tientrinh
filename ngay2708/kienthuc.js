/* ÔN LẠI KIẾN THỨC JS CƠ BẢN*/

/* PHẦN I: JS CƠ BẢN */
//I. Biến: var, let, const
    //let: có thể thay đổi giá trị
        let age = 20;
        age = 21;
    //const: không thể gán lại
        const name = "Thuỷ";
        name = "Lan"; //Lỗi không chạy được
    //var: khai báo cũ, nay ít sử dụng
        var x = 10;
//II. Kiểu dữ liệu: string, number, boolean, undefined, null, object, array
    const name = "Thủy";       // String: dữ liệu dạng chữ 
    // đặc biệt khi các con số có nháy "số" thì là string. CỨ CÓ DẤU "J ĐÓ Ở ĐÂY" ĐỀU LÀ STRING
    const age = 21;            // Number: có giá trị là 1 con số để tính toán 
    const isStudent = true;    // Boolean: có 2 giá trị duy nhất true, false
    // có thể kiểm tra đk hoặc tính gía trị đúng sai và trả về true hoặc false
    let x;                     // Undefined: là chưa gán giá trị cho nó, kiểu như chưa bỏ dữ liệu vào
    const y = null;            // Null: cố tình đặt là rỗng cho nó

    const user = {
        name/*key: tên thuộc tính*/: "Thủy"/*value: giá trị đc lưu của thuộc tính đó*/,
        age: 21
    }; // Object: gom nhiều thông tin liên quan vô 1 biến

    const numbers = [1, 2, 3]; //Array: mảng, dùng để lưu 1 danh sách có nhiều giá trị
    /*Array đánh số cho thứ tự từ 0-> */ const names = ["An: 0", "Bình: 1", "Thủy: 2"];
    //Kiểu array nhìn dễ nhất là trong có nhiều danh sách và đc ở trong ngoặc []
// Array + Object — cực kỳ quan trọng
    const users = [
        {
            name: "Thủy",
            age: 21
        },
        {
            name: "An",
            age: 20
        },
        {
            name: "Bình",
            age: 22
        }
    ];// mỗi {} là 1 object và mỗi {} là 1 số nếu lấy users[0] thì là thuỷ 21 
//Một điểm quan trọng: Array thực ra thuộc Object
    typeof []//là object
    //VD:
        const numbers = [1, 2, 3];
        console.log(typeof numbers); //object
        // Kiểm tra xem có phải array k thì 
            Array.isArray(numbers); //true 
// III. Toán tử
    //Số học: +, -, *, /, %, **:mũ
    //So sánh: >, <, >=, <=, ==, ===, !=, !===
        // ==: js sẽ giúp chuyển kiểu và chỉ quan tâm giá trị
        // ===: js không tự chuyển kiểu để coi chúng giống nhau và quan tâm giá trị + kiểu dữ liệu
        // !=: so sánh khác về giá trị
        // !==: so sánh khác về kiểu hoặc giá trị
    // !: phủ định: đảo ngược lị tất cả boolean
    // &&-and-và: tất cả đk phải đúng thì mới đúng k chỉ cần có 1 cái false thì sec false
    // ||-or-hoăc: ngược lại cái && là chỉ cần 1 true thì true còn false hết ms false
    // if/else: điều kiện nếu không
    // if/ else if: nhiều trường hợp đk VD: như tuổi hoặc tính điểm tb
    //Toán tử 3 ngôi ?: 
        //VD: 
            let result;
            if (age >= 18) {
                result = "Đủ tuổi";
            } else {
                result = "Chưa đủ tuổi";
            }
        // có thể viết
            const result = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi";
                       //điều kiện ? giá trị nếu đúng : giá trị nếu sai
    // for: vòng lặp
        for (let i = 0; i < 5; i++) { // khởi tạo; điều kiện; tăng phần tử
            console.log(i);
        }
// Function — hàm: Một khối code được đặt tên để có thể gọi và sử dụng lại.
        function sayHello() {
            console.log("Hello");
        }// khai báo ra nhưng chưa có nghĩa là nó chạy
        // muốn chạy: sayHello();
//Parameter và Argument và return
        const result = sum(10, 20);// 10,20: là argument: đối số
        function sum(a, b) { //a,b: là parameter: tham số
            return a + b; //kết thúc và trả giá trị từ function ra bên ngoài
        }   
// return: trả về giá trị và tiếp tục sd, khác console.log: chỉ in ra màn hình console

/* PHẦN II: ARRAY */
    const numbers = [1, 2, 3, 4, 5];
    // thêm cuối: push() vd: numbers.push(6);
    // xoá cuối: pop() vd: numbers.pop();
    // xoá đầu: shift() vd: numbers.shift();
    // thêm đầu: unshift() vd: numbers.unshift(0);
    // tìm kiếm: includes(): 
    // tìm vị trí: indexOf():
    // lấy ra 1 phần: slice() vd: const arr = [1, 2, 3, 4, 5];
    //                              arr.slice(1, 3); kq: [2,3]
    // thêm, xoá phần tử trực tiếp trên array

/* PHẦN III: ES6 CẦN ÔN THẬT KỸ */
        //1. LET VÀ CONST
            let age = 21;
            age = 22;
            console.log(age); // let là 1 biến có thể thay đổi giá trị

            const name = "Thuỷ"
            name = "An" // không thay đổi được 
        //2. LET VÀ CONST CÓ TRONG BLOCK SCOPE: Phạm vi khối
            if (true) {
                let age = 21;// block
            }
        //3. CHỨC NĂNG CỦA =>
            // Trước es6:
                function sum(a, b) {
                    return a + b;
                }
            // ES6:
                const sum = (a, b) => { //Tạo biến tên function = (tham số)=> 
                    return a + b;//trả về nôin dung
                };
            //Rút gọn
                const sum = (a, b) => a + b;
            // không có tham số
                const sayHello = () => { // thì phải có ()
                    console.log("Xin chào");
                };
            // có 1 tham số: bỏ () và ghi tham số vô
            // có nhiều tham số thì phải dùng ()
        //4. TEMPLATE LITERAL giúp viết chuỗi dễ dàng hơn.
            // trước ES6:
                const name = "Thủy";
                const age = 21;
                const text = "Tôi tên là " + name + ", tôi " + age + " tuổi";
            // ES6
                const text = `Tôi tên là ${name}, tôi ${age} tuổi`;
            // dùng dấu` và được gọi là backtick
            // dấu ${} có nghĩa là lấy giá trị và trả ra, có thể tính toán
        //5. DESTRUCTURING - Phân rã dữ liệu: lấy phần tử array hoặc object thành biến riêng
            // array destructuring: lấy theo vị trí
                const numbers = [10, 20, 30];
                // thường
                const a = numbers[0];
                const b = numbers[1];
                const c = numbers[2];
                //ES6 cho phép
                const [a, b, c] = numbers;// nó hoạt động vì array đếm từ 0->
            // bỏ qua phần tử trong Destructuring
                const [a, , c] = numbers; // kq: a=10,c=30
            // object destructuring: lấy theo key
                const user = {
                    name: "Thủy",
                    age: 21
                };
                // thông thường
                const name = user.name;
                const age = user.age;
                // ES6:
                const {name, age} = user;
            // đổi tên khi Destructuring Object
                const {name: userName} = user;// sẽ đổi user thành userName
        //6. SPREAD OPERATOR: trải các phần tử của Array/Object ra
            // spread với array: spread: trải ra
                const arr1 = [1, 2, 3];
                const arr2 = [...arr1];//...arr1 sẽ trải ra nên kq: [1,2,3]
            // spread nối array
                const result = [...arr1, ...arr2];
            // spread với object
                const newUser = {
                    ...user,
                    address: "Hà Nội"// thêm thuộc tính
                };
        //7. REST OPERATOR
            // cũng sd giống Spread nhưng rest là gom lại giá trị thành 1 array
        //8. DEFAULT PARAMETER - Tham số mặc định: là cách đặt trước 1 giá trị dự phòng cho tham số của hàm ngay khi khai báo
            //Dùng để tránh lỗi chương trình khi người gọi hàm quên truyền dữ liệu, giúp hàm vẫn tự chạy đúng logic mặc định mà bạn đã thiết lập sẵn.
                // Đặt sẵn giaGiam = 0 làm giá trị dự phòng
                function tinhTien(giaGoc, giaGiam = 0) {
                    return giaGoc - giaGiam;
                }
                tinhTien(100000);        // Không truyền giaGiam -> Tự lấy 0 -> Kết quả: 100000
                tinhTien(100000, 20000); // Có truyền giaGiam -> Lấy 20000 -> Kết quả: 80000
        //9. OBJECT SHORTHAND: có thể viết ngắn gọn hơn
            const name = "Thủy";
            const age = 21;
            // hay viết 
            const user = {
                name: name,
                age: age
            };
            // giờ viết có thể viết name: name, thành name
        //10. MAP() - biến đổi Array: dùng khi muốn biến đổi phần tử và tạo 1 array mới
            const numbers = [1, 2, 3];
            const result = numbers.map(item => item *2);// đoạn này sẽ biến đổi array
            // trả về result mới với array mới là [2, 4, 6]
        //11. FILTER() - lọc array: cũng dùng giống map chỉ đổi tên và trong phần tử dùng điều kiện để lấy ptu đúng
        //12. FIND() - tìm phần tử đầu tiên: giống cách hoạt động của filter nhưng khác là nó chỉ lấy mỗi phần tử đầu tiên tm đk của nó
        //13. SOME() - có ít nhất 1 phần tử đúng
            const numbers = [1, 2, 3, 4];
            numbers.some(item => item > 3);// có 4>3 nên trả về true, còn k có ptu nào đúng thì trả về false
        //every() - tất cả đúng nếu có 1 cái không đúng sẽ tả về false
        //reduce() - gom nhiều giá trị thành 1 giá trị
        //item: phần tử hiện tại
        //14. OPTIONAL CHAINING ? - Nếu phần tử không tồn tại thì chương trình bị lỗi, còn khi thêm ? vào sau ptu muốn chạy nó sẽ trả về undefined nếu ptu không tồn tại
        //15. ?? - dùng đưa ra giá trị mặc định khi dữ liệu là null hoặc undefined
        //16. import và export
            //ES6 cho phép chia chương trình thành nhiều file nên 
            // vd: 1 file có tên math.js trong có 
                export const sum = (a,b) => a + b;
            // ở 1 file khác 
                import {sum} from "./math.js";
                console.log(sum(10,20)); //30
            //export default: 
                export default function hello() {// khi import thường không có {} và nó mặc định
                    console.log("Hello");
                }
        //17. Class - khuôn mẫu để tạo ra các Object có cùng cấu trúc và hành vi
        //18. constructor - là hàm được gọi khi tạo Object mới bằng new
                constructor("Thuỷ",21)

                
                