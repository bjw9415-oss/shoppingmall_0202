# 🛍️ 쇼핑몰 프로젝트 (Shopping Mall Project)

React와 Vite를 사용하여 구축된 모던한 쇼핑몰 프론트엔드 프로젝트입니다.
깔끔한 디자인과 컴포넌트 기반 아키텍처를 특징으로 하며, 기본적인 상품 목록과 랜딩 페이지 레이아웃을 제공합니다.

## 🛠 기술 스택 (Tech Stack)

- **Core**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (CSS Variables), Inline Styles for dynamic styling
- **Linting**: ESLint

## 🚀 시작하기 (Getting Started)

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 설치 (Installation)

의존성 패키지를 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행 (Run Dev Server)

개발 모드에서 서버를 실행합니다.

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 주소)로 접속하여 프로젝트를 확인할 수 있습니다.

### 3. 빌드 (Build)

배포를 위해 프로젝트를 빌드합니다.

```bash
npm run build
```

## 📂 프로젝트 구조 (Project Structure)

```
src/
├── components/
│   ├── Header.tsx      # 상단 네비게이션 및 로고
│   ├── Hero.tsx        # 메인 히어로/배너 섹션
│   ├── ProductList.tsx # 상품 그리드 및 아이템 표시
│   └── Footer.tsx      # 페이지 하단 정보
├── assets/             # 상품 이미지 및 정적 리소스
├── App.tsx             # 레이아웃 구성 및 메인 앱
└── main.tsx            # 앱 진입점 (Entry Point)
```

## ✨ 주요 기능 (Features)

- **반응형 디자인**: 다양한 해상도에 대응하는 유연한 레이아웃
- **상품 리스트**: CSS Grid를 활용한 상품 목록 표시
- **인터랙션**: 마우스 호버 시 이미지 확대 등 미세한 애니메이션 효과 적용
- **모듈화**: 기능별 리액트 컴포넌트 분리 (Header, Hero, Footer 등)

## 📝 라이선스 (License)

This project is licensed under the MIT License.
