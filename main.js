
n = +prompt('Введите число', '');
m = 'Простое число';

for (let i = 2; i < n; i++) {
   
    if (n % i == 0) {
        m = 'Cоставное число';
        break;
    }
}
console.log(m);









