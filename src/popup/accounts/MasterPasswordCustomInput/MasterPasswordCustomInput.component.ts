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

  //Step 1: Set up the providers property for CVA
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasterPasswordCustomInputComponent),
      multi: true,
    },
  ],
})

//Step 2: implements the CVA interface
export class MasterPasswordCustomInputComponent implements OnInit, OnInit, OnDestroy, ControlValueAccessor {

  //#region Variables
  //NOTE:This needs to be here because the NGModel has to bind to something. It's never actually written to
  dummyInput: string;
  showPassword: boolean = false;
  
  modifiedinput = new ArrayBuffer(0);
  @Output() sendPasswordToParentEvent = new EventEmitter<ArrayBuffer>();
  //#endregion
  
  //#region Functions
  constructor() { }

  //Step 3: ControlValueAccessor functions
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  //Step 4: Define what should happen in this component, if something changes outside
  writeValue(input: string) {
    //Nothing
  }

  // Step 5: Handle what should happen on the outside, if something changes on the inside
  // in this simple case, we've handled all of that in the .html
  // a) we've bound to the local variable with ngModel
  // b) we emit to the ouside by calling onChange on ngModelChange

  onInsideChange(receivedString: string) {
    //Clear previous ArrayBuffer
    let inputArrayView = new Uint8Array(this.modifiedinput);

    //Erase the previous buffer containing the password
    inputArrayView.fill(1);

    
    //Note: testing an inline method and seeing if there's better results
    if (Utils.isNode || Utils.isNativeScript) {
      this.modifiedinput = new Uint8Array(Buffer.from(receivedString, 'utf8')).buffer;
    } else {
      const strUtf8 = unescape(encodeURIComponent(receivedString));
      const arr = new Uint8Array(strUtf8.length);
      for (let i = 0; i < strUtf8.length; i++) {
          arr[i] = strUtf8.charCodeAt(i);
      }
      this.modifiedinput = arr.buffer;
    }
    
    this.onChange(this.modifiedinput);
  }

  //Component functions
  togglePassword() {
    this.showPassword = !this.showPassword;
    document.getElementById('masterPassword').focus();
}

  submitToParent()
  {
    //NOTE: Can't clear the password after sending it to the parent because then the parent will try to login with a cleared password
    this.sendPasswordToParentEvent.emit(this.modifiedinput);
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
