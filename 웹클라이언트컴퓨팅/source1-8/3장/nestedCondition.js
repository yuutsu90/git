let date = new Date();
let hours = date.getHours();
if (hours < 11) {
    console.log("아침 먹을 시간입니다.");
} else {
    if (hours < 15) {
        console.log("점심 먹을 시간입니다.");
    } else {
        console.log("저녁 먹을 시간입니다.");
    }
}