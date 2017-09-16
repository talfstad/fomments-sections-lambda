import Skin1English from './skin/skin-1-english';
import Skin1Portuguese from './skin/skin-1-portuguese';
import Skin1French from './skin/skin-1-french';
import Skin1Chinese from './skin/skin-1-chinese';
import Skin1German from './skin/skin-1-german';
import Skin1Spanish from './skin/skin-1-spanish';
import Diet1English from './diet/diet-1-english';
import Diet1German from './diet/diet-1-german';
import Diet1French from './diet/diet-1-french';
import Diet1Spanish from './diet/diet-1-spanish';
import Diet1Chinese from './diet/diet-1-chinese';
import Diet1Portuguese from './diet/diet-1-portuguese';
import Muscle1English from './muscle/muscle-1-english';
import Muscle1German from './muscle/muscle-1-german';
import Muscle1Spanish from './muscle/muscle-1-spanish';
import Muscle1French from './muscle/muscle-1-french';
import Muscle1Chinese from './muscle/muscle-1-chinese';
import Muscle1Portuguese from './muscle/muscle-1-portuguese';
import AppDownload1English from './app-download/app-download-1-english';
import AppDownload1Portuguese from './app-download/app-download-1-portuguese';
import AppDownload1German from './app-download/app-download-1-german';
import AppDownload1Chinese from './app-download/app-download-1-chinese';
import AppDownload1French from './app-download/app-download-1-french';
import AppDownload1Spanish from './app-download/app-download-1-spanish';
import ErectileDysfunction1English from './erectile-dysfunction/erectile-dysfunction-1-english';
import ErectileDysfunction1Portuguese from './erectile-dysfunction/erectile-dysfunction-1-portuguese';
import ErectileDysfunction1Spanish from './erectile-dysfunction/erectile-dysfunction-1-spanish';
import ErectileDysfunction1German from './erectile-dysfunction/erectile-dysfunction-1-german';
import ErectileDysfunction1French from './erectile-dysfunction/erectile-dysfunction-1-french';
import ErectileDysfunction1Chinese from './erectile-dysfunction/erectile-dysfunction-1-chinese';
import Giveaway1English from './giveaway/giveaway-1-english';
import Giveaway1German from './giveaway/giveaway-1-german';
import Giveaway1Spanish from './giveaway/giveaway-1-spanish';
import Giveaway1Portuguese from './giveaway/giveaway-1-portuguese';
import Giveaway1French from './giveaway/giveaway-1-french';
import Giveaway1Chinese from './giveaway/giveaway-1-chinese';

class SectionsDb {
  static getSectionById({ sectionId }) {
    return new Promise((resolve) => {
      switch (sectionId) {
        case 'skin-1-english':
          resolve({ data: Skin1English });
          break;
        case 'skin-1-portuguese':
          resolve({ data: Skin1Portuguese });
          break;
        case 'skin-1-german':
          resolve({ data: Skin1German });
          break;
        case 'skin-1-french':
          resolve({ data: Skin1French });
          break;
        case 'skin-1-chinese':
          resolve({ data: Skin1Chinese });
          break;
        case 'skin-1-spanish':
          resolve({ data: Skin1Spanish });
          break;
        case 'diet-1-english':
          resolve({ data: Diet1English });
          break;
        case 'diet-1-french':
          resolve({ data: Diet1French });
          break;
        case 'diet-1-portuguese':
          resolve({ data: Diet1Portuguese });
          break;
        case 'diet-1-spanish':
          resolve({ data: Diet1Spanish });
          break;
        case 'diet-1-chinese':
          resolve({ data: Diet1Chinese });
          break;
        case 'diet-1-german':
          resolve({ data: Diet1German });
          break;
        case 'muscle-1-english':
          resolve({ data: Muscle1English });
          break;
        case 'muscle-1-french':
          resolve({ data: Muscle1French });
          break;
        case 'muscle-1-chinese':
          resolve({ data: Muscle1Chinese });
          break;
        case 'muscle-1-german':
          resolve({ data: Muscle1German });
          break;
        case 'muscle-1-spanish':
          resolve({ data: Muscle1Spanish });
          break;
        case 'muscle-1-portuguese':
          resolve({ data: Muscle1Portuguese });
          break;
        case 'app-download-1-english':
          resolve({ data: AppDownload1English });
          break;
        case 'app-download-1-spanish':
          resolve({ data: AppDownload1Spanish });
          break;
        case 'app-download-1-french':
          resolve({ data: AppDownload1French });
          break;
        case 'app-download-1-portuguese':
          resolve({ data: AppDownload1Portuguese });
          break;
        case 'app-download-1-german':
          resolve({ data: AppDownload1German });
          break;
        case 'app-download-1-chinese':
          resolve({ data: AppDownload1Chinese });
          break;
        case 'erectile-dysfunction-1-english':
          resolve({ data: ErectileDysfunction1English });
          break;
        case 'erectile-dysfunction-1-german':
          resolve({ data: ErectileDysfunction1German });
          break;
        case 'erectile-dysfunction-1-spanish':
          resolve({ data: ErectileDysfunction1Spanish });
          break;
        case 'erectile-dysfunction-1-french':
          resolve({ data: ErectileDysfunction1French });
          break;
        case 'erectile-dysfunction-1-portuguese':
          resolve({ data: ErectileDysfunction1Portuguese });
          break;
        case 'erectile-dysfunction-1-chinese':
          resolve({ data: ErectileDysfunction1Chinese });
          break;
        case 'giveaway-1-english':
          resolve({ data: Giveaway1English });
          break;
        case 'giveaway-1-german':
          resolve({ data: Giveaway1German });
          break;
        case 'giveaway-1-french':
          resolve({ data: Giveaway1French });
          break;
        case 'giveaway-1-portuguese':
          resolve({ data: Giveaway1Portuguese });
          break;
        case 'giveaway-1-chinese':
          resolve({ data: Giveaway1Chinese });
          break;
        case 'giveaway-1-spanish':
          resolve({ data: Giveaway1Spanish });
          break;
        default: {
          resolve({ data: {} });
          break;
        }
      }
    });
  }
}

export default SectionsDb;
