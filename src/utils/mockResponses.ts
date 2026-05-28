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
  practicalCheck: string;
  practicalTask: string;
  emotionalReflection: string;
}

const themeInsights: ThemeInsight[] = [
  {
    key: 'readinessStart',
    practicalCheck: '현재는 준비가 부족하다기보다, 무엇부터 확인해야 할지 정리되지 않은 상태로 보입니다.',
    practicalTask: '관심 직무를 하나 정해 검색하고, 빈 이력서 파일을 만든 뒤 필요한 준비 항목 3가지를 적어보세요.',
    emotionalReflection: '아직 시작하지 못했다는 생각이 들면, 실제 상황보다 부담이 더 크게 느껴질 수 있습니다.',
  },
  {
    key: 'information',
    practicalCheck: '지금 필요한 것은 막연한 조언보다 확인 가능한 정보와 신뢰할 수 있는 출처입니다.',
    practicalTask: '궁금한 내용을 질문 3개로 바꾸고, 학과·상담센터·채용 공고 등 확인할 출처를 연결해보세요.',
    emotionalReflection: '정보가 부족하면 불안해지는 것이 자연스럽습니다. 모르는 것과 못하는 것은 구분해서 볼 필요가 있습니다.',
  },
  {
    key: 'gpa',
    practicalCheck: '학점은 지원 가능성, 보완 방법, 설명 가능한 맥락으로 나누어 점검해야 합니다.',
    practicalTask: '목표 진로의 최소 학점 기준을 확인하고, 학점을 보완할 수 있는 프로젝트나 활동 경험을 정리해보세요.',
    emotionalReflection: '학점이 걱정될 때는 숫자 자체보다 그 숫자가 주는 위축감이 더 크게 느껴질 수 있습니다.',
  },
  {
    key: 'portfolio',
    practicalCheck: '포트폴리오는 완성도보다 먼저 보여줄 수 있는 결과물이 있는지 확인하는 것이 중요합니다.',
    practicalTask: '가장 설명하기 쉬운 프로젝트 하나를 골라 역할, 사용 기술, 결과물, 배운 점을 각각 한 줄로 작성해보세요.',
    emotionalReflection: '포트폴리오가 부족하다고 느낄 때는 주변과 비교하는 마음이나 조급함이 함께 생길 수 있습니다.',
  },
  {
    key: 'project',
    practicalCheck: '프로젝트 경험은 크기보다 설명 방식이 중요합니다. 경험을 직무와 연결할 수 있어야 합니다.',
    practicalTask: '프로젝트를 문제 상황, 맡은 역할, 사용 기술, 결과, 배운 점 순서로 다시 정리해보세요.',
    emotionalReflection: '프로젝트 경험이 부족하다고 느낀다면, 어떤 기준 때문에 부족하다고 판단하는지 살펴볼 필요가 있습니다.',
  },
  {
    key: 'internship',
    practicalCheck: '인턴 준비는 지원 마감, 요구 역량, 대체 가능한 경험을 기준으로 점검해야 합니다.',
    practicalTask: '인턴 공고 2개를 찾아 반복해서 등장하는 자격 요건을 표시하고, 현재 경험과 비교해보세요.',
    emotionalReflection: '인턴 경험에 대한 걱정은 뒤처진 느낌이나 비교감과 연결되어 더 크게 느껴질 수 있습니다.',
  },
  {
    key: 'resume',
    practicalCheck: '이력서는 잘 쓰는 것보다 먼저 빈 항목을 채우는 것이 우선입니다.',
    practicalTask: '교육, 프로젝트, 활동, 기술 스택 항목을 먼저 채우고 문장 다듬기는 그다음 단계로 미뤄보세요.',
    emotionalReflection: '이력서를 쓰기 어렵다면, 자신이 평가받는다는 느낌이 부담으로 작용하고 있을 수 있습니다.',
  },
  {
    key: 'interview',
    practicalCheck: '면접은 예상 질문과 답변 근거가 준비되어 있는지 확인하는 과정이 필요합니다.',
    practicalTask: '지원 동기, 프로젝트 설명, 실패 경험에 대해 각각 3문장 답변을 먼저 작성해보세요.',
    emotionalReflection: '면접이 걱정된다면 평가받는 상황에서 어떤 감정이 커지는지 살펴볼 수 있습니다.',
  },
  {
    key: 'graduate',
    practicalCheck: '대학원 진학은 연구 분야, 연구실 조건, 교수님 컨택 가능성을 분리해서 판단해야 합니다.',
    practicalTask: '관심 연구실 2곳을 고르고, 최근 연구 주제 1개와 교수님께 물어볼 질문 3개를 정리해보세요.',
    emotionalReflection: '대학원 고민에는 기대감과 불확실성이 함께 있을 수 있습니다.',
  },
  {
    key: 'employment',
    practicalCheck: '취업 준비는 목표 직무, 요구 역량, 지원 일정이 구체화되어야 진행 방향이 잡힙니다.',
    practicalTask: '목표 직무 하나를 정하고, 채용 공고 2개에서 반복되는 요구 역량을 표시해보세요.',
    emotionalReflection: '취업이라는 단어가 크게 느껴질수록 압박감과 불안이 함께 커질 수 있습니다.',
  },
  {
    key: 'anxiety',
    practicalCheck: '불안의 원인을 실행 가능한 과제로 바꾸는 과정이 필요합니다.',
    practicalTask: '불안한 이유를 정보 부족, 준비 부족, 선택 기준 부족 중 하나로 분류해보세요.',
    emotionalReflection: '불안은 없애야만 하는 문제가 아니라, 지금 상황을 중요하게 느끼고 있다는 신호일 수 있습니다.',
  },
  {
    key: 'confidence',
    practicalCheck: '자신감 회복보다 먼저 완료 가능한 준비 단위를 만드는 것이 필요합니다.',
    practicalTask: '이번 주 안에 끝낼 수 있는 준비 항목 하나를 정하고, 결과물이 남도록 진행해보세요.',
    emotionalReflection: '자신감이 낮을 때는 스스로에게 너무 엄격한 말을 반복하고 있는지 살펴볼 필요가 있습니다.',
  },
  {
    key: 'pressure',
    practicalCheck: '부담이 큰 경우에는 결정 범위를 줄이는 것이 먼저입니다.',
    practicalTask: '최종 결정을 내리기보다 이번 주에 확인할 항목 2개만 정해보세요.',
    emotionalReflection: '부담감은 혼자 감당해야 한다고 느낄 때 더 커질 수 있습니다.',
  },
  {
    key: 'failure',
    practicalCheck: '실패 가능성은 감정적으로만 다루기보다 대안 계획으로 관리해야 합니다.',
    practicalTask: '1순위 선택, 대안 선택, 보완 계획을 각각 한 줄로 작성해보세요.',
    emotionalReflection: '실패가 두려울 때는 그 두려움이 어떤 기대나 기준에서 오는지 살펴볼 수 있습니다.',
  },
  {
    key: 'decision',
    practicalCheck: '선택이 어렵다면 기준을 먼저 정리해야 합니다.',
    practicalTask: '각 선택지를 준비도, 시간, 리스크, 기대 효과 기준으로 1점에서 5점까지 표시해보세요.',
    emotionalReflection: '결정이 어렵다면 정보가 부족한 것인지, 마음의 부담이 큰 것인지 구분하는 것이 먼저입니다.',
  },
  {
    key: 'majorFit',
    practicalCheck: '전공 적성은 느낌만으로 판단하기보다 실제 경험을 기준으로 확인해야 합니다.',
    practicalTask: '잘 맞았던 수업 2개, 힘들었던 활동 2개, 관심 직무 후보 3개를 적어보세요.',
    emotionalReflection: '전공이 맞는지 고민될 때는 어떤 경험에서 에너지가 생기거나 줄었는지 돌아볼 수 있습니다.',
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
  return compact.length > 44 ? `${compact.slice(0, 44)}...` : compact;
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

const makePracticalStatus = (themes: ThemeInsight[]) => themes[0]?.practicalCheck ?? themeInsights[0].practicalCheck;
const makePracticalTasks = (themes: ThemeInsight[]) => themes.slice(0, 3).map((theme) => theme.practicalTask);
const makeEmotionalReflections = (themes: ThemeInsight[]) =>
  themes.slice(0, 3).map((theme) => theme.emotionalReflection);

const practicalPriority = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '먼저 직무 탐색 1개, 빈 이력서 생성, 준비 항목 3개 작성부터 진행하는 것이 적절합니다.';
  }

  if (keys.includes('information')) {
    return '가장 먼저 정보 출처를 확보해야 합니다. 상담 전까지 질문 3개를 준비하면 좋습니다.';
  }

  if (keys.includes('graduate')) {
    return '연구실 후보를 넓게 보기보다, 우선 2곳만 골라 비교하는 것이 좋습니다.';
  }

  if (keys.includes('employment')) {
    return '목표 직무를 하나로 좁히고, 채용 공고를 기준으로 필요한 역량을 확인하는 것이 우선입니다.';
  }

  if (keys.includes('majorFit')) {
    return '전공 경험을 기록한 뒤, 그 경험과 연결되는 직무 후보를 좁히는 것이 우선입니다.';
  }

  return '준비도, 시간, 리스크, 기대 효과를 기준으로 선택지를 비교하는 것이 우선입니다.';
};

const emotionalClosing = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '왜 시작이 막히는지, 그리고 부담이 덜한 첫 시도는 무엇인지부터 함께 정리해보면 좋겠습니다.';
  }

  if (keys.includes('information')) {
    return '정보가 부족하다는 느낌이 언제 불안으로 이어지는지 먼저 살펴보면 좋겠습니다.';
  }

  if (keys.includes('graduate') || keys.includes('employment')) {
    return '취업과 대학원이 각각 어떤 기대와 두려움을 주는지 나눠서 이야기해보면 좋겠습니다.';
  }

  if (keys.includes('confidence') || keys.includes('failure')) {
    return '지금은 자신을 평가하기보다, 위축되는 생각이 언제 강해지는지 살펴보면 좋겠습니다.';
  }

  return '지금 느끼는 부담을 비난하지 않고, 감정과 사실을 나누어 정리해보면 좋겠습니다.';
};

const formatPracticalResponse = (concern: string, themes: ThemeInsight[]) =>
  [
    `준비도 점검: "${concern}"`,
    '',
    `현재 상태: ${makePracticalStatus(themes)}`,
    `우선순위: ${practicalPriority(themes)}`,
    '',
    '실행 과제',
    ...makePracticalTasks(themes).map((task, index) => `${index + 1}. ${task}`),
  ].join('\n');

const formatEmotionalResponse = (concern: string, themes: ThemeInsight[]) =>
  [
    `마음 정리: "${concern}"`,
    '',
    '먼저 살펴볼 부분',
    ...makeEmotionalReflections(themes).map((reflection) => `• ${reflection}`),
    '',
    `함께 생각해볼 질문: ${emotionalClosing(themes)}`,
  ].join('\n');

export function generateMockResponse(counselorId: string, userInput: string): string {
  const concern = summarizeInput(userInput);
  const themes = detectThemes(userInput);

  if (counselorId.includes('practical')) {
    return formatPracticalResponse(concern, themes);
  }

  return formatEmotionalResponse(concern, themes);
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
      [
        `추가 점검: "${concern}"`,
        '',
        `분류: ${makePracticalStatus(themes)}`,
        `다음 행동: ${practicalPriority(themes)}`,
        '',
        '체크리스트',
        ...makePracticalTasks(themes).slice(0, 2).map((task, index) => `${index + 1}. ${task}`),
      ].join('\n'),
      [
        '범위를 조금 더 좁혀보겠습니다.',
        '',
        '1. 지금 결정할 것은 최종 진로가 아니라 다음 확인 항목입니다.',
        '2. 30분 안에 끝낼 수 있는 행동으로 줄이는 것이 좋습니다.',
        `3. ${practicalPriority(themes)}`,
      ].join('\n'),
      [
        '상담 전 준비하면 좋은 자료입니다.',
        '',
        '1. 이미 알고 있는 정보 2개',
        '2. 아직 확인하지 못한 정보 3개',
        '3. 상담에서 묻고 싶은 질문 3개',
      ].join('\n'),
    ];
    return responses[Math.min(turnCount, responses.length - 1)];
  }

  const responses = [
    [
      `다시 정리해보면: "${concern}"`,
      '',
      '지금 느껴질 수 있는 부담',
      ...makeEmotionalReflections(themes).slice(0, 2).map((reflection) => `• ${reflection}`),
      '',
      `함께 생각해볼 질문: ${emotionalClosing(themes)}`,
    ].join('\n'),
    [
      '지금은 결론을 빨리 내리기보다 부담을 낮추는 것이 먼저로 보입니다.',
      '',
      '• 모르는 것과 못하는 것을 같은 의미로 받아들이지 않아도 됩니다.',
      '• 불안이 커지는 지점을 찾으면 다음 질문도 더 분명해질 수 있습니다.',
      '',
      `함께 생각해볼 질문: ${emotionalClosing(themes)}`,
    ].join('\n'),
    [
      '오늘은 스스로를 평가하기보다 상황을 정리하는 상담으로 시작해도 괜찮습니다.',
      '',
      '• 지금 느끼는 부담은 진로를 진지하게 생각하고 있다는 신호일 수 있습니다.',
      '• 감정과 사실을 나누어 보면 선택지가 조금 더 차분하게 보일 수 있습니다.',
      '',
      '함께 생각해볼 질문: 지금 가장 부담되는 장면 하나를 먼저 말해볼 수 있을까요?',
    ].join('\n'),
  ];
  return responses[Math.min(turnCount, responses.length - 1)];
}
