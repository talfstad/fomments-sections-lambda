import { assert } from 'chai';
import _ from 'lodash';
import Sections from '../../../../../lib/sections';

describe('Fomments Sections Lambda', () => {
  describe('Sections', () => {
    describe('Succeeds at', () => {
      it('Retreiving section JSON body by ID', (done) => {
        const sectionId = 'skin-1-english';

        Sections.getSectionById({ sectionId })
          .then(({ body }) => {
            assert(!_.isEmpty(body.data), 'Input was not successfully extracted');
            done();
          })
          .catch(() => {
            done(new Error(`No section could be returned for sectionId: ${sectionId}`));
          });
      });
    });
  });
});
