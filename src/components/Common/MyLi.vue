<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'my-li',
    data() {
        return {

        }
    }
}
</script>


<style scoped>
ul div {
  display: inline-block;
  width: 20%;
  height: 100px;
  text-align: center;
  float: left;
  overflow: hidden;
}
ul p {
    background-image: url(../../assets/bg_index_top.jpg);
    background-repeat: no-repeat;
    background-position-y: -180px;
    background-position-x: -20px;
    display: inline-block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 20px;
    border: solid 2px white;
    color: aliceblue;
    margin-top: -10px;
}
ul p:hover {
    -webkit-transform: scale(1.06);
    -webkit-transition: -webkit-transform .75s cubic-bezier(0,1,.75,1);
    transform: scale(1.06);
    transition: transform .75s cubic-bezier(0,1,.75,1)
}
ul p.gt {
   background-position-x: -240px;
}
ul p.om {
   background-position-x: -460px;
}
ul p.hg{
   background-position-x: -680px;
}
ul p.rb{
   background-position-x: -900px;
}
</style>
