import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

declare const window: any;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {


  isSelected: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 150)

    {
      this.isSelected=false;
      console.log(this.isSelected.valueOf());
    }



    else
    {
      this.isSelected=true;

      console.log(this.isSelected.valueOf());
    }

  }



  root_easypunchline(){




  }
}
