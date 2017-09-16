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
    return new Promise((resolve) => {
      // const [userId, sectionId] = _.without(requestPath.split('/'), '');
      const [sectionId] = _.without(requestPath.split('/'), '');
      resolve({
        // userId,
        sectionId,
      });
    });
  }
}

export default InputsExtractor;
