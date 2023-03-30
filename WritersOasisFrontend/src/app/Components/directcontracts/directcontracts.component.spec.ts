import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectcontractsComponent } from './directcontracts.component';

describe('DirectcontractsComponent', () => {
  let component: DirectcontractsComponent;
  let fixture: ComponentFixture<DirectcontractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirectcontractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectcontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
