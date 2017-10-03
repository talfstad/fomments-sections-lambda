import SectionsDb from './sections-db';

class Sections {
  static getSectionById({ userId, sectionId }) {
    return new Promise((resolve) => {
      SectionsDb.getSectionById({ userId, sectionId })
        .then(body => resolve({ body }));
    });
  }
}

export default Sections;
