//  와! Hello World!
console.log("hello world!");
//  정수와 문자열 덧셈이 가능하네
console.log(1 + " 문자열");

//  type 연산자
const t = "text";
console.log(typeof t + " 가나다라마바사");

let dev = 100;
dev = 200; //  재할당
//  let dev; // 재선언, SyntaxError: Identifier 'dev' has already been declared
//  에러 발생 시 프롬프트 예: (에러 메시지) 에러를 재현할 수 있는 샘플코드를 제공해줘

// immutable -> mutable -> mutate -> property -> class / protype -> instance
//  fianl -> 런타임 시에 값이 결정됨
//  const -> 컴파일 시에 값이 결정됨
//  ex)
//  final finalTime = DateTime.now(); // 실행 중 시간이 결정되므로 사용 가능
//  const constTime = DateTime.now(); // error 발생, 컴파일 시 시간을 담을 수가 없음

//  아래는 실습 코드
//  -----------------------------------------------------
// 한줄 주석
/* 여러줄 주석 */

// 입력, 저장, 계산, 출력
console.log(foo); // 변수가 지정이 안나서 에러가 남 (var가 있다면 괜찮음 - 호이스팅)
// 밑에 var가 있으면 undefined, var가 없으면 에러...
// var foo; // 내가 원하지 않아도 var라는 키워드가 알아서 붙습니다 -> 선언
foo = "apple"; // 변수에 값을 넣어주는 것을 -> 대입/할당 (var가 없으면 알아서 붙여줌)
console.log(foo);
bar = "mango";
console.log(bar);
var baz = "appleMango"; // 초기화. 변수에 대한 선언과 값에 대한 할당이 한번에 일어나는 것을 초기화
// 선언은 한 번밖에 못해. 굳이 2번할 필요가 없어. 특정 이름과 메모리에 대한 연결이 2번 일어날 필요가 없음.
var foo; // 아무런 반응이 없음. 중복 선언에 대해서...

// let, const (es6+, 2015~)
// let dev = 100;
dev = 200; // 재할당
// let dev; // 재선언. SyntaxError: Identifier 'dev' has already been declared
// 프롬프트 예: (에러메시지) 에러를 재현할 수 있는 샘플코드를 제공해줘

// 절대 변하면 안된다? immutable, final, constant...
// 1. immutable ->  mutable. -> mutate -> property -> class/protype -> instance
// 2. final -> 주소값만 고정 (메모리 주소값) - (일반적으로는 객체인데) 처음으로 입력된 레퍼런스 객체 주소값이 안변함
// 3. constant -> 그냥 고정된 리터럴 값. 그자체. 유니코드 같은 것. 상수. 그 값.

const feature = 3.14; // 초기화밖에 안 돼.
// feature = 3; // TypeError: Assignment to constant variable.
