import { Component, OnInit, OnDestroy, forwardRef } from "@angular/core";
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { Utils } from "jslib-common/misc/utils";

@Component({
    selector: "app-MasterPasswordCustomInput",
    templateUrl: "./MasterPasswordCustomInput.component.html",

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
export class MasterPasswordCustomInputComponent implements ControlValueAccessor, OnInit, OnDestroy
{

    //Variables
    input : string;
    modifiedinput = new ArrayBuffer(10);

    constructor() {}

    // Step 3: Copy paste this stuff here into your class
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
        //Nothing should happen here. This should never change from an outside force
    }

    // Step 5: Handle "what should happen on the outside, if something changes on the inside"
    // in this simple case, we've handled all of that in the .html
    // a) we've bound to the local variable with ngModel
    // b) we emit to the outside by calling onChange on ngModelChange
    
    
    //NOTE: This should be where we transform the string into an arraybuffer to pass to the parent
    onInsideChange(receivedString: string) {
        console.log('ReceivedString: ' + receivedString);
    
        //Clear previous ArrayBuffer
        let inputArrayView = new Uint8Array(this.modifiedinput);
        console.log('inputArrayView: Pre-Clear:' + inputArrayView);
        console.log('ArrayBuffer: Pre-Clear:' + this.modifiedinput);
    
        /*
        Error here. 
        For some reason, the underlying buffer of inputArrayView is equal to the one on modifiedinput only 
        in the first keystroke of the input. Starting from thereafter, they are not the same. I don't know why :(
        */
    
        console.log(
          'Same memory address? (These should always be the same!): ' +
            Object.is(this.modifiedinput, inputArrayView.buffer)
        );
    
        inputArrayView.fill(1);
    
        console.log('inputArrayView: After-Clear:' + inputArrayView);
        console.log('ArrayBuffer: After-Clear:' + this.modifiedinput);
    
        this.modifiedinput = Utils.fromUtf8ToArray(receivedString);
        console.log('ArrayBuffer: After UTF8toArray:' + this.modifiedinput);
        this.onChange(this.modifiedinput);
      }

    ngOnInit() {
        console.log(
            Utils.debugStringWithTimestamp(
                "MasterPasswordCustomInputComponent: OnInit"
            )
        );
    }

    ngOnDestroy(): void {
        console.log(
            Utils.debugStringWithTimestamp(
                "MasterPasswordCustomInputComponent: OnDestroy"
            )
        );
    }
}
