import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { PasswordGenerationService } from 'jslib/abstractions/passwordGeneration.service';
import { PlatformUtilsService } from 'jslib/abstractions/platformUtils.service';
import { StateService } from 'jslib/abstractions/state.service';
import { GuidedTour, GuidedTourService, Orientation } from 'ngx-guided-tour';

import { CipherView } from 'jslib/models/view/cipherView';

import {
    PasswordGeneratorComponent as BasePasswordGeneratorComponent,
} from 'jslib/angular/components/password-generator.component';

import FormalVerificationInfo from '../../models/formalVerificationInfo';

import { Globals } from '../globals';


@Component({
    selector: 'app-password-generator',
    templateUrl: 'password-generator.component.html',
})
export class PasswordGeneratorComponent extends BasePasswordGeneratorComponent {

    generatorTour: GuidedTour = {
        tourId: 'purchases-tour',
        useOrb: false,
        completeCallback: () => this.continueTour(this.router),
        skipCallback: () => this.continueTour(this.router),
        steps: [
            {
                content: 'Welcome to the Password Generator',
            },
            {
                selector: '.password-block',
                content: 'Here you can see the currently generated password',
                orientation: Orientation.Bottom,
                useHighlightPadding: true,
            }, {
                selector: '.tour-regeneratePassword',
                content: 'After generating the password you may want to regenerate it and make a new one',
                orientation: Orientation.Bottom,
                useHighlightPadding: true,
            }, {
                selector: '.tour-copyPassword',
                content: 'You can also copy the password to the clipboard. By doing this you will be able to past it wherever you want',
                orientation: Orientation.Bottom,
                useHighlightPadding: true,
            }, {
                selector: '.tour-settings',
                content: 'Here you change an array of settings that affect the generated password',
                orientation: Orientation.Top,
                useHighlightPadding: true,
            }, {
                selector: '.tour-generator-length',
                content: 'Like the size of the password',
                orientation: Orientation.Top,
                useHighlightPadding: true,
            }, {
                selector: '.tour-generator-numbers',
                content: 'If you want to include numbers',
                orientation: Orientation.Top,
                useHighlightPadding: true,
            }, {
                selector: '.tour-generator-special',
                content: 'Or use special characters',
                orientation: Orientation.Top,
                useHighlightPadding: true,
            },
            {
                content: 'Let\'s move on to the settings',
                orientation: Orientation.Bottom,
                useHighlightPadding: true,
            },
        ],
    };
    private cipherState: CipherView;

    constructor(passwordGenerationService: PasswordGenerationService, platformUtilsService: PlatformUtilsService,
        i18nService: I18nService, private stateService: StateService, private globals: Globals,
        private location: Location,  private router: Router,
        private guidedTourService: GuidedTourService) {
        super(passwordGenerationService, platformUtilsService, i18nService, window);
    }

    async ngOnInit() {
        await super.ngOnInit();
        const addEditCipherInfo = await this.stateService.get<any>('addEditCipherInfo');
        if (addEditCipherInfo != null) {
            this.cipherState = addEditCipherInfo.cipher;
        }
        this.showSelect = this.cipherState != null;
        this.startTour();


    }

    continueTour(router: Router) {
        router.navigate(['/tabs/settings']);
    }

    startTour() {
        if (this.globals.tourGenerator) {
            setTimeout(() => {
                this.guidedTourService.startTour(this.generatorTour);
            }, 300);
        }
        this.globals.tourGenerator = false;
    }

    select() {
        super.select();
        this.cipherState.login.password = this.password;
        this.close();
    }

    lengthChanged() {
        document.getElementById('length').focus();
    }

    formalVerificationIcon() {
        FormalVerificationInfo.formalVerificationGenerator(this.platformUtilsService, this.i18nService, this.router);
    }

    close() {
        this.location.back();
    }
}
