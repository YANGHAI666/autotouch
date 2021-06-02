
function callMobile() {
  at.keyDown(KEY_TYPE.HOME_BUTTON);
  sleepFunc(0.1)
  at.keyUp(KEY_TYPE.HOME_BUTTON)
  at.openURL("tel://17722497001")
  sleepFunc(1);
  tap(375, 1100);
  sleepFunc(15);
  tap(375, 1100);

};
wakeUp()
function tap(x, y) {
  at.touchDown(0, x + Math.floor(Math.random() * 10), y + Math.floor(Math.random() * 10))
  sleepFunc(0.3)
  at.touchUp(0, x + Math.floor(Math.random() * 10), y + Math.floor(Math.random() * 10))
};

function wakeUp() {
  at.keepAutoTouchAwake(true)
  at.toast("唤醒机器")
  at.keyDown(KEY_TYPE.HOME_BUTTON);
  sleepFunc(0.1)

  at.keyUp(KEY_TYPE.HOME_BUTTON)
  sleepFunc(1)
  at.keyDown(KEY_TYPE.HOME_BUTTON);
  sleepFunc(0.1)

  at.keyUp(KEY_TYPE.HOME_BUTTON);
  sleepFunc(3);
  at.appRun("com.laiwang.DingTalk");
  sleepFunc(2);
  at.appKill("com.laiwang.DingTalk");
  sleepFunc(2);
  at.appKill("com.laiwang.DingTalk");


  sleepFunc(3);
  startDingTalk()
}
function startDingTalk() {
  at.toast("唤醒钉钉")

  at.openURL("dingtalk://dingtalkclient/page/link?url=https://attend.dingtalk.com/attend/index.html")
  sleepFunc(15)

  //tap(375,900)
  at.toast("选择公司")

  tap(375, 1130)
  sleepFunc(15);
  at.toast("点击打卡")
  tap(375, 720);
  sleepFunc(5);

  callMobile()
}
function sleepFunc(time) {
  at.usleep(time * 1000000);
}
