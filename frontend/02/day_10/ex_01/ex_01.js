//  예외처리
try {
  let a = null;
  console.log(a.a);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("타입 에러");
  } else {
    console.error(error.message);
  }
} finally {
  console.log("스크립트 끝\n");
}

const f = function () {
  try {
    let n = Math.random();

    if (n > 0.5) {
      a.a;
    }

    console.log(n);
    return n;
  } catch (error) {
    console.error(error);
    return 0;
  } finally {
    // return 관계없이 무조건 실행
    console.log("스크립트 끝");
    return -1;
  }
  // return으로 인해 실행 x
  console.log("이거는 실행안함");
};

f();
