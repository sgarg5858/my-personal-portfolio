import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count=1;
  goBack()
  {
    if(this.count>1)
    {
      this.count--;
    }
  }
  goNext()
  {
    if(this.count<2)
    {
      this.count++;
    }
  }
}
