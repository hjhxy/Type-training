type getReturn<T> = T extends () => infer R ? R : never;

interface IOptions {
    data: () => getReturn<data>,
    computed: {
        [key: string]: () => any,
    },
    methods: {
        [key: string]: () => any,
    },
}
declare const SimpleVue: (options: IOptions) => any;

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
            return this.firstname + ' ' + this.lastname
        }
    },
    methods: {
        hi() {
            alert(this.fullname.toLowerCase())
        }
    }
})


export { }