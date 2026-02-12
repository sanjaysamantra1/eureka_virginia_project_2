import { TsConfigJson } from './../../../../node_modules/cypress/node_modules/type-fest/source/tsconfig-json.d';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingDemo } from './unit-testing-demo';

describe('UnitTestingDemo', () => {
  let component: UnitTestingDemo;
  let fixture: ComponentFixture<UnitTestingDemo>;

  beforeAll(() => {
    console.log('beforeAll...'); // 1
  })

  beforeEach(async () => { // N
    console.log('beforeEach...')
    await TestBed.configureTestingModule({
      imports: [UnitTestingDemo]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnitTestingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  afterEach(() => { // N
    console.log('afterEach...')
  })
  afterAll(() => { // 1
    console.log('afterAll...')
  })

  it('should create', () => {
    console.log('It-1')
    expect(component).toBeTruthy();
  });

  it('Should Verify add', () => {
    console.log('It-2')
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
  })

  it('Should verify sumOfDigits', () => {
    console.log('It-3')
    expect(component.sumOfDigits(125)).toBe(8);
  })
  it('Should verify addNewCar', () => {
    console.log('It-4')
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(2);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).not.toContain('BMW');
    component.addNewCar('Maruti');
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Honda');
    expect(component.cars).toContain('Maruti');
    expect(component.cars).not.toContain('BMW');
  })
});
