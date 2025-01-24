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
  contacts: [
    {
      text: 'ติดต่อพวกเราได้ที่',
      channel: 'Email',
      href: 'https://google.com'
    },
  ],
  rsvpUrl: 'https://google.com',
  coverImage: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
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
