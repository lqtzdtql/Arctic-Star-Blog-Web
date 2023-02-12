const device = navigator.userAgent.toLowerCase();

const env = {
  isMobile: () => /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device),
  isPC: () => !/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(device),
};

export default env;
