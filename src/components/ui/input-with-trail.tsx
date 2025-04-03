import React, { useState } from 'react';
import { BorderTrail } from './border-trail';

interface InputWithTrailProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const InputWithTrail: React.FC<InputWithTrailProps> = ({
  label,
  error,
  className = '',
  required,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label} {required && '*'}
        </label>
      )}
      
      <div className={`relative ${isFocused ? 'z-10' : ''}`}>
        <input
          id={id}
          className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...props}
        />
        
        {isFocused && (
          <BorderTrail
            className="bg-gradient-to-l from-secondary/60 via-secondary to-secondary/60 dark:from-secondary/80 dark:via-secondary dark:to-secondary/80"
            size={120}
          />
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface TextareaWithTrailProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextareaWithTrail: React.FC<TextareaWithTrailProps> = ({
  label,
  error,
  className = '',
  required,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label} {required && '*'}
        </label>
      )}
      
      <div className={`relative ${isFocused ? 'z-10' : ''}`}>
        <textarea
          id={id}
          className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none resize-none ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...props}
        />
        
        {isFocused && (
          <BorderTrail
            className="bg-gradient-to-l from-secondary/60 via-secondary to-secondary/60 dark:from-secondary/80 dark:via-secondary dark:to-secondary/80"
            size={120}
          />
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface SelectWithTrailProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const SelectWithTrail: React.FC<SelectWithTrailProps> = ({
  label,
  error,
  className = '',
  required,
  id,
  options,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label} {required && '*'}
        </label>
      )}
      
      <div className={`relative ${isFocused ? 'z-10' : ''}`}>
        <select
          id={id}
          className={`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {isFocused && (
          <BorderTrail
            className="bg-gradient-to-l from-secondary/60 via-secondary to-secondary/60 dark:from-secondary/80 dark:via-secondary dark:to-secondary/80"
            size={120}
          />
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};