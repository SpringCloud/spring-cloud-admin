import AdminEcharts from './admin-echarts.vue';
import AdminHeader from './admin-header.vue';
import AdminRouter from './admin-router.vue';
import AdminMenu from './admin-menu.vue';
import AdminNav from './admin-nav.vue';
import AdminPanel from './admin-panel.vue';
import AdminTopo from './admin-topo.vue';

const components: Object = {
  AdminEcharts, AdminHeader, AdminRouter, AdminMenu, AdminPanel, AdminNav, AdminTopo,
};
const componentsName: string[] = Object.keys(components);

export default {install: (vue) => {
  componentsName.forEach((i) => {
    vue.component(i, components[i]);
  });
}};
