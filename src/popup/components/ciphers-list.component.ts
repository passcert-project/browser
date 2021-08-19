import { Location } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input, NgZone,
    Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    ApiService,
    AuditService,
    CipherService,
    CryptoService,
    I18nService, MessagingService,
    PlatformUtilsService,
    TokenService,
    TotpService, UserService
} from 'jslib/abstractions';
import { EventService } from 'jslib/abstractions/event.service';
import { BroadcasterService } from 'jslib/angular/services/broadcaster.service';

import { CipherType } from 'jslib/enums/cipherType';

import { CipherView } from 'jslib/models/view/cipherView';
import FormalVerificationInfo from '../../models/formalVerificationInfo';
import { AutofillService } from '../../services/abstractions/autofill.service';
import { PopupUtilsService } from '../services/popup-utils.service';

@Component({
    selector: 'app-ciphers-list',
    templateUrl: 'ciphers-list.component.html',
})
export class CiphersListComponent {
    @Output() onSelected = new EventEmitter<CipherView>();
    @Output() launchEvent = new EventEmitter<CipherView>();
    @Output() onView = new EventEmitter<CipherView>();
    @Input() ciphers: CipherView[];
    @Input() showView = false;
    @Input() title: string;

    cipherType = CipherType;

    constructor( private i18nService: I18nService, private platformUtilsService: PlatformUtilsService, private router: Router) {
        // empty
    }

    selectCipher(c: CipherView) {
        this.onSelected.emit(c);
    }

    launchCipher(c: CipherView) {
        this.launchEvent.emit(c);
    }

    viewCipher(c: CipherView) {
        this.onView.emit(c);
    }

    formalVerificationIcon() {
        FormalVerificationInfo.formalVerificationPasswordSecurity(this.platformUtilsService, this.i18nService, this.router);
    }
}
