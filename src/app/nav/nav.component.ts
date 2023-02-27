import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../core/services/theme.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  
  greeting: string;

  isDarkTheme!: Observable<boolean>;

  ngOnInit(){
    this.isDarkTheme = this.themeService.isDarkTheme
  }
  
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  public menus = 
  [
    { title: 'Översikt', 
      icon: 'visibility',
      path: './dashboard',
      menuItem: [],
    }, 
    {
      title: 'Grundmodul',
      icon: 'align_horizontal_left',
      path: './basic-model',
      menuItem: [],
    }, 
    {
    title: 'Säsongsanalys', 
    icon: 'insert_chart',
    path: './seasonanalytics',
    menuItem: [],
    }, 
    {
      title: 'Om',
      icon: 'info',
      path: './about',
      menuItem: [],
    }
  ];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService){
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12){
      this.greeting = "Godmorgon!";
    } else if (currentHour >= 12 && currentHour < 18){
      this.greeting = "God eftermiddag!";
    } else {
      this.greeting = "God kväll"
    }
  }
  

}
