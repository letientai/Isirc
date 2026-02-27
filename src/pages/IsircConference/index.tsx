import { useEffect } from 'react'
import { Calendar, Users, Handshake, Presentation } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SpeakerCard } from './components/SpeakerCard'
import { motion } from 'framer-motion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SEO } from '@/components/global/seo'
import { useNavigate } from 'react-router-dom'
import { useCountdown } from '@/hooks/useCountdown'

const OPPORTUNITIES = [
  {
    title: 'Academia',
    description: 'Researchers, scholars, educators, innovators, social impact accelerators',
    icon: <img src="/assets/vector_01.png" alt="Academia" className="h-full" />,
  },
  {
    title: 'Civil Society',
    description: 'Citizens, knowledge mobilization entities',
    icon: <img src="/assets/vector_02.png" alt="Civil Society" className="h-full" />,
  },
  {
    title: 'Policy makers',
    description: 'Government, industry, regulatory bodies',
    icon: <img src="/assets/vector_03.png" alt="Policy makers" className="h-full" />,
  },
  {
    title: 'Social Impact Organizations',
    description: 'Social entrepreneurs, social serving organizations, foundations',
    icon: <img src="/assets/vector_04.png" alt="Social Impact Organizations" className="h-full" />,
  },
]

const SPEAKERS = [
  {
    name: 'Dr. Jurgen Howaldt',
    topic: 'Shaping Society with Social Innovation',
    description:
      'Prof. Dr. Howaldt is an internationally renowned expert in the field of social innovation and co-founder and chair of the European School of Social Innovation. Dr. Howaldt has co-edited the Encyclopedia of Social Innovation and the Atlas of Social Innovation. His research focuses on social sciences-based innovation research and social innovation.',
    imageUrl: '/assets/speakers/image_JurgenHowaldt.png',
    url: 'https://sfs.sowi.tu-dortmund.de/en/about-us/people/howaldt/',
    buttonText: 'Full biography',
  },
  {
    name: 'Dr. Katharine McGowan',
    topic: 'Building a Complexity Informed Pedagogy',
    description:
      "Dr. McGowan is an Associate Professor in Social Innovation at Mount Royal University's Bissett School of Business. Her research focuses on social innovation, complexity, systems change, particularly through history, which includes resiliency and unjust transitions. She was also a post-doctoral fellow at the Waterloo Institute for Social Innovation and Complexity.",
    imageUrl: '/assets/speakers/image_KatharineMcGowan.png',
    url: 'https://www.mtroyal.ca/ProgramsCourses/FacultiesSchoolsCentres/Business/FacultyStaff/KatharineMcGowan.htm',
    buttonText: 'Full biography',
  },
  {
    name: 'Dr. Rafael Ziegler',
    topic: 'Circular Cooperatives - Prism for SI',
    description:
      'Dr. Ziegler is the Director of the Alphonse and Dorimene Desjardins International Institute for Cooperatives and Associate Professor, Department of Management at HEC Montreal. His work is inspired by social innovations not only as a source of empirical materials, but as a spring of new ideas and concepts.',
    imageUrl: '/assets/speakers/image_RafaelZiegler.png',
    url: 'https://www.hec.ca/en/profs/rafael.ziegler.html',
    buttonText: 'Full biography',
  },
  {
    name: 'Dr. Filipe Almeida',
    topic: 'Developing an SI ecosystem: A public policy approach',
    description:
      'Dr. Almeida is the president of Portugal Social Innovation, a pioneering government initiative that mobilizes European funds to promote social innovation and entrepreneurship. He is a professor and researcher at the Centre of Social Studies (CES/FUEC) and Centre of Cooperative and Social Economy Studies.',
    imageUrl: '/assets/speakers/image_FilipeAlmeida.png',
    url: 'https://inovacaosocial.portugal2020.pt/en/our-team/?doing_wp_cron=1737390558.3941500186920166015625',
    buttonText: 'Full biography',
  },
  {
    name: 'Panel Presentation',
    topic: 'Unlocking Global Insights: Drivers of Social Innovation',
    description:
      'Explore diverse approaches shaping social innovation collaborations globally. Hear from representatives across various regions as they share unique insights and experiences. Discover key drivers that inspire and propel social innovation.',
    imageUrl: '/assets/logo.png',
    buttonText: 'View Program',
    isPanel: true,
  },
]

const ACTIVITIES = [
  {
    title: 'Conference Streams',
    description:
      'Discover how social innovation is shaping the future with 13 unique content streams. Delegates can unlock diverse perspectives in social innovation research areas',
    icon: <Presentation className="w-8 h-8 text-red_app" />,
  },
  {
    title: 'Pre-conference Workshops',
    description:
      'Attend a range of pre-conference workshops covering topics on measurement, complexity, case studies, and more',
    icon: <Users className="w-8 h-8 text-red_app" />,
  },
  {
    title: 'Networking Evening Reception',
    description:
      'Join fellow delegates for an evening of networking reception to connect with one another to expand professional collaborations',
    icon: <Handshake className="w-8 h-8 text-red_app" />,
  },
]

const SCHEDULE = [
  {
    timing: '09:00 AM - 09:30 AM',
    session: 'Registration & Welcome',
    location: 'Grand Ballroom',
  },
  { timing: '09:30 AM - 09:45 AM', session: 'Networking Tea Break', location: 'Foyer Area' },
  {
    timing: '09:45 AM - 10:30 AM',
    session: 'Opening Plenary Session: Welcome Address & Keynote',
    location: 'Meeting Room',
  },
  { timing: '10:30 AM - 01:00 PM', session: 'Lunch Break', location: 'Restaurant Floor' },
  { timing: '01:30 PM - 04:00 PM', session: 'Session II', location: 'Meeting Room' },
  {
    timing: '04:05 PM - 04:15 PM',
    session: 'Group Photo & Final Networking Session',
    location: 'The Pitch',
  },
  {
    timing: '04:15 PM - 05:00 PM',
    session: 'Closing Address: Reflections & Awards Presentation',
    location: 'Main Exit / Entrance',
  },
]
const IsircConference = () => {
  const navigate = useNavigate()
  const { days, hours, minutes, seconds } = useCountdown('2026-12-04T00:00:00')

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <SEO />

      {/* Hero Section */}
      <section className="relative flex-grow min-h-[800px] flex flex-col items-center justify-center text-white text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/bg_landing_isirc2.png')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        <motion.div
          className="z-10 space-y-8 mt-20  px-4 sm:px-0"
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
            className="text-5xl sm:text-6xl xl:text-8xl font-medium tracking-[0.2em]"
            style={{ fontFamily: "'Mochiy Pop One', sans-serif" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            ISIRC 2026
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.3em]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Thank you Delegates
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
                <Calendar className="w-6 h-6" />
                <span className="text-lg font-bold">4-6th Dec, 2026</span>
              </div>

              <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-7 py-3 rounded-md flex items-center gap-3 shadow-lg">
                <Users className="w-6 h-6" />
                <span className="text-lg font-bold">Da Nang, Vietnam</span>
              </div>
            </div>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center max-w-xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-6 tracking-widest border-b border-white/30 pb-2 inline-block">
              EVENT START
            </h2>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'DAY', value: days },
                { label: 'HOURS', value: hours },
                { label: 'MINUTES', value: minutes },
                { label: 'SECONDS', value: seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-2xl py-4 flex flex-col items-center shadow-lg"
                >
                  <span className="text-2xl md:text-3xl font-black text-gray-800">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 mt-1 uppercase tracking-tighter">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Conference Information Section */}
      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-2 relative">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-700 leading-tight mb-4">
                International Social Innovation Research Conference 2026
              </h2>
              <p className="text-red_app font-bold text-xl">
                Thank you for participating in ISIRC 2026!
              </p>
              <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
                Thank you for connecting with friends old and new. Over three days we shared,
                observed, presented, and forged new paths for advancing social innovation and
                entrepreneurship across disciplines.
                <br />
                This site will remain until month's end. If you have any questions, please contact
                the <span className="font-bold text-gray-700">ISIRC Planning Committee</span>.
              </p>
            </motion.div>

            <motion.div
              className="hidden md:block w-64 h-64"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/speakers/image_global.png"
                alt="Global Network"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="border-2 border-dashed border-gray-200 rounded-[2rem] p-8 hover:border-red-200 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-red_app text-2xl font-bold mb-4">About ISIRC</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                ISIRC brings together practitioners, policy makers, and scholars from diverse fields
                interested in social innovation and entrepreneurship. We invite scholars from a
                variety of disciplines – including social work, management, technology, design,
                education, sociology, psychology, engineering, etc. – to join us in initiating new
                debates and developing new solutions to the multiple grand challenges we face.
              </p>
            </motion.div>

            <motion.div
              className="cursor-pointer border-2 border-dashed border-gray-200 rounded-[2rem] p-8 hover:border-red-200 hover:bg-red-50/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() =>
                window.open('https://www.ak-rt.org/dtu', '_blank', 'noopener,noreferrer')
              }
            >
              <h3 className="text-red_app text-2xl font-bold mb-4">About Duy Tan University</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Founded in 1994, Duy Tan University was the first private university in Vietnam and
                has grown to become a multidisciplinary and diversified institution, ranked within
                the top three universities in the country. It also hosts the Secretariat of Passage
                to ASEAN, a network of 150 universities in Southeast Asia. The university is
                committed to social innovation and highlights humanity as the foundation of its
                development.
              </p>
            </motion.div>

            <motion.div
              className="cursor-pointer border-2 border-dashed border-gray-200 rounded-[2rem] p-8 hover:border-red-200 hover:bg-red-50/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() =>
                window.open('https://www.ak-rt.org/da_nang', '_blank', 'noopener,noreferrer')
              }
            >
              <h3 className="text-red_app text-2xl font-bold mb-4">About Da Nang</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Da Nang (Đà Nẵng) is a vibrant, modern coastal city in Central Vietnam known for its
                beautiful sandy beaches, impressive bridges (like the Dragon Bridge), and proximity
                to natural wonders like the Marble Mountains and Ba Na Hills, serving as a key
                travel hub with an international airport, offering a blend of urban convenience and
                natural beauty.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="pt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/call-for-papers')}
              className="min-w-xs inline-block bg-red_app hover:bg-red-700 text-white rounded-full px-10 py-3 text-md font-medium shadow-md transition-all"
              role="button"
            >
              Register
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Explore Opportunities Section */}
      <section className="bg-neutral-100 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-10">Who should attend?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {OPPORTUNITIES.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden"
              >
                <CardContent className="flex flex-col items-center text-center justify-between px-6 gap-4">
                  <h3 className="text-red_app font-bold text-lg mb-4">{item.title}</h3>
                  <div className="flex items-center justify-center h-36">{item.icon}</div>
                  <p className="flex-1 text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="bg-white py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-10">Important Dates</h2>

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
                {SCHEDULE.map((item, index) => (
                  <TableRow
                    key={index}
                    className="divide-x divide-red-200 hover:bg-red-50/40 transition-colors"
                  >
                    <TableCell className="py-5 px-6 text-gray-800 font-medium">
                      {item.timing}
                    </TableCell>

                    <TableCell className="py-5 px-6 text-gray-800 font-medium text-start">
                      {item.session}
                    </TableCell>

                    <TableCell className="py-5 px-6 text-gray-800 font-medium text-start">
                      {item.location}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-gray-700 text-center mb-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Keynote Speakers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {SPEAKERS.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut',
                }}
                className={index >= 3 ? 'lg:col-span-1 lg:mx-auto w-full' : ''}
              >
                <SpeakerCard {...speaker} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISIRC Activities Section */}
      <section className="bg-neutral-100 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/4 pt-4">
            <h2 className="text-5xl font-bold text-gray-700 text-start mb-16">
              ISIRC 2026 Activities
            </h2>
          </div>

          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACTIVITIES.map((activity, index) => (
              <Card
                key={index}
                className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl bg-white"
              >
                <CardContent className="p-8 flex flex-col items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                    {activity.icon}
                  </div>

                  <h3 className="text-red_app font-bold text-lg mb-4 leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-video rounded-3xl overflow-hidden group m-1">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7gPQn0EhP5g?&&loop=1&playlist=7gPQn0EhP5g&controls=1&showinfo=0&rel=0"
                title="YouTube video player"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-700 leading-[1.1]">
                Stay connected <br /> to ISIRC
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-medium max-w-md">
                Reach out for information about ISIRC and future events.
              </p>
            </div>

            <div className="pt-2">
              <a
                className="bg-red_app hover:bg-red-700 text-white rounded-full px-10 py-3 text-md font-medium shadow-md transition-all"
                href="mailto:sii@ucalgary.ca"
                role="button"
              >
                Keep me informed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="bg-gray-50 py-10 px-6 md:px-20 border-t-2 border-dashed border-gray-200 ">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-6 text-gray-600 text-sm md:text-base leading-loose">
            <p className="leading-relaxed">
              Hosted by the University of Calgary's{' '}
              <a
                href="https://research.ucalgary.ca/innovation/social-innovation"
                className="text-red_app hover:underline decoration-2 underline-offset-4 font-medium"
              >
                Social Innovation Initiative
              </a>{' '}
              within the Office of the Vice-President (Research) in collaboration with the{' '}
              <a
                href="https://www.ucalgary.ca/hunter-hub"
                className="text-red_app hover:underline decoration-2 underline-offset-4 font-medium"
              >
                Hunter Hub for Entrepreneurial Thinking
              </a>
              , the{' '}
              <a
                href="https://innovatecalgary.com/social-innovation/"
                className="text-red_app hover:underline decoration-2 underline-offset-4 font-medium"
              >
                Social Innovation Hub
              </a>
              ,{' '}
              <a
                href="https://research.ucalgary.ca/engage-research/knowledge-impact"
                className="text-red_app hover:underline decoration-2 underline-offset-4 font-medium"
              >
                Knowledge to Impact
              </a>{' '}
              and others.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 italic text-sm md:text-base leading-loose">
            <p>
              The University of Calgary, located in the heart of Southern Alberta, both acknowledges
              and pays tribute to the traditional territories of the peoples of Treaty 7, which
              include the Blackfoot Confederacy (comprised of the Siksika, the Piikani, and the
              Kainai First Nations), the Tsuut’ina First Nation, and the Stoney Nakoda (including
              Chiniki, Bearspaw, and Goodstoney First Nations). The City of Calgary is also home to
              the Métis Nation of Alberta (Districts 5 and 6).
            </p>

            <p>
              The University of Calgary is situated on land Northwest of where the Bow River meets
              the Elbow River, a site traditionally known as Moh’kins’tsis to the Blackfoot,
              Wîchîspa to the Stoney Nakoda, and Guts’ists’i to the Tsuut’ina. On this land and in
              this place we strive to learn together, walk together, and grow together “in a good
              way.”
            </p>
          </div>
        </div>
      </section>
      <div className="h-3 bg-red_app" />
    </div>
  )
}

export default IsircConference
