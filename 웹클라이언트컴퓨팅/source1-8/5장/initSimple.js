// 함수를 선언합니다.
function print(name, count) {
    // 함수 매개 변수 초기화
    count = count || 1;
    // 함수 본문
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
// 함수를 호출합니다.
print("사과");