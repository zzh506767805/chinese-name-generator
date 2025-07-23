'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { KeywordPage } from '../types'

interface NavbarClientProps {
  keywordPages: KeywordPage[]
  nameGeneratorText: string
}

export default function NavbarClient({ keywordPages, nameGeneratorText }: NavbarClientProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base flex items-center"
        aria-expanded={showDropdown}
        aria-label={nameGeneratorText}
      >
        {nameGeneratorText}
        <svg className={`ml-1 h-5 w-5 transition-transform ${showDropdown ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* 下拉菜单 */}
      {showDropdown && (
        <div 
          className="absolute right-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1 grid grid-cols-1 gap-1">
            {keywordPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
                role="menuitem"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 