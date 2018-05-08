import {Injectable} from '@angular/core';
import carehomes from './mock-carehomes';

@Injectable()
export class CarehomeService {

    findAll() {
        return Promise.resolve(carehomes);
    }

    findById(id) {
        return Promise.resolve(carehomes['locationId']);
    }

}
