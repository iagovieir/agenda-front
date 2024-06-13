import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpComponent } from './form-up.component';

describe('FormUpComponent', () => {
  let component: FormUpComponent;
  let fixture: ComponentFixture<FormUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
