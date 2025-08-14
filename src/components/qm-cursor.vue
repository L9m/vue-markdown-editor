<template>
  <div class="qm-chat-cursor" />
</template>

<style>
.qm-chat-cursor {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 20px
}

.qm-chat-cursor::before {
    width: 12px;
    height: 12px;
    background-image: url(https://gw.alicdn.com/imgextra/i1/O1CN01qPUtnk1KwvitibrhI_!!6000000001229-54-tps-50-50.apng);
    background-size: cover;
    content: ""
}
</style>