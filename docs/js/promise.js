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

// var result = 'サンプル';

asyncProcess('サンプル').then(
  //成功した時の処理
  response => {
    console.log(response);
  },
  //失敗した時の処理
  error => {
    console.log(`エラー：${error}`);
  }
);

// resolveとrejectはそれぞれ非同期処理の成功と失敗を
// 通知するための関数で、Promiseオブジェクトによって渡されるもの

// thenメソッド
// promise.then(success, failure)
// promise:promiseオブジェクト（ここではasyncProcess）
// success:成功コールバック関数（resolve関数によって呼び出し）
// failure:失敗コールバック関数（reject関数によって呼び出し）
// 'サンプル'という文字列を削除すると結果は「入力値は空です」という結果が返る
