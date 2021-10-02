### 9/20 변경 및 참고사항

### components/dashboard

- Dashboard.js
    - Mypage.js → Profile.js
- MarketBanner.js : 배너
    - 빗썸, 코빗, 업비트, 코인원
- MyCertifications.js
    - data : 원래 템플렛에 들어있던 임시데이터. 참고용으로 삭제 안함.
    - 인증서가 들어갈 문서
- NavItem.js
    - 왼쪽 nav 영역.
    - Route 설정해야됨.
    - Route 설정은 Dashboard에서 해야됨.

        NavItem.js에서 하면 Nav 영역에서 페이지 전환됨.

        ※ 혜민님 

- Orders.js
    - 임시 데이터.
    - id, 날짜, 이름, 거래소, 코인, 거래량, 수익률, 수익금을 파라미터로 받을 createData() 함수 만듦.
    - 현재는 임시 데이터가 들어있음.
    - ※ 추가로 더 필요한 파라미터 값이 있으면 댓글 부탁드려요!
- api 폴더 추가.
- Certification.js, MyCertification, Profile UI 작성해야됨.
- post
- access_token만 받자
- googleID

- 토큰 헤더 바디 id토큰

- 로그인 response 이후 jwt도 보내준다고함.

> 토큰이 만료되면 로그인 유지해야돼서 서버로 요구하는 토큰을 보내야됨.