import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-projects',
  templateUrl: './industry-projects.component.html',
  styleUrls: ['./industry-projects.component.css']
})
export class IndustryProjectsComponent implements OnInit {

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
