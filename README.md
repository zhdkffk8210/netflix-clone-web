# 🎬 Netflix Clone

Next.js 16 + React 19 + Tailwind CSS v4 기반 Netflix 클론 프로젝트

## 🛠 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- TMDB API
- YouTube Embed
- Docker
- Vercel (Production Deployment)

### 프로젝트 세팅 및 Next.js 구조 설정

- Next.js 16 App Router 구조 (`src/app/`, `src/components/`, `src/lib/`)
- Tailwind CSS v4 PostCSS 설정
- ESLint + TypeScript strict 모드

### API 통신 로직 및 데이터 구성

- TMDB API 연동 (`fetchMovies`, `fetchMovieById`, `fetchMovieVideos`)
- 영화 목록 (Popular, Top Rated, Action, Comedy) 조회
- 개별 영화 상세 정보 + YouTube 트레일러 키 조회
- Server Component에서 `Promise.all` 병렬 fetch

### TypeScript 타입 정의

- `Movie`, `MovieDetail` 영화 인터페이스
- `TMDBVideo`, `TMDBVideoResponse` 비디오 응답 타입
- Next.js 16 `params: Promise<{id: string}>` 호환

### UI/UX 구성 및 페이지 디자인

- 홈: Header(스크롤 반응) + Banner(랜덤 영화) + Row(수평 스크롤) 구성
- 플레이어: YouTube iframe embed로 트레일러 직접 재생
- 트레일러 없는 영화: 배경 이미지 + "No trailer available" fallback
- 반응형: 모바일/태블릿(`< Home` 뒤로가기 바) / PC(iframe 풀스크린)

### 인터랙션 추가 (모달, 슬라이더 등)

- MovieCard 클릭 → `/player/[id]` 라우트 이동
- Banner "Play" 버튼 → 플레이어 이동
- "More Info" 버튼 → 영화 정보 모달 (fade/scale 애니메이션)
- Row 좌우 스크롤 (순환형) + hover 확대 효과
- PC 호버 시 영화 제목 페이드인 표시
- 캐러셀 버튼 UX 개선 (‹ / › 방향 직관화)

### 🐳 Dockerfile 작성 및 이미지 빌드

- `node:20-alpine` 기반 멀티스테이지 아닌 단일 빌드
- `ARG`로 빌드 시 TMDB API 키 주입
- `.dockerignore` 설정 (node_modules, .next, .git, .env.local)
```bash
docker build --build-arg NEXT_PUBLIC_TMDB_API_KEY=... -t netflix-clone .
docker run -p 3000:3000 netflix-clone
```

## 🚀 Deployment

### Vercel (Production)

GitHub Repository를 Vercel에 연결하여 자동 배포 구성

Production Branch: main

Environment Variable 설정 필요
```bash
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```
Production URL:
```bash
https://netflix-clone-web.vercel.app
```
## 🔐 Environment Variables
| Name                     | Description  |
| ------------------------ | ------------ |
| NEXT_PUBLIC_TMDB_API_KEY | TMDB API Key |

Local
```bash
echo "NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key" > .env.local
```

Docker

--build-arg 및 -e 옵션 사용

Vercel

Dashboard → Settings → Environment Variables에서 설정

## 🌿 Branch Strategy

- `feature/home-ui` → 홈 UI 및 인터랙션 구현
- `feature/player` → 플레이어 및 YouTube embed 구현
- 작업 완료 후 `main` 브랜치에 Merge
- Stable 배포 버전 `v1.0` 태그 생성

## 시작하기

```bash
# 환경 변수 설정
echo "NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key" > .env.local

# 의존성 설치 및 실행
npm install
npm run dev
```

`http://localhost:3000` 에서 확인

## 📦 Release

### v1.0
- Home + Player 통합 완료
- Docker 실행 검증 완료
- Vercel 배포 완료
- UX 개선 반영


## 👤 제작자

풀스택 개발자 20회차 3팀 ( 전성우 편대호 김영환 )

Netflix Clone Web Project
