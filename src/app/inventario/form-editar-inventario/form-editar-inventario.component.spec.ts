import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarInventarioComponent } from './form-editar-inventario.component';

describe('FormEditarInventarioComponent', () => {
  let component: FormEditarInventarioComponent;
  let fixture: ComponentFixture<FormEditarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditarInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
