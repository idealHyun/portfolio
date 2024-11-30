import { ProjectType } from '../../types/projectType';

export const soulMBTI: ProjectType = {
  title: 'SOUL MBTIE',
  subTitle:
    'MBTI와 관심 키워드를 기반으로 교내 유사 성향 친구를 매칭해주는 애플리케이션',
  functions: [
    '자신과 MBTI와 관심사가 비슷한 사람을 매칭',
    '매칭인원과 어떤 점이 비슷한지에 간단 요약 설명 제공',
    '채팅 중에 밸런스게임 적용',
  ],
  contributions: [
    'socket.IO를 이용한 채팅 구현',
    'FCM을 통해 채팅 및 친구 요청 알림 구현',
    'GetX를 이용하여 상태 관리 구현',
    '친구 관련 페이지 및 관리자 페이지 구현',
  ],
  startDate: '2024.02',
  endDate: '2024.06',
  category: 'Team',
  techStacks: ['dart', 'flutter', 'firebase', 'nodejs', 'mysql'],
  githubUrl: 'https://github.com/C4-KSCL/SOUL-MBTIE',
  images: null,
};
