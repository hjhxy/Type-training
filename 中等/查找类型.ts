interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type Person = {
    type: 'person',
}

type MyPick<T, F extends keyof T> = T[F];

type t = MyPick<Cat, 'type'>;

type LookUp<T, F> = T extends { type: F } ? T['type'] : never;

type MyDog = LookUp<Cat | Dog, 'cat'> // expected to be `Dog`


export { }