
// const res = number extends object?

type personType = {
    name: string,
    age: number,
}

type keyTypes = keyof personType; // 获取属性值，将属性值作为一个新的联合类型

const p: keyTypes = "name";
type pType = typeof p;

function sum() {
    return 1;
}

const fType: ReturnType<typeof sum> = 10;


export { }