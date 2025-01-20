# 프로그래머스 생성형 AI 백엔드 1기

코드와 학습 내용을 기록하고 관리하는 리포지토리로  
프론트엔드와 백엔드 작업물, 학습 기록(TIL)을 날짜별로 분류합니다.

## 디렉토리 구조
```plaintext
programmers_aibe/
├── frontend        # 프론트엔드 코드 (날짜별로 분류)
├── backend         # 백엔드 코드 (날짜별로 분류)
├── TIL             # Today I Learn 기록 (날짜 및 주제별로 분류)
└── README.md       # 개요 및 규칙
```

## 커밋 메시지 규칙
* 기본 구조
  * ```plaintext
    <Tag>: <작업 내용>
    ```
  * 커밋 타입

    |    **Tag**     | **Description**         |  
    |:--------------:|-------------------------|  
    |    **Feat**    | 새로운 기능 추가               |
    |    **Fix**     | 버그 수정                   |
    |   **Design**   | UI 디자인 변경               |
    |   **Style**    | 코드 포맷 변경(코드 수정이 없는 경우)  |
    |  **Refactor**  | 코드 리팩토링                 |
    |  **Comment**   | 주석 추가 또는 변경             |
    |    **Docs**    | 문서 수정                   |
    |    **Test**    | 테스트 코드 추가 또는 테스트 리팩토링   |
    |   **Chore**    | 빌드 테스트 또는 패키지 매니저 설정 변경 |
    |   **Rename**   | 파일 또는 폴더명 수정            |
    |   **Remove**   | 파일 또는 폴더 삭제             |
    
  * 작성 규칙
      1. 태그는 영어로 작성하고 첫 문자는 대문자로 합니다.
      2. 태그와 제목 사이에는 `: `를 사용합니다.
      3. 내용은 가능한 50자 이내로 작성하고 마침표를 사용하지 않습니다.


  * 커밋 이모지

    | 이모지   | 이모지 코드                      | 번역                      | 원문                                                           |
    |-------|-----------------------------|-------------------------|--------------------------------------------------------------|
    | 🎨    | :art:                       | 구조/형식 개선                | Improve structure/format of the code                         |
    | ⚡️    | :zap:                       | 성능 개선                   | Improve performance                                          |
    | 🔥    | :fire:                      | 코드/파일 제거                | Remove code or files                                         |
    | 🐛    | :bug:                       | 버그 수정                   | Fix a bug                                                    |
    | 🚑️   | :ambulance:                 | 긴급 핫픽스                  | Critical hotfix                                              |
    | ✨     | :sparkles:                  | 새로운 기능 추가               | Introduce new features                                       |
    | 📝    | :memo:                      | 문서 추가/업데이트              | Add or update documentation                                  |
    | 🚀    | :rocket:                    | 배포 작업                   | Deploy stuff                                                 |
    | 💄    | :lipstick:                  | UI 및 스타일 파일 추가/업데이트     | Add or update the UI and style files                         |
    | 🎉    | :tada:                      | 프로젝트 시작                 | Begin a project                                              |
    | ✅     | :white_check_mark:          | 테스트 추가/업데이트/통과          | Add, update, or pass tests                                   |
    | 🔒️   | :lock:                      | 보안/프라이버시 이슈 수정          | Fix security or privacy issues                               |
    | 🔐    | :closed_lock_with_key:      | 비밀키 추가/업데이트             | Add or update secrets                                        |
    | 🔖    | :bookmark:                  | 릴리스/버전 태그               | Release / Version tags                                       |
    | 🚨    | :rotating_light:            | 컴파일러/린터 경고 수정           | Fix compiler/linter warnings                                 |
    | 🚧    | :construction:              | 작업 진행 중                 | Work in progress                                             |
    | 💚    | :green_heart:               | CI 빌드 수정                | Fix CI Build                                                 |
    | ⬇️    | :arrow_down:                | 의존성 버전 하향 조정            | Downgrade dependencies                                       |
    | ⬆️    | :arrow_up:                  | 의존성 버전 상향 조정            | Upgrade dependencies                                         |
    | 📌    | :pushpin:                   | 의존성 버전 고정               | Pin dependencies to specific versions                        |
    | 👷    | :construction_worker:       | CI 빌드 시스템 추가/업데이트       | Add or update CI build system                                |
    | 📈    | :chart_with_upwards_trend:  | 분석/트래킹 코드 추가/업데이트       | Add or update analytics or track code                        |
    | ♻️    | :recycle:                   | 코드 리팩터링                 | Refactor code                                                |
    | ➕     | :heavy_plus_sign:           | 의존성 추가                  | Add a dependency                                             |
    | ➖     | :heavy_minus_sign:          | 의존성 제거                  | Remove a dependency                                          |
    | 🔧    | :wrench:                    | 설정 파일 추가/업데이트           | Add or update configuration files                            |
    | 🔨    | :hammer:                    | 개발 스크립트 추가/업데이트         | Add or update development scripts                            |
    | 🌐    | :globe_with_meridians:      | 국제화 및 현지화               | Internationalization and localization                        |
    | ✏️    | :pencil2:                   | 오타 수정                   | Fix typos                                                    |
    | 💩    | :poop:                      | 개선이 필요한 나쁜 코드 작성        | Write bad code that needs to be improved                     |
    | ⏪️    | :rewind:                    | 변경 사항 되돌리기              | Revert changes                                               |
    | 🔀    | :twisted_rightwards_arrows: | 브랜치 병합                  | Merge branches                                               |
    | 📦️   | :package:                   | 컴파일된 파일/패키지 추가/업데이트     | Add or update compiled files or packages                     |
    | 👽️   | :alien:                     | 외부 API 변경에 따른 코드 업데이트   | Update code due to external API changes                      |
    | 🚚    | :truck:                     | 리소스 이동/이름 변경            | Move or rename resources                                     |
    | 📄    | :page_facing_up:            | 라이선스 추가/업데이트            | Add or update license                                        |
    | 💥    | :boom:                      | 파괴적인 변경 도입              | Introduce breaking changes                                   |
    | 🍱    | :bento:                     | 에셋 추가/업데이트              | Add or update assets                                         |
    | ♿️    | :wheelchair:                | 접근성 개선                  | Improve accessibility                                        |
    | 💡    | :bulb:                      | 소스 코드 주석 추가/업데이트        | Add or update comments in source code                        |
    | 🍻    | :beers:                     | 술김에 코드 작성               | Write code drunkenly                                         |
    | 💬    | :speech_balloon:            | 텍스트 및 리터럴 추가/업데이트       | Add or update text and literals                              |
    | 🗃️   | :card_file_box:             | 데이터베이스 관련 변경 수행         | Perform database related changes                             |
    | 🔊    | :loud_sound:                | 로그 추가/업데이트              | Add or update logs                                           |
    | 🔇    | :mute:                      | 로그 제거                   | Remove logs                                                  |
    | 👥    | :busts_in_silhouette:       | 기여자 추가/업데이트             | Add or update contributor(s)                                 |
    | 🚸    | :children_crossing:         | 사용자 경험/사용성 개선           | Improve user experience/usability                            |
    | 🏗️   | :building_construction:     | 아키텍처 변경                 | Make architectural changes                                   |
    | 📱    | :iphone:                    | 반응형 디자인 작업              | Work on responsive design                                    |
    | 🤡    | :clown_face:                | 목업 작업                   | Mock things                                                  |
    | 🥚    | :egg:                       | 이스터 에그 추가/업데이트          | Add or update an easter egg                                  |
    | 🙈    | :see_no_evil:               | .gitignore 파일 추가/업데이트   | Add or update a .gitignore file                              |
    | 📸    | :camera_flash:              | 스냅샷 추가/업데이트             | Add or update snapshots                                      |
    | ⚗️    | :alembic:                   | 실험 수행                   | Perform experiments                                          |
    | 🔍️   | :mag:                       | SEO 개선                  | Improve SEO                                                  |
    | 🏷️   | :label:                     | 타입 추가/업데이트              | Add or update types                                          |
    | 🌱    | :seedling:                  | 시드 파일 추가/업데이트           | Add or update seed files                                     |
    | 🚩    | :triangular_flag_on_post:   | 기능 플래그 추가/업데이트/제거       | Add, update, or remove feature flags                         |
    | 🥅    | :goal_net:                  | 에러 포착                   | Catch errors                                                 |
    | 💫    | :dizzy:                     | 애니메이션 및 전환 추가/업데이트      | Add or update animations and transitions                     |
    | 🗑️   | :wastebasket:               | 정리해야 할 코드 폐기            | Deprecate code that needs to be cleaned up                   |
    | 🛂    | :passport_control:          | 권한, 역할 및 권한 관련 코드 작업    | Work on code related to authorization, roles and permissions |
    | 🩹    | :adhesive_bandage:          | 비치명적인 문제에 대한 간단한 수정     | Simple fix for a non-critical issue                          |
    | 🧐    | :monocle_face:              | 데이터 탐색/검사               | Data exploration/inspection                                  |
    | ⚰️    | :coffin:                    | 죽은 코드 제거                | Remove dead code                                             |
    | 🧪    | :test_tube:                 | 실패하는 테스트 추가             | Add a failing test                                           |
    | 👔    | :necktie:                   | 비즈니스 로직 추가/업데이트         | Add or update business logic                                 |
    | 🩺    | :stethoscope:               | 헬스체크 추가/업데이트            | Add or update healthcheck                                    |
    | 🧱    | :bricks:                    | 인프라 관련 변경               | Infrastructure related changes                               |
    | 🧑‍💻 | :technologist:              | 개발자 경험 개선               | Improve developer experience                                 |
    | 💸    | :money_with_wings:          | 후원 또는 돈 관련 인프라 추가       | Add sponsorships or money related infrastructure             |
    | 🧵    | :thread:                    | 멀티스레딩/동시성 관련 코드 추가/업데이트 | Add or update code related to multithreading or concurrency  |
    | 🦺    | :safety_vest:               | 검증 관련 코드 추가/업데이트        | Add or update code related to validation                     |
