"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ShoppingCart } from "lucide-react"
import ProductCard, { type ProductType } from "./product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl";

const getProductsData = (
  t: ReturnType<typeof useTranslations>
): ProductType[] => [
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
  const t = useTranslations();
  const productsData = getProductsData(t);

  // Filter products based on search term
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle adding to cart
  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1)
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

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#373839] mb-3">
          {t("Tech.Title")}
        </h2>
        <p className="text-lg sm:text-xl text-[#535557] max-w-3xl mx-auto">
          {t("Tech.Subtitle")}
        </p>
      </motion.div>

      <div className="hidden  flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for accessories..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#1b3d74] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found matching your search.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("")
            }}
          >
            Reset Search
          </Button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onAddToCart={handleAddToCart} />
          ))}
        </motion.div>
      )}

      {/* Additional section for special offers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-4 text-center">{t("Tech.Special_Student_Offers")}</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1 max-w-xs">
            <h4 className="font-medium text-[#1b3d74]">{t("Tech.Student_Discount")}</h4>
            <p className="text-sm text-gray-600 mt-2">{t("Tech.Student_Discount_Description")}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1 max-w-xs">
            <h4 className="font-medium text-[#1b3d74]">{t("Tech.Bundle_Deals")}</h4>
            <p className="text-sm text-gray-600 mt-2">{t("Tech.Bundle_Deals_Description")}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1 max-w-xs">
            <h4 className="font-medium text-[#1b3d74]">{t("Tech.Free_Delivery")}</h4>
            <p className="text-sm text-gray-600 mt-2">{t("Tech.Free_Delivery_Description")}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
