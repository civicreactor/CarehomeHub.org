import {Injectable} from '@angular/core';
import infos from './mock-info-details';

@Injectable()
export class InfoService {

    findAll() {
        return Promise.resolve(infos);
    }

    findById(id) {
        return Promise.resolve(infos[id - 1]);
    }
}
