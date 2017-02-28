// appinstall.js

var installApp = function(url){
  var request = window.navigator.mozApps.install(url);
  request.onsuccess = function () {
  // 戻り値の App オブジェクトを保存
    var appRecord = this.result;
    alert('インストール成功！');
  };

  request.onerror = function () {
    // DOMError オブジェクトからエラー情報を表示
    alert('インストール失敗、エラー: ' + this.error.name);
  };	
};



