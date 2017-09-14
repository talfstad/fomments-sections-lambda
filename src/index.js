import Runner from '../lib/runner';

exports.handler = (event, context, callback) => {
  Runner.run({ event, context, callback });
};
