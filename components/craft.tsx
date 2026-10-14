import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Craft() {
  const products = [
    {
      title: 'Custom Cakes',
      image: 'https://scontent.fbho3-3.fna.fbcdn.net/v/t39.30808-6/470683001_905372728388564_874552493969151533_n.jpg?stp=dst-jpg_tt6&cstp=mx2034x2048&ctp=s2034x2048&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K5CAem5lo74Q7kNvwEdtKJU&_nc_oc=Adrf4Fpa4SQj_xyMQ3nI8dnGR24Wq1XSYyUz6AtIgs52IxdiYH-SYl_o8s1FOdfv1aSTyZbgf050zzn9uX_LzygL&_nc_zt=23&_nc_ht=scontent.fbho3-3.fna&_nc_gid=w347lFIvM6VI9cvkx519NQ&_nc_ss=7b2a8&oh=00_AQOyYEDhIOuuiQFPa9o9KotB_bpYeI4X8sJCUYCciXhFEQ&oe=6AD4B697',
      pos: 'center 40%',
      description:
        'Themed birthday cakes, Sonic cakes, Tres Leches, cinnamon roll cakes, and more — designed around your celebration.',
    },
    {
      title: 'Cupcakes',
      image: 'https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470780243_905372785055225_834949861267358704_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2044&ctp=s552x414&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=3bXCaMEA9RAQ7kNvwHoehwL&_nc_oc=AdotbeJIKmJ68bRxlUXS9ntTkZ6Ehy-wbu8RkhR5sCJzhGkscjfjTk15xNgiVc50p4SJTXwou-AH4u2mUU-KLVEg&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=WO_4yf_AarPH_y1ziBfE9g&_nc_ss=7b2a8&oh=00_AQOqNOeOM7-18xHL43c_-s5913mqqye_T6Gbor-GBYC7tQ&oe=6AD4C7CE',
      pos: 'center',
      description:
        'Moist, scratch-made cupcakes with silky buttercream. Perfect for parties, showers, or just because.',
    },
    {
      title: 'Cookies & Cake Pops',
      image: 'https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/470780149_905372838388553_8789886899881712313_n.jpg?stp=c343.0.1362.1362a_dst-jpg_tt6&cstp=mx1362x1362&ctp=s552x414&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dTxPj21Mc8UQ7kNvwH3qwmd&_nc_oc=AdrqkgA7z6192jBmXjYtCLm8Rx1JQ6qfh7J47ZbQ_TfROlxdCB_ydA0oi52_MWZ6Rao2FX4ORH2iBZUj9xlmSkO9&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=tVKKLMYRfkazBfQxw2PLog&_nc_ss=7b2a8&oh=00_AQM4IR9oV6wn-Vyhl6w1hrJ_lx5JS-lStddq4QBuvRRSsg&oe=6AD4CFEB',
      pos: 'center',
      description:
        'Decorated sugar cookies, cookie packs (8 for $10), and colorful cake pops for any occasion.',
    },
    {
      title: 'Pies & Cheesecakes',
      image: 'https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470808298_905372901721880_1285049375229817260_n.jpg?stp=c0.247.1300.1300a_dst-jpg_tt6&cstp=mx1300x1300&ctp=s552x414&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=uPr0WbXmGx0Q7kNvwEs7efA&_nc_oc=AdoAbFp3D5vkqBJ7iMSPbk_tjz2Nsdm7Umc8YWibcKu9B0TpRXmiEWjKxBUjT6LNkhqSCrqcUsGXuO96fdejpWiE&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=piU4wGYTA5Leu-R633Qylw&_nc_ss=7b2a8&oh=00_AQO_xxb5fxvVx4EBknM_mcvOCNSv3KNu36L-32ckn0QgmA&oe=6AD4A22F',
      pos: 'center',
      description:
        'Homemade pies and specialty cheesecakes — rich, creamy, and baked fresh to order.',
    },
  ]

  return (
    <section id="craft" className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            Our Craft
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
            The Art of{' '}
            <span className="italic font-light">Homemade Baking</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group flex flex-col overflow-hidden rounded-3xl transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden" style={{ height: '300px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: product.pos }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: colors.foreground }}>
                    {product.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: `${colors.foreground}b3` }}>
                    {product.description}
                  </p>
                </div>

                <a href="mailto:taytlyngreasham@yahoo.com" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3" style={{ color: colors.accentGold }}>
                  Inquire <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
