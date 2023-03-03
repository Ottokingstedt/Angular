import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


color: ThemePalette = 'primary';
mode: ProgressSpinnerMode = 'determinate';
value = 100;

  isDarkTheme!: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    ) {
     }


  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  title = 'Purply';
}
