import { TestBed } from '@angular/core/testing';

import { ReciboscontrollerService } from './reciboscontroller.service';

describe('ReciboscontrollerService', () => {
  let service: ReciboscontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciboscontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
