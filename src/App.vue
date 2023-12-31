<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawerLeft" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="drawerRight" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-md"/>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const drawerLeft = ref(false)
const drawerRight = ref(false)
const toggleRightDrawer = () => {
  drawerRight.value = !drawerRight.value
}
const toggleLeftDrawer = () => {
  drawerLeft.value = !drawerLeft.value
}
</script>
