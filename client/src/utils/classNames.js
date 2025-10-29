// client/src/utils/classNames.js

/**
 * Utility function to merge class names conditionally
 * Similar to clsx or classnames library
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};