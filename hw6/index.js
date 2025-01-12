/**
 * Дан адрес для получения информации: https://kodaktor.ru/j/numbers
 * сервер отдаёт в JSON-формате несколько чисел
 * нужно их прочитать и просуммировать
 * вторым шагом нужно обратиться к адресу для отправки информации
 * https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse
 * имя параметра, которое указывается в body: entry.364005965
 * и вот нужно написать код который обращается к первому адресу, прочитывает
 * и суммирует числа и далее записывает результат суммирования и в скобках вашу фамилию (латинскими буквами)
 * отправляя получившееся значение в виде одной строки методом POST в указанную форму
 * {
 *    name: string,
 *    value: number
 * }[]
 */
async function GetNumbers() {
   // получение данных
   const numbers = await fetch("https://kodaktor.ru/j/numbers")
      .then((res) => res.json())
      .then((res) => res.numbers)

   // суммирование
   const sum = numbers.reduce((cur, prev) => {
      if (!!cur.value) {
         return cur.value + prev.value
      }
      return cur + prev.value
   })

   // отправка запроса
   await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse",
      {
         method: "POST",
         body: JSON.stringify({
            "entry.364005965": `${sum} Shevelyov`,
         }),
      },
   )
      .then((res) => console.log)
      .catch((e) => console.error(e))
}

/**
 * Дан сервер времени https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg
 * Напишите код с использованием fetch который извлекает
 * из ответа этого сервера время в формате HH:MM:SS
 * и выводит в терминал только это значение из 8 символов
 */
;(async function GetTimeSPB() {
   const time = await fetch(
      "https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg",
   )
      .then((res) => res.text())
      .then((res) =>
         res
            .replace(/\r/, "")
            .match(/<span[^>]*id=["']theTime["'][^>]*>[^<]*<\/span>/g)
            .at(0)
            .match(/\b\d{1,2}:\d{2}:\d{2}\b/)
            .at(0),
      )
   console.log(time)
})()
