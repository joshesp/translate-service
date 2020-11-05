import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private i18Service: I18nService) {}

  transform(value: string, ...args: unknown[]): string {
    const translations = this.i18Service.getTranslations();

    if (!value || (value.trim()).length === 0) {
      return '';
    }

    if ( !translations || translations === undefined ) {

      return null;
    }

    return this.findTranslation(value, translations);
  }

  private findTranslation(value: string, translations): string {
    const data = value.split('.');
    let labels = translations;
    let label = '';

    for (let index = 0; index < data.length; index++) {
      const key = data[index];

      if (!labels.hasOwnProperty(key)) {
        break;
      } else {
        if (index !== (data.length - 1)) {
          labels = labels[key];
        } else {
          label = labels[key];
        }
      }
    }

    return label;
  }

}
