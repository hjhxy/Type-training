const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
// tuple[0] = "1"
// type t = keyof typeof tuple;


type person = {
    name: string,
    age: number,
}

// 得到value组成的联合类型
type getValue<T extends readonly any[]> = T[number];

// type t = getValue<typeof tuple>
// const p: t = 'tesla';

type TupleToObject<T extends readonly (any)[]> = {
    [k in getValue<T>]: k
}

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const r: result = {
    // 4: 4, // 估计记录的是元素的长度
    tesla: 'tesla',
    "model 3": 'model 3',
    "model X": 'model X',
    "model Y": 'model Y',
};