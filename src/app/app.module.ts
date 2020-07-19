import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomNavbarComponent } from './components/custom-navbar/custom-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsBlogsComponent } from './components/projects-blogs/projects-blogs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AvatarModule} from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {NgxTypedJsModule} from 'ngx-typed-js'
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsBlogsComponent,
    ProjectsComponent,
    BlogsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    HttpClientModule,
    MatCardModule,
    NgxTypedJsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
