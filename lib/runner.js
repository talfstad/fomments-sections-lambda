import logger from 'npmlog';

class Runner {
  static run({ event, callback }) {
    logger.info(event);
    callback(null, {
      statusCode: 302,
      headers: {
        Location: 'https://google.com',
      },
    });
  }
}

export default Runner;
