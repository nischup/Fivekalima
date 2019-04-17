import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KalimaDetailPage } from '../kalima-detail/kalima-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  kalimaDetail(){
  	  this.navCtrl.push(KalimaDetailPage);
  }

}
