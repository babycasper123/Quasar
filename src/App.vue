<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Portalia </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawerLeft" side="left" bordered>
      <q-list bordered>
        <q-expansion-item
          group="somegroup"
          label="User portal"
          default-opened
          header-class="text-primary"
        >
          <router-link to="/">
            <q-item clickable v-ripple :inset-level="1.25">
              <q-item-section class="">Users</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/new-user">
            <q-item clickable v-ripple :inset-level="1.25">
              <q-item-section class="">New user</q-item-section>
            </q-item>
          </router-link>
        </q-expansion-item>
      </q-list>
      <q-list bordered>
        <q-expansion-item group="somegroup" label="Shop" default-opened header-class="text-primary">
          <router-link to="/shop">
            <q-item clickable v-ripple :inset-level="1.25">
              <q-item-section class="">Grocery</q-item-section>
            </q-item>
          </router-link>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="drawerRight" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-md" />
    </q-page-container>
    <!-- 
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()
const drawerLeft = ref(false)
const drawerRight = ref(false)
const toggleRightDrawer = () => {
  drawerRight.value = !drawerRight.value
}
const toggleLeftDrawer = () => {
  drawerLeft.value = !drawerLeft.value
}
const allRoutes = router.getRoutes()

onMounted(() => {
  console.log(JSON.stringify(allRoutes))
})
</script>
