import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonObjectsComponent } from './json-objects.component';

describe('JsonObjectsComponent', () => {
  let component: JsonObjectsComponent;
  let fixture: ComponentFixture<JsonObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
