import { Component } from '@angular/core';

@Component({
  selector: 'app-weekly',
  template: `<p>{{ weeklyMessage }}</p>`
})
export class WeeklyComponent {

    weeklyMessage!: string;
    intervalId: any;

    constructor(){
        this.startWeekly();
    }

    startWeekly(){
        this.weeklyMessage = "Hej, här veckan är:";
        this.intervalId = setInterval(() => {
            this.weeklyMessage = 'Hej, här veckan är:'
        }, 604800000);
    }

    storWeekly(){
        clearInterval(this.intervalId);
    }
}