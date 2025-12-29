////// Bài tập ngày 27/12
////////////////////////////////////////////


// 1. Khai báo biến và console.log

// Khởi tạo biến
const name = "Cuong";
const age = 20;
const isStudent = false;

console.log(name, age, isStudent);

// khởi tạo và thay đổi giá trị
let a = 5;
let b = 10;
a = 10;
b = 5;

// 2. const let var

// const là khai báo hằng (không thể thay đổi giá trị sau khi khởi tạo)
// let là khai báo biến (có thể gán lại giá trị sau khi khởi tạo hoặc khai báo)

// const  = 10;
// x = 20; 
// ===> gây lỗi vì như đã nói ở trên, const không thể thay đổi giá trị


// 3. data type 

// xác địch cáo kiểu dữ liệu
// 100                      số
// "100"                    chuỗi
// true                     boolean
// [1, 2, 3]                array ( object đặc biệt)
// {name: "An", age: 20}    object
// null                     null
// undefined                undefined

// tạo object

const student = {
    name: "Cuong",
    age: 20,
    scores: [8, 9, 10]
}
console.log(student);


// 4. ép kiểu

const typeNum = Number("1000");
const typeSgtring1 = String(1000);
const typeSgtring2 = String(true);

console.log(typeNum, typeSgtring1, typeSgtring2);

// Phần 5: Truthy / Falsy (tư duy logic)

//  Boolean(0)	           false
//  Boolean(1)	           true
//  Boolean("")	           false
//  Boolean("hello")	   true
//  Boolean(null)	       false
//  Boolean([])	           true


// Phần 6: Array & bộ nhớ (liên hệ sơ đồ RAM)

const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0], numbers[4]);

// Giải thích bằng lời (không cần code):
// 	Vì sao khi gán:
// 		const a = numbers;
// 	thì a và numbers lại liên quan đến cùng một vùng nhớ?
//
// Vì number không phải giá trị nguyên thủy nên nó chỉ chứa địa chỉ dẫn đến cái mảng thực sự trong bộ nhớ.
// nên khi gán a = numbers thì chỉ làm việc đưa cái địa chỉ đó cho a thôi chứ không coppy ra mảng mới.
// nên 2 cái sẽ cùng trỏ đên 1 vùng nhớ