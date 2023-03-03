import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-basic-model',
  templateUrl: './basic-model.component.html',
  styleUrls: ['./basic-model.component.scss']
})
export class BasicModelComponent{
  



  selectForm!:FormGroup;

    // select option 

    Riktmarke = [
      { id: 1, name: "purply"},
      { id: 2, name: "index"},
    ];
  
    Butiks = [
      { id: 1, name: "bergvik" },
      { id: 2, name: "stockholm"},
      { id: 3, name: "huddinge"},
      { id: 4, name: "Vaxjo"}
    ];
  

  constructor(private fb:FormBuilder){
  }


  ngOnInit(){
    this.selectForm = this.fb.group({
      riktmarke: [null],
      butik: [null]
    });
    }
  
    submit(){
     console.log(this.selectForm.value) 
    }

  } 
