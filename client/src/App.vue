<template>
  <div class="subapp">
    <app-navbar></app-navbar>
    <router-view class="rw"/>
  </div>
</template>

<script>
import Navbar from '@/components/MasterPage/Navbar';

export default {
  components: {
    'app-navbar': Navbar,
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap');

html{
  height: 100%;
}

body{
  min-height: calc(100vh - 50px);
}

#app, .subapp{
  font-family: 'Domine', serif;
}

.rw{
  margin-top: 50px;
}
</style>
