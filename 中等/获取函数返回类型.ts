const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any) => infer R ? R : never;

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"