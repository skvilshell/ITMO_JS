/**
 * Практическое задание от 6 ноября. Напишите программу,
 * которая принимает на вход число. Она должна
 * вычислить, сколько простых чисел располагается
 * между числом 2 и этим числом N включительно
 * т.е. [2, N] и вывести результат в консоль
 */


// Функция для проверки, является ли число простым
function isPrime(num: number): boolean {
   if (num < 2) return false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) return false;
   }
   return true;
}

// Функция для подсчёта количества простых чисел в диапазоне [2, n]
function countPrimesUpTo(n: number): number {
   let count = 0;
   for (let num = 2; num <= n; num++) {
       if (isPrime(num)) {
           count++;
       }
   }
   return count;
}

export function homeWork2(n:number){
   if (isNaN(n)) {
      console.log("Пожалуйста, введите целое число.")
   } else if (n < 2) {
      console.log("В диапазоне [2, N] нет простых чисел.")
   } else {
      const result: number = countPrimesUpTo(n)
      console.log(`Количество простых чисел в диапазоне [2, ${n}]: ${result}`)
   }
}

