const summarizeInput = (input: string): string => {
  const compact = input.trim().replace(/\s+/g, ' ');
  return compact.length > 48 ? `${compact.slice(0, 48)}...` : compact;
};

export function generateMockResponse(counselorId: string, userInput: string): string {
  const concern = summarizeInput(userInput);

  if (counselorId.includes('practical')) {
    return `"${concern}"라는 고민은 먼저 준비 상태를 항목별로 점검하면 좋겠습니다. 학점, 포트폴리오, 프로젝트 경험, 이력서, 면접 준비, 대학원/취업 조건을 체크리스트로 나누고 지금 바로 보완할 2가지를 정해보겠습니다.`;
  }

  return `"${concern}"라고 느끼는 마음이 꽤 무거웠을 것 같아요. 지금은 결론을 빨리 내기보다, 왜 이 선택이 어렵게 느껴지는지와 불안이 커지는 지점을 먼저 살펴보면 좋겠습니다.`;
}

export function generateFollowUpResponse(
  counselorId: string,
  userMessage: string,
  turnCount: number,
): string {
  const concern = summarizeInput(userMessage);

  if (counselorId.includes('practical')) {
    const responses = [
      `"${concern}" 부분은 준비도 기준으로 나눠보겠습니다. 지금 가진 자료, 부족한 증거, 이번 주에 보완할 산출물을 각각 하나씩 정하면 판단이 쉬워집니다.`,
      `다음 단계는 실행 항목을 좁히는 것입니다. 포트폴리오 1개 보완, 이력서 초안 작성, 관심 직무 또는 연구실 조건 확인 중 가장 급한 것부터 시작해보세요.`,
      `이제 체크리스트를 업데이트하면 됩니다. 완료한 준비와 아직 비어 있는 준비를 구분하면 취업과 대학원 중 어느 쪽이 더 현실적인지 선명해집니다.`,
    ];
    return responses[Math.min(turnCount, responses.length - 1)];
  }

  const responses = [
    `"${concern}"라고 말해준 것 자체가 중요한 시작이에요. 그 감정은 부족해서 생긴 문제가 아니라, 중요한 선택 앞에서 자연스럽게 커질 수 있는 반응입니다.`,
    `지금은 자신을 몰아붙이기보다 불안이 가장 커지는 순간을 찾아보면 좋겠습니다. 그 장면을 알면 무엇을 도와야 마음이 안정되는지도 보이기 시작합니다.`,
    `완벽한 확신이 없어도 괜찮습니다. 오늘은 나를 힘들게 하는 생각과 실제로 확인해야 할 사실을 분리하는 것부터 해보면 좋겠습니다.`,
  ];
  return responses[Math.min(turnCount, responses.length - 1)];
}
