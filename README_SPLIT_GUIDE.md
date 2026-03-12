# ScanHero 1차 분리 구조

이 폴더는 **"전체 HTML 한 파일" 방식에서 역할별 파일 구조로 옮기기 위한 1차 분리본**입니다.

## 목표
- 앞으로 수정할 때 전체 소스를 다시 붙이지 않고
- 필요한 파일만 열어서 수정할 수 있도록 구조를 먼저 정리

## 현재 구성
- `index.html` : 화면 뼈대와 외부 라이브러리 로드
- `styles/` : CSS 영역 분리
- `js/config.js` : 상수 / 설정값
- `js/state.js` : 전역 상태
- `js/dom.js` : DOM 헬퍼 / 공용 유틸
- `js/modules/` : 기능별 파일 자리
- `js/app.js` : 당분간 기존 통합 로직을 옮겨 넣는 메인 파일

## 추천 이전 순서
1. 기존 `<style>` 내용을 `styles/*.css` 로 이동
2. 기존 `<script>` 내용을 `js/app.js` 로 통째로 이동
3. 그 다음 아래 순서로 `app.js` 내용을 기능별로 잘라내기
   - `sprites.js`
   - `items.js`
   - `battle.js`
   - `db.js`
   - `auth.js`
   - `character.js`
   - `map.js`
   - `shop.js`
   - `scanner.js`
   - `overlay.js`

## 핵심 원칙
- state 선언은 `state.js` 한 곳만 사용
- Supabase 키 / 클래스 정보 / 랭크 테이블은 `config.js` 한 곳만 사용
- 화면 갱신은 `ui.js`
- 저장/불러오기는 `db.js`
- 전투 계산은 `battle.js`
- 장비/인벤토리는 `items.js`

## 주의
이 1차 분리본은 **구조를 먼저 잡는 단계**입니다.
기존 통합 로직을 완전히 기능별 파일로 쪼갠 최종본은 아니고,
앞으로 안전하게 옮길 수 있게 만드는 기반입니다.
