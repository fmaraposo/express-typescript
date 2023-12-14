## Dependencias

"@types/express": para que typescript reconozca los tipados de diversas librerias
"ts-node-dev": es una especie de nodemon pero para typescript
"ts-standard": linter para typescript

## types.d.ts

Por defecto typescript busca este fichero con este nombre para tipar los objetos de nuestra app.
El types.d.ts es para definiciones, en cuanto ya le ponemos enums, lo tenemos que cambiar a types.ts

Sino puedes tener dos archivos, por ejemplo uno para enums enums.ts y el otro para types e interfaces que seria el types.d.ts

## Diferencia entre interfaz y tipos

Se deben usar interfaces cuanto tiens pensado en extender esa interfaz.

Por ejemplo:

    export interface DiaryEntry {
        id: number,
        date: string,
        weather: Weather,
        visibility: Visibility,
        comment: string
    }

    export interface SpecialDiaryEntry extends DiaryEntry {
        flightNumber: number
    }

En este caso SpecialDiaryEntry tiene todo el tipado de DiaryEntry mas flightNumber.

Hay tambien una diferencia que es que no puedes repetir los nombres en los tipos, mientras que en las interfaces si.
Basicamente, los tipos son mas fijos que las interfaces.

## Utility Types ##
Pick, Omit

## Enum ##

Es un tipo de datos de Typescript, que sirve para enumerar diferentes valores que puede tener una estructura.
Por ejemplo:

    export enum Weather {
        Sunny = 'sunny',
        Rainy = 'rainy',
        ...
    }

Por un lado te sirve para tipar la validez de tus datos, pero tambien lo podemos usar en el codigo en runtime.
Por ejemplo Object.values(Weather) => output seria un array de ['sunny', 'rainy', 'cloudy',  'windy', 'stormy']




