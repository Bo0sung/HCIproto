type ThemeKey =
  | 'gpa'
  | 'portfolio'
  | 'project'
  | 'internship'
  | 'resume'
  | 'interview'
  | 'graduate'
  | 'employment'
  | 'information'
  | 'readinessStart'
  | 'anxiety'
  | 'confidence'
  | 'pressure'
  | 'failure'
  | 'decision'
  | 'majorFit';

interface ThemeInsight {
  key: ThemeKey;
  practical: string;
  emotional: string;
}

const themeInsights: ThemeInsight[] = [
  {
    key: 'readinessStart',
    practical: '아직 준비가 부족하다고 느껴진다면, 지금 가진 것과 처음 시작할 수 있는 행동을 나눠보겠습니다.',
    emotional: '무엇부터 해야 할지 막막할 때는 시작 자체가 크게 느껴질 수 있으니 부담을 작게 나눠보겠습니다.',
  },
  {
    key: 'information',
    practical: '필요한 정보, 확인할 출처, 질문할 사람을 나눠서 채워보겠습니다.',
    emotional: '정보가 부족하면 결정이 더 어렵게 느껴질 수 있으니, 모르는 부분을 차분히 분리해보면 좋겠습니다.',
  },
  {
    key: 'gpa',
    practical: '학점은 지원 조건 충족 여부와 보완 가능한 과목을 먼저 확인해보겠습니다.',
    emotional: '학점이 고민이라면 숫자 자체보다 그 숫자가 선택에 어떤 부담을 주는지 함께 살펴볼 수 있습니다.',
  },
  {
    key: 'portfolio',
    practical: '포트폴리오는 완성도보다 보여줄 수 있는 프로젝트 증거를 먼저 정리해보겠습니다.',
    emotional: '포트폴리오가 걱정된다면 비교감이나 조급함이 함께 생기는지도 확인해보겠습니다.',
  },
  {
    key: 'project',
    practical: '프로젝트 경험은 역할, 사용 기술, 결과물을 기준으로 이력서에 옮길 수 있게 정리해보겠습니다.',
    emotional: '프로젝트 경험에 대한 걱정이 있다면 어떤 기준 때문에 부족하게 느껴지는지 살펴보겠습니다.',
  },
  {
    key: 'internship',
    practical: '인턴 지원은 직무 조건, 지원 마감, 필요한 경험을 체크리스트로 나누겠습니다.',
    emotional: '인턴 경험이 고민이라면 그 경험 유무가 선택에 주는 압박을 함께 정리해보겠습니다.',
  },
  {
    key: 'resume',
    practical: '이력서는 현재 경험을 직무 언어로 바꾸는 작업부터 시작하면 됩니다.',
    emotional: '이력서를 쓰는 과정에서 어떤 부분이 가장 막히는지부터 차분히 확인해보겠습니다.',
  },
  {
    key: 'interview',
    practical: '면접은 예상 질문, 경험 근거, 답변 구조를 나눠서 준비하면 부담이 줄어듭니다.',
    emotional: '면접이 고민이라면 평가받는 상황에서 어떤 감정이 커지는지 살펴보겠습니다.',
  },
  {
    key: 'graduate',
    practical: '대학원은 관심 연구분야, 연구실 조건, 교수님 컨택 가능성을 현실적으로 점검해보겠습니다.',
    emotional: '대학원 고민에는 기대와 불확실성이 함께 있을 수 있으니 둘을 나눠서 보겠습니다.',
  },
  {
    key: 'employment',
    practical: '취업 준비는 희망 직무, 요구 역량, 지원 일정, 포트폴리오 보완 순서로 나누겠습니다.',
    emotional: '취업 고민이 있다면 그 단어가 주는 압박감이 어느 부분에서 커지는지 확인해보겠습니다.',
  },
  {
    key: 'anxiety',
    practical: '불안은 확인할 정보와 실행할 과제로 나누면 관리하기 쉬워집니다.',
    emotional: '불안이 있다면 그 감정을 없애려고 하기보다 어떤 상황에서 커지는지부터 볼 수 있습니다.',
  },
  {
    key: 'confidence',
    practical: '자신감은 작은 준비 항목을 완료하면서 회복할 수 있으니 완료 기준을 작게 정해보겠습니다.',
    emotional: '자신감 이야기가 나왔다면, 언제부터 그렇게 느꼈는지 비난 없이 살펴보겠습니다.',
  },
  {
    key: 'pressure',
    practical: '압박감이 큰 상황에서는 이번 주에 통제 가능한 준비 항목만 따로 떼어보겠습니다.',
    emotional: '부담이나 압박이 있다면 그것이 누구의 기대에서 오는지 구분해보겠습니다.',
  },
  {
    key: 'failure',
    practical: '실패가 걱정된다면 지원 전략을 하나로 몰지 않고 안전한 대안까지 함께 세우겠습니다.',
    emotional: '실패가 걱정된다면 그 두려움이 어떤 선택을 막고 있는지 살펴보겠습니다.',
  },
  {
    key: 'decision',
    practical: '선택지는 기준표를 만들어 준비도, 시간, 리스크, 기대효과로 비교해보겠습니다.',
    emotional: '결정이 어렵다면 정보 부족, 마음의 부담, 주변 기대 중 어디에 가까운지 구분해보겠습니다.',
  },
  {
    key: 'majorFit',
    practical: '전공이나 적성 고민은 관심 분야, 잘 맞았던 수업, 해본 활동을 기준으로 후보 직무를 좁혀보겠습니다.',
    emotional: '전공이나 적성이 고민이라면 어떤 경험에서 흥미가 생기거나 줄었는지부터 살펴보겠습니다.',
  },
];

const keywordMap: Record<ThemeKey, string[]> = {
  gpa: ['학점', '성적', 'gpa', 'grade'],
  portfolio: ['포트폴리오', '포폴', 'portfolio'],
  project: ['프로젝트', 'project', '공모전', '개발'],
  internship: ['인턴', 'intern', 'internship', '현장실습'],
  resume: ['이력서', '자소서', 'resume', 'cv', 'cover letter'],
  interview: ['면접', 'interview'],
  graduate: ['대학원', '진학', '석사', '연구실', '교수님', 'graduate'],
  employment: ['취업', '직무', '회사', '채용', 'employment', 'job'],
  information: ['정보', '자료', '출처', '공고', '조건', '요건', '커리큘럼', '모집요강', 'information'],
  readinessStart: [
    '한게 없',
    '한 게 없',
    '해놓은게 없',
    '해 놓은 게 없',
    '해둔게 없',
    '해 둔 게 없',
    '준비한게 없',
    '준비한 게 없',
    '뭐부터',
    '무엇부터',
    '어디서부터',
    '첫 단계',
    '막막',
  ],
  anxiety: ['불안', '걱정', '초조', 'anxiety', 'anxious'],
  confidence: ['자신감', '자존감', 'confidence'],
  pressure: ['압박', '부담', '스트레스', 'pressure', 'stress'],
  failure: ['실패', '떨어질', '탈락', 'fear', 'fail'],
  decision: ['고민', '선택', '결정', '진로', '갈등', 'decision'],
  majorFit: ['전공', '적성', '흥미', '분야', '맞는지', '진로방향', 'major', 'aptitude', 'interest'],
};

const summarizeInput = (input: string): string => {
  const compact = input.trim().replace(/\s+/g, ' ');
  return compact.length > 52 ? `${compact.slice(0, 52)}...` : compact;
};

const detectThemes = (input: string): ThemeInsight[] => {
  const lowerInput = input.toLowerCase();
  const matched = themeInsights.filter((theme) =>
    keywordMap[theme.key].some((keyword) => lowerInput.includes(keyword.toLowerCase())),
  );

  if (matched.some((theme) => theme.key === 'readinessStart')) {
    return themeInsights.filter((theme) => theme.key === 'readinessStart');
  }

  if (matched.some((theme) => theme.key === 'information')) {
    const contextualThemes = matched.filter((theme) =>
      ['employment', 'graduate', 'majorFit'].includes(theme.key),
    );
    return [themeInsights.find((theme) => theme.key === 'information')!, ...contextualThemes].slice(0, 3);
  }

  if (matched.length > 0) {
    return matched.slice(0, 3);
  }

  return themeInsights.filter((theme) => ['decision', 'employment'].includes(theme.key));
};

const joinInsights = (insights: string[]) => insights.join(' ');

const practicalNextStep = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '다음 단계는 15분 안에 할 수 있는 첫 행동 하나를 정하는 것입니다. 예를 들면 관심 직무 1개 검색, 이력서 빈 문서 만들기, 상담 질문 3개 적기입니다.';
  }

  if (keys.includes('information')) {
    return '다음 단계는 필요한 정보 3가지를 적고, 학교 상담센터, 학과 선배, 채용 공고처럼 확인할 출처를 하나씩 연결하는 것입니다.';
  }

  if (keys.includes('portfolio') || keys.includes('project')) {
    return '다음 단계는 대표 프로젝트 1개를 골라 역할, 결과, 배운 점을 5줄로 정리하는 것입니다.';
  }

  if (keys.includes('gpa') || keys.includes('graduate')) {
    return '다음 단계는 지원 조건과 현재 학점을 비교하고, 보완 가능한 과목이나 연구 경험을 표시하는 것입니다.';
  }

  if (keys.includes('resume') || keys.includes('interview')) {
    return '다음 단계는 이력서 초안 1개와 예상 면접 질문 3개를 준비하는 것입니다.';
  }

  if (keys.includes('majorFit')) {
    return '다음 단계는 잘 맞았던 수업 2개와 관심 없는 활동 2개를 적고, 관련 직무 후보를 3개만 추려보는 것입니다.';
  }

  return '다음 단계는 이번 주에 확인할 정보 2개와 바로 실행할 준비 과제 1개를 정하는 것입니다.';
};

const emotionalReflection = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '오늘은 많이 해내야 한다는 기준보다, 시작을 작게 만드는 기준을 먼저 세워보면 좋겠습니다.';
  }

  if (keys.includes('information')) {
    return '오늘은 부족한 정보를 확인 가능한 질문으로 바꾸는 것부터 시작해보면 좋겠습니다.';
  }

  if (keys.includes('confidence') || keys.includes('failure')) {
    return '오늘은 스스로를 평가하는 생각과 실제로 확인해야 할 사실을 분리해보면 좋겠습니다.';
  }

  if (keys.includes('pressure') || keys.includes('anxiety')) {
    return '지금은 결론을 서두르기보다 불안이나 압박이 커지는 순간을 찾는 것이 먼저일 수 있습니다.';
  }

  if (keys.includes('graduate') || keys.includes('employment')) {
    return '대학원과 취업 중 무엇이 맞는지보다, 각각의 선택이 주는 기대와 부담을 나눠서 보겠습니다.';
  }

  if (keys.includes('majorFit')) {
    return '전공이나 적성이 맞는지 고민될 때는 어떤 경험에서 에너지가 생기거나 줄었는지부터 살펴보겠습니다.';
  }

  return '선택이 어려운 이유를 정보 부족, 마음의 부담, 주변 기대 중 어디에 가까운지 함께 구분해보겠습니다.';
};

export function generateMockResponse(counselorId: string, userInput: string): string {
  const concern = summarizeInput(userInput);
  const themes = detectThemes(userInput);

  if (counselorId.includes('practical')) {
    return `"${concern}"라는 고민은 준비 상태를 항목별로 나누면 더 다루기 쉬워집니다. ${joinInsights(
      themes.map((theme) => theme.practical),
    )} ${practicalNextStep(themes)}`;
  }

  return `"${concern}"라고 적어주신 내용을 기준으로 보면, ${joinInsights(
    themes.map((theme) => theme.emotional),
  )} ${emotionalReflection(themes)}`;
}

export function generateFollowUpResponse(
  counselorId: string,
  userMessage: string,
  turnCount: number,
): string {
  const concern = summarizeInput(userMessage);
  const themes = detectThemes(userMessage);

  if (counselorId.includes('practical')) {
    const responses = [
      `"${concern}" 부분은 준비도 기준으로 다시 나눠보겠습니다. ${joinInsights(
        themes.slice(0, 2).map((theme) => theme.practical),
      )} 지금 가진 것, 없는 것, 이번 주에 해볼 첫 행동을 각각 하나씩 적어보세요.`,
      `${practicalNextStep(themes)} 범위를 크게 잡기보다 30분 안에 시작할 수 있는 행동으로 줄이는 것이 좋습니다.`,
      '이제 체크리스트를 업데이트하면 됩니다. 확인한 정보와 아직 모르는 정보를 구분하면 다음 선택이 더 현실적으로 보입니다.',
    ];
    return responses[Math.min(turnCount, responses.length - 1)];
  }

  const responses = [
    `"${concern}"라고 말해준 내용을 기준으로 보면, ${joinInsights(
      themes.slice(0, 2).map((theme) => theme.emotional),
    )}`,
    `${emotionalReflection(themes)} 지금 확인할 수 있는 것과 아직 모르는 것을 나누면 다음 질문이 더 분명해집니다.`,
    '오늘은 바로 결론을 내리기보다 선택 기준과 확인해야 할 사실을 분리하는 것부터 해보면 좋겠습니다.',
  ];
  return responses[Math.min(turnCount, responses.length - 1)];
}
