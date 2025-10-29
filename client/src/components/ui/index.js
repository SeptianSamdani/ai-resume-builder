// client/src/components/ui/index.js

import { theme } from '../../config/theme';

// ==================== BUTTON COMPONENT ====================
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 active:scale-95',
    secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:scale-95',
    outline: 'border-2 border-black text-black bg-transparent hover:bg-black hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:scale-95',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

// ==================== INPUT COMPONENT ====================
export const Input = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  icon,
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full px-4 py-2.5 
            ${icon ? 'pl-10' : ''}
            border rounded-lg 
            text-gray-900 placeholder-gray-400
            focus:ring-2 focus:ring-gray-900 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

// ==================== TEXTAREA COMPONENT ====================
export const Textarea = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  rows = 4,
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`
          w-full px-4 py-2.5 
          border rounded-lg 
          text-gray-900 placeholder-gray-400
          focus:ring-2 focus:ring-gray-900 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          resize-none
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

// ==================== CARD COMPONENT ====================
export const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  ...props 
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-200
        ${paddings[padding]}
        ${hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// ==================== BADGE COMPONENT ====================
export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-black text-white',
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-amber-100 text-amber-700',
    info: 'bg-blue-100 text-blue-700',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {children}
    </span>
  );
};

// ==================== MODAL COMPONENT ====================
export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  size = 'md',
  className = '' 
}) => {
  if (!isOpen) return null;
  
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`
          bg-white rounded-2xl shadow-2xl w-full ${sizes[size]} 
          transform transition-all ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
        )}
        <div className="px-6 py-4">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== TOOLTIP COMPONENT ====================
export const Tooltip = ({ children, content, position = 'top' }) => {
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };
  
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`
          absolute ${positions[position]} 
          px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 whitespace-nowrap z-50
          pointer-events-none
        `}
      >
        {content}
      </div>
    </div>
  );
};

// ==================== ALERT COMPONENT ====================
export const Alert = ({ 
  children, 
  variant = 'info', 
  title,
  onClose,
  className = '' 
}) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };
  
  return (
    <div
      className={`
        relative p-4 rounded-lg border
        ${variants[variant]} ${className}
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-1">{title}</h4>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

// ==================== DIVIDER COMPONENT ====================
export const Divider = ({ 
  text, 
  className = '', 
  orientation = 'horizontal' 
}) => {
  if (orientation === 'vertical') {
    return <div className={`w-px h-full bg-gray-200 ${className}`} />;
  }
  
  if (text) {
    return (
      <div className={`relative flex items-center ${className}`}>
        <div className="flex-grow border-t border-gray-200" />
        <span className="flex-shrink mx-4 text-sm text-gray-500">{text}</span>
        <div className="flex-grow border-t border-gray-200" />
      </div>
    );
  }
  
  return <hr className={`border-gray-200 ${className}`} />;
};

// ==================== SPINNER COMPONENT ====================
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };
  
  return (
    <div
      className={`
        ${sizes[size]} rounded-full 
        border-gray-200 border-t-black
        animate-spin ${className}
      `}
    />
  );
};

// ==================== SWITCH COMPONENT ====================
export const Switch = ({ 
  checked, 
  onChange, 
  label, 
  disabled = false,
  className = '' 
}) => {
  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <div
          className={`
            w-11 h-6 rounded-full
            peer-checked:bg-black bg-gray-300
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            transition-colors duration-300
          `}
        />
        <div
          className={`
            absolute left-1 top-1 w-4 h-4 bg-white rounded-full
            peer-checked:translate-x-5
            transition-transform duration-300
          `}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
};

// ==================== SELECT COMPONENT ====================
export const Select = ({ 
  label, 
  options = [], 
  error, 
  className = '',
  placeholder = 'Select an option',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-2.5 
          border rounded-lg 
          text-gray-900 bg-white
          focus:ring-2 focus:ring-gray-900 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
          ${className}
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};