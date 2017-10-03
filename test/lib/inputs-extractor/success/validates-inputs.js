import InputsExtractor from '../../../../lib/inputs-extractor';

describe('Fomments Sections Lambda', () => {
  describe('InputsExtractor', () => {
    describe('Succeeds at', () => {
      it('Validating inputs from request', (done) => {
        InputsExtractor.validate({ requestPath: '/one-two' })
          .then(() => {
            done();
          })
          .catch(() => {
            done(new Error('Inputs were not correctly validated'));
          });
      });
    });
  });
});
