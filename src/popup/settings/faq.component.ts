import { CurrencyPipe } from '@angular/common';
import {
    Component,
    OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BrowserApi } from '../../browser/browserApi';


@Component({
    selector: 'app-faq',
    templateUrl: 'faq.component.html',
})
export class FaqComponent implements OnInit {

    qBitwardenSeeMyPasswords = false;
    qSecureExtension = false;
    qMasterPasswordLocal = false;
    qWhatIsFormalVerification = false;
    qFormalVerificationSecurity = false;
    qFormalVerificationFeatures = false;
    qWhyShouldITrust = false;
    constructor(private router: Router) { }

    async ngOnInit() {
        // empty
    }

    async visitWebsite() {
        BrowserApi.createNewTab('https://help.bitwarden.com/');
    }
}
