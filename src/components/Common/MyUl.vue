<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'my-ul',
    data() {
        return {

        }
    }
}
</script>


<style scoped>
ul.recommondList {
  overflow: hidden;
  padding: 0;
}
</style>
