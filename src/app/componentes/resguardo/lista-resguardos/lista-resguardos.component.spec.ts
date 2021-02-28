import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResguardosComponent } from './lista-resguardos.component';

describe('ListaResguardosComponent', () => {
  let component: ListaResguardosComponent;
  let fixture: ComponentFixture<ListaResguardosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaResguardosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResguardosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
