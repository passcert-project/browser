import { Component, OnInit, OnDestroy } from '@angular/core';
import { Utils } from 'jslib-common/misc/utils';

@Component({
  selector: 'app-MasterPasswordCustomInput',
  templateUrl: './MasterPasswordCustomInput.component.html',
})
export class MasterPasswordCustomInputComponent implements OnInit, OnInit, OnDestroy {

  constructor() { }
  

  ngOnInit() {
    console.log(Utils.debugStringWithTimestamp('MasterPasswordCustomInputComponent: OnInit'));
  }

  ngOnDestroy(): void {
    console.log(Utils.debugStringWithTimestamp('MasterPasswordCustomInputComponent: OnDestroy'));
  }

}
