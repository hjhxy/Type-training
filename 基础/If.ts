


// type t = true extends true ? 'true' : 'false';

type If<T extends boolean, V1, V2> = T extends true ? V1 : V2;

type A = If<true, 'a', 'b'>  // expected to be 'a'

type B = If<false, 'a', 'b'> // expected to be 'b'