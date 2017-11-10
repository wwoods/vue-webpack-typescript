import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

// MUST individually force imports to trigger webpack!
import HomeComponent from './components/home.vue';
import AboutComponent from './components/about.vue';
import ListComponent from './components/list.vue';

const components = {
  './components/home.vue': HomeComponent,
  './components/about.vue': AboutComponent,
  './components/list.vue': ListComponent,
};

// Add hot-loading of each component
if (process.env.ENV === 'development' && module.hot) {
  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  const moduleHotAccept = module!.hot!.accept!.bind(module!.hot);

  for (const id in components) {
    const comp = components[id];
    makeHot(id, comp, moduleHotAccept(id, () => reload(id, require(id))));
  }
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/list',
    component: ListComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
