const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello typescript'

const numberArray: number[] = [1,2,3,3,4,5]
const numberArray2: Array<number> = [1,2,3,3,4,5,13]

const words: string[] = ['Hello', 'Typescript']

// Tupple
const contact: [string, number] = ['Andrii', 123]

// Any
let variable: any = 42
variable = 'New string'
variable = []

// =====
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Hayzenberg')

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login =2    ====>> error

type ID = string | number
const id1: ID = 1234
const id2: ID = 'jdjdj'
// const id3: ID = true   ====>> error

type SomeType = string | null | undefined


