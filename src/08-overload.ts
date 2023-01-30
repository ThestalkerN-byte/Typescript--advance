// La sobre carga de funciones no sirve para arrow funcionts
// GENERO LAS SOBRE CARGAS
export function parseStr (input: string):string[];
export function parseStr (input: string[]):string;

export function parseStr (input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
}

const rtaArray = parseStr('germi')

//AL APLICAR LA SOBRE CARGA, LAS VARIABLES IDENTIFICAN QUE TIPO DE DATO SON

const rtaStr = parseStr(['g', 'e', 'r'])
