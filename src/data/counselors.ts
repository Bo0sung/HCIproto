import type { Counselor } from '../types';

export const counselors: Counselor[] = [
  {
    id: 'employment-graduate-practical',
    approachType: 'practical',
    specialty: 'employmentGraduate',
    name: '김도현 상담사',
    type: '취업·대학원 현실 점검 전문가',
    tags: ['취업비교', '대학원진학', '준비상태점검', '선택기준'],
    description:
      '취업과 대학원 진학을 준비도, 시간, 리스크, 필요 조건 기준으로 비교해 다음 준비 과제를 정리합니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'employment-graduate-emotional',
    approachType: 'emotional',
    specialty: 'employmentGraduate',
    name: '이서연 상담사',
    type: '취업·대학원 정서 공감 전문가',
    tags: ['결정스트레스', '불안정리', '선택부담', '자기이해'],
    description:
      '취업과 대학원 사이에서 생기는 압박감과 불확실성을 정리하고, 선택이 어렵게 느껴지는 이유를 함께 살펴봅니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'employment-practical',
    approachType: 'practical',
    specialty: 'employment',
    name: '박준호 상담사',
    type: '취업 준비 현실 점검 전문가',
    tags: ['이력서', '면접준비', '직무분석', '포트폴리오'],
    description:
      '희망 직무, 이력서, 면접, 프로젝트 경험을 기준으로 취업 준비 상태와 바로 할 일을 점검합니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'employment-emotional',
    approachType: 'emotional',
    specialty: 'employment',
    name: '정유진 상담사',
    type: '취업 불안 정서 공감 전문가',
    tags: ['취업불안', '압박감정리', '자신감회복', '결정지원'],
    description:
      '취업 준비 과정에서 생기는 부담, 비교감, 불안을 다루며 학생이 감당 가능한 속도를 찾도록 돕습니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'graduate-practical',
    approachType: 'practical',
    specialty: 'graduate',
    name: '최민재 상담사',
    type: '대학원 진학 현실 점검 전문가',
    tags: ['연구실탐색', '교수컨택', '학점점검', '진학전략'],
    description:
      '관심 연구분야, 연구실 조건, 학점, 컨택 가능성을 기준으로 대학원 진학 준비도를 점검합니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'graduate-emotional',
    approachType: 'emotional',
    specialty: 'graduate',
    name: '한지우 상담사',
    type: '대학원 진학 정서 공감 전문가',
    tags: ['진학불안', '연구흥미', '기대정리', '부담완화'],
    description:
      '대학원 진학을 고민할 때 생기는 기대와 불확실성을 나누어 보고, 마음의 부담을 정리합니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'major-fit-practical',
    approachType: 'practical',
    specialty: 'majorFit',
    name: '윤태민 상담사',
    type: '전공·적성 현실 점검 전문가',
    tags: ['전공적합도', '직무후보', '수업경험', '활동분석'],
    description:
      '잘 맞았던 수업, 흥미가 생긴 활동, 어려웠던 경험을 기준으로 전공과 직무 후보를 좁혀봅니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'major-fit-emotional',
    approachType: 'emotional',
    specialty: 'majorFit',
    name: '송하은 상담사',
    type: '전공·적성 정서 공감 전문가',
    tags: ['흥미탐색', '자기이해', '진로불안', '비교감완화'],
    description:
      '전공이 맞는지 흔들릴 때 생기는 불안과 비교감을 다루며, 자신에게 맞는 기준을 찾도록 돕습니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'readiness-start-practical',
    approachType: 'practical',
    specialty: 'readinessStart',
    name: '강현우 상담사',
    type: '첫 준비 단계 현실 점검 전문가',
    tags: ['첫단계설계', '우선순위', '준비목록', '작게시작'],
    description:
      '아직 해놓은 것이 없다고 느낄 때, 지금 가진 것과 없는 것을 나누고 첫 번째 준비 행동을 작게 정합니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'readiness-start-emotional',
    approachType: 'emotional',
    specialty: 'readinessStart',
    name: '오수빈 상담사',
    type: '첫 준비 단계 정서 공감 전문가',
    tags: ['막막함정리', '시작부담', '자기비난완화', '작은시도'],
    description:
      '무엇부터 해야 할지 모를 때 생기는 막막함을 낮추고, 시작을 방해하는 부담을 함께 정리합니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
  {
    id: 'general-practical',
    approachType: 'practical',
    specialty: 'general',
    name: '임성준 상담사',
    type: '일반 진로 현실 점검 전문가',
    tags: ['진로정리', '준비상태점검', '실행계획', '선택기준'],
    description:
      '아직 고민 분야가 분명하지 않을 때 선택지를 정리하고, 확인할 정보와 실행 과제를 나누어 봅니다.',
    accentClass: 'border-blue-200 bg-blue-50',
  },
  {
    id: 'general-emotional',
    approachType: 'emotional',
    specialty: 'general',
    name: '문가영 상담사',
    type: '일반 진로 정서 공감 전문가',
    tags: ['마음정리', '불안완화', '자기이해', '결정지원'],
    description:
      '진로 고민이 아직 뚜렷하지 않을 때 감정과 생각을 분리하고, 부담을 낮추며 방향을 찾아갑니다.',
    accentClass: 'border-orange-200 bg-orange-50',
  },
];
