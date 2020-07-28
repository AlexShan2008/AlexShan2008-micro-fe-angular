import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';

if (environment.production) {
  enableProdMode();
}

registerMicroApps([
  // {
  //   name: 'react app', // app name registered
  //   entry: '//localhost:7100',
  //   container: '#reactApp',
  //   activeRule: '/react',
  // },
  {
    name: 'vue app',
    entry: '//localhost:7101',
    container: '#vueApp',
    activeRule: '/vue',
  }
]);

// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//   user: 'Alex',
// });

// onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

// setGlobalState({
//   ignore: 'master',
//   user: {
//     name: 'master',
//   },
// });

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/vue');

start(
  {
    prefetch: false // 取消预加载
  }
);

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
