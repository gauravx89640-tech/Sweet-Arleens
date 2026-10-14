import { colors } from '@/lib/colors'
import { ArrowRightIcon } from '@/components/social-icons'

export function Gallery() {
  const images = [
    { src: 'https://scontent.fbho3-5.fna.fbcdn.net/v/t39.30808-6/471161552_905372801721890_451879993815339851_n.jpg?stp=c0.118.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s552x414&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=QJT2Nzk2nn8Q7kNvwFnDlBm&_nc_oc=AdqeX_w6n38p2ov0rW2O6Roqg2KBDlaBJ_07bnshlQ3l8_aNOSluAD4GMyt-8979tMtBeMuZ1xgalR2x_0HO-6dU&_nc_zt=23&_nc_ht=scontent.fbho3-5.fna&_nc_gid=WO_4yf_AarPH_y1ziBfE9g&_nc_ss=7b2a8&oh=00_AQOzAe9KCYrVOG5w38O7YfGuNH_Ij4Mzu3nnzubCpPYZ9g&oe=6AD4B4EF', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-3.fna.fbcdn.net/v/t39.30808-6/470575833_905372805055223_1100737880799305375_n.jpg?stp=c0.21.1047.1047a_dst-jpg_tt6&cstp=mx1047x1047&ctp=s552x414&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=DV82lriyv-wQ7kNvwEJcptp&_nc_oc=AdrzkP5Z1lQvvR-cagkDYRzZl0nsCT6rv2y5DBwHNgWVAYxzKAb_C2OUXBqkqjE5kbyioN0XD_RwSx20Byf67kiA&_nc_zt=23&_nc_ht=scontent.fbho3-3.fna&_nc_gid=cw92DogePtUNlkS8jLQK1g&_nc_ss=7b2a8&oh=00_AQPNa8OZ5nZSfQAuLWN9BKVAvWP0p3laVfrZwtJe-MGM_w&oe=6AD4B4CD', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470080054_901005405491963_2566025060957012948_n.jpg?stp=c21.0.1087.1087a_dst-jpg_tt6&cstp=mx1087x1087&ctp=s552x414&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=x8DQLNWwT-4Q7kNvwH5FzBI&_nc_oc=AdquRFSYNw-G9Ktc3r3bw53JgWQLs1868JKPRl08aUY4kFQnmXWpe692KmlGyoV0pGQZr8smXwZdFcaq6tYzu9p8&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=l2c6gnF6XxBrV40sIaQnjA&_nc_ss=7b2a8&oh=00_AQNBEYZwWQ-wejaoAIrr5TBY18Oaqd7Xcv57Zt_KFm6_Kg&oe=6AD4C6D6', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/470689553_905372788388558_2499958455766754999_n.jpg?stp=c0.118.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s552x414&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=uStE5JmOjTwQ7kNvwGWQKQt&_nc_oc=AdpMTg0IopRJBTHO7jL_GMxDKaDU0uX7NgM7gJZdrY1olewhZqo58vZad__La5daATfN5HtcUN9oyff0iASF49z0&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=cw92DogePtUNlkS8jLQK1g&_nc_ss=7b2a8&oh=00_AQMtrunAGohAmCAN0Brv9T4IK-zrZDMPvEkuUhokA_v4dw&oe=6AD4C95B', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/470587890_905372648388572_7939755749480984430_n.jpg?stp=c180.0.1080.1080a_dst-jpg_tt6&cstp=mx1080x1080&ctp=s552x414&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=aTAf1mBfM-EQ7kNvwFF8prE&_nc_oc=AdpOfiECEZVzDp1lRgvuAnvsUm60EqNCuXVDyMzn23OBOW2NDW5QG6L4k7sCHPpJiHX2x3zu6xtbdJCcpy4O3nPd&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=tVKKLMYRfkazBfQxw2PLog&_nc_ss=7b2a8&oh=00_AQOVMr8oZlVrGAPy4qMyHCCH7ITTHGII67k7ZcEj9BF76w&oe=6AD4A3FC', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/470698878_905372631721907_7034114135824061614_n.jpg?stp=c0.119.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s552x414&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=dRQuURoW8CkQ7kNvwGDy9wO&_nc_oc=Adq7YSKh0WdBbMU3e_N5xmrMaBMH1jXlh9OsaJSyA-aCCiVesK4lOcih3Z1JR_qtJb3FlNwUFVlszIF8SgRvbdzC&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=tVKKLMYRfkazBfQxw2PLog&_nc_ss=7b2a8&oh=00_AQP0zEjQsQKF0HgeeADTIF1jb4YKkJLwLr4r7_E-x8No6g&oe=6AD4ABD2', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-3.fna.fbcdn.net/v/t39.30808-6/470649450_905372955055208_6395664893087664546_n.jpg?stp=c0.83.828.828a_dst-jpg_tt6&cstp=mx828x828&ctp=s552x414&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=bH63uD7sa7cQ7kNvwE2btV0&_nc_oc=Adr08Zi2FWTZU48j-52n88xxJigPckshbzM9eTqmdO5IoOSDHyCbGTFmyvDYoMXcJ23s3LSfjRiAb9wru92oyjRs&_nc_zt=23&_nc_ht=scontent.fbho3-3.fna&_nc_gid=YfIiOlQNy5a1CGfko1pNpQ&_nc_ss=7b2a8&oh=00_AQOv21Q6l_y8qYnROyKM6WGbXi05QDTH2KkiWq3uwTW4fw&oe=6AD4AA9A', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-6.fna.fbcdn.net/v/t39.30808-6/470794020_905372625055241_6834425017692048065_n.jpg?stp=c0.118.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&ctp=s552x414&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=u5AuxEjrAi4Q7kNvwEwuUCv&_nc_oc=AdrzbG6VVD7EH6-YP9GEE0upBWRqVJXcRljF3TCBEVz5JHWrntVNz5f7X8If0O_Q8Yw7Z8XJex-x4x9DKOPZSoEs&_nc_zt=23&_nc_ht=scontent.fbho3-6.fna&_nc_gid=tVKKLMYRfkazBfQxw2PLog&_nc_ss=7b2a8&oh=00_AQPMYFWtGHK2dRWwDnJnIqdWcKhctDLZ2RchxYylItKxfw&oe=6AD4A623', alt: "Tayt's Cakes creation" },
    { src: 'https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/470795443_905372858388551_4356139354406145125_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s552x414&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8esvauCQWhwQ7kNvwE2cuMZ&_nc_oc=AdogJ_Jyt2QdfbdgKYFzquLb9oleAArU4Rrasc799NAs3KCmQYIT0E1Kw6GPCtzhzmLnK8C3KbpbCnsMfbaQviTj&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=tVKKLMYRfkazBfQxw2PLog&_nc_ss=7b2a8&oh=00_AQM3sy3qSQbOtyWd8Glv9jz89KxVY0vDsRZryXLLLODcSA&oe=6AD4D072', alt: "Tayt's Cakes creation" },
  ]

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-bold uppercase tracking-widest mb-3" style={{ color: colors.accentGold }}>
            The Work
          </p>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12" style={{ backgroundColor: colors.accentGold }} />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold" style={{ color: colors.foreground }}>
              Made <span className="italic font-light">to Order</span>
            </h2>
            <div className="h-px w-12" style={{ backgroundColor: colors.accentGold }} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 mb-12">
          {images.map((image, i) => (
            <div
              key={i}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all hover:shadow-xl"
              style={{ backgroundColor: colors.backgroundCard }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Facebook Link */}
        <div className="text-center">
          <a
            href="https://www.facebook.com/TaytsCakes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium transition-all hover:gap-3"
            style={{ color: colors.accentGold }}
          >
            Follow Tayt&apos;s Cakes on Facebook <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
