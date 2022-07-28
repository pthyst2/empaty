import { environment } from 'src/environments/environment';
const thumbnailUrl = environment.imageUrls.thumbnail;
const fixedHeight = 3;

export const mockSpaceSizes = [
  {
    _id: 1,
    thumbnail: thumbnailUrl + 'space-size-1.png',
    width: 6,
    length: 8,
    total: 48,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
  {
    _id: 2,
    thumbnail: thumbnailUrl + 'space-size-2.png',
    width: 16,
    length: 20,
    total: 320,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
  {
    _id: 3,
    thumbnail: thumbnailUrl + 'space-size-3.png',
    width: 20,
    length: 36,
    total: 640,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
  {
    _id: 4,
    thumbnail: thumbnailUrl + 'space-size-1.png',
    width: 8,
    length: 10,
    total: 80,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
  {
    _id: 5,
    thumbnail: thumbnailUrl + 'space-size-2.png',
    width: 10,
    length: 50,
    total: 500,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
  {
    _id: 6,
    thumbnail: thumbnailUrl + 'space-size-3.png',
    width: 50,
    length: 50,
    total: 2500,
    detail:
      '<ul><li>社員椅子：5個</li><li>テーブル：2個</li><li>コンピューター: 4台</li><li>ドア：2枚</li><li>プリンター：1台</li><li>他のオブジェクト：10個</li></ul>',
  },
];
