type getReturn<T> = T extends () => infer R ? R : never;


type Idata = {}
interface IOptions {
    data: Idata,
    computed: {
        [key: string]: {
            get?: () => any,
            set?: () => any,
        } | (() => any),
    },
    methods: {
        [key: string]: any,
    },
}

declare function SimpleVue(options: IOptions): any;

const instance = SimpleVue({
    data() {
        return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
        }
    },
    computed: {
        fullname() {
            return this.firstname + ' ' + this.lastname + ' ' + this.testname;
        }
    },
    methods: {
        hi() {
            alert(this.fullname.toLowerCase())
        }
    }
})

// 定义 this 的接口
interface ITest {
    getName: () => void;
}

// 构造函数中显式声明 this 的上下文类型
function Test(this: ITest) {
    this.getName();
}

// 给 prototype 添加方法
Test.prototype.getName = function () {
    console.log('zxy');
};

// 使用构造函数
const t = new (Test as any)(); // 注意，TypeScript 不允许 new 操作符直接用于没有类定义的构造函数，使用 `as any`


export { }
