import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEraseComponent } from './input-erase.component';

describe('InputEraseComponent', () => {
  let component: InputEraseComponent;
  let fixture: ComponentFixture<InputEraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
