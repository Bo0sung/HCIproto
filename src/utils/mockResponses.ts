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
    practical: '현재 준비 상태를 탓하기보다, 가지고 있는 것과 없는 것을 먼저 나눠보는 것이 좋습니다.',
    emotional: '아무것도 안 한 것처럼 느껴질 때는 시작의 부담이 크게 느껴질 수 있습니다.',
  },
  {
    key: 'information',
    practical: '정보 부족은 성향 문제가 아니라, 확인할 자료와 질문 목록을 만들면 줄일 수 있는 문제입니다.',
    emotional: '정보가 부족하면 불안이 커지는 것이 자연스럽습니다. 모르는 부분을 차분히 분리해볼 필요가 있습니다.',
  },
  {
    key: 'gpa',
    practical: '학점은 지원 조건, 보완 과목, 설명 가능한 맥락으로 나누어 점검해야 합니다.',
    emotional: '학점이 걱정될수록 숫자 자체보다 그 숫자가 주는 위축감을 먼저 살펴볼 수 있습니다.',
  },
  {
    key: 'portfolio',
    practical: '포트폴리오는 완성도보다 보여줄 수 있는 프로젝트 증거를 먼저 정리하는 것이 중요합니다.',
    emotional: '포트폴리오가 부족하다고 느낄 때는 비교감이나 조급함이 함께 올라올 수 있습니다.',
  },
  {
    key: 'project',
    practical: '프로젝트 경험은 역할, 사용 기술, 결과물, 배운 점으로 정리하면 활용도가 높아집니다.',
    emotional: '프로젝트 경험이 부족하다고 느낄 때는 어떤 기준 때문에 부족하게 느끼는지 볼 필요가 있습니다.',
  },
  {
    key: 'internship',
    practical: '인턴 준비는 직무 조건, 지원 마감, 필요한 경험을 체크리스트로 나눠야 합니다.',
    emotional: '인턴 경험에 대한 걱정은 뒤처진 느낌이나 비교감과 연결될 수 있습니다.',
  },
  {
    key: 'resume',
    practical: '이력서는 현재 경험을 직무 언어로 바꾸는 작업부터 시작하면 됩니다.',
    emotional: '이력서를 쓰기 어렵다면, 자신을 평가받는 느낌이 부담으로 작용할 수 있습니다.',
  },
  {
    key: 'interview',
    practical: '면접은 예상 질문, 경험 근거, 답변 구조를 짧게 준비하면 부담이 줄어듭니다.',
    emotional: '면접이 걱정된다면 평가받는 상황에서 어떤 감정이 커지는지 살펴볼 수 있습니다.',
  },
  {
    key: 'graduate',
    practical: '대학원은 연구 분야, 연구실 조건, 교수님 컨택 가능성을 현실적으로 확인해야 합니다.',
    emotional: '대학원 고민에는 기대감과 불확실성이 동시에 있을 수 있습니다.',
  },
  {
    key: 'employment',
    practical: '취업 준비는 목표 직무, 요구 역량, 지원 일정, 포트폴리오 보완 순서로 나누면 좋습니다.',
    emotional: '취업이라는 단어가 크게 느껴질수록 압박감과 불안이 함께 커질 수 있습니다.',
  },
  {
    key: 'anxiety',
    practical: '불안은 확인할 정보와 실행할 과제로 나누면 관리하기 쉬워집니다.',
    emotional: '불안은 없애야 하는 문제가 아니라, 지금 상황이 중요하다는 신호일 수 있습니다.',
  },
  {
    key: 'confidence',
    practical: '자신감은 준비 항목을 작게 완료하면서 회복되는 경우가 많습니다.',
    emotional: '자신감이 낮을 때는 스스로를 비난하는 말이 반복되고 있는지 볼 필요가 있습니다.',
  },
  {
    key: 'pressure',
    practical: '부담이 클수록 이번 주에 가능한 준비 항목만 따로 정하는 것이 좋습니다.',
    emotional: '부담감은 혼자 감당해야 한다는 느낌에서 더 커질 수 있습니다.',
  },
  {
    key: 'failure',
    practical: '실패 걱정은 지원 전략 하나에 몰아넣기보다 안전한 대안을 함께 세워야 줄어듭니다.',
    emotional: '실패가 두려울 때는 그 두려움이 어떤 기대나 기준에서 오는지 살펴볼 수 있습니다.',
  },
  {
    key: 'decision',
    practical: '선택지는 준비도, 시간, 리스크, 기대 효과 기준으로 비교하면 판단이 쉬워집니다.',
    emotional: '결정이 어려울 때는 정보 부족인지 마음의 부담인지 구분하는 것이 먼저입니다.',
  },
  {
    key: 'majorFit',
    practical: '전공 적성은 맞았던 수업, 어려웠던 활동, 관심 분야를 기준으로 후보 직무를 좁히면 좋습니다.',
    emotional: '전공이 맞는지 고민될 때는 어떤 경험에서 에너지가 생기거나 줄었는지 돌아볼 수 있습니다.',
  },
];

const keywordMap: Record<ThemeKey, string[]> = {
  gpa: ['학점', '성적', 'gpa', 'grade'],
  portfolio: ['포트폴리오', '포폴', 'portfolio'],
  project: ['프로젝트', '공모전', '개발', 'project'],
  internship: ['인턴', '현장실습', 'intern', 'internship'],
  resume: ['이력서', '자소서', '자기소개서', 'resume', 'cv', 'cover letter'],
  interview: ['면접', 'interview'],
  graduate: ['대학원', '진학', '석사', '연구실', '교수님', 'graduate'],
  employment: ['취업', '직무', '회사', '채용', 'employment', 'job'],
  information: ['정보', '자료', '출처', '공고', '조건', '요건', '커리큘럼', '모집요강', 'information'],
  readinessStart: [
    '한게 없',
    '한 게 없',
    '해놓은게 없',
    '해놓은 게 없',
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
  failure: ['실패', '떨어지', '탈락', 'fear', 'fail'],
  decision: ['고민', '선택', '결정', '진로', '갈등', 'decision'],
  majorFit: ['전공', '적성', '흥미', '분야', '맞는지', '진로방향', 'major', 'aptitude', 'interest'],
};

const summarizeInput = (input: string): string => {
  const compact = input.trim().replace(/\s+/g, ' ');
  return compact.length > 48 ? `${compact.slice(0, 48)}...` : compact;
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

const practicalNextStep = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '오늘 할 일은 크게 잡지 말고, 관심 직무 1개 검색하기와 빈 이력서 파일 만들기부터 시작해도 충분합니다.';
  }

  if (keys.includes('information')) {
    return '필요한 정보 3가지를 적고, 학교 상담센터, 학과 선배, 채용 공고처럼 확인할 출처를 하나씩 연결해보면 좋습니다.';
  }

  if (keys.includes('portfolio') || keys.includes('project')) {
    return '가장 설명하기 쉬운 프로젝트 1개를 골라 역할, 결과, 배운 점을 5줄로 정리해보세요.';
  }

  if (keys.includes('graduate')) {
    return '관심 연구실 2곳, 최근 논문 또는 연구 주제 1개, 교수님께 물어볼 질문 3개를 먼저 정리해보세요.';
  }

  if (keys.includes('employment')) {
    return '목표 직무 1개를 정하고, 공고 2개에서 반복되는 요구 역량을 표시해보는 것이 첫 준비입니다.';
  }

  if (keys.includes('majorFit')) {
    return '잘 맞았던 수업 2개와 힘들었던 활동 2개를 적고, 관련 직무 후보를 3개만 뽑아보면 좋습니다.';
  }

  return '이번 주에 확인할 정보 2개와 바로 실행할 준비 과제 1개만 정해도 다음 선택이 더 현실적으로 보입니다.';
};

const emotionalReflection = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '지금은 많이 해내야 한다는 기준보다, 시작을 작게 만드는 기준을 먼저 세워보면 좋겠습니다.';
  }

  if (keys.includes('information')) {
    return '정보가 부족하다는 말은 “내가 부족하다”가 아니라 “확인할 것이 남아 있다”에 가깝습니다.';
  }

  if (keys.includes('confidence') || keys.includes('failure')) {
    return '스스로를 평가하는 생각과 실제로 확인해야 할 사실을 분리해보면 부담이 조금 줄어듭니다.';
  }

  if (keys.includes('pressure') || keys.includes('anxiety')) {
    return '결론을 서두르기보다, 불안이 커지는 순간과 이유를 먼저 찾는 것이 도움이 됩니다.';
  }

  if (keys.includes('graduate') || keys.includes('employment')) {
    return '취업과 대학원 중 무엇이 더 맞는지보다, 각각의 선택이 주는 기대와 부담을 나눠보면 좋겠습니다.';
  }

  if (keys.includes('majorFit')) {
    return '전공이 맞는지 판단하기 전에, 어떤 경험에서 흥미가 생기거나 줄었는지부터 살펴볼 수 있습니다.';
  }

  return '선택이 어려운 이유가 정보 부족인지, 마음의 부담인지, 주변 기대인지 천천히 구분해보면 좋겠습니다.';
};

const makeBullets = (themes: ThemeInsight[], type: 'practical' | 'emotional') =>
  themes.slice(0, 3).map((theme) => (type === 'practical' ? theme.practical : theme.emotional));

const formatResponse = (title: string, bullets: string[], closing: string) =>
  [
    title,
    '',
    ...bullets.map((bullet) => `• ${bullet}`),
    '',
    `다음 단계: ${closing}`,
  ].join('\n');

export function generateMockResponse(counselorId: string, userInput: string): string {
  const concern = summarizeInput(userInput);
  const themes = detectThemes(userInput);

  if (counselorId.includes('practical')) {
    return formatResponse(
      `"${concern}" 고민은 준비 상태를 나눠서 보면 더 선명해집니다.`,
      makeBullets(themes, 'practical'),
      practicalNextStep(themes),
    );
  }

  return formatResponse(
    `"${concern}"라고 말해준 부분에서 부담이 꽤 느껴집니다.`,
    makeBullets(themes, 'emotional'),
    emotionalReflection(themes),
  );
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
      formatResponse(
        `"${concern}" 부분은 바로 실행 가능한 과제로 바꿔보겠습니다.`,
        makeBullets(themes, 'practical').slice(0, 2),
        practicalNextStep(themes),
      ),
      formatResponse(
        '이번에는 범위를 더 작게 잡아보면 좋겠습니다.',
        [
          '오늘 정할 것은 최종 진로가 아니라 다음 확인 항목입니다.',
          '30분 안에 끝낼 수 있는 행동으로 줄이면 시작 부담이 낮아집니다.',
        ],
        practicalNextStep(themes),
      ),
      formatResponse(
        '지금은 체크리스트를 업데이트하는 단계로 보면 됩니다.',
        [
          '이미 아는 정보와 아직 모르는 정보를 분리해보세요.',
          '모르는 정보는 질문 형태로 바꾸면 상담에서 더 빠르게 다룰 수 있습니다.',
        ],
        '확인할 질문 3개를 적어오면 실제 상담에서 바로 로드맵을 만들 수 있습니다.',
      ),
    ];
    return responses[Math.min(turnCount, responses.length - 1)];
  }

  const responses = [
    formatResponse(
      `"${concern}"라고 다시 말한 건 중요한 단서입니다.`,
      makeBullets(themes, 'emotional').slice(0, 2),
      emotionalReflection(themes),
    ),
    formatResponse(
      '지금은 결론보다 마음의 부담을 먼저 낮추는 것이 좋아 보입니다.',
      [
        '모르는 것과 못하는 것을 같은 뜻으로 묶지 않는 것이 중요합니다.',
        '불안이 커지는 지점을 찾으면 다음 질문도 더 분명해집니다.',
      ],
      emotionalReflection(themes),
    ),
    formatResponse(
      '오늘은 스스로를 평가하기보다 상황을 정리하는 상담으로 시작해도 됩니다.',
      [
        '지금 느끼는 부담은 진로를 진지하게 생각하고 있다는 신호일 수 있습니다.',
        '감정과 사실을 분리하면 선택지가 조금 더 차분하게 보입니다.',
      ],
      '상담에서는 먼저 가장 부담되는 장면 하나부터 함께 정리해보면 좋겠습니다.',
    ),
  ];
  return responses[Math.min(turnCount, responses.length - 1)];
}
