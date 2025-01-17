/**
 * Предоставьте код функции (function) task от одного 
 * аргумента x, которая возвращает промис, отвергающий 
 * с причиной 'no' если x >= 18, разрешённый в значение yes, 
 * если x < 18, либо в значение, равное вашему номеру в ИСУ, если x == 0.
 */

function taskA(x){
   return new Promise(function (res, rej){
      if(isNaN(Number(x))) rej('вы ввели не число')
      if(x == 0) res('472665')
      if(x >= 18) rej('no')
      if(x < 18) res('yes')
   })
}

/**
 * Предоставьте код async-функции task от одного аргумента x, которая 
 * возвращает в виде fullfilled промиса (строчное) значение свойства 
 * name переданного ей объекта (это значение само является установленным промисом), 
 * сконкатенированное с вашим номером в ИСУ
 */

async function taskB(x){
   const name = await x.name
   return `${name}472665`
}
