import Encyclopedia from './classes/encyclopedia';
import { Category } from './enums';
import {
    logFirstAvailable,
    getAllBooks,
    logBookTitles,
    getBookTitlesByCategory,
    getBookAuthorByIndex,
    calcTotalPages,
    getAllLibraries,
    createCustomerID,
    createCustomer,
    getBookByID,
    checkoutBooks,
    getTitles,
    bookTitleTransform,
    printBook,
    getProperty,
    printRefBook,
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Author, Book, Librarian, Logger, Magazine } from './interfaces';
import { BookRequiredFields, PersonBook, Unpromisify, UpdatedBook, СreateCustomerFunctionType } from './types';
import { RefBook, ReferenceItem, UL, Shelf } from './classes';
import type { Library } from './classes/library';
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================================================

// ===============================================================

// Task 2.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages(getAllLibraries()));

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// const a = typeof 'Hello';
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// console.log(idGenerator('Boris', 2));

// Task 3.02
// createCustomer('Anna');
// createCustomer('Boris', 22);
// createCustomer('Ivan', 44, 'Minsk');
// const result = getBookTitlesByCategory(undefined);
// console.log(result);

// logFirstAvailable()

// console.log(getBookByID(1));
// const myBooks = checkoutBooks('Dmitry', 1,2,4);
// console.log(myBooks);

// Task 03.03
// console.log(getTitles('Evan Burchard'))

// Task 03.04
// console.log(bookTitleTransform('String'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason: string): void => {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// const myBook = new BookClass()
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: DamageLogger = (reason: string): void => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string): void => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favouriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBookPublished: 2,
// };

// const favouriteLibrarian: Librarian = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     department: 'Classical Literature',
//     assistCustomer: (name: string) => console.log(name),
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'isbn'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'title'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02 Task 06.03
// const refBook = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// const refBook = new RefBook(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);
// printRefBook(refBook);
// const univ = new UL.UniversityLibrarian();
// printRefBook(univ);
// refBook.printItem();
// let p = Object.getPrototypeOf(refBook);
// p = Object.getPrototypeOf(p);
// console.log(p);
// p['printItem']();

// Task 05.03
// const refBook = new Encyclopedia(1, 'Learn TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favouriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     email: 'anna@example.com',
//     category: Category.TypeScript,
//     available: false,
//     id: 1,
//     title: 'Learn TypeScript',
// };
// console.log(personBook);

// Task 06.05
// import * as module from './classes'
// const flag = true;
// if (flag) {
// const module = await import('./classes');
// const reader = new module.Reader();
// reader.name = 'Anna';
// console.log(reader);

//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }

// Task 06.06
// let lib: Library = new Library();
// let lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: '',
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const result = purge(inventory);
// const result: Book[] = purge(inventory);
// const result = purge<number>([1,2,3,4]);
// console.log(result);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach(book => bookShelf.add(book));
// const title: string = bookShelf.getFirst().title;
// console.log(bookShelf);
// console.log(title);

// const magazineShelf: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
// const magShelf = new Shelf<Magazine>();
// magazineShelf.forEach(mag => magShelf.add(mag));
// const title2: string = magShelf.getFirst().title;
// console.log(magShelf);
// console.log(title2);

// Task 07.03
// magShelf.printTitles();
// const magShelf2 = new Shelf();
// magShelf2.add({ title: '' });
// console.log(magShelf.find('Five Points'));
// const result = getProperty(magazineShelf[0], 'title');
// const result2 = getProperty<number, 'toString'>(10, 'toString');
// console.log(result);
// console.log(result2);

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     title: 'Unlnown',
//     available: false,
//     category: Category.CSS,
//     pages: 100,
//     markDamaged: null,
// };

// const updatedBook: UpdatedBook = {};
// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// const params: Parameters<typeof createCustomer> = ['Anna'];

// createCustomer(...params);

// Task 08.01
// const obj = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 1;

// Task 08.02
// const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

// Task 08.03
// const obj = new UL.UniversityLibrarian();
// obj.assistFaculty = null;
// obj.teachCommunity = null;
// const p = Object.getPrototypeOf(obj);
// p['assistFaculty'] = null;

// Task 08.04
// const enc = new RefBook(1, 'Learn TypeScript', 2021, 3);
// enc.printItem();

// Task 08.05, 08.06
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Anna';
// console.log(obj.name);
// obj.assistCustomer('Boris');

// Task 08.07
// const enc = new RefBook(1, 'Learn TypeScript', 2021, 3);
// enc.copies = 10;

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// const fn1 = (titles: string[]) => {
//     console.log(titles);
//     return Promise.resolve(titles.length.toString());
// };
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(fn1)
//     .then((len: Unpromisify<ReturnType<typeof fn1>>) => console.log(len))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript).catch(err => console.log(err));
// console.log('End');
