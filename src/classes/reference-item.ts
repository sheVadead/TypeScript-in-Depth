/* eslint-disable no-underscore-dangle */

import { timeout } from '../decorators';

export abstract class ReferenceItem {
    private _publisher: string;
    #id: number;
    static department: string = 'Classical Literature';
    get publisher() {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    // @timeout(3000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department ${ReferenceItem.department}`);
    }
    getID(): number {
        return this.#id;
    }
    abstract printCitation(): void;
}
