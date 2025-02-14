import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheComponent } from './fiche.component';

describe('FicheComponent', () => {
  let component: FicheComponent;
  let fixture: ComponentFixture<FicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
