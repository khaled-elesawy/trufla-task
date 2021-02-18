import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { FormControlService } from 'src/app/services/form-control.service';



@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit, OnDestroy {

  fields: FieldModel[];
  candidateInfoForm: FormGroup;
  textareaSubscription: Subscription

  constructor(private httpClient: HttpClient,
    private formControlService: FormControlService) { }

  ngOnInit() {

    this.httpClient.get('/assets/fields.json')
    .subscribe((fields: FieldModel[])=>{
      this.fields = fields;
      this.candidateInfoForm = this.formControlService.getFormGroupObject(fields);
      this.formControlService.jsonData.next(fields);      
    });
    
    this.textareaSubscription = this.formControlService.textareaUpdated.subscribe(
      (responseAsString: string) => {
        this.fields = JSON.parse(responseAsString)
      }
    )

  }
  onSubmit(){
    console.log(this.candidateInfoForm.value)
  }

  ngOnDestroy(){
    this.textareaSubscription.unsubscribe()
  }

  
}
