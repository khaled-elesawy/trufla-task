import { Component, OnInit, Input, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { FieldModel } from 'src/app/models/field.model';
import { FormControlService } from 'src/app/services/form-control.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-json-objects',
  templateUrl: './json-objects.component.html',
  styleUrls: ['./json-objects.component.scss']
})
export class JsonObjectsComponent implements OnInit, OnDestroy {

  fields: FieldModel[]
  fieldsAsString: string;
  dataSubscription: Subscription;

  constructor(private formControlService: FormControlService) { }

  ngOnInit(): void {
    this.dataSubscription = this.formControlService.jsonData.subscribe(
      (dataArray: FieldModel[]) => {
        this.fields = dataArray;
        this.fieldsAsString = JSON.stringify(dataArray)
      }
    )    
  }

  onBlurTextarea(){
    this.formControlService.textareaUpdated.next(this.fieldsAsString);
  }

  ngOnDestroy(){
    this.dataSubscription.unsubscribe()
  }
  


}
