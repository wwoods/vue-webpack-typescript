<template>
.container.content
  .row
    .content.col-md4
      h1
        strong Thank you for using #[span.text-primary.package \{{package}}]
      p Project running in #[strong.mode \{{mode}} mode]
      p Follow on #[a(:href="repo") GitHub].
</template>
<style scoped>
.content {h1 {
    text-align: center;
}}
</style>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
})
export default class HomeComponent extends Vue {
    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV || 'NO_ENV';
}
</script>
