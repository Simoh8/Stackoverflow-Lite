import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientssComponent } from './clientss.component';

describe('ClientssComponent', () => {
  let component: ClientssComponent;
  let fixture: ComponentFixture<ClientssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ClientssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
