# Git 심화

- Branch (전환, 생성, 삭제)
- Merge (Fast-Forward, 3-Way Merge, Merge Conflict)

- 주요 명령어
  ```bash
  git add .
  git branch <옵션> <브랜치이름>
  git switch <옵션> <브랜치이름>
  git log --graph --oneline
  ```

## Branch

-> 브랜치를 생성하는데 사용

```bash
git branch <옵션> <브랜치이름> <브랜치이름2>
```

- 주요 옵션
  - `-a`: 로컬 브랜치와 원격 브랜치를 모두 표시
  - `-r`: 원격 브랜치만 표시
  - `-d`: 병합된 로컬 브랜치를 삭제
  - `-D`: 병합되지 않은 브랜치를 강제로 삭제
  - `-m`: 브랜치 이름을 변경, 이미 존재하는 경우 에러 발생
  - `-M`: 브랜치 이름을 강제로 변경

## Switch

-> 브랜치 전환에 사용하는 명령

```bash
git switch <옵션> <브랜치이름>
```

- 주요 옵션
  - `-c`: 새 브랜치 생성 후 전환, 이미 존재하는 경우 에러 발생
  - `-C`: 새 브랜치 강제 생성 후 전환
  - `-f`: 현재 작업중인 변경 사항을 모두 무시하고 강제로 브랜치 전환

## Merge

-> 두 브랜치의 변경 사항을 하나로 병합하는 명령으로 `Merge` 이력을 남김

```bash
git merge <브랜치이름>
```

- **Fast-Forward Merge**

  ```textplain
  main:    A -- B
                 \
  feature:        C -- D
  ```

- 브랜치가 병합 대상 브랜치의 최신 커밋을 그대로 이어받을 수 있는 경우 새로운 커밋 없이 브랜치를 병합
- 새로운 병합 커밋이 생성되지 않음

- **3-Way Merge**

  ```textplain
  main:    A -- B ------ E
                 \      /
  feature:        C -- D
  ```

  - 두 브랜치가 병합되기 전에 서로 다른 작업 내용이 있을 경우, `Git`이 `공통된 커밋(merge base)`을 기준으로 `3-Way Merge`를 통해 병합
  - 병합 결과를 기록하는 새로운 커밋이 생성됨

- **Conflict(충돌)**
  - 두 브랜치 동일 파일의 동일 부분이 서로 다르게 수정된 경우 `Conflict(충돌)`이 발생

## Rebase

->

> **참고**: https://blog.naver.com/mcoding777/223254640019

## Reset

## Revert

## Amend

-> 가장 최근에 작성한 커밋을 수정하는데 사용

```bash
git commit --amend --no-edit --date "1 day ago"
```

## Fork

-> 다른 사람의 리포지토리를 내 저장소로 복제하는데 사용

## Alias

-> 자주 쓰는 명령어를 단축해서 사용하기 위해 사용

```bash
git config --global alias.<별칭> "<명령어>"
git config alias.<별칭> "<명령어>"
```

- `git config --global alias.<별칭> "<명령어>"`: 전역 저장소 설정
- `git config alias.<별칭> "<명령어>"`: 로컬 저장소 설정

* 주요 예시
  - `git config --global alias.st "status"`: `st` -> `status` (현재 상태 확인)
  - `git config --global alias.co "checkout"`: `co` -> `checkout` (브랜치 전환)
  - `git config --global alias.br "branch"`: `br` -> `branch` (브랜치 목록 확인)
  - `git config --global alias.cm "commit -m"`: `cm` -> `commit -m` (커밋 메시지 작성)
  - `git config --global alias.lg "log --oneline --graph --all --decorate""`: `lg` (한 줄 로그 확인)

### 알쓸신잡

- `GPT`는 초성퀴즈를 못한다
