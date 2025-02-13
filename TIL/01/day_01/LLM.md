# 처음 듣는 용어

|                    용어                    | 간단 정리                                                                                                     |
|:----------------------------------------:|-----------------------------------------------------------------------------------------------------------|
|    TDD<br/>(Test-Driven Development)     | 테스트를 먼저 작성하고 그에 맞는 코드를 구현하는 소프트웨어 개발 방법론                                                                  |
|                 Supabase                 | 오픈소스 백엔드 서비스 플랫폼으로 데이터베이스, 인증, 스토리지 등을 제공하는 Firebase 대안                                                   |
|   MSA<br/>(Microservices Architecture)   | 시스템을 작은 독립적인 서비스로 분리해 개발하고 배포하는 아키텍처                                                                      |
| RAG<br/>(Retrieval-Augmented Generation) | 정보 검색과 생성 모델을 결합한 자연어 처리 기술 전통적인 생성 모델과는 달리<br/>RAG는 먼저 데이터베이스나 문서 집합에서 관련 정보를 검색하고, 검색한 정보를 바탕으로 텍스트를 생성 |
|                Vector DB                 | 데이터를 벡터 형태로 저장하고 벡터 사이에 유사성을 빠르게 검색하는 데 최적화시킨 DB                                                          |

# 생성형 AI와 대형 언어 모델(LLM)

## LLM(대형 언어 모델, Large Language Model)

→ 아주 많은 양의 데이터를 학습한 모델

## 생성형 AI(Generative AI)

→ 데이터를 분석 및 학습 후 이를 바탕으로 랜덤한 답변을 도출함

- ChatGPT
    - 환각: 답변을 생성하는 과정에서 실제 데이터, 사실과는 다른 답변을 생성함
        - 문제 해결을 위한 접근
            - 파인튜닝: 요구사항에 맞는 특정 데이터를 담아 추가 학습시켜 환각을 줄임
            - 프롬프트 엔지니어링: 명확하고 상세한 질문을 작성함
            - 크로스 체킹: AI가 도출한 답변을 중복 체크하는 과정이 필요

## ★프롬프트 엔지니어링(Prompt Engineering)

→ 생성형 AI에게 어떻게 질문을 하느냐에 따라 답변이 달라짐

→ 일반 사용자와 다르게 개발자가 사용하는 생성형 AI 서비스의 경우 비용 감소 목적을 위해 상대적으로 저렴한 모델을 사용하는 경우가 많아 프롬프트 엔지니어링의 중요성이 높아짐

- Zero-shot Prompting
    - 단순한 작업에 대한 지시를 포함한 프롬프트 방식

  ![Image](https://github.com/user-attachments/assets/5186267f-a0d4-496e-bfda-42813f9976cd)

- One-shot Prompting
    - 작업에 대한 예시를 하나 포함한 프롬프트 방식

  ![Image](https://github.com/user-attachments/assets/74e8f447-d97b-4572-bdf6-a57bbecada5b)

- Few-shot Prompting
    - 작업에 대한 예시를 여러 개 포함시켜 AI가 패턴을 따라가도록 유도하는 프롬프트 방식

  ![Image](https://github.com/user-attachments/assets/c6163af7-99c7-445a-a1cd-54c3572a7c71)

- Chain of Thought(CoT)
    - 작업에 대한 예시를 AI가 단계적으로 생각할 수 있는 과정을 포함하여 유도하는 방식

  ![Image](https://github.com/user-attachments/assets/1603f3f5-6c7f-476a-8ef4-0f8fa96f8d2b)

- 그 외의 것들
    - Zero-shot CoT
    - Tree of Thoughts(ToT)
    - ReAct

## ★RTF 프레임워크(RTF Framework)

→ AI와의 상호작용을 최적화하기 위해서 역할(Role), 작업(Task), 형식(Format)을 포함해 프롬프트를 작성하는 방식

- 역할(Role): AI에게 역할을 부여하여 그 역할에 맞는 답변을 도출하도록 지시
    - “개발자로서 가장 호환성이 높은 프로그래밍 언어를 탐색해”
- 작업(Task): AI가 수행할 작업을 구체적인 범위를 포함해 명확하게 지시
    - “C언어에 대해서 자료형, 반복문, 조건문을 포함해서 알려줘”
- 형식(Format): AI가 도출할 결과에 대한 응답 형식 및 수준을 지시
    - “결과를 표와 그래프 형식으로 보여줘”
- 예시

> 너는 취업을 준비하고 있는 생성형 ai 백엔드 주니어 개발자야.(Role) 오늘 마크다운에 대해서 배웠어. 배운 내용을 bullet point 형식으로 다른 사람들이 궁금해야할 내용들을 바탕으로 기술 블로그에서 인기를 끌 만한 형식으로 작성해봐.(Task) 특히 velog나 thread에서 인기 끌게.(Format)
