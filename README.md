## Cognisle
**기억력 테스트를 통한 섬 꾸미기 웹 어플리케이션**

## 사이트 주소
https://cognisle.vercel.app

## 주요 기능
1. 기억력 테스트 (4x4 카드 뒤집기 게임)을 통해 아이템 획득
2. 보유한 아이템으로 나의 섬 꾸미기
3. 친구의 섬 놀러가기
4. 보유한 아이템에 한해서 나와 친구들의 공부 데이터 분석 데이터 담긴 아이템 카드 열람 가능

## 사이트 맵
<img width="1182" alt="image" src="https://github.com/JangAyeon/Cognisle/assets/67853616/1476970c-51bd-430c-ba61-6bdce494b959">


## 기술 스택

<table>
<tr>
 <td align="center">언어</td>
 <td>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=ffffff"/>
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=Typescript&logoColor=ffffff"/>
 </td>
</tr>

<tr>
 <td align="center">프레임워크 및 라이브러리</td>
 <td>
  <img src="https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=ffffff"/>&nbsp
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=ffffff"/>&nbsp
  <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=ffffff"/>&nbsp
  <img src="https://img.shields.io/badge/Axios-8DD6F9?style=for-the-badge"/>&nbsp </td>
</tr>
<tr>
 <td align="center">상태관리</td>
 <td>
  <img src="https://img.shields.io/badge/Redux Tool Kit-764ABC?style=for-the-badge&logo=redux&logoColor=white">&nbsp
 </td>
</tr>
<tr>
 <td align="center">패키지관리</td>
 <td>
    <img src="https://img.shields.io/badge/NPM-2C8EBB?style=for-the-badge&logo=npm&logoColor=white"/>&nbsp
  </td>
</tr>
<tr>
 <td align="center">Formatter</td>
 <td>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=ffffff"/> &nbsp
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp
</tr>
<tr>
 <td align="center">배포</td>
 <td><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=000000&logoColor=white"/>&nbsp </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp </td>
</tr>
<tr>
 <td align="center">협업툴</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp
 </td>
</tr>
</table>

## 디렉토리 구조

```
├── 📑.github/workflows <!--깃 액션 플로우->
├── 📁apis <!--Api 호출-->
├── 📁components <!-- atom, 드래그, 폼, 레이아웃, 모달 등 컴포넌트-->
├── 📁constants  <!-- 각종 상수 값 관리 -->
├── 📁hooks <!--custiom hooks-->
├── 📁pages <!-- 페이지 -->
├── 📁public <!-- assets과 fonts -->
├── 📁redux <!-- 리덕스 slice와 store -->
├── 📁styles <!-- 공용 스타일 설정 -->
├── 📁types <!-- 타입 -->
├── 📁utils <!-- 각종 유틸 함수 -->
├── 📑middleware.ts <!--페이지 랜더링 전 인증 여부에 따른 라우팅-->
└── 📑next.config.js <!--Image, rewrites, redirects, SVG config, bundle-analyzer 설정-->
```
