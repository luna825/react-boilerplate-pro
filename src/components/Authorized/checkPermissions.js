import { CURRENT } from './renderAuthorize';

const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // 没有判定权限，默认查看所有
  if (!authority) {
    return target;
  }

  // 数组处理
  if (Array.isArray(authority)) {
    if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }
    if (Array.isArray(currentAuthority)) {
      for (let i = 0; i < currentAuthority.length; i += 1) {
        const element = currentAuthority[i];
        if (authority.indexOf(element) >= 0) {
          return target;
        }
      }
    }
    return Exception;
  }

  // string 处理
  if (typeof authority === 'string') {
    if (authority === currentAuthority) {
      return target;
    }
    if (Array.isArray(currentAuthority)
      && currentAuthority.indexOf(authority) >= 0) {
      return target;
    }
    return Exception;
  }
  throw new Error('unsupported parameters');
};

export { checkPermissions };
const check = (authority, target, Exception) =>
  checkPermissions(authority, CURRENT, target, Exception);

export default check;
