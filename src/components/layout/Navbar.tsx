'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  CaretDown,
  Code,
  Drop,
  GearSix,
  Handshake,
  List,
  WifiHigh,
  X,
  type Icon,
} from '@phosphor-icons/react'
import { NAV_ITEMS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'

/** Ikon dropdown — satu keluarga (Phosphor), blueprint §14. */
const MENU_ICONS: Record<string, Icon> = {
  Drop,
  WifiHigh,
  GearSix,
  Code,
  Handshake,
}

/**
 * Route yang hero-nya bergaya gelap. Di sini header boleh transparan
 * saat berada di puncak halaman. Route lain selalu navy solid supaya
 * kontras logo dan menu tetap aman.
 */
const DARK_HERO_ROUTES = ['/', '/about', '/clients', '/contact', '/products', '/services']

function hasDarkHero(pathname: string) {
  return DARK_HERO_ROUTES.some((r) => (r === '/' ? pathname === '/' : pathname.startsWith(r)))
}

type NavItem = (typeof NAV_ITEMS)[number]
type NavGroup = Extract<NavItem, { children: readonly unknown[] }>

function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

/**
 * Header global — blueprint §10.
 *
 * Menu punya lebih dari satu dropdown (Produk dan Layanan), jadi state-nya
 * menyimpan label menu yang sedang terbuka, bukan boolean per menu. Dengan
 * begitu membuka satu dropdown otomatis menutup yang lain.
 */
export default function Navbar() {
  const pathname = usePathname()
  const reduce = useReducedMotion()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)

  const navRef = useRef<HTMLUListElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const transparent = hasDarkHero(pathname) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup semua panel ketika pindah halaman
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileMenu(null)
  }, [pathname])

  // Blueprint §10.3 — kunci scroll body saat drawer terbuka
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  // Escape menutup dropdown dan drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpenMenu(null)
      setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Klik di luar daftar menu menutup dropdown yang terbuka
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }, [])

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'border-b border-white/10 bg-surface-dark/95 backdrop-blur-md'
      }`}
    >
      <Container>
        <nav
          aria-label="Navigasi utama"
          className="flex h-[var(--header-h)] items-center justify-between gap-4"
        >
          <Logo tone="dark" />

          {/* ── Desktop ── */}
          <ul ref={navRef} className="hidden items-center gap-0.5 lg:flex">
            {NAV_ITEMS.map((item) => {
              if (isGroup(item)) {
                const expanded = openMenu === item.label
                const active = isActive(item.href)

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                      className={`relative flex items-center gap-1.5 rounded-md px-3 py-2 font-body text-body-sm transition-colors ${
                        active ? 'font-semibold text-white' : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <CaretDown
                        size={13}
                        weight="bold"
                        className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                      />
                      {active && <ActiveMarker />}
                    </button>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 top-full w-[22rem] overflow-hidden rounded-lg border border-white/12 bg-surface-dark p-2 shadow-dropdown"
                        >
                          <ul>
                            {item.children.map((child) => {
                              const ChildIcon = MENU_ICONS[child.icon] ?? Drop
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-white/8"
                                  >
                                    <span
                                      aria-hidden
                                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-blue-soft"
                                    >
                                      <ChildIcon size={17} />
                                    </span>
                                    <span>
                                      <span className="block font-heading text-body-sm font-semibold text-white">
                                        {child.label}
                                      </span>
                                      <span className="mt-0.5 block font-body text-body-sm leading-snug text-text-inverse-muted">
                                        {child.desc}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>

                          <div className="mt-1 border-t border-white/10 pt-1">
                            <Link
                              href={item.href}
                              className="block rounded-md px-3 py-2.5 font-body text-body-sm font-semibold text-brand-blue-soft transition-colors hover:bg-white/8"
                            >
                              {item.hubLabel} →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`relative block rounded-md px-3 py-2 font-body text-body-sm transition-colors ${
                      isActive(item.href)
                        ? 'font-semibold text-white'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && <ActiveMarker />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href="/contact" size="default">
              Mulai Diskusi
            </Button>
          </div>

          {/* ── Toggle mobile ── */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="tap-target -mr-2 flex items-center justify-center rounded-md text-white lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </nav>
      </Container>

      {/* ── Drawer mobile ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="on-dark fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto border-t border-white/10 bg-surface-dark lg:hidden"
          >
            <Container className="py-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  if (isGroup(item)) {
                    const expanded = mobileMenu === item.label
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => setMobileMenu((v) => (v === item.label ? null : item.label))}
                          aria-expanded={expanded}
                          className="tap-target flex w-full items-center justify-between rounded-md px-3 py-3 font-body text-body font-medium text-white"
                        >
                          {item.label}
                          <CaretDown
                            size={15}
                            weight="bold"
                            className={`transition-transform duration-200 ${
                              expanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {expanded && (
                          <ul className="ml-3 space-y-0.5 border-l border-white/12 pl-3">
                            {item.children.map((child) => {
                              const ChildIcon = MENU_ICONS[child.icon] ?? Drop
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="tap-target flex items-center gap-3 rounded-md px-3 py-2.5 font-body text-body-sm text-white/80"
                                  >
                                    <ChildIcon size={17} className="shrink-0 text-brand-blue-soft" />
                                    {child.label}
                                  </Link>
                                </li>
                              )
                            })}
                            <li>
                              <Link
                                href={item.href}
                                className="tap-target flex items-center rounded-md px-3 py-2.5 font-body text-body-sm font-semibold text-brand-blue-soft"
                              >
                                {item.hubLabel} →
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    )
                  }

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={`tap-target flex items-center gap-2.5 rounded-md px-3 py-3 font-body text-body ${
                          isActive(item.href) ? 'font-semibold text-white' : 'text-white/80'
                        }`}
                      >
                        {isActive(item.href) && (
                          <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-orange" />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* CTA diletakkan setelah seluruh menu — blueprint §10.3 */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <Button href="/contact" size="lg" block>
                  Mulai Diskusi
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/** Penanda active state — diamond oranye kecil (blueprint §10.1). */
function ActiveMarker() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-brand-orange"
    />
  )
}
