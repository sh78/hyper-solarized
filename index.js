/*jshint esversion: 6 */
const colors = {
  lightBlack   : '#002833',
  black        : '#003541',
  lightGreen   : '#586e75',
  lightYellow  : '#657b83',
  lightBlue    : '#839496',
  lightCyan    : '#93a1a1',
  white        : '#eee8d5',
  lightWhite   : '#fdf6e3',
  yellow       : '#b58901',
  lightRed     : '#cb4b16',
  red          : '#dc322f',
  magenta      : '#d33682',
  lightMagenta : '#6c6ec6',
  blue         : '#268bd2',
  cyan         : '#2aa198',
  green        : '#859901'
};

exports.decorateConfig = config => {
  // parse user's conf to get a nice object
  const formatTime = (str) => {
    let obj;
    if (str) {
      let arr = str.split(':').slice(0,2);
      for(let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
      }
      let obj = {
        hours: arr[0],
        minutes: arr[1],
      };
    }
    return obj;
  };

  const lightTime = formatTime(config.solarized.light);
  const darkTime = formatTime(config.solarized.dark);
  // console.info(lightTime, darkTime);

  // cache current time (on decorate)
  const now = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    // seconds: new Date().getSeconds(),
  };

  // default to user's theme, dark if undefined
  let light = config.solarized.lightTheme || false;

  // check for user's settings
  if (lightTime) {
    // decide on light theme
    if (now.hours >= lightTime.hours && now.minutes >= lightTime.minutes) {
      light = true;
      // console.log('light is: ', light);
      // console.log('light time is', lightTime);
    }
  }
  // and again
  if (darkTime) {
    if (now.hours >= darkTime.hours && now.minutes >= darkTime.minutes)  {
      light = false;
      // console.log('light is: ', light);
      // console.log('dark time is', darkTime);
    }
  }

  const backgroundColor = light ? '#fdf6e3' : '#002833';
  const foregroundColor = light ? '#657b83' : '#839496';
  const cursorColor     = light ? '#657b83' : '#839496';
  const splitplaneColor = light ? '#e6dfcb' : '#001f27';
  const tabsColor       = light ? '#e6dfcb' : '#001f27';
  const borderColor     = 'transparent';

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering      : optimizeLegibility;
        font-weight         : 500;
      }
      .tabs_list {
      	border              : 0;
      }
      .tabs_nav {
      	background-color    : ${tabsColor};
      }
      .tab_tab {
        color               : ${foregroundColor};
        background-color    : ${tabsColor};
				border-color        : ${borderColor};
      }
      .tab_tab              : before {
      	border              : 0;
      }
      .tab_tab.tab_active {
        border              : transparent;
        font-weight         : bold;
        color               : #b3b3b3;
        background-color    : ${backgroundColor};
      }
      .splitpane_divider {
      	background-color    : ${splitplaneColor};
      }
    `
  });
};
