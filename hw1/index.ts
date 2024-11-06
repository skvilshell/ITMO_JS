/**
 * реализация метода крамера
 * @param n количество переменных
 */
export function homeWork1(n: number) {
   if (!n || typeof n != "number")
      throw new Error("не добавлен аргумент n или имеет тип отличный от number")

   const matrix = createMatrix(n)

   const solution = solveCramer(matrix)
   if (!!solution) console.log(solution)
}

function createMatrix(n: number) {
   const arr: number[][] = new Array(n).fill(new Array(n + 1).fill(0))
   //* Вывод строки
   let str = "введите коэф для "
   for (let i = 0; i <= n; i++) {
      let str2 = ""

      str += i != n ? `X${i + 1}, ` : `Y, для ${i + 1} уравнения`

      if (i == n) break

      for (let j = 0; j <= n; j++) {
         //* заполнение рандомными числами
         arr[i][j] = Math.round(
            Math.random() * 10 * (Math.random() < 0.5 ? -1 : 1),
         )
         //* Добавление в строку уравнения
         if (j == n) {
            str2 += ` = ${arr[i][j]}`
            break
         }
         str2 +=
            j == 0
               ? `(${arr[i][j]} * X${j + 1})`
               : `+(${arr[i][j]} * X${j + 1})`
      }

      console.log(str2)
   }

   return arr
}

function determinant(matrix: number[][]) {
   const n = matrix.length
   if (n === 1) return matrix[0][0]
   if (n === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
   }

   let det = 0
   for (let i = 0; i < n; i++) {
      const subMatrix = matrix
         .slice(1)
         .map((row) => row.filter((_, j) => j !== i))
      det += matrix[0][i] * determinant(subMatrix) * (i % 2 === 0 ? 1 : -1)
   }
   return det
}

function solveCramer(equations: number[][]) {
   const n = equations.length
   const matrixA = equations.map((row) => row.slice(0, n))
   const vectorB = equations.map((row) => row[n])

   const detA = determinant(matrixA)
   if (detA === 0) {
      console.error("Система уравнений не имеет единственного решения.")
      return undefined
   }

   const solutions = []
   for (let i = 0; i < n; i++) {
      const matrixAi = matrixA.map((row, j) =>
         row.map((val, k) => (k === i ? vectorB[j] : val)),
      )
      const detAi = determinant(matrixAi)
      solutions.push(detAi / detA)
   }

   return solutions
}
