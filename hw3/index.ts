/**
 * код функции (function task(x)), которая в своём
 * теле не содержит инструкций if.. else, for или
 * while и при этом возвращает ваш номер в МСУ
 * если x есть null, а иначе факториал от x
 */

import factorial = require("@stdlib/math-base-special-factorial")


   function task(x) {
      return x === null ? "472665" : factorial(Number(x))
   }

   function task2(x){
      return typeof x == 'function' ? x() : '472665'
   }



