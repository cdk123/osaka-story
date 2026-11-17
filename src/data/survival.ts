export interface AirportRoute {
  id: string;
  nameKo: string;
  targetDestination: string;
  duration: string;
  price: string;
  features: string[];
  recommendFor: string;
}

export interface TransitTip {
  category: 'subway' | 'bus' | 'taxi';
  titleKo: string;
  tips: { title: string; desc: string; warning?: boolean }[];
}

export interface SignboardItem {
  kanji: string;
  kana: string;
  pronounceKo: string;
  meaningKo: string;
  usageContext: string;
  colorType: 'green' | 'red' | 'yellow' | 'blue';
}

export interface EtiquetteRule {
  num: number;
  titleKo: string;
  ruleJa?: string;
  summary: string;
  detailedGuide: string;
  icon: string;
}

export const airportRoutes: AirportRoute[] = [
  {
    id: 'rapit',
    nameKo: '난카이 전철 특급 라피트 (Rapi:t)',
    targetDestination: '난바역 (미나미 도심 직결)',
    duration: '약 34~38분 (최단 시간)',
    price: '대인 약 ¥1,490 (승차권 + 특급권 지정석)',
    features: [
      '철인 28호를 닮은 독특하고 웅장한 감청색 우주선 열차 디자인',
      '전 좌석 100% 지정석으로 일행이 나란히 편안하게 착석',
      '객차 사이 대형 캐리어 전용 잠금장치 보관대 구비'
    ],
    recommendFor: '난바, 도톤보리, 신사이바시 쪽에 숙소를 잡은 모든 여행자의 1순위 추천'
  },
  {
    id: 'haruka-bus',
    nameKo: 'JR 특급 하루카 (Haruka) & 공항 리무진 버스',
    targetDestination: '우메다 (JR 오사카역), 신오사카, 텐노지, 교토',
    duration: '텐노지 35분 / 오사카역 47분 / 리무진 버스 우메다 50~60분',
    price: 'JR 하루카 약 ¥1,800~¥2,200 / 리무진 버스 약 ¥1,800',
    features: [
      '귀여운 헬로키티 랩핑 열차로 사진 찍기 좋고 좌석이 쾌적함',
      '공항 리무진 버스는 짐을 기사님이 트렁크에 직접 실어주어 환승 계단 걱정 제로',
      '우메다 주요 특급 호텔(한큐, 힐튼, 인터컨티넨탈) 정문 바로 앞 하차'
    ],
    recommendFor: '우메다 북부 도심에 숙소가 있거나, 캐리어가 많아 계단 환승이 부담스러운 경우'
  },
  {
    id: 'jumbo-taxi',
    nameKo: '사전 예약 점보 택시 / Uber XL 대형 밴',
    targetDestination: '오사카 시내 호텔 로비 문 앞까지 도어 투 도어 (Door to Door)',
    duration: '약 45~55분 (고속도로 직행)',
    price: '차량 1대당 약 ¥18,000 ~ ¥25,000 (통행료 포함, 4~6인 탑승 시 가성비 우수)',
    features: [
      '공항 입국장 피켓 미팅부터 숙소 로비까지 짐 들고 걸을 일 0%',
      '도요타 알파드 또는 하이에이스 6~9인승 밴으로 다인원과 대형 캐리어 완벽 적재',
      '밤늦은 시간 도착이나 이른 아침 귀국 비행기 시 피로도 제로'
    ],
    recommendFor: '4~6인 이상 가족·단체 여행객이나 짐이 많은 여행자의 쾌적한 이동'
  }
];

export const transitTips: TransitTip[] = [
  {
    category: 'subway',
    titleKo: '오사카 지하철(오사카메트로) 꿀팁',
    tips: [
      {
        title: '빨간색 ‘미도스지선(御堂筋線)’만 알면 80% 해결!',
        desc: '우메다(북)↔신사이바시↔난바↔덴노지(남)를 일직선으로 관통하는 오사카의 대동맥입니다. 길을 잃으면 무조건 빨간색 노선 마크를 찾으세요.'
      },
      {
        title: '신용카드 컨택리스(Contactless) 승차 가능!',
        desc: '와이파이 부채꼴 마크가 있는 국내 신용/체크카드(VISA, Mastercard 등)나 스마트폰 애플페이로 개찰구에 바로 터치하고 탈 수 있습니다. 교통카드(ICOCA)를 굳이 발급받지 않아도 됩니다.'
      },
      {
        title: '사철(한큐·한신·게이한) 환승 시 급행(急行) 확인',
        desc: '교토나 고베로 갈 때 각 역마다 서는 ‘보통(普通)’을 타면 2배 이상 걸립니다. 반드시 ‘특급(特急)’이나 ‘쾌속급행(快速急行)’을 탑승하세요 (추가 요금 없음).',
        warning: true
      }
    ]
  },
  {
    category: 'bus',
    titleKo: '시내버스 이용 요령',
    tips: [
      {
        title: '탑승은 ‘뒷문’, 하차 및 요금 지불은 ‘앞문’',
        desc: '한국과 반대로 버스 중간/뒷문으로 승차하고, 내릴 때 기사님 앞문 요금통에 카드 터치나 현금을 넣습니다.'
      },
      {
        title: '버스가 ‘완전히 멈춘 뒤’에 자리에서 일어나기',
        desc: '주행 중 미리 일어나서 앞으로 걸어나가면 기사님이 마이크로 크게 주의를 줍니다(사고 방지 규정). 정차 후 천천히 내려도 아무도 재촉하지 않습니다.',
        warning: true
      }
    ]
  },
  {
    category: 'taxi',
    titleKo: '오사카 택시 3대 주의사항',
    tips: [
      {
        title: '빨간색 ‘空車(쿠샤)’가 빈 차입니다!',
        desc: '한국과 색깔이 정반대입니다. 빨간 글씨 空車가 빈 차이고, 초록 글씨 賃走(친소)는 승객이 타고 있는 탑승 중 차입니다.'
      },
      {
        title: '뒷문은 100% 자동문! 절대로 손대지 마세요',
        desc: '기사님이 운전석 레버로 문을 열고 닫습니다. 억지로 손으로 문을 열거나 닫으려 하면 기계가 고장 날 수 있습니다.',
        warning: true
      },
      {
        title: '⚠️ 일본 일반 택시는 최대 4인까지만 탑승 가능!',
        desc: '운전기사 외 승객 정원이 최대 4인이므로, 5인 이상 일행은 택시 2대로 나누어 타거나 Uber 앱으로 대형 밴(Uber XL)을 호출해야 합니다.',
        warning: true
      }
    ]
  }
];

export const signboards: SignboardItem[] = [
  {
    kanji: '暖簾 (のれん)',
    kana: '노렌',
    pronounceKo: '노렌',
    meaningKo: '가게 입구에 걸린 천 커튼',
    usageContext: '노렌이 문 앞에 걸려 있으면 ‘영업 중’, 안쪽으로 걷혀 있으면 ‘영업 준비/마감’입니다. 식당 들어갈 때 가장 먼저 보는 신호등입니다.',
    colorType: 'blue'
  },
  {
    kanji: '営業中',
    kana: 'えいぎょうちゅう',
    pronounceKo: '에이교-츄-',
    meaningKo: '영업 중 (지금 들어오세요)',
    usageContext: '문 앞 팻말에 이 글자가 있으면 안심하고 미닫이문을 열고 들어가시면 됩니다.',
    colorType: 'green'
  },
  {
    kanji: '準備中 / 仕度中',
    kana: 'じゅんびちゅう / したくちゅう',
    pronounceKo: '준비츄- / 시타쿠츄-',
    meaningKo: '영업 준비 중 (브레이크 타임)',
    usageContext: '점심과 저녁 사이 브레이크 타임이거나 오픈 전 준비 시간입니다.',
    colorType: 'yellow'
  },
  {
    kanji: '完売 / 本日終了',
    kana: 'かんばい / ほんじつしゅうりょう',
    pronounceKo: '칸바이 / 혼지츠 슈-료-',
    meaningKo: '완판 / 오늘 영업 조기 마감',
    usageContext: '재료가 모두 소진되어 오늘 영업이 끝났음을 뜻합니다. (치토세 등 인기 노포에서 자주 볼 수 있음)',
    colorType: 'red'
  },
  {
    kanji: '満席',
    kana: 'まんせき',
    pronounceKo: '만세키',
    meaningKo: '만석 (자리 없음, 대기 필요)',
    usageContext: '현재 자리가 꽉 찼으니 대기 명단에 이름을 적거나 밖에서 기다려 달라는 뜻입니다.',
    colorType: 'red'
  },
  {
    kanji: '喫煙所',
    kana: 'きつえんじょ',
    pronounceKo: '키츠엔조',
    meaningKo: '지정 흡연 구역',
    usageContext: '오사카시는 길거리 보행 중 흡연 시 조례 위반으로 과태료(1,000~2,000엔)가 부과됩니다. 담배는 반드시 지정 흡연소 안에서만 피워야 합니다.',
    colorType: 'blue'
  },
  {
    kanji: 'お手洗い / 化粧室',
    kana: 'おてあらい / けしょうしつ',
    pronounceKo: '오테아라이 / 케쇼-시츠',
    meaningKo: '화장실',
    usageContext: '지하철역이나 식당에서 화장실을 찾을 때 가장 흔히 보는 단어입니다.',
    colorType: 'green'
  }
];

export const etiquetteRules: EtiquetteRule[] = [
  {
    num: 1,
    titleKo: '입구에서 손가락으로 인원수를 알리고 대기하기',
    ruleJa: '何名様ですか？ (몇 분이십니까?)',
    summary: '빈 테이블이 보여도 불쑥 걸어 들어가지 마세요.',
    detailedGuide: '가게 문을 열고 들어가면 직원이 “난메-사마데스카?(몇 분이십니까?)”라고 묻습니다. 이때 손가락으로 인원수를 표시하고 직원이 자리를 안내해 줄 때까지 입구에서 기다리는 것이 일본 외식의 첫 번째 예절입니다.',
    icon: '✋'
  },
  {
    num: 2,
    titleKo: '물수건(오시보리)은 오직 ‘손’만 닦기',
    ruleJa: 'おしぼり (오시보리)',
    summary: '얼굴이나 목, 땀, 식탁을 닦지 마세요.',
    detailedGuide: '자리에 앉으면 따뜻하거나 차가운 물수건을 건네줍니다. 이것은 음식을 먹기 전 오직 손을 깨끗이 닦는 용도입니다. 식탁에 국물이 튀었을 때는 직원을 불러 티슈나 행주를 요청하세요.',
    icon: '🧼'
  },
  {
    num: 3,
    titleKo: '이자카야 자릿세 안주 ‘오토시(お通し)’ 이해하기',
    ruleJa: 'お通し (오토시 / 자릿세 기본 안주)',
    summary: '주문하지 않은 작은 반찬이 나와도 당황하지 마세요.',
    detailedGuide: '저녁 주점(이자카야)에 가면 주문하지 않은 작은 조림이나 무침 안주가 인원수대로 나옵니다. 1인당 약 300~500엔 정도의 자릿세(테이블 차지) 개념으로 합법적인 일본의 음주 문화입니다.',
    icon: '🍶'
  },
  {
    num: 4,
    titleKo: '국물 그릇은 손에 들고 마시기 & 면치기 소리',
    ruleJa: '器を持って食べる (그릇을 들고 먹기)',
    summary: '고개 숙여 밥그릇에 입을 대는 것은 금기, 그릇을 가슴 높이로 들고 드세요.',
    detailedGuide: '한국에서는 밥그릇을 들고 먹으면 복 달아난다고 하지만, 일본에서는 밥공기나 국그릇을 손에 들지 않고 고개를 숙여 식탁에 입을 대고 먹는 것(이누구이, 犬食い)을 큰 결례로 봅니다. 우동·라멘을 후루룩 소리 내어 먹는 것은 면에 공기와 육수를 함께 넣어 풍미를 돋우는 자연스러운 행동입니다.',
    icon: '🍜'
  },
  {
    num: 5,
    titleKo: '돈과 카드는 접시(카루톤) 위에 올려놓기 & No Tip',
    ruleJa: 'カルトン (카루톤 / 계산 트레이)',
    summary: '직원 손에 직접 돈을 쥐여주지 마세요. 팁은 절대 주지 않습니다.',
    detailedGuide: '계산대에는 작은 플라스틱이나 스테인리스 쟁반(카루톤)이 있습니다. 현금이나 카드는 반드시 이 접시 위에 가지런히 올려두세요. 직원이 거스름돈을 줄 때도 접시 위에 영수증과 함께 올려줍니다. 일본은 팁 문화가 없으므로 계산서 금액만 정확히 지불하시면 됩니다.',
    icon: '💳'
  },
  {
    num: 6,
    titleKo: '에스컬레이터는 ‘오른쪽’에 서기 (오사카만의 독자 규칙!)',
    ruleJa: 'エスカレーターは右立ち (에스컬레이터 오른쪽 서기)',
    summary: '도쿄는 왼쪽이지만, 오사카는 전 세계 및 한국과 같이 오른쪽에 섭니다.',
    detailedGuide: '도쿄나 홋카이도는 에스컬레이터 탈 때 왼쪽에 서고 오른쪽을 비워두지만, 오사카는 1970년 오사카 만국박람회 당시 글로벌 표준을 수용하여 **오른쪽에 서고 왼쪽을 바쁜 사람을 위해 비워둡니다**. 오사카에 도착하자마자 에스컬레이터 오른쪽 줄에 서시면 바로 현지인이 됩니다!',
    icon: '🚇'
  }
];
