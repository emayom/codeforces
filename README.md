## 쉘 스크립트로 알고리즘 문제 풀이 파일 관리 자동화 :ok_woman: 
![cf-make](https://github.com/emayom/codeforces/assets/85545101/f1fda656-9640-4ed8-bcd3-b28990aaa825)

#### 1. Git Clone
```shell
git clone -b cf-cli --single-branch https://github.com/emayom/codeforces.git
```

#### 2. 환경 변수 설정

Mac OS 기본 쉘을 기준으로 작성하였습니다. 
- `~/.zshrc` 파일 내부 문제 풀이 프로젝트 위치 환경 변수 설정
- `~/.zshrc` 파일 내부 쉘 스크립트 실행 명령어 Alias 등록
```shell 
export MY_CODE_FORCES="/$HOME/codeforces"

alias cfmake="bash $MY_CODE_FORCES/make.sh"
```

#### 3. CLI 
```shell
cfmake 
```

- 터미널 프롬프트에 따라 인덱스 / 문제이름 차례대로 입력
    ```shell
    $ Enter the problem index: 👈
    $ Enter the problem name: 👈
    ```
- `/problems/[problem-name]` 디렉토리가 생성됩니다. 
- 문제 풀이를 위한 `input.txt`, `main.js` 파일이 내부에 생성됩니다. 
- `README.md` 파일에 인덱스와, 문제 이름, 디렉토리 경로, 풀이 일자가 추가됩니다. 
