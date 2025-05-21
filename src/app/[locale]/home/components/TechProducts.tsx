"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, Filter, X } from "lucide-react"
import ProductCard, { type ProductType } from "./product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

const getProductsData = (t: ReturnType<typeof useTranslations>): ProductType[] => [
  {
    id: "usb-key",
    name: t("Tech.USB"),
    image: "/key.png",
    alt: "USB key",
    price: 3500,
    category: "storage",
    description: t("Tech.USB_description"),
  },
  {
    id: "laptop",
    name: "LAPTOP",
    image: "/laptop.png",
    alt: "Laptop",
    price: 75000,
    category: "computer",
    description: t("Tech.LAPTOP_description"),
  },
  {
    id: "charger",
    name: "CHARGER",
    image: "/charger.png",
    alt: "Charger",
    price: 10000,
    category: "accessory",
    description: t("Tech.CHARGER_description"),
  },
  {
    id: "mouse",
    name: "MOUSE",
    image: "/MOUSE.png",
    alt: "Mouse",
    price: 3000,
    category: "accessory",
    description: t("Tech.MOUSE_description"),
  },
  {
    id: "keyboard",
    name: "KEYBOARD",
    image: "/EYER.png",
    alt: "Keyboard",
    price: 6000,
    category: "accessory",
    description: t("Tech.KEYBOARD_description"),
  },
]

export default function TechProducts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const t = useTranslations()
  const productsData = getProductsData(t)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Get unique categories
  const categories = Array.from(new Set(productsData.map((product) => product.category)))

  // Filter products based on search term and category
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true

    return matchesSearch && matchesCategory
  })

  // Handle adding to cart
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1)

    // Show a brief animation or notification
    const notification = document.createElement("div")
    notification.className = "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50 animate-fade-in-out"
    notification.textContent = t("Tech.Added_To_Cart")
    document.body.appendChild(notification)

    setTimeout(() => {
      document.body.removeChild(notification)
    }, 2000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header with title and subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b3d74] mb-4">{t("Tech.Title")}</h2>
        <p className="text-lg sm:text-xl text-[#535557] max-w-3xl mx-auto">{t("Tech.Subtitle")}</p>
      </motion.div>

      {/* Search and filters bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="hidden mb-8 sticky top-0 z-10 bg-white/80 backdrop-blur-md py-4 rounded-lg shadow-sm"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Mobile search toggle */}
          {isMobile && (
            <div className="flex w-full justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                aria-label={isSearchVisible ? "Close search" : "Open search"}
              >
                {isSearchVisible ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              <Button variant="outline" className="relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#1b3d74] text-white">{cartCount}</Badge>
                )}
              </Button>
            </div>
          )}

          {/* Search input - visible on desktop or when toggled on mobile */}
          <AnimatePresence>
            {(!isMobile || isSearchVisible) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="relative flex-1 w-full md:max-w-md"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={"Search products..."}
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="flex-shrink-0"
            >
              {"All"}
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex-shrink-0 capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Desktop cart button */}
          {!isMobile && (
            <Button variant="outline" className="relative flex-shrink-0">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Cart</span>
              {cartCount > 0 && <Badge className="absolute -top-2 -right-2 bg-[#1b3d74] text-white">{cartCount}</Badge>}
            </Button>
          )}
        </div>
      </motion.div>

      {/* No results message */}
      {filteredProducts.length === 0 ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center py-16 bg-gray-50 rounded-lg"
        >
          <p className="text-lg text-gray-600 mb-4">{t("Tech.No_Products_Found")}</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory(null)
            }}
          >
            {t("Tech.Reset_Filters")}
          </Button>
        </motion.div>
      ) : (
        /* Products grid */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onAddToCart={handleAddToCart} />
          ))}
        </motion.div>
      )}

      {/* Special offers section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-[#1b3d74] mb-8 text-center">{t("Tech.Special_Student_Offers")}</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Offer 1 */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#1b3d74] font-bold text-xl">%</span>
            </div>
            <h4 className="font-semibold text-xl text-[#1b3d74] mb-2">{t("Tech.Student_Discount")}</h4>
            <p className="text-gray-600">{t("Tech.Student_Discount_Description")}</p>
          </motion.div>

          {/* Offer 2 */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#1b3d74] font-bold text-xl">+</span>
            </div>
            <h4 className="font-semibold text-xl text-[#1b3d74] mb-2">{t("Tech.Bundle_Deals")}</h4>
            <p className="text-gray-600">{t("Tech.Bundle_Deals_Description")}</p>
          </motion.div>

          {/* Offer 3 */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md border border-blue-100"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-6 w-6 text-[#1b3d74]" />
            </div>
            <h4 className="font-semibold text-xl text-[#1b3d74] mb-2">{t("Tech.Free_Delivery")}</h4>
            <p className="text-gray-600">{t("Tech.Free_Delivery_Description")}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
