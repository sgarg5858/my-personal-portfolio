import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomNavbarComponent } from './components/custom-navbar/custom-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
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
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { IndustryProjectsComponent } from './industry-projects/industry-projects.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import {BlogsComponent} from './blogs/blogs.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    IndustryProjectsComponent,
    PersonalProjectsComponent,
    BlogsComponent,
    SuccessDialogComponent
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
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
