import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient,public dialog:MatDialog) { }
  contactForm:FormGroup;
  nameRequired=false;
  emailRequired=false;
  messageRequired=false;
  isLoading=false;
  isError=false;
  isSent=false;
  userName=null;
  ngOnInit(): void {
    this.contactForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      message:new FormControl('',[Validators.required])
    })
  }

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
