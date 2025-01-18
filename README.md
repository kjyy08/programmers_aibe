# 프로그래머스 생성형 AI 백엔드 1기

## 간략한 소개
AI 및 백엔드 관련 학습 내용을 기록하고 관리하는 리포지토리로  
프론트엔드와 백엔드 작업물을 날짜별로 분류하며 학습 기록(TIL)을 포함합니다.

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

    |  **아이콘**  | **코드**                         | **설명**              | **원문**                                         |
    |:---------:|:-------------------------------|:--------------------|:-----------------------------------------------|
    |    🎨     | `:art:`                        | 코드의 구조/형태 개선        | Improve structure / format of the code.        |
    |    ⚡️     | `:zap:`                        | 성능 개선               | Improve performance.                           |
    |    🔥     | `:fire:`                       | 코드/파일 삭제            | Remove code or files.                          |
    |    🐛     | `:bug:`                        | 버그 수정               | Fix a bug.                                     |
    |    🚑     | `:ambulance:`                  | 긴급 수정               | Critical hotfix.                               |
    |     ✨     | `:sparkles:`                   | 새 기능                | Introduce new features.                        |
    |    📝     | `:memo:`                       | 문서 추가/수정            | Add or update documentation.                   |
    |    💄     | `:lipstick:`                   | UI/스타일 파일 추가/수정     | Add or update the UI and style files.          |
    |    🎉     | `:tada:`                       | 프로젝트 시작             | Begin a project.                               |
    |     ✅     | `:white_check_mark:`           | 테스트 추가/수정           | Add or update tests.                           |
    |    🔒     | `:lock:`                       | 보안 이슈 수정            | Fix security issues.                           |
    |    🔖     | `:bookmark:`                   | 릴리즈/버전 태그           | Release / Version tags.                        |
    |    💚     | `:green_heart:`                | CI 빌드 수정            | Fix CI Build.                                  |
    |    📌     | `:pushpin:`                    | 특정 버전 의존성 고정        | Pin dependencies to specific versions.         |
    |    👷     | `:construction_worker:`        | CI 빌드 시스템 추가/수정     | Add or update CI build system.                 |
    |    📈     | `:chart_with_upwards_trend:`   | 분석, 추적 코드 추가/수정     | Add or update analytics or track code.         |
    |    ♻️     | `:recycle:`                    | 코드 리팩토링             | Refactor code.                                 |
    |     ➕     | `:heavy_plus_sign:`            | 의존성 추가              | Add a dependency.                              |
    |     ➖     | `:heavy_minus_sign:`           | 의존성 제거              | Remove a dependency.                           |
    |    🔧     | `:wrench:`                     | 구성 파일 추가/삭제         | Add or update configuration files.             |
    |    🔨     | `:hammer:`                     | 개발 스크립트 추가/수정       | Add or update development scripts.             |
    |    🌐     | `:globe_with_meridians:`       | 국제화/현지화             | Internationalization and localization.         |
    |    💩     | `:poop:`                       | 똥싼 코드               | Write bad code that needs to be improved.      |
    |     ⏪     | `:rewind:`                     | 변경 내용 되돌리기          | Revert changes.                                |
    |    🔀     | `:twisted_rightwards_arrows:`  | 브랜치 합병              | Merge branches.                                |
    |    📦     | `:package:`                    | 컴파일된 파일 추가/수정       | Add or update compiled files or packages.      |
    |    👽     | `:alien:`                      | 외부 API 변화로 인한 수정    | Update code due to external API changes.       |
    |    🚚     | `:truck:`                      | 리소스 이동, 이름 변경       | Move or rename resources (e.g.: files paths).  |
    |    📄     | `:page_facing_up:`             | 라이센스 추가/수정          | Add or update license.                         |
    |    💡     | `:bulb:`                       | 주석 추가/수정            | Add or update comments in source code.         |
    |    🍻     | `:beers:`                      | 술 취해서 쓴 코드          | Write code drunkenly.                          |
    |    🗃     | `:card_file_box:`              | 데이터베이스 관련 수정        | Perform database related changes.              |
    |    🔊     | `:loud_sound:`                 | 로그 추가/수정            | Add or update logs.                            |
    |    🙈     | `:see_no_evil:`                | `.gitignore` 추가/수정  | Add or update a .gitignore file.               |