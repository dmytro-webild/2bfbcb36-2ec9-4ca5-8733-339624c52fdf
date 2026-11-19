import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import AboutStatementBand from "@/components/sections/about/AboutStatementBand";
import ServicesGhostList from "@/components/sections/features/ServicesGhostList";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";

export default function HomePage() {
  return (
    <>
      <ModelStage
        shape="ribbon"
        fixed={{
          sm: {
            y: 0.8,
            scale: 0.7
          },
          scroll: {
            rotate: 540,
            tilt: 14,
            scale: 0.08,
            x: 0.05
          }
        }}
        dpr={{
          lg: 1.5,
          sm: 1.25
        }}
      />

      <LoaderWordmarkHandoff
        brand="Ana Oliveira"
      />

      <div id="hero" data-webild-section="HeroShapeSplit" data-webild-section-id="HeroShapeSplit-1" data-section="hero" className="relative z-[45]">
        <HeroShapeSplit
          tag="01 / Atelier"
          title="Your Vision. Your Style. Perfectly Tailored."
          description="Bespoke dressmaking and precision tailoring crafted for you in Philadelphia."
          primaryButton={{
            text: "Book appointment",
            href: "https://wa.me/12676806578"
          }}
          secondaryButton={{
            text: "Call atelier",
            href: "tel:267) 680-6578"
          }}
          scrollLabel="Scroll to explore"
          introDelay={1.7}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementBand" data-webild-section-id="AboutStatementBand-1" data-section="about" className="relative z-[45]">
        <AboutStatementBand
          tag="01 / THE ATELIER"
          title="Crafted by hand on Castor Avenue."
          description="With decades of mastery in dressmaking, Ana Oliveira transforms fine fabrics into flawlessly fitted garments tailored to your silhouette in Philadelphia."
          button={{
            text: "Explore services",
            href: "#services"
          }}
          visionTag="02 / VISION"
          items={[
            {
              title: "PRECISION"
            },
            {
              title: "ELEGANCE"
            },
            {
              title: "MASTERY"
            }
          ]}
          line="✦ Every stitch tells your story."
        />
      </div>

      <div id="services" data-webild-section="ServicesGhostList" data-webild-section-id="ServicesGhostList-1" data-section="services" className="relative z-[45]">
        <ServicesGhostList
          tag="Tailoring Services"
          items={[
            {
              title: "Custom Dressmaking",
              description: "One-of-a-kind gowns crafted from sketch to stitch with luxury fabrics.",
              button: {
                text: "Inquire on WhatsApp",
                href: "https://wa.me/12676806578"
              }
            },
            {
              title: "Precision Tailoring",
              description: "Expert re-fitting for jackets, trousers, coats, and luxury everyday wear.",
              button: {
                text: "Inquire on WhatsApp",
                href: "https://wa.me/12676806578"
              }
            },
            {
              title: "Special Occasion",
              description: "Bespoke evening dresses, gala gowns, and cocktail attire shaped perfectly.",
              button: {
                text: "Inquire on WhatsApp",
                href: "https://wa.me/12676806578"
              }
            },
            {
              title: "Bridal Alterations",
              description: "Intricate wedding gown fittings, bodice adjustments, and delicate lace repair.",
              button: {
                text: "Inquire on WhatsApp",
                href: "https://wa.me/12676806578"
              }
            },
            {
              title: "Garment Restyling",
              description: "Transform vintage pieces and family heirlooms into modern tailored silhouettes.",
              button: {
                text: "Inquire on WhatsApp",
                href: "https://wa.me/12676806578"
              }
            }
          ]}
          description="Every garment receives individual fitting and hand-finished seams."
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWordPanels" data-webild-section-id="GalleryWordPanels-1" data-section="gallery" className="relative z-[45]" data-scene>
        <GalleryWordPanels
          label="Portfolio"
          title="Recent atelier work"
          items={[
            {
              title: "Bridal",
              category: "Gown fitting",
              description: "Hand-sewn bustle and bodice adjustments tailored for a precise bridal fit.",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-newlyweds-holding-hands_1153-549.jpg",
              imageAlt: "Close-up of newlyweds holding hands"
            },
            {
              title: "Silk",
              category: "Evening wear",
              description: "Custom champagne silk drape with hidden closure and hand-finished delicate seams.",
              imageSrc: "https://img.b2bpic.net/free-photo/fashionable-modern-rococo-style_23-2151916436.jpg",
              imageAlt: "Fashionable modern rococo style"
            },
            {
              title: "Cocktail",
              category: "Bespoke dress",
              description: "Structured lace overlay dress with hand-stitched silk lining and tailored waist.",
              imageSrc: "https://img.b2bpic.net/free-photo/smiling-young-caucasian-woman-with-short-haircut-evening-black-dress-posing-white-background-fashion-concept_197531-31414.jpg",
              imageAlt: "Smiling young caucasian woman with short haircut in evening black dress posing on white background Fashion concept"
            },
            {
              title: "Tailored",
              category: "Suit alteration",
              description: "Precision shoulder restructuring and sleeve re-pitching for clean tailored suiting.",
              imageSrc: "https://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414725.jpg",
              imageAlt: "Fashion designer's studio with essential elements"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Client Reviews"
          title="5.0 stars across Philadelphia"
          items={[
            {
              quote: "Ana altered my wedding dress so seamlessly it felt made entirely from scratch for me.",
              name: "Olivia Hughes",
              role: "Bespoke Bride",
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-bride-posing-with-flowers_23-2150327235.jpg",
              imageAlt: "Medium shot bride posing with flowers"
            },
            {
              quote: "The fit on my silk gown was flawless. Ana understands structure like no one else in Philadelphia.",
              name: "Imogen Ramirez",
              role: "Gala Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/young-brunette-woman-black-lingerie-chiaroscuro-lighting_1139-1610.jpg",
              imageAlt: "Young brunette woman in black lingerie in chiaroscuro lighting. "
            },
            {
              quote: "Warm service, honest timeline, and absolute perfection on delicate embroidery. Ana brought my design to life.",
              name: "Hannah Okafor",
              role: "Eveningwear Client",
              imageSrc: "https://img.b2bpic.net/free-photo/black-white-portrait-woman-chair-old-hollywood-glamour-style_23-2150720621.jpg",
              imageAlt: "Black and white portrait of woman on chair in old hollywood glamour style"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactUnderlineForm" data-webild-section-id="ContactUnderlineForm-1" data-section="contact" className="relative z-[45]">
        <ContactUnderlineForm
          title="Book Your Fitting Appointment"
          fields={[
            {
              name: "name",
              label: "Full name",
              type: "text",
              placeholder: "Ana Silva",
              required: true
            },
            {
              name: "email",
              label: "Email address",
              type: "email",
              placeholder: "contact@anaoliveiradressmaker.com",
              required: true
            },
            {
              name: "phone",
              label: "Phone number",
              type: "tel",
              placeholder: "(267) 680-6578",
              required: true
            },
            {
              name: "message",
              label: "Garment details",
              type: "textarea",
              placeholder: "Describe your dress or alteration needs",
              required: true
            }
          ]}
          servicesLabel="Service needed"
          services={[
            "Custom dressmaking",
            "Bridal alterations",
            "Evening gowns",
            "Suit tailoring",
            "General fitting"
          ]}
          button={{
            text: "Send request"
          }}
        />
      </div>
    </>
  );
}
