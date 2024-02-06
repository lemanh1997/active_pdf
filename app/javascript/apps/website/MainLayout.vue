<template>
    <div class="container">
        <div class="header-bar">
            <MainMenu />
        </div>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import MainMenu from './MainMenu.vue'

export default {
    components: {
        MainMenu,
    },
    data() {
        return {}
    },
    methods: {
        goTo(item) {
            this.$router.push({ name: item.routeName })
        },
    },
}
</script>

<style scoped>
.container {
    margin: 0;
    padding: 0;
}
</style>
