import { ThreadModule } from './thread.module';

describe('ThreadModule', () => {
  let threadModule: ThreadModule;

  beforeEach(() => {
    threadModule = new ThreadModule();
  });

  it('should create an instance', () => {
    expect(threadModule).toBeTruthy();
  });
});
