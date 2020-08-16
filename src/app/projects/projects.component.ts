import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  count=1;
  ngOnInit(): void {
  }
  goBack()
  {
    if(this.count>1)
    {
      this.count--;
    }
  }
  goNext()
  {
    if(this.count<3)
    {
      this.count++;
    }
  }

}
