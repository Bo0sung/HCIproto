import { counselors } from '../data/counselors';
import type { Counselor, CounselorSpecialty } from '../types';

interface ConcernSpecialtyInfo {
  specialty: CounselorSpecialty;
  label: string;
  reason: string;
}

const hasAny = (input: string, keywords: string[]) =>
  keywords.some((keyword) => input.includes(keyword.toLowerCase()));

export const analyzeConcernSpecialty = (userInput: string): ConcernSpecialtyInfo => {
  const input = userInput.toLowerCase();
  const hasEmployment = hasAny(input, ['취업', '직무', '회사', '채용', '면접', '이력서', '인턴', '포트폴리오']);
  const hasGraduate = hasAny(input, ['대학원', '진학', '석사', '연구실', '교수', '연구']);
  const hasMajorFit = hasAny(input, ['전공', '적성', '흥미', '분야', '맞는지', '진로방향']);

  if (hasEmployment && hasGraduate) {
    return {
      specialty: 'employmentGraduate',
      label: '취업·대학원 선택 상담',
      reason: '입력한 고민에서 취업과 대학원 진학 단서가 함께 감지되었습니다.',
    };
  }

  if (hasEmployment) {
    return {
      specialty: 'employment',
      label: '취업 준비 상담',
      reason: '입력한 고민에서 취업, 직무, 이력서, 면접 관련 단서가 감지되었습니다.',
    };
  }

  if (hasGraduate) {
    return {
      specialty: 'graduate',
      label: '대학원 진학 상담',
      reason: '입력한 고민에서 대학원, 진학, 연구실 관련 단서가 감지되었습니다.',
    };
  }

  if (hasMajorFit) {
    return {
      specialty: 'majorFit',
      label: '전공·적성 탐색 상담',
      reason: '입력한 고민에서 전공, 적성, 흥미 관련 단서가 감지되었습니다.',
    };
  }

  return {
    specialty: 'general',
    label: '일반 진로 정리 상담',
    reason: '특정 분야 단서가 뚜렷하지 않아 일반 진로 상담 전문가를 추천합니다.',
  };
};

export const getCounselorsForConcern = (userInput: string): Counselor[] => {
  const { specialty } = analyzeConcernSpecialty(userInput);
  return counselors.filter((counselor) => counselor.specialty === specialty).slice(0, 2);
};
