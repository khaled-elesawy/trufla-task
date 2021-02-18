export class FieldModel {
    id: string;
    value: any;
    cols?: string;
    rows: string;
    controlType: string;
    options: [];
    label: string;


    
    constructor(field: {
    id?: string;
    value?: any;
    cols?: string;
    rows: string;
    controlType?: string;
    options?: [];
    label?: string;
    }){
        if(field){
            this.id = field.id;
            this.value = field.value;
            this.cols = field.cols;
            this.rows = field.rows;
            this.controlType = field.controlType;
            this.options = field.options;
            this.label = field.label;
        }

    }
}
