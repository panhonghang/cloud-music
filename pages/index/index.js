import {checkStorge} from '../../util/util';

Page({
  data: {
    tabs: [
      {
        title: '推荐',
        subTitle: '描述文案',
        number: '6',
      },
      {
        title: '歌手',
        subTitle: '描述文案描述',
        number: '66',
      },
      {
        title: '排行榜',
        subTitle: '描述',
        number: '99+',
      }
    ],
  },
  tabsNumberChange(e) {
    if (e.detail.value === '1') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
          },
        ],
      });
    } else if (e.detail.value === '2') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
            number: '66',
          },
        ],
      });
    } else if (e.detail.value === '3') {
      this.setData({
        tabs: [
          {
            title: '选项',
            subTitle: '描述文案',
            number: '6',
          },
          {
            title: '选项二',
            subTitle: '描述文案描述',
            number: '66',
          },
          {
            title: 'Tab',
            subTitle: '描述',
            number: '99+',
          },
        ],
      });
    } 
  },
  typeChange(e) {
    if (e.detail.value === 'hasSubTitle') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: true,
      });
    } else if (e.detail.value === 'capsule') {
      this.setData({
        typeCapsule: true,
        typeHasSubTitle: false,
      });
    } else {
      this.setData({
        typeCapsule: false,
        typeHasSubTitle: false,
      });
    }
  },
  plusChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasPlus: false,
      });
    } else {
      this.setData({
        hasPlus: true,
      });
    }
  },
  heightChange(e) {
    if (e.detail.value === 'hasnt') {
      this.setData({
        hasContentHeight: false,
      });
    } else {
      this.setData({
        hasContentHeight: true,
      });
    }
  },
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  onLoad() {
    checkStorge('userInfo').then(
      ()=>{
        // 已经登陆
      },
      ()=>{
      // 未登陆就跳转
      my.navigateTo({
        url: '../login/login'
      });
    })
  },
});