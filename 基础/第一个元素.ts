type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []
type p = arr3 extends never[] ? 'true' : 'false';
type person = {
    name: string,
    age: number,
};

// 获取属性名与属性值，普通对象类型与数组/元组类型。
type First<T extends any[]> = T extends [infer F] ? F : never;

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3
type head3 = First<arr3> // 应推导出 never


type Second<T extends { name: any }> = T['name']
type s1 = Second<person> // 