import { TestBed, inject } from '@angular/core/testing';

import { CsvReaderService } from './csv-reader.service';

describe('CsvReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CsvReaderService]
    });
  });

  it('should be created', inject([CsvReaderService], (service: CsvReaderService) => {
    expect(service).toBeTruthy();
  }));
});
