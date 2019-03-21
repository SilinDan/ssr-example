<template>
    <div>
        <h1>哈哈哈我是{{user}}的个人中心</h1>
        <router-link to="/about">点此了解{{user}}</router-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            user:'蛋蛋'
        }
    }
})
</script>
