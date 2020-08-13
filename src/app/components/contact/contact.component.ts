import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }
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
    if(this.contactForm.value.message=='' || this.contactForm.value.message.length<10)
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
    },(error)=>{
      this.isLoading=false;
      this.isError=true;
    })
  }

}
