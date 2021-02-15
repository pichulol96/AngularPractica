import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroResguardoComponent } from './registro-resguardo.component';

describe('RegistroResguardoComponent', () => {
  let component: RegistroResguardoComponent;
  let fixture: ComponentFixture<RegistroResguardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroResguardoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroResguardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
