import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { Clock, ChevronLeft, ChevronRight, MapPin, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

const hotels = [
  {
    id: 1,
    name: 'Belle Maison Parosand Danang',
    type: 'Senior Deluxe Room',
    price: '1.600.000',
    image: '/assets/hotels/parosanddanang.png',
    link: 'https://parosanddanang.com/room/senior-deluxe-room/',
  },
  {
    id: 2,
    name: 'Peninsula Hotel Danang',
    type: 'Deluxe City King',
    price: '1.800.000',
    image: '/assets/hotels/peninsulahotel.png',
    link: 'https://peninsulahotel.vn/deluxe-city-king',
  },
  {
    id: 3,
    name: 'The Nalod Da Nang',
    type: 'Deluxe Ocean Room',
    price: '1.550.000',
    image: '/assets/hotels/nalod.png',
    link: 'https://nalod.com.vn/deluxe-ocean-room',
  },
  {
    id: 4,
    name: 'Canvas Danang Beach Hotel',
    type: 'Classic King',
    price: '1.300.000',
    image: '/assets/hotels/canvashotel.png',
    link: 'https://canvashotel.com.vn/rooms/11/classic-king',
  },
]

export default function Hotels() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {/* Background Image with Gradient Overlay */}
      <section className="relative flex-grow min-h-[600px] flex flex-col items-center justify-center text-white text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/bg_landing_isirc5.png')`,
            backgroundPosition: 'top',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="z-10 space-y-12 mt-30"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl xl:text-7xl font-medium tracking-[0.2em]"
            style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Handpicked Hotels
          </motion.h1>

          <motion.div
            className="bg-white/20 backdrop-blur-[1px] p-2 rounded-md w-fit mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white text-red_app px-7 py-3 rounded-md flex items-center gap-3 shadow-lg">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-bold">4-6th Dec, 2026</span>
              </div>

              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-7 py-3 rounded-md flex items-center gap-3 shadow-lg">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-bold">Da Nang, Viet Nam</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase mb-4">
              Handpicked Hotels
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                className="group overflow-hidden border border-slate-200 shadow-sm rounded-3xl bg-white transition-all duration-500 hover:shadow-xl cursor-pointer"
                onClick={() => handleRedirect(hotel.link)}
              >
                <CardContent className="p-0 relative aspect-[16/8] overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl">
                      <ExternalLink className="w-5 h-5 text-red_app" />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col p-6 items-start">
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
                    {hotel.type}
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red_app transition-colors">
                    {hotel.name}
                  </h3>

                  <div className="w-full h-[1px] bg-slate-100 mb-5" />

                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                        Starts from
                      </p>
                      <p className="text-lg font-bold text-red_app">
                        {hotel.price} VNĐ{' '}
                        <span className="text-[12px] text-slate-400 font-normal">/ night</span>
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      className="rounded-xl border-red-200 text-red_app font-semibold px-6 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="hidden md:flex gap-1.5">
              {[0.3, 0.5, 0.7, 1].map((op, i) => (
                <ChevronLeft
                  key={i}
                  className="w-6 h-6 text-red_app rotate-180"
                  style={{ opacity: op }}
                />
              ))}
            </div>

            <Button
              variant={'danger'}
              onClick={() => handleRedirect('https://forms.gle/X3uqCp4YGuasJLrG7')}
              className="px-12 py-7 rounded-full font-black uppercase tracking-widest hover:-translate-y-1 transition-all active:scale-95"
            >
              Make a Reservation
            </Button>

            <div className="hidden md:flex gap-1.5">
              {[1, 0.7, 0.5, 0.3].map((op, i) => (
                <ChevronRight
                  key={i}
                  className="w-6 h-6 text-red_app rotate-180"
                  style={{ opacity: op }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
