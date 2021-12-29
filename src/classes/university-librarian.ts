import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    department: string;
    email: string;

    a: number = 100;
    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
    // @writable(true)
    assistFaculty(): void {
        console.log('Assistant Faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}
