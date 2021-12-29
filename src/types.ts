import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

export type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

// type DamageLogger = (reason: string) => void;

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type СreateCustomerFunctionType = typeof createCustomer;

export type fn = (p1: string, p2: number, p3: boolean) => symbol;

type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type dataType = Unpromisify<p>;

type p = ReturnType<typeof getBooksByCategoryPromise>;
// Unpomisify<Promise<string[]>> => string[];
