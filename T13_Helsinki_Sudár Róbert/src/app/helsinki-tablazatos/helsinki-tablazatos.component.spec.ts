import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelsinkiTablazatosComponent } from './helsinki-tablazatos.component';

describe('HelsinkiTablazatosComponent', () => {
  let component: HelsinkiTablazatosComponent;
  let fixture: ComponentFixture<HelsinkiTablazatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelsinkiTablazatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelsinkiTablazatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
