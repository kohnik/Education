//task 1 
let a = 7, b = 9;
console.log(a*b);

//task 2 
let c = 7, d = 9;
let out2 = document.querySelector('.out-2');
out2.textContent = c/d;

//task 3
let e = 3, f = 5;
let out3 = document.querySelector('.out-3');
out3.textContent = e+f;


//task 4
let e1 = '3', f1 = 5;
let out4 = document.querySelector('.out-4');
out4.textContent = e1+f1;


//task 5
let e2 = 3, f2 = 0;
let out5 = document.querySelector('.out-5');
out5.textContent = e2/f2;

//task 6
let e3 = 3, f3 = 'hello';
let out6 = document.querySelector('.out-6');
out6.textContent = e3+f3;

//task 7 
let e4 = 3, f4 = 'hello';
let out7 = document.querySelector('.out-7');
out7.textContent = e4*f4;

//task 8 
let button = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');
let input = document.querySelector('.i-8');

button.onclick = function() {
    out8.textContent = input.value;
    console.log(out8)
}

//task 9 
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');
let i9 = document.querySelector('.i-9');

b9.addEventListener('click', t9);
function t9 () {
    out9.textContent = i9.value;
    i9.value = '';
}

//task 10
let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');
let i10 = document.querySelector('.i-10');

b10.addEventListener('click', t10);

function t10 () {
    out10.textContent = i10.value*20;
}

//task 11                       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let b11 = document.querySelector('.b-11');
b11.addEventListener('click', t11);
function t11() {
    let out11 = document.querySelector('.out-11');
    let i11 = +document.querySelector('.i-11').value;
    out11.textContent = i11 +55;

}

//task 12
let b12 = document.querySelector('.b-12');
b12.addEventListener('click', t12);
function t12() {
    let i12_1 = document.querySelector('.i-12-1');
    let i12_2 = document.querySelector('.i-12-2');

    let out12 = document.querySelector('.out-12');

    out12.textContent = 'hello' + ' ' + i12_1.value + ' ' + i12_2.value;
}

//task 13       
let b13 = document.querySelector('.b-13');
b13.addEventListener('click', t13);
function t13() {
    let i13_1 = document.querySelector('.i-13-1').value;
    let i13_2 = document.querySelector('.i-13-2').value;
    let out13 = document.querySelector('.out-13');

    out13.textContent = +i13_1 + +i13_2;  
}

//task 14
let b14 = document.querySelector('.b-14');
b14.addEventListener('click', t14);
function t14() {
    let i14 = document.querySelector('.i-14');
    i14.value = 'Go';
};

//task 15
let b15 = document.querySelector('.b-15');
b15.addEventListener('click', t15);
function t15() {
    let i15 = document.querySelector('.i-15');
    i15.style.border = '4px solid red';
}

//task 16 
let b16 = document.querySelector('.b-16');
b16.addEventListener('click', t16);
function t16() {
    let i16_1 = document.querySelector('.i-16-1').value;
    let i16_2 = document.querySelector('.i-16-2').value;
    let out16 = document.querySelector('.out-16');

    out16.textContent = `${+i16_1 + +i16_2}`;
}

//task 17
let b17 = document.querySelector('.b-17');
b17.addEventListener('click', t17);
function t17() {
    let i17 = document.querySelector('.i-17').value;
    let out17 = document.querySelector('.out-17-1');
    out17.textContent = i17;
}

//task 18
let b18 = document.querySelector('.b-18');
b18.addEventListener('click', t18);
function t18 () {
    let a = document.querySelector('.i-18').value;
    let out18 = document.querySelector('.out-18');
    out18.textContent = `${parseFloat(a)}`
}

//task 19 
let b19 = document.querySelector('.b-19');
b19.addEventListener('click', t19);
function t19() {
    let out19 = document.querySelector('.out-19');
    let i19_1 = +document.querySelector('.i-19-1').value;
    let i19_2 = +document.querySelector('.i-19-2').value;

    out19.textContent = `${i19_1+i19_2}`;
}

//task 20 
let b20 = document.querySelector('.b-20');
b20.addEventListener('click', t20);
let number = 0;
let out20 = document.querySelector('.out-20');
function t20() {
    number = number + 1;
    out20.textContent = number;
}
