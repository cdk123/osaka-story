export interface CityStats {
  label: string;
  osakaCity: string;
  osakaPrefecture: string;
  busanCompare: string;
  note: string;
}

export interface CityDistrict {
  id: string;
  nameKo: string;
  nameJa: string;
  characterKo: string;
  highlights: string[];
  subwayStations: string[];
  description: string;
  color: string;
  image: string;
  googleQuery: string;
  jumpTab: 'explore' | 'spots';
  jumpFilter: string;
  jumpLabel: string;
}

export interface TraditionalMarket {
  nameKo: string;
  nameJa: string;
  historyKo: string;
  featuresKo: string;
  signatureFoods: string[];
  access: string;
  image: string;
  googleQuery: string;
  placeId?: string;
  placeLabel?: string;
}

export interface SpecialtyItem {
  nameKo: string;
  nameJa: string;
  category: string;
  descriptionKo: string;
  originArea: string;
  tip: string;
  image: string;
  placeId?: string;
  placeLabel?: string;
}

export const busanComparison = {
  title: '오사카는 부산보다 얼마나 크고 작을까?',
  summary: '오사카시 중심부는 부산의 약 1/3 크기! 평지에 촘촘히 압축되어 있어 지하철 10~20분이면 어디든 닿습니다.',
  heroImage: '/images/city/hero-osaka.jpg',
  stats: [
    {
      label: '면적 비교',
      osakaCity: '오사카시 약 225㎢',
      osakaPrefecture: '오사카부 약 1,905㎢ (제주도 크기)',
      busanCompare: '부산광역시(770㎢)의 약 1/3 크기, 서울(605㎢)의 약 37%',
      note: '산지가 많은 부산과 달리 오사카 중심부는 완전한 평지라 도보 이동 피로도가 훨씬 낮습니다.'
    },
    {
      label: '인구 비교',
      osakaCity: '약 278만 명 (주간 활동인구 370만 이상)',
      osakaPrefecture: '약 880만 명 (일본 2위 대도시권)',
      busanCompare: '부산(약 330만 명)과 거주 인구는 비슷하나, 낮에는 인근 교토·고베에서 수백만 명이 유입',
      note: '도쿄 다음으로 거대한 일본 경제의 핵심 심장부입니다.'
    },
    {
      label: '이동 시간 체감',
      osakaCity: '지하철 미도스지선 기준 우메다↔난바 단 9분',
      osakaPrefecture: '공항↔시내 특급 라피트로 38분',
      busanCompare: '해운대에서 남포동까지 40~50분 걸리는 부산에 비해, 오사카의 핵심 핫플은 10~15분 반경에 밀집',
      note: '가족 여행이나 3박 4일 일정에 최적화된 높은 동선 효율을 자랑합니다.'
    }
  ]
};

export const districts: CityDistrict[] = [
  {
    id: 'kita',
    nameKo: '키타 (北 · 북부 도심)',
    nameJa: 'キタ (梅田・中崎町・中之島)',
    characterKo: '초현대 빌딩숲, 거대 백화점 미식관, 그리고 100년 목조 카페 골목의 공존',
    highlights: ['JR 오사카역 & 우메다 던전', '한큐·한신 백화점 데파치카', '나카자키초 목조 고택 골목', '나카노시마 중앙공회당 수변 야경'],
    subwayStations: ['우메다역', '오사카역', '나카자키초역', '기타하마역'],
    description: '오사카의 북쪽 관문이자 비즈니스·패션의 최첨단 구역입니다. 거대한 백화점 식당가와 지하철 미로 지하상가가 펼쳐지는 동시에, 도보 10분 거리에 1920년대 목조 주택이 살아있는 나카자키초와 물길을 따라 유럽풍 근대 건축이 늘어선 나카노시마가 펼쳐집니다.',
    color: '#1E293B',
    image: '/images/city/district-kita.jpg',
    googleQuery: '梅田 大阪駅 グランフロント大阪',
    jumpTab: 'explore',
    jumpFilter: 'umeda',
    jumpLabel: '이 구역 맛집 보기 →'
  },
  {
    id: 'minami',
    nameKo: '미나미 (南 · 남부 심장부)',
    nameJa: 'ミナミ (難波・道頓堀・心斎橋)',
    characterKo: '‘천하의 부엌’과 ‘쿠이다오레’의 본향, 24시간 잠들지 않는 네온사인과 서민의 온기',
    highlights: ['글리코상 & 도톤보리 운하', '호젠지 요코초 물뿌리기 돌바닥', '신사이바시스지 아케이드', '센니치마에 도구야스지 주방거리'],
    subwayStations: ['난바역', '신사이바시역', '닛폰바시역'],
    description: '오사카 여행의 상징이자 미식의 심장부입니다. 타코야키, 오코노미야키, 쿠시카츠 냄새가 거리를 가득 채우고, 좁은 골목길 호젠지 요코초에는 100년 넘은 와규·단팥죽 노포들이 불을 밝힙니다.',
    color: '#D63B22',
    image: '/images/city/district-minami.jpg',
    googleQuery: '道頓堀 難波 心斎橋',
    jumpTab: 'explore',
    jumpFilter: 'namba',
    jumpLabel: '이 구역 맛집 보기 →'
  },
  {
    id: 'chuo-tanimachi',
    nameKo: '주오 · 다니마치 (오사카성 & 가라호리)',
    nameJa: '中央・谷町 (大阪城・空堀・本町)',
    characterKo: '도요토미 히데요시의 성곽 역사와 100년 나가야 고택을 재생한 복합 갤러리',
    highlights: ['오사카성 천수각 & 해자', '가라호리 상점가 언덕길', '복합문화공간 렌(練) & 에쿠추아', '300년 장어 명가 본가 시바토'],
    subwayStations: ['오사카조코엔역', '다니마치4초메역', '마츠야마치역'],
    description: '오사카의 역사가 깃든 행정·문화의 축입니다. 오사카성을 중심으로 남쪽 가라호리 지역은 전쟁의 피해를 면해 오사카 원래의 경사 지형과 100년 전 목조 연립주택이 감각적인 공방거리로 숨 쉬고 있습니다.',
    color: '#785204',
    image: '/images/city/district-chuo.jpg',
    googleQuery: '大阪城公園 空堀商店街',
    jumpTab: 'explore',
    jumpFilter: 'other',
    jumpLabel: '이 구역 맛집 보기 →'
  },
  {
    id: 'tennoji-shinsekai',
    nameKo: '텐노지 · 신세카이 (츠텐카쿠)',
    nameJa: '天王寺・新世界',
    characterKo: '쇼와 레트로의 원초적 에너지와 300m 초고층 아베노 하루카스의 대비',
    highlights: ['츠텐카쿠 전망대 & 빌리켄 신상', '원조 쿠시카츠 거리', '아베노 하루카스 300 전망대', '시텐노지 1400년 사찰'],
    subwayStations: ['텐노지역', '에비스초역', '도부츠엔마에역'],
    description: '1912년 파리의 에펠탑을 모티브로 세워진 츠텐카쿠 탑과 서민들의 꼬치튀김(쿠시카츠)이 탄생한 레트로의 성지 신세카이, 그리고 건너편에 일본 최고 높이의 초현대 빌딩 아베노 하루카스가 극적인 시간 여행을 선사합니다.',
    color: '#B8860B',
    image: '/images/city/district-tennoji.jpg',
    googleQuery: '新世界 通天閣 天王寺',
    jumpTab: 'spots',
    jumpFilter: 'local-nature',
    jumpLabel: '이 구역 명소 보기 →'
  },
  {
    id: 'bay-area',
    nameKo: '베이 에어리어 (항만 & 온천)',
    nameJa: 'ベイエリア (大阪港・弁天町・USJ)',
    characterKo: '시원한 바닷바람, 환상적인 일몰, 그리고 유카타를 입는 에도 시대 온천 테마파크',
    highlights: ['소라니와 온천 루프탑 족욕', '가이유칸 (세계 최대급 수족관)', '유니버설 스튜디오 재팬(USJ)', '덴포잔 대관람차 바다 조망'],
    subwayStations: ['벤텐초역', '오사카코역', '유니버설시티역'],
    description: '오사카만이 시원하게 펼쳐지는 수변 휴식처입니다. 유카타를 입고 16세기 에도 거리를 거닐 수 있는 소라니와 온천과 고래상어가 헤엄치는 가이유칸 수족관이 있어 가족 단위 힐링 코스로 완벽합니다.',
    color: '#2563EB',
    image: '/images/places/soraniwa-onsen.jpg',
    googleQuery: '空庭温泉 OSAKA BAY TOWER 大阪港',
    jumpTab: 'spots',
    jumpFilter: 'local-nature',
    jumpLabel: '이 구역 명소 보기 →'
  },
  {
    id: 'hokusetsu-senshu',
    nameKo: '호쿠세츠 & 센슈 (북부 자연 · 남부 장인)',
    nameJa: '北摂・箕面 / 泉州・堺',
    characterKo: '1300년 단풍잎 튀김 계곡과 600년 역사의 프로 셰프 주방칼 산지',
    highlights: ['미노오 폭포 피톤치드 산책길', '모미지 덴푸라 (단풍잎 튀김)', '사카이 수제 주방칼(타워 나이프)', '130년 센슈 타올 & 센슈 물가지'],
    subwayStations: ['한큐 미노오역', '난카이 사카이역', '간사이공항역'],
    description: '오사카의 북쪽 끝과 남쪽 끝에 위치한 숨은 보물입니다. 북부 호쿠세츠는 맑은 물과 계곡 폭포의 힐링을, 남부 센슈와 사카이는 일본 최고의 장인 식도와 1초 흡수 수건의 산지로서 여행의 깊이를 더해줍니다.',
    color: '#15803D',
    image: '/images/places/minoh-waterfall.jpg',
    googleQuery: '箕面大滝 箕面公園',
    jumpTab: 'spots',
    jumpFilter: 'all',
    jumpLabel: '이 구역 명소·명품 보기 →'
  }
];

export const markets: TraditionalMarket[] = [
  {
    nameKo: '구로몬 시장 (검은 문 시장)',
    nameJa: '黒門市場',
    historyKo: '1820년대 인근 묘엔지 절의 검은 산문(山門)에서 이름이 붙은 190년 역사의 전통 어시장',
    featuresKo: '‘오사카 요리사들의 식자재 보물창고’로 불리며, 신선한 복어, 가리비, 킹크랩, 와규를 즉석에서 철판에 구워주는 길거리 미식 천국',
    signatureFoods: ['통가리비 버터간장구이', '킹크랩 다리 구이', '생성게알(우니)', '생딸기 다이후쿠 모찌', '복어회'],
    access: '오사카메트로 사카이스지선·센니치마에선 닛폰바시역 10번 출구 도보 2분',
    image: '/images/places/kuromon-market.jpg',
    googleQuery: '黒門市場 大阪',
    placeId: 'kuromon-market',
    placeLabel: '구로몬 시장 미식 가이드 카드 보기 →'
  },
  {
    nameKo: '키즈 도매시장 (기즈 이치바)',
    nameJa: '木津卸売市場',
    historyKo: '1710년 에도 시대 막부의 공인을 받아 문을 연 300년 역사의 민간 수산·청과 도매시장',
    featuresKo: '관광객보다 현지 전문 요리사들이 새벽마다 찾는 찐 로컬 시장! 새벽 6시부터 신선한 카이센동(해산물 덮밥)과 장어덮밥 식당이 영업',
    signatureFoods: ['새벽 갓 뜬 카이센동', '두툼한 장어구이 덮밥', '계란말이 노포의 다시마키 타마고'],
    access: '오사카메트로 미도스지선·요츠바시선 다이코쿠초역 1번 출구 도보 3분',
    image: '/images/city/market-kizu.jpg',
    googleQuery: '大阪木津卸売市場',
    placeId: 'honke-shibato',
    placeLabel: '300년 마무시 장어 본가 시바토 보기 →'
  },
  {
    nameKo: '덴진바시스지 상점가',
    nameJa: '天神橋筋商店街',
    historyKo: '오사카텐만구 신사 참배객들을 위해 에도 시대부터 자연스럽게 형성된 상점가',
    featuresKo: '1초메부터 7초메까지 총 길이 약 2.6km에 달하는 일본 최장(最長)의 아케이드 상점가! 끝까지 완주하면 상점가 연합회에서 ‘완보 증명서’ 발급',
    signatureFoods: ['나카무라야 고로케 (달콤 바삭)', '권총 라멘', '옛날식 킷사텐 토스트', '수제 어묵'],
    access: '오사카메트로 사카이스지선 오기마치역 / 미나미모리마치역 직결',
    image: '/images/city/market-tenjinbashi.jpg',
    googleQuery: '天神橋筋商店街 大阪',
    placeId: 'sumiyoshi-taisha-hatsumode',
    placeLabel: '오사카 텐만구 & 스미요시 축제 보기 →'
  }
];

export const specialties: SpecialtyItem[] = [
  {
    nameKo: '센슈 물가지 (미즈나스)',
    nameJa: '泉州 水茄子',
    category: '농산물·채소',
    originArea: '오사카 남부 센슈(泉州) 지방',
    descriptionKo: '사과나 배처럼 수분이 가득 차 있어 손으로 쥐어짜면 맑은 즙이 뚝뚝 떨어지는 기적의 가지입니다. 떫은맛이 전혀 없어 칼을 대지 않고 손으로 찢어 생으로 먹거나 쌀겨에 절여 먹습니다.',
    tip: '오사카 로컬 이자카야나 일식집에서 메뉴판에 ‘水茄子’가 보이면 무조건 주문해 보세요. 아삭하고 달콤한 채즙에 깜짝 놀라게 됩니다.',
    image: '/images/city/spec-mizunasu.jpg',
    placeId: 'takoume-honten',
    placeLabel: '180년 노포 타코우메 본점 보기 →'
  },
  {
    nameKo: '오사카만 3대 명품 해산물',
    nameJa: '大阪湾の三大多幸 (真蛸・鱧・虎河豚)',
    category: '수산물',
    originArea: '오사카만 및 세토내해 연안',
    descriptionKo: '오사카만은 플랑크톤이 풍부해 육질이 차지고 단단한 ‘참문어(마다코)’, 뼈를 잘게 발라내는 섬세한 칼질로 여름을 나는 ‘갯장어(하모)’, 그리고 겨울 미식의 제왕 ‘참복(토라후구)’의 천국입니다.',
    tip: '오사카 타코야키가 특별히 쫄깃한 비결이 바로 이 오사카만의 참문어 전통 덕분입니다.',
    image: '/images/city/spec-seafood.jpg',
    placeId: 'genpin-fugu',
    placeLabel: '참복 요리 명가 겐핀 복어 보기 →'
  },
  {
    nameKo: '시오콘부 (염장 숙성 다시마)',
    nameJa: '塩昆布 (えびすめ)',
    category: '가공식품·조미료',
    originArea: '오사카 주오구 / 신사이바시 (오구라야 야마모토 등)',
    descriptionKo: '홋카이도에서 들여온 최상급 다시마를 오사카 특제 양념 간장과 미림에 졸여 겉에 하얀 소금 결정이 피어나도록 건조한 천연 밥도둑입니다.',
    tip: '갓 지은 흰 쌀밥에 두세 가닥만 얹어도 다른 반찬이 필요 없으며, 뜨거운 물을 부어 먹는 오차즈케용으로 최고입니다.',
    image: '/images/places/oguraya-yamamoto.jpg',
    placeId: 'oguraya-yamamoto',
    placeLabel: '1848년 창업 오구라야 야마모토 보기 →'
  },
  {
    nameKo: '노세 왕밤 (노세 쿠리)',
    nameJa: '能勢の銀寄栗',
    category: '임산물·과일',
    originArea: '오사카 북부 노세(能勢) 청정 산간 지역',
    descriptionKo: '알이 크고 당도가 높아 에도 시대 쇼군에게 진상되던 유서 깊은 밤 품종 ‘긴요세(銀寄)’의 원산지입니다. 몽블랑과 밤 양갱, 가을 화과자의 핵심 재료로 쓰입니다.',
    tip: '가을·겨울철 백화점 화과자 코너에서 노세산 밤을 사용한 밤 다이후쿠나 밤 양갱을 만나면 놓치지 마세요.',
    image: '/images/city/spec-chestnut.jpg',
    placeId: 'tsuruya-hachiman',
    placeLabel: '340년 양갱 총본산 츠루야 하치만 보기 →'
  },
  {
    nameKo: '사카이 식도 & 센슈 타올 & 나니와 주석기',
    nameJa: '堺打刃物・泉州タオル・大阪浪華錫器',
    category: '국가 지정 전통 공예품',
    originArea: '사카이시, 센슈, 오사카시',
    descriptionKo: '칼날에 이름이 새겨지는 600년 전통의 프로 셰프 칼, 빨지 않고 바로 써도 1초 만에 물기를 흡수하는 천연 온천수 세척 타올, 술의 잡미를 없애주는 주석 술잔은 오사카 장인 정신의 3대 정점입니다.',
    tip: '식도는 기내 반입이 절대 불가하므로 반드시 위탁 수하물 캐리어에 넣어야 하며, 주석 잔은 면세점에서 찾기 어려우므로 백화점 7층 공예 코너에서 구매하세요.',
    image: '/images/places/sakai-knives.jpg',
    placeId: 'sakai-knives',
    placeLabel: '600년 전통 사카이 수제 주방칼 보기 →'
  }
];
