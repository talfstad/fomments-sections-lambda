export default ({ userId }) => {
  const state = {
    sectionInfo: {
      id: `${userId}-muscle-1-chinese`,
      translateText: '英語翻譯',
      defaultCommentsToShow: 5,
      defaultCommentsToLoadAtOnce: 10,
      defaultRepliesToShow: 5,
      defaultRepliesToLoadAtOnce: 10,
      generalProductName: '這',
    },
    user: {
      id: 134,
      name: 'Customer Comment',
      url: '',
      image: '/images/noprofilepic.jpg',
      affiliation: {
        name: '',
        url: '',
      },
    },
    sortBy: {
      top: true,
      newest: false,
      oldest: false,
    },
    list: {
      musc3chipo002a: {
        id: 'musc3chipo002a',
        content: '肌 肉 哥，你希望肌肉結實嗎？你想要超人的耐力嗎？你想要更多精力嗎？沒問題, 用這就沒錯。',
        user: {
          id: 1005,
          name: 'Daniel Grant',
          url: 'https://www.facebook.com/profile.php?id=100010753321960',
          image: '/images/profilepics/daniel_grant.jpg',
          affiliation: {
            name: 'H&M',
            url: 'https://www.facebook.com/pages/HM/105835336124103?timeline_context_item_type=intro_card_work&timeline_context_item_source=100010753321960&pnref=lhc',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 1,
        relativeDate: [0, 5, 10],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3chipo005a: {
        id: 'musc3chipo005a',
        content: '好吧，讓我先說說以前的預訓練，我應該停止服用了，因為他們一點用都沒有。而這個是完全不同。這東西不只讓我舉重可以舉更重，而且我的身體明顯看上去健美多了。非常感謝 這個 ！',
        user: {
          id: 32,
          name: 'Erwin Aguirre',
          url: 'https://www.facebook.com/erwin.aguirre.543',
          image: '/images/profilepics/erwin_aguirre.jpg',
          affiliation: {
            name: 'Danville, Virginia',
            url: 'https://www.facebook.com/places/Things-to-do-in-Danville-Virginia/111958528817427/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 2,
        relativeDate: [1, 2, 42],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3chipo007b: {
        id: 'musc3chipo007b',
        content: '我很高興他們又有賣了...沒有什麼能跟PRODUCT_NAME比的...',
        user: {
          id: 33,
          name: 'Ryan Shaw',
          url: 'https://www.facebook.com/profile.php?id=100011024079581',
          image: '/images/profilepics/ryan_shaw.jpg',
          affiliation: {
            name: '',
            url: '',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 8,
        relativeDate: [5, 4, 29],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3chipo007br1: {
            id: 'musc3chipo007br1',
            parentId: 'musc3chipo007b',
            content: '老兄， 。我我完全同意。 他們停賣時，我真的很不爽。希望他們不要在停了',
            user: {
              id: 34,
              name: 'Andrew Metz',
              url: 'https://www.facebook.com/profile.php?id=100010922196040',
              image: '/images/profilepics/andrew_metz.jpg',
              affiliation: {
                name: 'San Diego State University',
                url: 'https://www.facebook.com/SanDiegoState/?pnref=lhc&rf=105454902822165',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 3,
            relativeDate: [3, 4, 12],
            report: false,
            spam: false,
            edited: false,
          },
          musc3chipo007br2: {
            id: 'musc3chipo007br2',
            parentId: 'musc3chipo007b',
            content: '他們通常有存貨嗎？',
            user: {
              id: 35,
              name: 'Arthur Sanchez',
              url: 'https://www.facebook.com/profile.php?id=100011021021734',
              image: '/images/profilepics/arthur_sanchez.jpg',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            relativeDate: [3, 3, 24],
            report: false,
            spam: false,
            edited: false,
          },
          musc3chipo007br3: {
            id: 'musc3chipo007br3',
            parentId: 'musc3chipo007b',
            content: '不了，大概看他們的存貨量吧。我第一次買的時候，不敢多買。結果他們賣完了。再不會再犯那樣的錯誤。',
            user: {
              id: 1005,
              name: 'Daniel Grant',
              url: 'https://www.facebook.com/profile.php?id=100010753321960',
              image: '/images/profilepics/daniel_grant.jpg',
              affiliation: {
                name: 'H&M',
                url: 'https://www.facebook.com/pages/HM/105835336124103?timeline_context_item_type=intro_card_work&timeline_context_item_source=100010753321960&pnref=lhc',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 1,
            relativeDate: [0, 6, 18],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3chipo008a: {
        id: 'musc3chipo008a',
        content: '這玩意真棒，鍛煉到爽爆。我第一天得強迫自己停下來。超多的耐力和精力。我朋友鍛煉完也跑去買了，哈哈',
        user: {
          id: 36,
          name: 'Thomas Gould',
          url: 'https://www.facebook.com/profile.php?id=100012123661834',
          image: '/images/profilepics/thomas_gould.jpg',
          affiliation: {
            name: 'Los Angeles, California',
            url: 'https://www.facebook.com/places/Things-to-do-in-Los-Angeles-California/110970792260960/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 7,
        relativeDate: [5, 1, 18],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3chipo011a: {
        id: 'musc3chipo011a',
        content: '我今年 47 歲。 我從十幾歲時身材就很好。我向來就喜歡找符合經濟效益的健康食品來幫我達到我的目標。我很久以前就發現增加肌肉是我需要的最重要的健康食品。我不了解爲什麽這些東西在本地的健康食品店價錢是貴的離譜，PRODUCT_NAME的價格適中。在騎脚踏車課里，我比 20 多歲和 30 多歲的騎的更快。不相信我嗎？你可以這個星期嘗一些新的運動。試用這個2個月，加上每週至少兩次鍛煉。你會看到結果。你的肌肉耐力也會更長。祝你好運，上帝保佑你。約翰 3:16',
        user: {
          id: 37,
          name: 'William Smith',
          url: 'https://www.facebook.com/profile.php?id=100013487350302',
          image: '/images/profilepics/william_smith.jpg',
          affiliation: {
            name: 'Oceanside, California',
            url: 'https://www.facebook.com/places/Things-to-do-in-Oceanside-California/108109819210122/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 7,
        relativeDate: [7, 5, 18],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
      },
      musc3chinu002b: {
        id: 'musc3chinu002b',
        content: '它值得嗎???這要看你有多想增加肌肉...就 我個人的經驗，我建議你運動前，運動時，和運動后多喝點水。在你的鍛煉和之後...如果你從來沒有用過這個，那後我建議你在運動前30分鐘吃他建議的劑量和你其他運動前的營養食品。當你開始你的鍛煉的頭一小時，如果你不覺得什麼不同，不用擔心，下次你鍛煉帶前用的充分劑量，現在我必須警告你千萬別做何增加心跳的運動，我第一次使用充分劑量只是跑步機上走路我就覺得頭重腳輕 ，我而且心跳快...所以要小心。 但我第二次用全劑量時，沒做增加心跳的運動，我感覺很好完 全 沒 問題 。只是瘋狂的鍛煉。而且我第一次看到我的血管爆起來。我有用過許多其他運動產品，但這一個是 5星 級 產品。衹是稍貴。 但如果你是第一次用要小心，',
        user: {
          id: 38,
          name: 'Anthony Kerr',
          url: 'https://www.facebook.com/profile.php?id=100010932758383',
          image: '/images/profilepics/anthony_kerr.jpg',
          affiliation: {
            name: 'Miami, Florida',
            url: 'https://www.facebook.com/places/Things-to-do-in-Miami-Florida/110148382341970/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 18,
        relativeDate: [14, 8, 16],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3chinu002br1: {
            id: 'musc3chinu002br1',
            parentId: 'musc3chinu002b',
            content: '你確定你用正確的劑量？我也有吃這個和做有氧運動，都沒問題。',
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: '/images/profilepics/donald_bourn.jpg',
              affiliation: {
                name: 'Tyler, Texas',
                url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 7,
            relativeDate: [14, 4, 16],
            report: false,
            spam: false,
            edited: false,
          },
          musc3chinu002br2: {
            id: 'musc3chinu002br2',
            parentId: 'musc3chinu002b',
            content: '每人都不一樣。我和我朋友都吃，我可以做有氧運動，但他不能。只好自己試看看',
            user: {
              id: 40,
              name: 'Greg Mathis',
              url: 'https://www.facebook.com/profile.php?id=100011254382732',
              image: '/images/profilepics/greg_mathis.jpg',
              affiliation: {
                name: 'San Diego, California',
                url: 'https://www.facebook.com/places/Things-to-do-in-San-Diego-California/110714572282163/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 0,
            relativeDate: [7, 9, 12],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3chinu003a: {
        id: 'musc3chinu003a',
        content: '我用PRODUCT_NAME有兩個多星期了，到目前為止我都覺得很好。不像其他健身前補充劑都含有興奮劑或刺激性的東西，這個不會因爲咖啡因讓你過分興奮。但它很明顯的讓你體力增加了很多。在我用的第二個星期，我運動的動作如下蹲都增加了。我也覺得我舉重時有有更有力量了。我手背的血管似乎更明顯，肌肉也增加了。 這種膠囊是很容易吞，之後也有沒有怪味。我希望他在瓶上有一個劑量表讓我知道最多的安全。總體而言，我是非常滿意這產品，會推薦它。',
        user: {
          id: 39,
          name: 'Donald Bourn',
          url: 'https://www.facebook.com/donald.bourn.1',
          image: '/images/profilepics/donald_bourn.jpg',
          affiliation: {
            name: 'Tyler, Texas',
            url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 184,
        relativeDate: [21, 4, 8],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3chinu003ar1: {
            id: 'musc3chinu003ar1',
            parentId: 'musc3chinu003a',
            content: '更新︰ 我剛吃完我第一瓶，已經買了第二瓶了。我覺得在這四個星期里我已經變強壯了，我在健身房裡時的體力也更好。我很喜歡這個產品。會推薦給任何人想要減肥，增加體力或肌肉。',
            user: {
              id: 39,
              name: 'Donald Bourn',
              url: 'https://www.facebook.com/donald.bourn.1',
              image: '/images/profilepics/donald_bourn.jpg',
              affiliation: {
                name: 'Tyler, Texas',
                url: 'https://www.facebook.com/places/Things-to-do-in-Tyler-Texas/112917412056610/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 21,
            relativeDate: [14, 1, 6],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
      musc3chiqu001a: {
        id: 'musc3chiqu001a',
        content: '任何人都有過這嗎？它好用嗎？',
        user: {
          id: 41,
          name: 'Howard Reynolds',
          url: 'https://www.facebook.com/profile.php?id=100012007329355',
          image: '/images/profilepics/howard_reynolds.jpg',
          affiliation: {
            name: 'Ohio Christian University',
            url: 'https://www.facebook.com/OhioChristian/?pnref=lhc',
          },
        },
        options: {
          collapse: {
            enabled: true,
            content: 'Collapse comment',
          },
          spam: {
            enabled: true,
            content: 'Mark as spam',
          },
          report: {
            enabled: true,
            content: 'Report',
          },
          edit: {
            enabled: false,
            content: 'Edit comment',
          },
          delete: {
            enabled: false,
            content: 'Delete comment',
          },
        },
        likes: 24,
        relativeDate: [21, 6, 10],
        report: false,
        spam: false,
        showing: true,
        editing: false,
        liked: false,
        edited: false,
        replies: {
          musc3chiqu001ar1: {
            id: 'musc3chiqu001ar1',
            parentId: 'musc3chiqu001a',
            content: '超愛PRODUCT_NAME。我通常是不吃運動健康食品的，但這個實在是很好。它吃后感覺很好。讓我蠢蠢欲試，非常想要運動 ！不想要吃營養粉的人都該試試。',
            user: {
              id: 42,
              name: 'Kyle Stokes',
              url: 'https://www.facebook.com/profile.php?id=100010847341053',
              image: '/images/profilepics/kyle_stokes.jpg',
              affiliation: {
                name: 'Corona, California',
                url: 'https://www.facebook.com/places/Things-to-do-in-Corona-California/107633995923829/',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 2,
            relativeDate: [14, 19, 10],
            report: false,
            spam: false,
            edited: false,
          },
          musc3chiqu001ar2: {
            id: 'musc3chiqu001ar2',
            parentId: 'musc3chiqu001a',
            content: '我有重複訂單!!!我原來在高中期間就吃他最早的PRODUCT_NAME !!！只要它有買，我就是他的客戶。謝謝你啦肌肉製造工廠 ！我又定了一堆。',
            user: {
              id: 33,
              name: 'Ryan Shaw',
              url: 'https://www.facebook.com/profile.php?id=100011024079581',
              image: '/images/profilepics/ryan_shaw.jpg',
              affiliation: {
                name: '',
                url: '',
              },
            },
            options: {
              collapse: {
                enabled: false,
                content: 'Collapse comment',
              },
              spam: {
                enabled: true,
                content: 'Mark as spam',
              },
              report: {
                enabled: true,
                content: 'Report',
              },
              edit: {
                enabled: false,
                content: 'Edit comment',
              },
              delete: {
                enabled: false,
                content: 'Delete comment',
              },
            },
            liked: false,
            likes: 1,
            relativeDate: [14, 1, 10],
            report: false,
            spam: false,
            edited: false,
          },
        },
      },
    },
  };
  return state;
};
