import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easypunchline',
  templateUrl: 'easypunchline.component.html',
  styleUrls: ['easypunchline.component.css']
})
export class EasypunchlineComponent implements OnInit {


  isSelected: boolean = true;

  constructor() {


      if (window.innerWidth < 600) {
        this.isSelected = false;
      }

      else {
          this.isSelected=true;
      }



  }

  ngOnInit() {
  }






}
