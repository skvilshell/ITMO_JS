/**
 * код функции task(x), возвращающей объект: у  объекта должно быть собственное перечислимое свойство login со строковым значением, равным вашему номеру в ИСУ. И ещё 3 свойства
   key1 – несобственное неперечислимое,
   key2 – несобственное перечислимое,
   key3 – собственное неперечислимое. 
   Их значениями должны быть числа от 2022 до 2024 соответственно. Не используйте proto и console.log в своём ответе
 */

function taskA() {
   const prototype = Object.create(null)
   Object.defineProperties(prototype, {
      key1: {
         value: 2022,
         enumerable: false,
         writable: true,
         configurable: true,
      },
      key2: {
         value: 2023,
         enumerable: true,
         writable: true,
         configurable: true,
      },
   })

   const obj = Object.create(prototype)
   Object.defineProperties(obj, {
      login: {
         value: "472665",
         enumerable: true,
         writable: true,
         configurable: true,
      },
      key3: {
         value: 2024,
         enumerable: false,
         writable: true,
         configurable: true,
      },
   })

   return obj
}

/**
 * Напишите код функции task(name, familyname, login), которая в
 * качестве конструктора создаёт объект с тремя собственными полями – name,
 * familyname и login. По умолчанию значение поля login – строковое значение,
 * равное вашему номеру в ИСУ. Кроме того, в прототипе должен быть метод getFullName,
 * который возвращает результат конкатенации name, familyname и восклицательного знака.
 */

function taskB(name, familyname, login = `472665`) {
   this.name = name
   this.familyname = familyname
   this.login = login
   this.getFullName = () => {
      return `${this.name} ${this.familyname}!`
   }
}

/**
 * Напишите функцию task, принимающую объект. У этого объекта есть цепочка прототипов. 
 * Т.е. у него самого есть прототип, у этого прототипа есть прототип и так далее до шага, 
 * на котором очередным прототипом оказывается null. Функция должна возвращать число 
 * ненулевых прототипов. При передаче ей значения null она должна возвращать ваш номер в ИСУ. 
 * Функция должна быть одна - task. Не используйте console.log
 */

function taskC(obj){
   if(obj == null) return '472665'
   const MAX_VALUE = 1.7976931348623157e+308
   let count = 0
   while((count < MAX_VALUE) && (obj != null)){
      obj = Object.getPrototypeOf(obj)
      ++count
   }

   return count -1
}