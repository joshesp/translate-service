import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/Feedback';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  customerFeedback = new Feedback();

  constructor(
    public i18nService: I18nService
  ) { }

  ngOnInit(): void {}

  saveFeedback() {
    alert(this.i18nService.getTranslations().ALERT);
    console.table(this.customerFeedback);
  }

}
