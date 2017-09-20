import _ from 'lodash';

class InputsExtractor {
  static validate({ requestPath }) {
    return new Promise((resolve, reject) => {
      InputsExtractor.extractInputs({ requestPath })
        .then(({ sectionId }) => {
          if (_.isEmpty(sectionId)) {
            reject(new Error('Request must include a sectionId'));
          } else {
            resolve();
          }
        });
    });
  }

  static extractInputs({ requestPath }) {
    // Example inputs:
    // a38fjkdlfslk-skin-1-english
    return new Promise((resolve) => {
      const [params] = _.without(requestPath.split('/'), '');
      const [userId, ...sectionIdArray] = _.without(params.split('-'), '');
      resolve({
        userId,
        sectionId: sectionIdArray.join('-'),
      });
    });
  }
}

export default InputsExtractor;
