import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cathaloge } from './cathaloge';

describe('Cathaloge', () => {
  let component: Cathaloge;
  let fixture: ComponentFixture<Cathaloge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cathaloge],
    }).compileComponents();

    fixture = TestBed.createComponent(Cathaloge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
