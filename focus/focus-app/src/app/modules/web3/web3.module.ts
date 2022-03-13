import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3Component } from './web3/web3.component';
import { ServicesModule } from 'src/app/services/services.module';


@NgModule({
  declarations: [
    Web3Component
  ],
  imports: [
    CommonModule,
    ServicesModule
  ]
})
export class Web3Module { }
