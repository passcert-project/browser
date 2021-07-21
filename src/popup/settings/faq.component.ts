import { CurrencyPipe } from '@angular/common';
import {
    Component,
    OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { PlatformUtilsService } from 'jslib/abstractions';
import { I18nService } from 'jslib/abstractions/i18n.service';
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
    qPasswordGenerator = false;
    qVaultSecurity = false;
    qClipboard = false;
    constructor(private router: Router, private i18nService: I18nService,
                private platformUtilsService: PlatformUtilsService) { }

    async ngOnInit() {
        // empty
    }

    async visitWebsite() {
        const confirmed = await this.platformUtilsService.showDialog(
            this.i18nService.t('passcertConfirmation'), this.i18nService.t('formalVerificationClipboardTitle'),
            this.i18nService.t('yes'), this.i18nService.t('cancel'));
        if (confirmed) {
            BrowserApi.createNewTab('https://help.bitwarden.com/');
        }

    }
}
