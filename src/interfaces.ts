import { Category } from './enums';

interface Book {
    id: number;
    author: string;
    title: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
    // markDamaged?(reason: string): void;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBookPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

// type Book = {
//     id: number;
//     author: string;
//     title: string;
//     available: boolean;
//     category: Category;
// };

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, titles: T): void;
}
export { Book, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem, LibMgrCallback, Callback };
