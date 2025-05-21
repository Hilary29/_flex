"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Info, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export type ProductType = {
  id: string
  name: string
  image: string
  alt: string
  price: number
  category: string
  description?: string
}

interface ProductCardProps {
  product: ProductType
  index: number
  onAddToCart: () => void
}

export default function ProductCard({ product, index, onAddToCart }: ProductCardProps) {
  const [showInfo, setShowInfo] = useState(false)

  // Format price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "XAF",
  }).format(product.price)

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative border-2 border-[#1b3d74] rounded-lg overflow-hidden h-full flex flex-col bg-white"
    >
      {/* Category Badge */}
      <Badge className="absolute top-2 left-2 z-10 bg-[#1b3d74]/80 hover:bg-[#1b3d74]" variant="secondary">
        {product.category}
      </Badge>

      {/* Info Button */}
      {product.description && (
        <button
          onClick={() => setShowInfo(true)}
          className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full hover:bg-white transition-colors"
          aria-label={`Show information about ${product.name}`}
        >
          <Info className="h-5 w-5 text-[#1b3d74]" />
        </button>
      )}

      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center p-6 min-h-[150px]">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.alt}
          width={70}
          height={70}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-[#1b3d74]">{product.name}</h3>
          <span className="font-bold">{formattedPrice}</span>
        </div>
        <div className="flex w-full gap-2">
{/*           <Button variant="outline" className="flex-1 border-[#1b3d74] text-[#1b3d74] hover:bg-[#1b3d74]/10">
            {product.name}
          </Button> */}
          <Button className="flex-1 bg-[#1b3d74] hover:bg-[#152f58]" onClick={onAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            PURCHASE
          </Button>
        </div>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/95 flex flex-col p-4 z-20"
        >
          <button onClick={() => setShowInfo(false)} className="self-end p-1" aria-label="Close information">
            <X className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.alt}
              width={60}
              height={60}
              className="object-contain"
            />
            <h3 className="text-lg font-bold text-[#1b3d74]">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-bold text-lg">{formattedPrice}</p>
            <Button
              className="mt-auto bg-[#1b3d74] hover:bg-[#152f58]"
              onClick={() => {
                onAddToCart()
                setShowInfo(false)
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              ADD TO CART
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
