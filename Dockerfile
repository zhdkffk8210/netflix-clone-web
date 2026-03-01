# 1. Node 베이스 이미지
FROM node:20-alpine

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치
RUN npm install

# 5. 전체 소스 복사
COPY . .

# 🔥 환경변수 받기
ARG NEXT_PUBLIC_TMDB_API_KEY
ENV NEXT_PUBLIC_TMDB_API_KEY=$NEXT_PUBLIC_TMDB_API_KEY

# 6. 빌드
RUN npm run build

# 7. 포트 노출
EXPOSE 3000

# 8. 실행
CMD ["npm", "start"]