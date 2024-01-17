<!-- Code Forces -->
![image](https://user-images.githubusercontent.com/49322948/159158565-ded8dc03-6676-496d-8496-1f9d05f3fb58.png) 
---
### 쉘 스크립트로 알고리즘 문제 풀이 파일 관리 자동화 :ok_woman: 
#### 1. Git Clone
```shell
# 풀이가 포함되지 않는 cf-cli 브랜치를 클론,,,🤓
$ git clone -b cf-cli --single-branch https://github.com/emayom/codeforces.git
```

#### 2. 환경 변수 설정
```shell 
# Mac OS 기본 쉘을 기준으로 작성하였습니다!
# ✅ ~/.zshrc에 해당 프로젝트 위치 환경 변수 설정
export MY_CODE_FORCES="/$HOME/codeforces"

# ✅ Alias 등록
alias cfmake="bash $MY_CODE_FORCES/make.sh"

# 경로 체크  
echo $MY_CODE_FORCES
```

#### 3. CLI 
- `/problems/[problem-name]` 디렉토리가 생성됩니다. 
- 문제 풀이를 위한 `input.txt`, `main.js` 파일이 내부에 생성됩니다. 
- `README.md` 파일에 인덱스와, 문제 이름, 디렉토리 경로, 풀이 일자가 추가됩니다. 

```shell
$ cfmake 

# 인덱스 / 문제이름 입력
$ Enter the problem index: 👈
$ Enter the problem name: 👈
```
---
| 인덱스 | 문제 이름 | 풀이 일자 |
|:-:|-|-|
| 4A | [watermelon](./problems/watermelon) | 2023-01-18 |
| 71A | [way-too-long-words](./problems/way-too-long-words)| 2023-01-18 |
| 231A | [team](./problems/team/) | 2023-01-18|
| 1A | [theatre-square](./problems/theatre-square/) | 2023-01-18 |
