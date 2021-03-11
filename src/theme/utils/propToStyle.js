import { breakpointsMedia } from './breakpointsMedia';

export function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return function subFunc(props) {
    const propValue = props[propName];
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
      });
    }
  };
}
