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
    practicalCheck: '준비 시작 단계입니다. 현재 문제는 의지 부족이 아니라 준비 항목이 아직 목록화되지 않은 상태입니다.',
    practicalTask: '관심 직무 1개 검색, 빈 이력서 파일 생성, 필요한 준비 항목 3개 작성부터 진행합니다.',
    emotionalReflection: '아무것도 해놓은 게 없다고 느껴질 때는 시작 전 부담이 실제보다 크게 느껴질 수 있습니다.',
  },
  {
    key: 'information',
    practicalCheck: '정보 탐색 단계입니다. 부족한 것은 역량 판단이 아니라 확인 가능한 자료와 출처입니다.',
    practicalTask: '필요한 정보 3개를 질문 형태로 바꾸고, 학과/상담센터/공고 사이트 중 확인 출처를 연결합니다.',
    emotionalReflection: '정보가 부족하면 불안이 커지는 것이 자연스럽습니다. 모르는 것과 못하는 것은 분리해서 봐야 합니다.',
  },
  {
    key: 'gpa',
    practicalCheck: '학점 리스크 점검이 필요합니다. 지원 조건, 보완 과목, 설명 가능한 맥락을 따로 봐야 합니다.',
    practicalTask: '목표 진로의 최소 학점 기준을 확인하고, 보완 가능한 과목이나 프로젝트 증거를 정리합니다.',
    emotionalReflection: '학점 걱정은 숫자 자체보다 그 숫자가 주는 위축감과 연결될 수 있습니다.',
  },
  {
    key: 'portfolio',
    practicalCheck: '포트폴리오 증거 정리가 필요합니다. 완성도보다 제출 가능한 결과물 유무가 먼저입니다.',
    practicalTask: '프로젝트 1개를 골라 역할, 사용 기술, 결과물, 배운 점을 각각 한 줄로 작성합니다.',
    emotionalReflection: '포트폴리오가 부족하다고 느낄 때는 비교감이나 조급함이 함께 올라올 수 있습니다.',
  },
  {
    key: 'project',
    practicalCheck: '프로젝트 경험을 직무 증거로 바꾸는 단계입니다. 경험의 크기보다 설명 구조가 중요합니다.',
    practicalTask: '각 프로젝트를 문제, 역할, 기술, 결과, 배운 점 순서로 재정리합니다.',
    emotionalReflection: '프로젝트 경험이 부족하다고 느낄 때는 어떤 기준 때문에 부족하게 느끼는지 살펴볼 수 있습니다.',
  },
  {
    key: 'internship',
    practicalCheck: '인턴 지원 가능성 점검이 필요합니다. 지원 마감, 요구 역량, 대체 경험을 확인해야 합니다.',
    practicalTask: '인턴 공고 2개에서 반복되는 자격 요건을 표시하고, 현재 경험과 대응시킵니다.',
    emotionalReflection: '인턴 경험에 대한 걱정은 뒤처진 느낌이나 비교감과 연결될 수 있습니다.',
  },
  {
    key: 'resume',
    practicalCheck: '이력서 초안 단계입니다. 아직 잘 쓰는 것보다 빈 문서를 채우는 것이 우선입니다.',
    practicalTask: '교육, 프로젝트, 활동, 기술 스택 항목을 먼저 채우고 문장 다듬기는 뒤로 미룹니다.',
    emotionalReflection: '이력서를 쓰기 어렵다면 자신을 평가받는 느낌이 부담으로 작용할 수 있습니다.',
  },
  {
    key: 'interview',
    practicalCheck: '면접 대비는 예상 질문과 답변 근거가 부족한 상태인지 확인해야 합니다.',
    practicalTask: '지원 동기, 프로젝트 설명, 실패 경험 질문에 대한 3문장 답변을 먼저 작성합니다.',
    emotionalReflection: '면접이 걱정된다면 평가받는 상황에서 어떤 감정이 커지는지 살펴볼 수 있습니다.',
  },
  {
    key: 'graduate',
    practicalCheck: '대학원 진학 검토 단계입니다. 연구 분야, 연구실 조건, 컨택 가능성을 분리해서 판단해야 합니다.',
    practicalTask: '관심 연구실 2곳, 최근 연구 주제 1개, 교수님께 물어볼 질문 3개를 정리합니다.',
    emotionalReflection: '대학원 고민에는 기대감과 불확실성이 동시에 있을 수 있습니다.',
  },
  {
    key: 'employment',
    practicalCheck: '취업 준비도 점검 단계입니다. 목표 직무, 요구 역량, 지원 일정이 아직 구체화되어야 합니다.',
    practicalTask: '목표 직무 1개를 정하고 공고 2개에서 반복되는 요구 역량을 표시합니다.',
    emotionalReflection: '취업이라는 단어가 크게 느껴질수록 압박감과 불안이 함께 커질 수 있습니다.',
  },
  {
    key: 'anxiety',
    practicalCheck: '불안 요소를 실행 과제로 바꿔야 합니다. 감정 자체보다 불안을 만든 미확인 항목을 찾습니다.',
    practicalTask: '불안한 이유를 정보 부족, 준비 부족, 선택 기준 부족 중 하나로 분류합니다.',
    emotionalReflection: '불안은 없애야 하는 문제가 아니라 지금 상황이 중요하다는 신호일 수 있습니다.',
  },
  {
    key: 'confidence',
    practicalCheck: '자신감보다 완료 가능한 준비 단위가 먼저입니다. 작은 완료 항목을 만들어야 합니다.',
    practicalTask: '이번 주에 완료할 수 있는 준비 항목 1개를 정하고 결과물을 남깁니다.',
    emotionalReflection: '자신감이 낮을 때는 스스로를 비난하는 말이 반복되고 있는지 볼 필요가 있습니다.',
  },
  {
    key: 'pressure',
    practicalCheck: '부담 요인을 범위 조정해야 합니다. 한 번에 결정하려는 항목이 너무 많을 수 있습니다.',
    practicalTask: '최종 결정이 아니라 이번 주 확인 항목 2개만 정합니다.',
    emotionalReflection: '부담감은 혼자 감당해야 한다는 느낌에서 더 커질 수 있습니다.',
  },
  {
    key: 'failure',
    practicalCheck: '실패 리스크 관리가 필요합니다. 하나의 선택에만 의존하지 않도록 대안을 세워야 합니다.',
    practicalTask: '1순위 선택, 대안 선택, 보완 계획을 각각 한 줄로 작성합니다.',
    emotionalReflection: '실패가 두려울 때는 그 두려움이 어떤 기대나 기준에서 오는지 살펴볼 수 있습니다.',
  },
  {
    key: 'decision',
    practicalCheck: '선택 기준 정리가 필요합니다. 준비도, 시간, 리스크, 기대 효과를 기준으로 비교해야 합니다.',
    practicalTask: '각 선택지를 네 기준으로 1점에서 5점까지 표시해 우선순위를 확인합니다.',
    emotionalReflection: '결정이 어려울 때는 정보 부족인지 마음의 부담인지 구분하는 것이 먼저입니다.',
  },
  {
    key: 'majorFit',
    practicalCheck: '전공 적성 판단은 경험 기반으로 해야 합니다. 흥미, 성과, 피로도를 따로 기록해야 합니다.',
    practicalTask: '잘 맞았던 수업 2개, 힘들었던 활동 2개, 관심 직무 후보 3개를 적습니다.',
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
    return '우선순위는 직무 탐색 1개, 빈 이력서 생성, 준비 항목 3개 작성입니다.';
  }

  if (keys.includes('information')) {
    return '우선순위는 정보 출처 확보입니다. 상담 전까지 질문 3개를 준비하면 됩니다.';
  }

  if (keys.includes('graduate')) {
    return '우선순위는 연구실 후보 압축입니다. 연구실 2곳만 먼저 비교합니다.';
  }

  if (keys.includes('employment')) {
    return '우선순위는 목표 직무 확정입니다. 공고 2개를 기준으로 역량표를 만듭니다.';
  }

  if (keys.includes('majorFit')) {
    return '우선순위는 전공 경험 기록입니다. 수업과 활동을 기준으로 직무 후보를 좁힙니다.';
  }

  return '우선순위는 선택 기준 정리입니다. 준비도, 시간, 리스크, 기대 효과를 비교합니다.';
};

const emotionalClosing = (themes: ThemeInsight[]) => {
  const keys = themes.map((theme) => theme.key);

  if (keys.includes('readinessStart')) {
    return '오늘은 “왜 시작이 막히는지”와 “부담이 덜한 첫 시도는 무엇인지”부터 함께 정리해보면 좋겠습니다.';
  }

  if (keys.includes('information')) {
    return '정보가 부족하다는 감각이 불안으로 번지는 지점을 먼저 확인해보면 좋겠습니다.';
  }

  if (keys.includes('graduate') || keys.includes('employment')) {
    return '취업과 대학원이 각각 주는 기대감과 두려움을 나눠서 말해보면 선택 부담이 조금 낮아질 수 있습니다.';
  }

  if (keys.includes('confidence') || keys.includes('failure')) {
    return '지금은 자신을 평가하기보다, 위축되는 생각이 언제 강해지는지부터 살펴보면 좋겠습니다.';
  }

  return '지금 느끼는 부담을 비난하지 않고, 감정과 사실을 분리해서 천천히 정리해보면 좋겠습니다.';
};

const formatPracticalResponse = (concern: string, themes: ThemeInsight[]) =>
  [
    `준비도 점검: "${concern}"`,
    '',
    `판정: ${makePracticalStatus(themes)}`,
    `우선순위: ${practicalPriority(themes)}`,
    '',
    '실행 과제',
    ...makePracticalTasks(themes).map((task, index) => `${index + 1}. ${task}`),
  ].join('\n');

const formatEmotionalResponse = (concern: string, themes: ThemeInsight[]) =>
  [
    `마음 정리: "${concern}"`,
    '',
    '먼저 확인할 감정',
    ...makeEmotionalReflections(themes).map((reflection) => `• ${reflection}`),
    '',
    `함께 볼 질문: ${emotionalClosing(themes)}`,
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
        '범위 축소 제안',
        '',
        '1. 오늘 결정할 것은 최종 진로가 아니라 다음 확인 항목입니다.',
        '2. 30분 안에 끝낼 수 있는 행동으로 줄입니다.',
        `3. ${practicalPriority(themes)}`,
      ].join('\n'),
      [
        '상담 전 준비물',
        '',
        '1. 이미 아는 정보 2개',
        '2. 아직 모르는 정보 3개',
        '3. 상담에서 확인하고 싶은 질문 3개',
      ].join('\n'),
    ];
    return responses[Math.min(turnCount, responses.length - 1)];
  }

  const responses = [
    [
      `다시 들은 내용: "${concern}"`,
      '',
      '느껴지는 부담',
      ...makeEmotionalReflections(themes).slice(0, 2).map((reflection) => `• ${reflection}`),
      '',
      `질문: ${emotionalClosing(themes)}`,
    ].join('\n'),
    [
      '지금은 결론보다 부담을 낮추는 것이 먼저입니다.',
      '',
      '• 모르는 것과 못하는 것을 같은 뜻으로 묶지 않아도 됩니다.',
      '• 불안이 커지는 지점을 찾으면 다음 질문도 더 분명해집니다.',
      '',
      `질문: ${emotionalClosing(themes)}`,
    ].join('\n'),
    [
      '오늘은 스스로를 평가하기보다 상황을 정리하는 상담으로 시작해도 됩니다.',
      '',
      '• 지금 느끼는 부담은 진로를 진지하게 생각하고 있다는 신호일 수 있습니다.',
      '• 감정과 사실을 분리하면 선택지가 조금 더 차분하게 보입니다.',
      '',
      '질문: 가장 부담되는 장면 하나를 먼저 말해볼 수 있을까요?',
    ].join('\n'),
  ];
  return responses[Math.min(turnCount, responses.length - 1)];
}
