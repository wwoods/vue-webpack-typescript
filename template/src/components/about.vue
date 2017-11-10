<template>
.container.content
  .row
    .content.col-md-4
      h1 #[strong This is the about page]
    p Make sure to follow the project on #[a.repo-link(:href="repo") GitHub] to stay up-to-date.
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import {Logger} from '../util/log';

@Component({
})
export default class AboutComponent extends Vue {

    protected logger: Logger;
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));
    }
}
</script>

