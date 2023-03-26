import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formdata:any;

  allvalue:any;


  ngOnInit(): void {

    this.formdata = new FormGroup({

      username:new FormControl("" ,Validators.compose([Validators.required ,Validators.email])),
      password:new FormControl("", Validators.compose([Validators.required]))
    });


    this.allvalue = new FormGroup({

      email: new FormControl("" , Validators.compose([Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      password:new FormControl("" ,Validators.compose([Validators.required]))
    });




  }

  datasubmit(data:any){

    if(data.username == "ankita@gmail.com" && data.password == 12345){
      alert("WElcome")
    }else{
      alert("valid information is wrong")
    }
    console.log(data);

  }


  subvalue(data:any){

    if(data.password==123456789){
      alert("welcome to the form")
    }
    else{
      alert("invalid password")
    }

    console.log(data);

  }
}
