import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponentComponent } from './items-component.component';

describe('ItemsComponentComponent', () => {
  let component: ItemsComponentComponent;
  let fixture: ComponentFixture<ItemsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsComponentComponent]
    });
    fixture = TestBed.createComponent(ItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
