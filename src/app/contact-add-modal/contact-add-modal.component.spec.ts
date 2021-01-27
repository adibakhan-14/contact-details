import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddModalComponent } from './contact-add-modal.component';

describe('ContactAddModalComponent', () => {
  let component: ContactAddModalComponent;
  let fixture: ComponentFixture<ContactAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
