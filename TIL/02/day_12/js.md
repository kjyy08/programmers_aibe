<!-- 1. CRUD -> Persistence(영속성) -> JPA -->
<!-- -> Storage -> BOM (LocalStorage, SessionStorage) -->
<!-- 2. LLM - 생성형 AI - 추천 컨텐츠, 요약, 번역, ... -->
<!-- -> 포함. -> API -> 네트워크 요청(비동기 처리) -->
<!-- 3. API -> API Key, Data -> Secure 코딩 -> CORS(Proxy, Whitelist) -->
<!-- 4. 파일 다루기 -> WAS, WS -> AWS S3, BaaS, Headless CMS -> 객체 스토리지 -> 직접 클라우드 인스턴스에 연결 OR 클라우드에서 제공하는 API를 사용해서 원격으로 전달 -->

<!-- Proxy 객체 -->
<!-- 해시 충돌 문제 -->
<!-- 순서(시퀀스), 시간, 해시 -->
<!-- 요즘 트렌드? KDT 들은 사람들을 대상으로 2개월짜리 과정이 또 있다고 한다 -> DevOps or Cloud or Kotlin -->
<!-- import vs require -->
<!-- web1 web2 web3 차이 -->

<!-- 정적(static) 사이트
WS - WAS
정적-동적(dynamic? application)
그냥 파일 - 동적은 데이터를 불러온 뒤 그걸 가공해서 서빙

Static -> 고정된 파일만 나간다 -> 고정된 파일만 나가지만...
-> 소스코드도 실은 파일이야 -> 브라우저가 그걸 읽어서 실행한다면...
-> 어딘가 그걸 대응해줄 서버가 있다면??? -> 변할 수 있어...
-> 파일/데이터는 내장되어 있거나 변할 여지가 있어... 동작은 해...
-> Static이라고 해서 '변화가 없다?'는 아님. -> WEB2 -> WEB3?
-> WEB1 (완전 정적), WEB2 (동적(WAS)->V8(CSR)), WEB3 (소유권)
GitHub Pages, Cloudflare Pages, Glitch Static 배포
Netlify,
Vercel (Next가 아닌 형태의 VanilarJS나 순수 React를 배포할 때의...
SSR만 되어 있는...)

<-> Glitch, 인스턴스. 서버리스?, 런타임
: 콜드 스타트. 파이썬, 노드. -> 안쓸 때 freeze.
-> 24시간 돌아가는 건 아닌데... 껐다켰다 했을 때 상당히 효율적이라
-> 공짜로 줘도... 어떻게 돼... 유료로 일부가 쓰고, 누군가가 기부하면...
=> 자바 기반에 프레임워크는 안정적인 대신에 껐다켰다가 엄청 느리거나 부하가 심해요
=> 그래서 이런게 없거나 스프링부트처럼 상당히 최적화가 잘된것만이 일부만 제공...

1. (진도 소탕 대작전) 내일 밀린, 밀릴지도 모르는 진도를 쫙 뺍니다
2. 금, 월. 5대 과제를 해결합니다.
	- (1) 소셜 로그인 -> supabase를 통한 풀이, glitch를 통한 풀이
  - (2) 지도 -> 네이버 지도, 카카오 지도
  - (3) 객체 스토리지 (파일 업로드) -> 사진, 동영상.
  - (4) 데이터베이스 (RDBMS, Redis)
  	-> glitch (sqlite), supabase (postsql),
    	 upstash (redis)
  - (5) 웹소켓으로 채팅/실시간 데이터 받기
3. 객관식, TDD(실전 코드) -> 복습, 시험 대비... -->

<!-- mermaid에 그 외 도형에 별 아이콘 다 있다.. + 배치 - 삽입 - mermaid로 변환도 가능 -->
