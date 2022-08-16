import Vue from 'vue'

import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Col, Row } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';

Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);