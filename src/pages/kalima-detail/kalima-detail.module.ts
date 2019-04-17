import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KalimaDetailPage } from './kalima-detail';

@NgModule({
  declarations: [
    KalimaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KalimaDetailPage),
  ],
})
export class KalimaDetailPageModule {}
