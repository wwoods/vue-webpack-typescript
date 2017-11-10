<template>
nav.navbar.navbar-default.navbar-fixed-top(v-bind:class="{'navbar-inverse': inverted}")
  .container-fluid
    .navbar-header
      button.navbar-toggle.collapsed(type="button" @click="showNavbar=!showNavbar" aria-expanded="false" aria-controls="navbar")
        span.sr-only Toggle Navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href="#") vue-webpack-typescript

    collapse.navbar-collapse(id="navbar" v-model="showNavbar")
      ul.nav.navbar-nav
        li(v-for="link in links" v-bind:class="{'active': $route.path == link.path}")
          router-link(v-bind:to="link.path") \{{link.name}}
</template>
<script>
import { Collapse, Dropdown } from 'uiv';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Logger } from '../util/log';

export class Link {
    name: string;
    path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}

@Component({
  components: {
    collapse: Collapse,
  }
})
export default class NavbarComponent extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  showNavbar = false;

  object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Home', '/'),
    new Link('About', '/about'),
    new Link('List', '/list')
  ];

  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}
</script>

