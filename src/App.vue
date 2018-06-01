<template>
  <div>
    <my-header></my-header>
    <div class="container-fluid">
    <div class="row">
      <my-left></my-left>
      <my-content></my-content>
    </div>
  </div>
  </div>
</template>

<script>
import MyHeader from '@/components/myheader'
import MyLeft from '@/components/myleft'
import MyContent from '@/view/mycontent'
export default {
  name: 'app',
  components: {MyContent, MyLeft, MyHeader}
}
</script>

<style>

</style>
