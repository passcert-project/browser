import { PlatformUtilsService } from 'jslib/abstractions';
import { I18nService } from 'jslib/abstractions/i18n.service';

export default class FormalVerificationInfo {

    static formalVerificationMasterPassword(platformUtilsService: PlatformUtilsService, i18nService: I18nService ) {
        const confirmed = platformUtilsService.showDialog(
            i18nService.t('formalVerificationMasterPasswordSecurity'), i18nService.t('formalVerification'),
            i18nService.t('ok'));
        if (confirmed) {
            // BrowserApi.createNewTab('https://help.bitwarden.com/article/setup-two-step-login/');
        }
    }

    static formalVerificationGenerator(platformUtilsService: PlatformUtilsService, i18nService: I18nService ) {
        const confirmed = platformUtilsService.showDialog(
            i18nService.t('formalVerificationGenerator'), i18nService.t('formalVerification'),
            i18nService.t('ok'));
        if (confirmed) {
            // BrowserApi.createNewTab('https://help.bitwarden.com/article/setup-two-step-login/');
        }
    }

    static formalVerificationPasswordSecurity(platformUtilsService: PlatformUtilsService, i18nService: I18nService ) {
        const confirmed = platformUtilsService.showDialog(
            i18nService.t('formalVerificationPasswordSecurity'), i18nService.t('formalVerification'),
            i18nService.t('ok'));
        if (confirmed) {
            // BrowserApi.createNewTab('https://help.bitwarden.com/article/setup-two-step-login/');
        }
    }
}
