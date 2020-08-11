import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactForm:FormGroup;
  nameRequired=false;
  emailRequired=false;
  messageRequired=false;

  ngOnInit(): void {
    this.contactForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      message:new FormControl('',[Validators.required])
    })
  }

  onSubmit(event){
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
  }

}
