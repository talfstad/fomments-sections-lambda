import { assert } from 'chai';

import InputsExtractor from '../../../../lib/inputs-extractor';

describe('Fomments Sections Lambda', () => {
  describe('InputsExtractor', () => {
    describe('Succeeds at', () => {
      it('Extracting correct inputs from request', (done) => {
        InputsExtractor.extractInputs({ requestPath: '/one-two' })
          .then(({ userId, sectionId }) => {
            assert(userId === 'one', 'Input was not successfully extracted');
            assert(sectionId === 'two', 'Input was not successfully extracted');
            done();
          });
      });
    });
  });
});
