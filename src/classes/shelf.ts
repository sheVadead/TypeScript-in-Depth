import { Book, Magazine, ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T | undefined {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

// type A1 = Book | Magazine;

// export class Shelf2<T> {
//     private items: A1[] = [];

//     add(item: A1): void {
//         this.items.push(item);
//     }

//     getFirst(): A1 {
//         return this.items[0];
//     }
// }
