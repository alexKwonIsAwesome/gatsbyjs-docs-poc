import { MenuItemType } from 'oah-ui';

// NOTE: children을 활용하여 서브 메뉴를 구성함
const items: MenuItemType[] = [
  {
    title: 'Home Page',
    children: [
      {
        title: 'Image test',
        url: '/#image-test',
      },
      {
        title: 'blockquote',
        url: '/#blockquote',
      },
      {
        title: 'Links',
        url: '/#links',
      },
      {
        title: 'MD Card',
        url: '/#md-card',
      },
      {
        title: 'Tabs',
        url: '/#tabs',
      },
      {
        title: 'OAH UI',
        url: '/#oah-ui',
      },
      {
        title: 'Add more pages',
        url: '/#add-more-pages',
      },
      {
        title: 'Make React component examples',
        url: '/#make-react-component-examples',
      },
    ],
  },
  {
    title: 'k8s Git Page',
    children: [
      {
        title: 'Dockerizing',
        url: '/quickGuide/#dockerizing',
      },
      {
        title: 'Image 저장소 준비',
        url: '/quickGuide/#image-저장소-준비',
      },
      {
        title: 'k8s cluster 확인',
        url: '/quickGuide/#k8s-cluster-확인',
      },
      {
        title: 'Log 연동',
        url: '/quickGuide/#log-연동',
      },
      {
        title: 'ndeploy 연동',
        url: '/quickGuide/#ndeploy-연동',
      },
      {
        title: '모니터링툴로 배포 확인',
        url: '/quickGuide/#모니터링툴로-배포-확인',
      },
      {
        title: 'Log 확인',
        url: '/quickGuide/#log-확인',
      },
    ],
  },
];

export default items;
