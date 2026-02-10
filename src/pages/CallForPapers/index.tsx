import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { BellRing, CalendarDays, Clock, Download, Flag, Mail, MapPin, Send } from 'lucide-react'
import { useEffect } from 'react'

const themes = [
  {
    title: 'Social Enterprise & Innovation',
    points: [
      'Social entrepreneurship and inclusive innovation',
      'Technology for social impact',
      'Sustainable and impact-oriented business models',
    ],
  },
  {
    title: 'Tourism, Technology & Intelligence',
    points: [
      'Smart tourism and destination management',
      'Digital transformation in tourism and hospitality',
      'Tourism analytics and technology-driven sustainability',
    ],
  },
]

const publications = [
  {
    name: 'EAI Endorsed Transactions on Industrial Networks and Intelligent Systems',
    metrics: '',
  },
  {
    name: 'EAI Endorsed Transactions on Tourism, Technology and Intelligence',
    metrics: '',
  },
  {
    name: 'Social Enterprise Journal',
    metrics: '',
  },
]

const dates = [
  {
    date: 'Oct 15, 2026',
    label: 'Abstract / Paper Submission Deadline',
    isHighlight: true,
  },
  {
    date: 'Nov 4 - 6, 2026',
    label: 'Notification of Acceptance',
  },
  {
    date: 'Dec 4 - 6, 2026',
    label: 'Event Dates',
  },
]

export default function CallForPapers() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <section className="relative flex-grow min-h-[600px] flex flex-col items-center justify-center text-white text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/bg_landing_isirc3.png')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="z-10 space-y-8 mt-20"
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
            className="text-3xl sm:text-6xl md:text-8xl font-medium tracking-[0.05em]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Call for Papers
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            International Conference on Culture, Tourism and Hospitality (ICCTH)
          </motion.p>

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

      {/* About The Conference Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-red_app" />
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">About ARN</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="col-span-1 lg:col-span-5 flex flex-col items-center space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative w-full shadow-2xl rounded-lg overflow-hidden border border-gray-100">
                <img
                  src="/assets/ICCTH_poster.png"
                  alt="ICCTH 2026 Call for Papers"
                  className="w-full h-auto object-contain"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full"
              >
                <Button
                  className="px-12 py-6 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 w-full"
                  variant={'danger'}
                  onClick={() => window.open('/assets/ICCTH-Call-for-Papers.pdf', '_blank')}
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-1 lg:col-span-7 flex flex-col space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="text-gray-700 space-y-4 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p>
                  <strong>
                    Academic Research Network (ARN) – An Multidisciplinary International Conference
                  </strong>
                </p>
                <p>
                  ARN 2026 is organized as an <strong>academic research platform</strong>that brings
                  together scholars, editors, and researchers to present, discuss, and further
                  develop high-quality research aligned with <strong>Multidisciplinary.</strong>
                </p>
                <p>
                  The <strong>Academic Research Network (ARN)</strong>serves as a collaborative
                  scholarly platform supporting rigorous academic exchange and journal-oriented
                  research development across ASEAN and global contexts.
                </p>
              </motion.div>

              {/* Thông tin địa điểm & Website */}
              <motion.div
                className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-800">
                  <span className="font-bold">ARN 2026 focuses on:</span>
                </p>
                <p className="text-gray-800">
                  <span className="text-red_app">•</span> Scholarly paper presentations
                </p>
                <p className="text-gray-800">
                  <span className="text-red_app">•</span> Thematic academic sessions
                </p>
                <p className="text-gray-800">
                  <span className="text-red_app">•</span> Constructive academic feedback
                </p>
                <p className="text-gray-800">
                  <span className="text-red_app">•</span> Pathways toward international journal
                  publication
                </p>
              </motion.div>

              {/* Submission Categories */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-gray-800">Submission Categories:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                  {[
                    'Full Papers',
                    'Extended Abstracts (250 - 800 words)',
                    'Work-in-Progress Papers (500 - 1,000 words)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-red_app" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-8 bg-red_app" />
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
              Important Dates
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`mb-6 p-4 rounded-full transition-colors ${
                    item.isHighlight
                      ? 'bg-red_app text-white shadow-md'
                      : 'bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-red_app'
                  }`}
                >
                  {index === 0 ? (
                    <Send className="w-6 h-6" />
                  ) : index === 1 ? (
                    <BellRing className="w-6 h-6" />
                  ) : (
                    <CalendarDays className="w-6 h-6" />
                  )}
                </div>

                <span
                  className={`text-2xl font-black mb-2 tracking-tight ${
                    item.isHighlight ? 'text-red_app' : 'text-gray-800'
                  }`}
                >
                  {item.date}
                </span>

                <p className="text-gray-500 font-medium text-sm uppercase tracking-wide leading-relaxed">
                  {item.label}
                </p>

                {item.isHighlight && (
                  <div className="mt-4 px-3 py-1 bg-red-100 text-red_app text-[10px] font-bold rounded-full animate-pulse">
                    UPCOMING
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic of interest include Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-8 bg-red_app" />
            <h2 className="text-3xl font-extrabold text-red_app tracking-tight uppercase">
              Topic of interest include
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-red_app text-xl font-bold leading-snug min-h-[3rem]">
                  {theme.title}
                </h3>

                <div className="w-full h-px bg-gray-200" />

                <ul className="space-y-3 flex-grow">
                  {theme.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="text-red_app flex-shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Publication Options Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-red_app" />
              <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
                Publication Options (SSCI)
              </h2>
            </div>
            <p className="text-xl font-bold text-gray-800">
              ARN 2026 is academically supported by the following peer-reviewed journals:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {publications.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="absolute inset-0 bg-red_app rounded-xl -translate-x-1 translate-y-1" />

                <div className="relative bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col justify-center min-h-[140px] shadow-sm">
                  <h3 className="text-gray-700 font-medium text-sm md:text-base leading-snug mb-3">
                    {item.name}
                  </h3>
                  {item.metrics && <p className="text-red_app font-bold text-sm">{item.metrics}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Submission Info Section */}
      <section className="bg-gray-100 py-24 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Cột 1: Thông tin Submission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-red_app" />
                <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
                  Submission & Review
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                All submissions will undergo a rigorous{' '}
                <span className="text-red_app font-semibold">double-blind peer-review</span> process
                to ensure academic quality and global relevance. We welcome original research that
                contributes to the field's advancement.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-fit">
                <Button
                  variant={'danger'}
                  className="px-10 py-7 rounded-full font-bold shadow-2xl transition-all flex items-center gap-3 uppercase tracking-wider text-lg"
                  onClick={() => window.open('https://www.iccth.org/submit', '_blank')}
                >
                  <Send className="w-6 h-6" />
                  Submit Paper Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Cột 2: Contact Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decor nền */}

              <div className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <MapPin className="text-red_app w-6 h-6" />
                  Contact Info
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-red-50 p-3 rounded-xl text-red_app">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold">Email Secretariat</p>
                      <a
                        href="mailto:p2a_arn@passagetoasean.org"
                        className=" font-medium text-gray-700 hover:text-red_app"
                      >
                        p2a_arn@passagetoasean.org
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-red-50 p-3 rounded-xl text-red_app">
                      <Flag className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold">Location</p>
                      <p className=" font-medium text-gray-700 hover:text-red_app">
                        ARN 2026 – Da Nang, Vietnam
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 italic text-sm">
                    "We look forward to your scholarly contributions and welcoming you to beautiful
                    Da Nang."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="bg-white py-20 px-6 md:px-20 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-red_app leading-[1.1]">
            ISIRC 2026 PAYMENT
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mt-2">Complete registration payment</p>
        </div>

        {/* Main Payment Form Card */}
        <Card className="w-full max-w-3xl bg-white shadow-md border rounded-[2rem] p-4 md:p-10">
          <CardContent className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-700">Personal details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="address">
                    Address line
                  </Label>
                  <Input id="address" placeholder="P.o.Box 1223" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="city">
                    City
                  </Label>
                  <Input id="city" placeholder="Arusha" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="state">
                    State
                  </Label>
                  <Input id="state" placeholder="Arusha, Tanzania" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="postal">
                    Postal code
                  </Label>
                  <Input id="postal" placeholder="9090" className="h-12" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-700">Payment methods</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                  alt="Visa"
                  className="h-6 opacity-80"
                />
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt="Stripe"
                  className="h-6 opacity-80"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-6 opacity-80"
                /> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-8 opacity-80"
                />
                {/* <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                  alt="GPay"
                  className="h-6 opacity-80"
                /> */}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-700">Card details</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="cardname">
                    Cardholder's name
                  </Label>
                  <Input id="cardname" placeholder="Seen on your card" className="h-12 w-full" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="cardnumber">
                    Card number
                  </Label>
                  <Input id="cardnumber" placeholder="Seen on your card" className="h-12 w-full" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="expiry">
                      Expiry
                    </Label>
                    <Input id="expiry" placeholder="20/23" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-blue-900/60 font-semibold" htmlFor="cvc">
                      CVC
                    </Label>
                    <Input id="cvc" placeholder="654" className="h-12" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant={'danger'}
                className="w-full h-12 rounded-lg text-md font-bold transition-all"
              >
                Next
              </Button>
            </div>

            <div className="flex justify-center gap-6 text-[10px] md:text-xs text-gray-500 font-medium">
              <a href="#" className="hover:text-gray-800">
                Instructions
              </a>
              <a href="#" className="hover:text-gray-800">
                License
              </a>
              <a href="#" className="hover:text-gray-800">
                Terms of Use
              </a>
              <a href="#" className="hover:text-gray-800">
                Privacy
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
