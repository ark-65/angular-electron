import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public activeIndex = 0;

  public navList = [
    { index: 0, name: 'remote-deploy', link: '/remote-deploy' },
    { index: 1, name: 'remote-deploy 2', link: '/remote-deploy' },
    { index: 2, name: 'remote-deploy 3', link: '/remote-deploy' },
    { index: 3, name: 'remote-deploy 4', link: '/remote-deploy' },
  ];
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
}
