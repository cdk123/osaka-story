export type CompanionType = 'family' | 'youth' | 'adult' | 'solo';
export type AreaType = 'namba' | 'shinsaibashi' | 'umeda' | 'other';
export type CategoryType = 
  | 'beef' // 와규·고기
  | 'curry' // 카레·경양식
  | 'noodle' // 우동·초밥·장어
  | 'bento' // 도시락·만두
  | 'cafe' // 찻집·빵·디저트
  | 'spot' // 로컬명소·온천
  | 'craft'; // 장인명품·기념품

export interface SurvivalBadge {
  label: string;
  type: 'seat' | 'wait' | 'cash' | 'time' | 'age' | 'notice' | 'hack';
  tooltip?: string;
}

export interface Place {
  id: string;
  nameKo: string;
  nameJa: string;
  nameKana: string; // 한글 발음 표기
  branchKo: string;
  branchJa: string;
  category: CategoryType;
  categoryLabel: string;
  area: AreaType;
  areaLabel: string;
  companions: CompanionType[];
  badges: string[]; // ['元祖', '名物', '老舗', '匠人']
  survivalBadges: SurvivalBadge[];
  station: string; // 예: "난바역 도보 3분"
  rating: number; // 예: 4.6
  priceRange: string; // 예: "¥1,000 ~ ¥2,000"
  signatureMenu: string;
  story: string; // 역사와 맛의 배경
  tip: string; // 주문 및 웨이팅 팁
  addressJa: string;
  addressKo: string;
  phone: string;
  openHours: string;
  googleQuery: string; // 구글 지도 검색어
  image: string; // 고화질 이미지 URL
  taxiNote?: string; // 기사님 안내 추가 메모
  fingerOrderItems?: { nameJa: string; nameKo: string; price?: string }[];
}

export interface StoryChapter {
  id: string;
  number: string; // "프롤로그", "제1장", ...
  title: string;
  subtitle: string;
  period: string; // "도요토미 히데요시 시대", "에도 시대 1603~1867" 등
  lead: string;
  content: string[]; // 문단별 텍스트
  quote?: { text: string; author: string };
  featuredPlaceIds: string[]; // 본문 하단 카드 덱에 표시할 장소 ID
}

export interface DialectItem {
  id: string;
  phraseJa: string;
  phraseKana: string;
  pronounceKo: string;
  meaningKo: string;
  originKo: string;
  exampleJa: string;
  exampleKo: string;
  tag: '인사' | '감탄' | '식당' | '쇼핑' | '대화';
}

export interface MediaWork {
  id: string;
  category: '영화' | '애니메이션' | '소설' | '할리우드 영화';
  titleKo: string;
  titleJa: string;
  authorOrDirector: string;
  releaseYear: string;
  locationKo: string;
  description: string;
  quoteOrScene: string;
  image: string;
}

export interface PhotoSpot {
  id: string;
  titleKo: string;
  locationKo: string;
  bestTime: string;
  tip: string;
  sceneDesc: string;
  image: string;
}
