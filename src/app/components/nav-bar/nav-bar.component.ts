import { Component, OnInit } from '@angular/core';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  siteLanguage = 'Spanish';
  siteLocale: string;
  languageList = [
    { code: 'es', label: 'Spanish' },
    { code: 'en', label: 'English' }
  ];

  constructor(
    private i18nService: I18nService
  ) { }

  ngOnInit(): void {
  }


  onChangeLanguage(lang: string): void {
    this.i18nService.setLanguage(lang).then(_ => {
      const language = this.languageList.find(l => l.code === lang);
      this.siteLanguage = language.label;
    });
  }

}
