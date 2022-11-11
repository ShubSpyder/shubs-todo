import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  defaultTheme : string = localStorage.getItem('theme') || 'light'

  setDefaultTheme(){
    this.document.body.className = this.defaultTheme;
  }

  setTheme(theme: string){
    this.document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme(){
    if(this.defaultTheme === 'light'){
      this.defaultTheme = 'dark'
      this.setTheme(this.defaultTheme);
    }else{
      this.defaultTheme = 'light'
      this.setTheme(this.defaultTheme);
    }
  }

}
