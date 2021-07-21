import { Router } from '@angular/router';
import { PlatformUtilsService } from 'jslib/abstractions';
import { I18nService } from 'jslib/abstractions/i18n.service';

export default class FormalVerificationInfo {

    static async formalVerificationMasterPassword(platformUtilsService: PlatformUtilsService, i18nService: I18nService, router: Router) {
        const confirmed = await platformUtilsService.showDialog(
            i18nService.t('formalVerificationMasterPasswordSecurity'), i18nService.t('formalVerificationMasterPasswordSecurityTitle'),
            i18nService.t('learnMore'), i18nService.t('ok'));
        if (confirmed) {
            router.navigate(['/faq']);
        }
    }

    static async formalVerificationGenerator(platformUtilsService: PlatformUtilsService, i18nService: I18nService , router: Router) {
        const confirmed = await platformUtilsService.showDialog(
            i18nService.t('formalVerificationGenerator'), i18nService.t('formalVerificationGeneratorTitle'),
            i18nService.t('learnMore'), i18nService.t('ok'));
        if (confirmed) {
            router.navigate(['/faq']);
        }
    }

    static async formalVerificationPasswordSecurity(platformUtilsService: PlatformUtilsService, i18nService: I18nService, router: Router ) {
        const confirmed = await platformUtilsService.showDialog(
            i18nService.t('formalVerificationPasswordSecurity'), i18nService.t('formalVerificationPasswordSecurityTitle'),
            i18nService.t('learnMore'), i18nService.t('ok'));
        if (confirmed) {
            router.navigate(['/faq']);
        }
    }

    static async formalVerificationPasswordClipboard(platformUtilsService: PlatformUtilsService, i18nService: I18nService, router: Router) {
        const confirmed = await platformUtilsService.showDialog(
            i18nService.t('formalVerificationClipboard'), i18nService.t('formalVerificationClipboardTitle'),
            i18nService.t('learnMore'), i18nService.t('ok'));
        if (confirmed) {
            router.navigate(['/faq']);
        }
    }
}
