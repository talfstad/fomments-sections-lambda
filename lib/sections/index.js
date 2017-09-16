import SectionsDb from './sections-db';

class Sections {
  static getSectionById({ sectionId }) {
    return new Promise((resolve) => {
      SectionsDb.getSectionById({ sectionId })
        .then(body => resolve({ body }));
    });
  }
}

export default Sections;
