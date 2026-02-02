import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Clock, Download, MapPin, Send } from 'lucide-react'
import { useEffect } from 'react'

const scheduleData = [
  {
    timing: '09:00 AM – 09:30 AM',
    session: 'Registration & Welcome',
    location: 'Grand Ballroom',
  },
  { timing: '09:30 AM – 09:45 AM', session: 'Networking Tea Break', location: 'Foyer Area' },
  {
    timing: '09:45 AM – 10:30 AM',
    session: 'Opening Plenary Session: Welcome Address & Keynote',
    location: 'Meeting Room',
  },
  { timing: '10:30 AM – 01:00 PM', session: 'Lunch Break', location: 'Restaurant Floor' },
  { timing: '01:30 PM – 04:00 PM', session: 'Session II', location: 'Meeting Room' },
  {
    timing: '04:05 PM – 04:15 PM',
    session: 'Group Photo & Final Networking Session',
    location: 'The Pitch',
  },
  {
    timing: '04:15 PM – 05:00 PM',
    session: 'Closing Address: Reflections & Awards Presentation',
    location: 'Main Exit / Entrance',
  },
]

const themes = [
  {
    title: 'Cultural Tourism & Sustainable Development',
    points: [
      'The role of cultural heritage in tourism',
      'Sustainable tourism practices in cultural sites',
      'Preserving cultural identities in the tourism industry',
    ],
  },
  {
    title: 'Tourism Marketing and Cultural Branding',
    points: [
      'Destination marketing and branding',
      'The role of social media in promoting cultural tourism',
      'Cultural storytelling in tourism campaigns',
    ],
  },
  {
    title: 'Tourism, Cultural Exchange, and Globalization',
    points: [
      'Impact of globalization on local cultures',
      'Cross-border tourism and cultural exchange programs',
      'The influence of international tourism on local economies and communities',
    ],
  },
  {
    title: 'Cultural Tourism & Sustainability',
    points: [
      'Role of cultural heritage in tourism',
      'Sustainable tourism practices in cultural sites',
      'Preserving cultural identities in the tourism industry',
    ],
  },
  {
    title: 'Hospitality and Culture',
    points: [
      'Cultural diversity in hospitality management',
      'The influence of culture on customer service',
      'Cross-cultural communication and tourism services',
    ],
  },
  {
    title: 'Technology & Innovation',
    points: [
      'Digital transformation in tourism and hospitality',
      'Role of VR and AR in enhancing cultural tourism',
      'Smart tourism and the future of cultural experiences',
    ],
  },
]

const publications = [
  {
    name: 'Journal of Hospitality and Tourism Technology (JHTT)',
    metrics: 'SSCI IF=6.9 | CiteScore: 10.3',
  },
  {
    name: 'International Journal of Contemporary Hospitality Management (IJCHM)',
    metrics: 'SSCI IF=9.0 | CiteScore: 18.2',
  },
  {
    name: 'International Journal of Tourism Research (IJTR)',
    metrics: 'SSCI IF=5.7 | CiteScore: 7.9',
  },
  {
    name: 'Journal of Quality Assurance in Hospitality & Tourism (JQAHT)',
    metrics: 'ESCI IF=2.3 | CiteScore: 8.0',
  },
  { name: 'Tourism Management Perspectives (TMP)', metrics: 'SSCI IF=6.9 | CiteScore: 14.9' },
  {
    name: 'Journal of Hospitality and Tourism Insights (JHTI)',
    metrics: 'SSCI IF=4.8 | CiteScore: 8.3',
  },
  { name: 'Book Chapter - Open-access ISBN book by USF M3 Publishing', metrics: '' },
  { name: 'Conference Proceedings - Abstract Publication', metrics: '' },
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
            backgroundImage: `url('/assets/bg_lading_callforpapers.png')`,
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
                <span className="text-lg font-bold"> Feb 24 - 28, 2026</span>
              </div>

              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-7 py-3 rounded-md flex items-center gap-3 shadow-lg">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-bold">Macau, China</span>
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
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
              About The Conference
            </h2>
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
                  The{' '}
                  <strong>
                    International Conference on Culture, Tourism, and Hospitality (ICCTH)
                  </strong>{' '}
                  brings together scholars, industry professionals, and policymakers to discuss the
                  intersection of culture, tourism, and hospitality.
                </p>
                <p>
                  This conference promotes cross-disciplinary dialogue to advance research and
                  practical applications in sustainable development, guest experience, and cultural
                  exchange.
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
                  <span className="font-bold">Official Venue:</span> Legend Palace Hotel, Macau,
                  China
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Official Website:</span>{' '}
                  <a href="https://www.iccth.org" className="text-blue-600 hover:underline">
                    www.iccth.org
                  </a>
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
                    'Full Papers (Max 12,000 words)',
                    'Extended Abstracts (Max 1,500 words)',
                    'Work-in-Progress (500–1,000 words)',
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

      {/* Conference Themes Section */}
      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
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
              Conference Themes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Important Dates Section */}
      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-8 bg-red_app" />
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
              Important Dates
            </h2>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border-2 border-dashed border-red-200 p-4 md:p-8 bg-red-50 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Table className="w-full border border-dashed border-red-200 rounded-xl overflow-hidden bg-red-50/30">
              <TableHeader>
                <TableRow className="border-b border-red-200 hover:bg-transparent divide-x divide-red-200">
                  <TableHead className="text-red_app font-bold text-center text-lg py-6 uppercase">
                    Timing
                  </TableHead>
                  <TableHead className="text-red_app font-bold text-center text-lg py-6 uppercase">
                    Sessions
                  </TableHead>
                  <TableHead className="text-red_app font-bold text-center text-lg py-6 uppercase">
                    Location
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-red-200">
                {scheduleData.map((item, index) => (
                  <TableRow
                    key={index}
                    className="divide-x divide-red-200 hover:bg-red-50/40 transition-colors"
                  >
                    <TableCell className="py-5 px-6 text-gray-800 font-medium">
                      {item.timing}
                    </TableCell>

                    <TableCell className="py-5 px-6 text-gray-800 font-medium">
                      {item.session}
                    </TableCell>

                    <TableCell className="py-5 px-6 text-gray-800 font-medium">
                      {item.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>

      {/* Submission Info Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            className="flex items-center gap-3 mb-10 justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-8 bg-red_app" />
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase">
              Submission Info
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              All submissions undergo double-blind peer review. Manuscripts are checked via
              Turnitin; similarity must not exceed 20%.
            </p>

            <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              For Chinese papers, contact Professor Lyu at:{' '}
              <a
                href="mailto:lujy@hzcu.edu.cn"
                className="text-blue-600 font-medium hover:underline transition-all"
              >
                lujy@hzcu.edu.cn
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={'danger'}
              className="px-8 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-3 uppercase tracking-wider"
              onClick={() => window.open('https://www.iccth.org/submit', '_blank')}
            >
              <Send className="w-5 h-5" />
              Submit Paper Now
            </Button>
          </motion.div>
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
              30 outstanding papers will be fast-tracked for publication in journals
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

      {/* Payment Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 flex flex-col items-center">
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
