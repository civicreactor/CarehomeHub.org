import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InfoService} from '../../providers/info-details/info-service-mock';
import {InfoDetailsPage} from '../info-details/info-details';


@Component({
  selector: 'page-info-list',
  templateUrl: 'info-list.html',
})
export class InfoListPage {

    infolist: Array<any>;

    constructor(public navCtrl: NavController, public service: InfoService) {
        service.findAll().then(data => this.infolist = data);
    }

    openInfoDetail(info) {
        this.navCtrl.push(InfoDetailsPage, info);
    }
}