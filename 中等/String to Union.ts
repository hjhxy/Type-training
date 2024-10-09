type Test = "123"


type StringToUnion<T extends string> = T extends `${infer F}${infer REST}` ? F | StringToUnion<REST> : never;


type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"




export { }