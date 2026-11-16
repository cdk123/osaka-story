import type { DialectItem } from './types';

export const dialects: DialectItem[] = [
  {
    id: 'ookini',
    phraseJa: 'おおきに！',
    phraseKana: '오오키니',
    pronounceKo: '오오키니~',
    meaningKo: '고맙습니다! / 대단히 감사합니다!',
    originKo: '‘크게 은혜를 입었습니다(大いに感謝します)’라는 고대 일본어에서 유래했습니다. 에도 시대 이전 천 년간 일본의 경제 중심지였던 오사카 상인들의 따뜻한 인간미가 담겨 있습니다.',
    exampleJa: 'ごちそうさま！おおきに！',
    exampleKo: '식당 문을 나서며: “잘 먹었습니다! 오오키니~”',
    tag: '인사'
  },
  {
    id: 'mecha-umai',
    phraseJa: 'めっちゃ うまい！',
    phraseKana: '멧챠 우마이',
    pronounceKo: '메차 우마이! (또는 바리 우마이!)',
    meaningKo: '진짜 완전 미쳤다! 엄청 맛있어요!',
    originKo: '오사카 방언 ‘멧챠(엄청, 매우)’가 젊은 층을 통해 일본 전국 표준 유행어로 번져나간 대표 사례입니다. 음식이 감동적일 때 요리사에게 최고의 찬사입니다.',
    exampleJa: 'これ、めっちゃうまいわ！',
    exampleKo: '와규 한 입 넣고 감탄하며: “와, 이거 진짜 메차 우마이와~”',
    tag: '감탄'
  },
  {
    id: 'okawari-ikemasuka',
    phraseJa: 'おかわり いけますか？',
    phraseKana: '오카와리 이케마스카',
    pronounceKo: '오카와리 이케마스카?',
    meaningKo: '리필(추가) 가능한가요?',
    originKo: '도쿄 표준어의 딱딱한 ‘데키마스카(できますか·가능합니까)’ 대신 친근하게 ‘이케마스카(行けますか·갈 수 있습니까/되나요)’를 쓰는 오사카 특유의 리듬감 넘치는 화법입니다.',
    exampleJa: 'お茶のおかわり、いけますか？',
    exampleKo: '따뜻한 차나 밥을 더 원할 때: “오차노 오카와리, 이케마스카?”',
    tag: '식당'
  },
  {
    id: 'oaiso',
    phraseJa: 'お愛想して〜',
    phraseKana: '오아이소 시테',
    pronounceKo: '오아이소 시테~ (또는 오카이케이 오네가이시마스)',
    meaningKo: '계산해 주세요~',
    originKo: '손님이 식사를 마치고 계산할 때 상인에게 “오늘 내 접대가 변변치 못해 손님의 애정(아이소)이 떨어졌을까 염려됩니다”라고 겸양을 표하던 오사카 요포 상인 문화에서 유래했습니다.',
    exampleJa: '大将、お愛想して！',
    exampleKo: '이자카야나 스시집을 나서며: “사장님, 오아이소 시테~”',
    tag: '식당'
  },
  {
    id: 'nanbodesuka',
    phraseJa: 'これ、なんぼですか？',
    phraseKana: '코레 난보데스카',
    pronounceKo: '코레, 난보데스카?',
    meaningKo: '이거 얼마예요?',
    originKo: '도쿄의 “이쿠라데스카(いくらですか)”에 비해 훨씬 직설적이고 통통 튀는 오사카 상인들의 물건값 묻기입니다.',
    exampleJa: 'すいません、これなんぼ？',
    exampleKo: '시장이나 상점에서 물건을 가리키며: “스미마센, 코레 난보데스카?”',
    tag: '쇼핑'
  },
  {
    id: 'kawaiiyan',
    phraseJa: 'めっちゃ可愛いやん！',
    phraseKana: '멧챠 카와이이얀',
    pronounceKo: '메차 카와이이얀~',
    meaningKo: '어머, 이거 진짜 귀엽잖아!',
    originKo: '문장 끝에 ‘~잖아 / ~네’의 뉘앙스를 담는 오사카 사투리 ‘~얀(やん)’의 마법입니다. 말을 부드럽고 다정하게 만들어줍니다.',
    exampleJa: 'このスイーツ、めっちゃ可愛いやん！',
    exampleKo: '예쁜 디저트를 발견했을 때: “코노 스이츠, 메차 카와이이얀!”',
    tag: '감탄'
  },
  {
    id: 'bochibochi',
    phraseJa: 'ぼちぼちでんな〜',
    phraseKana: '보치보치 덴나',
    pronounceKo: '보치보치 덴나~',
    meaningKo: '그저 그래요~ 슬슬 잘 굴러갑니다.',
    originKo: '오사카 상인이 마주쳤을 때 건네는 인사 “모카리막카?(장사 잘되십니까?)”에 대해, 너무 잘된다고 자랑하면 질투를 사고 망했다고 하면 체면이 깎이니 “슬슬 그럭저럭 굴러갑니다”라고 능청스럽게 넘기는 처세의 명표현입니다.',
    exampleJa: '景気はどう？ — ぼちぼちでんな。',
    exampleKo: '요즘 어때? — “보치보치 덴나~”',
    tag: '대화'
  },
  {
    id: 'nandeyanen',
    phraseJa: 'なんでやねん！',
    phraseKana: '난데야넨',
    pronounceKo: '난데야넨!',
    meaningKo: '대체 왜 그러는데?! 말도 안 돼! (어이없음/태클)',
    originKo: '일본 코미디 만자이(만담)에서 바보짓을 하는 보케(Boke)의 머리를 가볍게 치며 날리는 태클(츳코미)의 1위 대사입니다. 친한 사이에 유쾌한 반박으로 쓰입니다.',
    exampleJa: 'そんなアホな！なんでやねん！',
    exampleKo: '친구가 엉뚱한 소리를 할 때: “손나 아호나! 난데야넨!”',
    tag: '대화'
  },
  {
    id: 'akan',
    phraseJa: 'あかん！ (これ、あかんわ〜)',
    phraseKana: '아칸 (코레 아칸와)',
    pronounceKo: '아칸! / 코레 아칸와~',
    meaningKo: '안 돼! 큰일 났다! (음식 앞에서는: 너무 맛있어서 반칙이다!)',
    originKo: '‘라치(埒)가 안 뚫린다(진도가 안 나간다)’에서 나온 부정어이지만, 맛있는 음식을 먹을 때는 “너무 맛있어서 기절하겠다, 반칙이다”라는 극찬의 역설로 쓰입니다.',
    exampleJa: 'この肉、美味しすぎてあかんわ！',
    exampleKo: '와규가 입에서 살살 녹을 때: “코노 니쿠, 오이시스기테 아칸와!”',
    tag: '감탄'
  },
  {
    id: 'honma-shirankedo',
    phraseJa: 'ほんま？ 知らんけど。',
    phraseKana: '혼마? 시란케도',
    pronounceKo: '혼마?! ...시란케도~',
    meaningKo: '진짜로?! ...근데 확실하진 않아, 아님 말고~',
    originKo: '열정적으로 길고 긴 썰을 늘어놓은 뒤 마지막에 쓱 덧붙이는 오사카인 특유의 책임 회피형(?) 해학입니다. 말을 유쾌하게 마무리하는 만능 추임새입니다.',
    exampleJa: 'あそこの店が日本一らしいで。知らんけど。',
    exampleKo: '“저 집이 일본에서 제일 맛있대. ...시란케도(확실하진 않지만)!”',
    tag: '대화'
  }
];
