<template>
  <div class="qm-chat-cursor" />
</template>

<style>
.qm-chat-cursor {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 20px;
}

.qm-chat-cursor::before {
  width: 12px;
  height: 12px;
  background-image: url(https://qm-cloud.oss-cn-chengdu.aliyuncs.com/test/img/gif/ezgif-34ef22d8942f84.png);
  background-size: cover;
  content: '';
}
</style>
