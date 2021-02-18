import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldModel } from '../models/field.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  jsonData = new Subject<FieldModel[]>();
  textareaUpdated = new Subject<string>();

  constructor() { }
  
  getFormGroupObject(fields: FieldModel[]){
    let formGroup = {};
    fields.forEach(field=>{
      formGroup[field.id] = 
        new FormControl(field.value)
    });
    return new FormGroup(formGroup);
  }
}
