//非同期処理を関数としてまとめる
//asyncProcess関数が戻すのがPromiseオフジェクト
// Promiseは非同期処理の状態を監視するためのオブジェクトで、
// コンストラクタには実行するべき非同期処理を関数リテラル、またはアロー関数として記述
// Promiseコンストラクタ
// new Promise((resolve, reject) => { statements })
// resolve:処理の成功を通知するための関数
// reject:処理の失敗を通知するための関数
// statements:処理本体
function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //引数valueが未定義かどうかによって成否を判定
      if (value) {
        resolve(`入力値：${value}`);
      } else {
        reject('入力は空です');
      }
    },500);
  });
}

const first = '一つ目の処理';
const second = '二つ目の処理';
const third = '三つ目の処理';

Promise.race([
  asyncProcess(first),
  asyncProcess(second),
  asyncProcess(third)
])
.then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`エラー：${error}`);
  }
)
// Promise.all(promises)
// promises: 監視するPromiseオブジェクト群（配列）

//Promise.allメソッドは引数で渡された全てのPromiseオブジェクトが
// resolve（成功）した時にだけthenメソッドのコールバックを実行する
// その際、引数responseには全てのPromiseから渡された結果値が配列として渡される
// Promiseオブジェクトのいずれかがreject（失敗）した時には失敗のコールバックが実行
