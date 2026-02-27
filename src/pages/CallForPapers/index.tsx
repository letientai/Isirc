import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import {
  Clock,
  Copy,
  Download,
  Flag,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { toast } from 'sonner'

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
    title: 'Scopus Q1',
    desc: 'Social Enterprise Journal',
    logo: '/assets/eai.png',
  },
  {
    title: 'Scopus Q2',
    desc: 'EAI Endorsed Transactions on Industrial Networks and Intelligent Systems',
    logo: '/assets/eai.png',
  },
  {
    title: 'eISSN: 3078-5855',
    desc: 'EAI Endorsed Transactions on Tourism, Technology and Intelligence',
    logo: '/assets/ettt.png',
  },
]

const dates = [
  { date: '31 May 2026', event: 'Early Bird Registration' },
  { date: '15 July 2026', event: 'Abstract/Paper Submission Deadline', highlight: true },
  { date: '15 August 2026', event: 'Notification of Acceptance' },
  { date: '15 September 2026', event: 'Camera-ready Submission' },
  { date: '4–6 December 2026', event: 'Conference Dates' },
]

export default function CallForPapers() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   })
  // }, [])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`Copied ${label} to clipboard`)
  }

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
      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
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
                  onClick={() => window.open('/assets/ICCTH_poster.png', '_blank')}
                >
                  <Download className="w-5 h-5" />
                  Download Poster
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

      <section id="important_dates" className="bg-gray-100 py-10 px-6 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-red_app mb-6 text-center">Important Dates</h2>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden p-6 shadow-lg">
            <div className="divide-y divide-red-100">
              {dates.map((item, index) => (
                <div
                  key={`important-date-${index}`}
                  className="flex flex-col md:flex-row md:items-center p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="w-full md:w-1/3 font-bold text-gray-700">{item.date}</div>
                  <div
                    className={`w-full md:w-2/3 text-sm font-bold uppercase ${item.highlight ? 'text-red_app' : 'text-gray-700'}`}
                  >
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
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
                Publication Options
              </h2>
            </div>
            <p className="text-lg font-medium text-gray-700">
              ARN 2026 is academically supported by the following peer-reviewed journals:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {publications.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-row items-center sm:justify-between min-h-[140px] overflow-hidden gap-4"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 group-hover:w-2 transition-all"></div>

                <div className="pl-2 pl-4 text-left flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-red-600 mb-1 md:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>

                <div className="flex-shrink-0 w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 flex items-center justify-center p-2 bg-gray-50 rounded-lg border border-gray-100 transition-transform group-hover:scale-105">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
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
                  onClick={() => window.open('https://forms.gle/BfoBnt8HgSoNiuFY7', '_blank')}
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red_app tracking-tight uppercase mb-4">
              P2A Official Bank Account Details
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-md overflow-hidden bg-white rounded-3xl">
              <CardHeader className="bg-slate-900 text-white p-6 t-0">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Globe className="w-6 h-6 text-red-400" />
                  International Electronic Bank Transfers (USD Account)
                </CardTitle>
                <p className="text-slate-400 text-sm font-normal">
                  For institutions located outside of Vietnam
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <InfoRow
                  label="Beneficiary Name"
                  value="Passage to ASEAN"
                  onCopy={() => copyToClipboard('Passage to ASEAN', 'Beneficiary Name')}
                />
                <InfoRow
                  label="Account Number (USD)"
                  value="685608557777"
                  highlight
                  onCopy={() => copyToClipboard('685608557777', 'Account Number')}
                />
                <InfoRow
                  label="Bank Name"
                  value="Vietnam Joint Stock Commercial Bank for Industry and Trade (VietinBank) - Da Nang Branch"
                />
                <InfoRow
                  label="SWIFT Code"
                  value="ICBVVNVX480"
                  highlight
                  onCopy={() => copyToClipboard('ICBVVNVX480', 'SWIFT Code')}
                />
                <div className="pt-4 border-t border-slate-100 flex gap-3 italic">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <p className="text-xs text-slate-500">
                    218 Nguyen Van Linh Street, Thanh Khe Ward, Da Nang City, Vietnam
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden bg-white rounded-3xl">
              <CardHeader className="bg-red-700 text-white p-6">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Landmark className="w-6 h-6 text-red-200" />
                  Domestic Electronic Bank Transfers (VND Account)
                </CardTitle>
                <p className="text-red-100 text-sm font-normal">
                  For institutions located within Vietnam
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <InfoRow
                  label="Beneficiary Name"
                  value="Viện Hành trình ASEAN"
                  onCopy={() => copyToClipboard('Viện Hành trình ASEAN', 'Beneficiary Name')}
                />
                <InfoRow
                  label="Account Number (VND)"
                  value="680622007777"
                  highlight
                  onCopy={() => copyToClipboard('680622007777', 'Account Number')}
                />
                <InfoRow
                  label="Bank Name"
                  value="Ngân hàng TMCP Công Thương Việt Nam (VietinBank) - Chi nhánh Đà Nẵng"
                />
                <InfoRow
                  label="SWIFT Code"
                  value="ICBVVNVX480"
                  onCopy={() => copyToClipboard('ICBVVNVX480', 'SWIFT Code')}
                />
                <div className="pt-4 border-t border-slate-100 flex gap-3 italic">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <p className="text-xs text-slate-500">
                    218 Nguyễn Văn Linh, Phường Thanh Khê, TP. Đà Nẵng, Việt Nam
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-20 px-6 md:px-20 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-red_app leading-[1.1]">
            ISIRC 2026 PAYMENT
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mt-2">Complete registration payment</p>
        </div>

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
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-8 opacity-80"
                />
              
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
      </section> */}
    </div>
  )
}

function InfoRow({
  label,
  value,
  highlight = false,
  onCopy,
}: {
  label: string
  value: string
  highlight?: boolean
  onCopy?: () => void
}) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">{label}</span>
      <div className="flex items-center justify-between group">
        <span
          className={`text-base font-semibold ${highlight ? 'text-red-600 text-lg' : 'text-slate-700'}`}
        >
          {value}
        </span>
        {onCopy && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onCopy}
          >
            <Copy className="w-4 h-4 text-slate-400" />
          </Button>
        )}
      </div>
    </div>
  )
}
