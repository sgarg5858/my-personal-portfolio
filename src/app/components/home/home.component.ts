import { Component, OnInit } from '@angular/core';
import {homeAnimations} from './home.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:homeAnimations
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,public dialog:MatDialog) { }
  
  cardState="off";
  cardMovement="hide";
  skillCardState='hide';
  projectCardState="hide";
  contactCardState="hide";
  showMainCard=true;
  showSkillCard=false;
  showContactCard=false;
  showProjectCard=false;
  rotateEmoji="off";
// ************************************Project Variables***********
  count=1;

  // *****************Contact Form Things*****************
  contactForm:FormGroup;
  nameRequired=false;
  emailRequired=false;
  messageRequired=false;
  isLoading=false;
  isError=false;
  isSent=false;
  userName=null;
  // **********************************************************

  ngOnInit(): void {
    this.contactForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      message:new FormControl('',[Validators.required])
    })
    setTimeout(()=>{
      this.cardState="on";
      this.cardMovement="show";
    },1);
  }

  closeMainCard(card:string)
  {
    setTimeout(()=>{
      
      //Main card hide
      this.showMainCard=false;

      //show card skill,contact,project
      if(card == 'skills')
      {
        this.showSkillCard=true;
      }
      else
      if(card=='projects')
      {
        this.showProjectCard=true;
      }else
      if(card=='contact')
      {
        this.showContactCard=true;
      }
      
      setTimeout(()=>{
        if(card == 'skills')
      {
        this.skillCardState='show';
      }
      else
      if(card=='projects')
      {
        this.projectCardState='show';
      }else
      if(card=='contact')
      {
        this.contactCardState='show';
      }
      },1)
    },10);
  }

  openMainCard(card:string)
  {
    if(card == 'skills')
    {
      this.skillCardState='hide';
    }
    else
    if(card=='projects')
    {
      this.projectCardState='hide';
    }else
    if(card=='contact')
    {
      this.contactCardState='hide';
    }
    
    this.rotateEmoji='off';
    
    setTimeout(()=>{
      if(card == 'skills')
      {
        this.showSkillCard=false;
      }
      else
      if(card=='projects')
      {
        this.showProjectCard=false;
      }else
      if(card=='contact')
      {
        this.showContactCard=false;
      }
      
      this.showMainCard=true;
     setTimeout(()=>{
      this.rotateEmoji='on';
     },1)
    },100);
  }

  // **************************************Projects Things***************************
  goBack()
  {
    if(this.count>1)
    {
      this.count--;
    }
  }
  goNext()
  {
    if(this.count<4)
    {
      this.count++;
    }
  }

  // ********************Contact Form**********************
  onSubmit(event){
    this.isError=false;
    this.isSent=false;
    event.preventDefault();
    this.nameRequired=false;
    this.emailRequired=false;
    this.messageRequired=false;
    if(this.contactForm.value.name=='')
    {
      this.nameRequired=true;
       return;
    }
    if(this.contactForm.value.email=='')
    {
      this.emailRequired=true;
       return;
    }
    if(this.contactForm.value.message=='')
    {
      this.messageRequired=true;
       return;
    }
    console.log(this.contactForm);
    this.isLoading=true;
    this.http.post('https://sanjaygarg-98.firebaseio.com/contacts.json',this.contactForm.value).subscribe((response)=>{
      console.log(response);
      this.userName=this.contactForm.value.name;
      this.contactForm.reset();
      this.isLoading=false;
      this.isSent=true;
      this.openDialog();
    },(error)=>{
      this.isLoading=false;
      this.isError=true;
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent,{
      minWidth:'250px',
      minHeight:'200px',
      maxHeight:'350px',
      data:this.userName
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

}
