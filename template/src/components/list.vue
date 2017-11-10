<template>
.container.content
  .row
    .content.col-md-4
      h1 List
      ul
        li(v-for="item of items") \{{item.name}}
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import axios, {AxiosResponse} from 'axios';

interface UserResponse {
    id: string;
    name: string;
}

@Component({
})
export default class ListComponent extends Vue {

    items: UserResponse[] = [];
    private url = 'https://jsonplaceholder.typicode.com/users';
    protected axios;

    constructor() {
      super();
      this.axios = axios;
    }

    mounted() {
        this.$nextTick(() => {
            this.loadItems();
        });
    }

    private loadItems() {
        if (!this.items.length) {
            this.axios.get(this.url).then((response: AxiosResponse) => {
                this.items = response.data;
            }, (error) => {
                console.error(error);
            });
        }
    }
}
</script>
