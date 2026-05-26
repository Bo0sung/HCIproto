import type { Counselor } from '../types';

export const counselors: Counselor[] = [
  {
    id: 'practical-park',
    approachType: 'practical',
    name: '박현실 상담사',
    type: 'Practical Readiness Counselor',
    tags: ['준비상태점검', '포트폴리오', '취업준비', '대학원전략'],
    description:
      '학점, 포트폴리오, 프로젝트, 인턴, 이력서, 면접 준비도를 객관적으로 확인하고 바로 할 일을 정리합니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'practical-kim',
    approachType: 'practical',
    name: '김준비 상담사',
    type: 'Practical Readiness Counselor',
    tags: ['이력서점검', '프로젝트정리', '면접준비', '현실계획'],
    description:
      '현재 가진 경험을 취업과 진학 기준으로 점검하고, 부족한 준비 항목을 구체적인 과제로 바꿉니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'emotional-lee',
    approachType: 'emotional',
    name: '이지해 상담사',
    type: 'Emotional Support Counselor',
    tags: ['불안완화', '자신감회복', '압박감정리', '자기이해'],
    description:
      '불안, 낮은 자신감, 실패에 대한 두려움, 선택 압박을 부드럽게 다루며 마음을 먼저 정리합니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'emotional-choi',
    approachType: 'emotional',
    name: '최마음 상담사',
    type: 'Emotional Support Counselor',
    tags: ['따뜻한공감', '결정스트레스', '심리지지', '마음정리'],
    description:
      '결정 스트레스와 두려움을 안전하게 말할 수 있도록 돕고, 스스로를 이해하는 기준을 함께 찾습니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
];
