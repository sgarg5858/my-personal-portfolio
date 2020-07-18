import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBlogsComponent } from './projects-blogs.component';

describe('ProjectsBlogsComponent', () => {
  let component: ProjectsBlogsComponent;
  let fixture: ComponentFixture<ProjectsBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
