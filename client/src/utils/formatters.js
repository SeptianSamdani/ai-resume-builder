// client/src/utils/formatters.js

/**
 * Format date to readable string
 */
export const formatDate = (dateStr, format = 'long') => {
  if (!dateStr) return '';
  
  const date = new Date(dateStr);
  
  if (format === 'long') {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  if (format === 'short') {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  }
  
  return date.toLocaleDateString();
};

/**
 * Format file size to human readable format
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Truncate text with ellipsis
 */
export const truncate = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};