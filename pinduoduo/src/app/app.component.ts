import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pinduoduo';
  topMenus: TopMenu[] = [
    { title: '热门', link: '' },
    { title: '男装', link: '' },
    { title: '百货', link: '' },
    { title: '运动', link: '' },
    { title: '汽车', link: '' },
    { title: '水果', link: '' },
    { title: '电脑', link: '' },
    { title: '内衣', link: '' },
    { title: '家装', link: '' },
    { title: '母婴', link: '' },
    { title: '美妆', link: '' },
    { title: '家具', link: '' },
  ];
  imageSliders: ImageSlider[] = [
    {
      imageUrl:
        'https://www.northeastern.edu/graduate/blog/wp-content/uploads/2016/08/Online-Learning-Social-1.jpg',
      link: '',
      caption: '',
    },
    {
      imageUrl:
        'https://www.northeastern.edu/graduate/blog/wp-content/uploads/2016/08/Online-Learning-Social-1.jpg',
      link: '',
      caption: '',
    },
    {
      imageUrl: '',
      link: '',
      caption: '',
    },
    {
      imageUrl: '',
      link: '',
      caption: '',
    },
  ];
  handleTabSelected(menu: TopMenu) {
    console.log(menu);
  }
}
