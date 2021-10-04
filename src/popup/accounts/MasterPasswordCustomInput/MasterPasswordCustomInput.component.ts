import { Component, OnInit, OnDestroy, forwardRef, Output, EventEmitter  } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Utils } from 'jslib-common/misc/utils';


@Component({
  selector: 'app-MasterPasswordCustomInput',
  templateUrl: './MasterPasswordCustomInput.component.html',

  // Step 1: copy paste this providers property
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasterPasswordCustomInputComponent),
      multi: true,
    },
  ],
})

// Step 2: Add "implements ControlValueAccessor"  
export class MasterPasswordCustomInputComponent implements OnInit, OnInit, OnDestroy, ControlValueAccessor {

  //#region Variables
  input: string;
  
  modifiedinput = new ArrayBuffer(0);
  
  @Output() sendingToParentTest = new EventEmitter<ArrayBuffer>();
  
  showPassword: boolean = false;
  //#endregion
  constructor() { }
 
  
  //#region Functions

  // Step 3: Copy paste this stuff here
  //ControlValueAccessor functions
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Step 4: Define what should happen in this component, if something changes outside
  writeValue(input: string) {
    //Nothing
  }

  // Step 5: Handle what should happen on the outside, if something changes on the inside
  // in this simple case, we've handled all of that in the .html
  // a) we've bound to the local variable with ngModel
  // b) we emit to the ouside by calling onChange on ngModelChange

  onInsideChange(receivedString: string) {
    //console.log('ReceivedString: ' + receivedString);

    //Clear previous ArrayBuffer
    let inputArrayView = new Uint8Array(this.modifiedinput);
    //console.log('inputArrayView: Pre-Clear:' + inputArrayView);

    inputArrayView.fill(1);

    //console.log('inputArrayView: After-Clear:' + inputArrayView);

    //Note: important to assing the underlying buffer instead of the view :)
    this.modifiedinput = Utils.fromUtf8ToArray(receivedString).buffer;

    inputArrayView = new Uint8Array(this.modifiedinput);
    //console.log('inputArrayView: After-String:' + inputArrayView);

    this.onChange(this.modifiedinput);
  }

  //Component functions
  togglePassword() {
    this.showPassword = !this.showPassword;
    document.getElementById('masterPassword').focus();
}

  submitToParent()
  {
    const arrayBufferView = new Uint8Array(this.modifiedinput);

    console.log('Submitting this to parent:' + arrayBufferView);

    this.sendingToParentTest.emit(this.modifiedinput);
  }

  //Logging functions
  ngOnInit() {
    console.log(Utils.debugStringWithTimestamp('MasterPasswordCustomInputComponent: OnInit'));
  }

  ngOnDestroy(): void {
    console.log(Utils.debugStringWithTimestamp('MasterPasswordCustomInputComponent: OnDestroy'));
  }
 //#endregion

  
 

}
