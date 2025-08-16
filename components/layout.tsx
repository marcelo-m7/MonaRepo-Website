"use client"

import type React from "react"

import Header from "./header"
import Footer from "./footer"
import BackToTop from "./back-to-top"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
