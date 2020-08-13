import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryProjectsComponent } from './industry-projects.component';

describe('IndustryProjectsComponent', () => {
  let component: IndustryProjectsComponent;
  let fixture: ComponentFixture<IndustryProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
