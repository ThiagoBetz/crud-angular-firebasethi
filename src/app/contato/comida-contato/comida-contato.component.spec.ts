import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaContatoComponent } from './comida-contato.component';

describe('ComidaContatoComponent', () => {
  let component: ComidaContatoComponent;
  let fixture: ComponentFixture<ComidaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
