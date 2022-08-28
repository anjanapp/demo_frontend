import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css']
})
export class TryingComponent implements OnInit {

  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]*')]]
  })

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  login() {
    //  var uname=this.loginForm.value.uname
    //  var pswd=this.loginForm.value.pswd

    if (this.loginForm.valid) {
      alert("login successful")


    }
    else {
      alert('invalid form')
    }
  }


}
