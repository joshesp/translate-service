import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private defaultLang = 'es';
  private translations: any;

  constructor(private http: HttpClient) { }

  loadLanguage(): Promise<void> {
    return this.http
      .get<any>(`assets/i18n/${this.defaultLang}.json`)
      .toPromise()
      .then(res => {
        this.translations = res;
      }, err => {
        console.error(err);
      });
  }

  getTranslations(): any {
    return this.translations;
  }

  getLanguage(): string {
    return this.defaultLang;
  }

  setLanguage(lang: string): Promise<void> {
    this.defaultLang = lang;
    return this.loadLanguage();
  }

}
