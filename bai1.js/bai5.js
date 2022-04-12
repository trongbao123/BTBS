/** 
 * khối 1:Input
 * nhập số bất kỳ
 * 
 * khối2 : xử lý dữ liệu
 * B1; tạo biến gán giá trị khởi tạo
 * B2 xây dug công thức tính toán
 num1 = 12;
 num2 = 44;
 num3 = 83;
 ten = 0;
 unit = 0;
 sum = 0;

 ten = Math.floor(num1/10);
 ten = Math.floor(num2/10);
 ten = Math.floor(num3/10);

unit = Math.floor(num1%10);
unit = Math.floor(num2%10);
unit = Math.floor(num3%10);

sum =  ten + unit;

 *
 * B3 Hiển thị kết quả(consol.log)
 * 
 * khối 3: output
 * tính tổng 2 ký số của số vừa nhập
 */

 var num1 = 12;
 var num2 = 44;
 var num3 = 83;
 var ten = 0;
 var unit = 0;
var sum = 0;

ten = Math.floor(num1/10);
console.log(ten);

unit = Math.floor(num1%10);
console.log(unit);

sum =  ten + unit;
console.log("tổng 2 số " +sum);

ten = Math.floor(num2/10);
console.log(ten);

unit = Math.floor(num2%10);
console.log(unit);

sum =  ten + unit;
console.log("tổng 2 số " +sum);

ten = Math.floor(num3/10);
console.log(ten);

unit = Math.floor(num3%10);
console.log(unit);

sum =  ten + unit;
console.log("tổng 2 số " +sum);