import { Language } from '@/app/_types/translation.type';
import { WeddingCeremony, WeddingInfo } from '@/app/_types/wedding.type';

export const mockWeddingInfo: WeddingInfo = {
  bride: {
    firstname: {
      [Language.EN]: 'Marry',
      [Language.TH]: 'แมรี่',
    },
    lastname: {
      [Language.EN]: 'Jane',
      [Language.TH]: 'เจน',
    },
  },
  groom: {
    firstname: {
      [Language.EN]: 'Peter',
      [Language.TH]: 'ปีเตอร์',
    },
    lastname: {
      [Language.EN]: 'Parker',
      [Language.TH]: 'ปาร์คเกอร์',
    },
  },
  datetime: new Date(),
  place: {
    title: {
      [Language.EN]: 'Ohayo room, Abc Hotel',
      [Language.TH]: 'ห้องโอฮาโย โรงแรม กขค'
    },
    location: {
      [Language.EN]: '12 Hello Rd., Bangkok Thailand',
      [Language.TH]: '12 ถ.สวัสดี กรุงเทพฯ ประเทสไทย'
    },
  },
  schedule: [
    {
      ceremony: WeddingCeremony.KhanMakProcession,
      time: {
        [Language.EN]: '08:39',
        [Language.TH]: '08:39',
      },
      detail: {
        [Language.EN]: ['Khan Mak Procession', 'Ohayo room, Fl.1'],
        [Language.TH]: ['พิธีแห่ขันหมาก', 'ห้องสวัสดี ชั้น )'],
      },
    },
    {
      ceremony: WeddingCeremony.RingExchange,
      time: {
        [Language.EN]: '09:19',
        [Language.TH]: '09:19',
      },
      detail: {
        [Language.EN]: ['Ring Exchange'],
        [Language.TH]: ['พิธีสวมแหวน'],
      },
    },
    {
      ceremony: WeddingCeremony.WaterBlessing,
      time: {
        [Language.EN]: '09:39',
        [Language.TH]: '09:39',
      },
      detail: {
        [Language.EN]: ['Water Blessing'],
        [Language.TH]: ['พิธีหลั่งน้ำพระพุทธมนต์'],
      },
    },
    {
      ceremony: WeddingCeremony.Reception,
      time: {
        [Language.EN]: '12:00',
        [Language.TH]: '12:00',
      },
      detail: {
        [Language.EN]: ['Wedding Reception', 'Unyong room, Fl.1', '(Buffet)'],
        [Language.TH]: ['ฉลองมงคลสมรส', 'ห้องอันยอง ชั้น 1', '(บุปเฟต์)'],
      },
    },
  ],
  donation: {
    qrUrl: 'data:image/png;base64,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',
    accountInfo: [
      {
        label: {
          EN: 'Bank',
          TH: 'ธนาคาร',
        },
        value: 'ไทยพาณิชย์'
      },
      {
        label: {
          EN: 'Account Name',
          TH: 'ชื่อบัญชี',
        },
        value: 'น.ส. แมรี่ เจน'
      },
      {
        label: {
          EN: 'Account No.',
          TH: 'เลขที่บัญชี',
        },
        value: '123-4-56789-0'
      },
    ],
  },
  rsvpUrl: 'https://google.com',
  coverImage: {
    day: {
      src: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
      position: 'center'
    },
    night: {
      src: 'https://fastly.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU',
      position: 'center'
    },
  },
  galleryImages: [
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
    'https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4',
    'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
    'https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE',
    'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4',
    'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  ],
  hashtag: '#MyWedding',
};
