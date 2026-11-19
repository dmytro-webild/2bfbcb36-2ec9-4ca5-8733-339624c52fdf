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
          imageSrc="https://storage.googleapis.com/webild/users/user_3MEwysOv31t7f9Ov9oDsUF6BXKv/uploaded-1795119314515-k8khf6sp.jpg"
          imageAlt="Ana Oliveira, Master Dressmaker in her Philadelphia sewing studio"
          portraitBadge="Ana Oliveira"
          primaryButton={{
            text: "Book appointment",
            href: "https://wa.me/12676806578"
          }}
          secondaryButton={{
            text: "Call atelier",
            href: "tel:+12676806578"
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
          label="Portfolio / Gallery"
          title="Bespoke atelier dressmaking"
          items={[
            {
              title: "Bridal",
              category: "Custom Bridal Gowns",
              description: "Custom corset fitting, hand-sewn lace appliqué, and delicate bustle styling for wedding dresses.",
              imageSrc: "https://images.pexels.com/photos/36611026/pexels-photo-36611026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Intricate bridal gown back lace and fitting"
            },
            {
              title: "Couture",
              category: "Evening Wear",
              description: "Hand-draped champagne silk gowns tailored with precision for galas and special occasions.",
              imageSrc: "https://img.b2bpic.net/free-photo/fashionable-modern-rococo-style_23-2151916436.jpg",
              imageAlt: "Haute couture evening gown fitting"
            },
            {
              title: "Atelier",
              category: "Studio Craftsmanship",
              description: "Inside Ana's Philadelphia studio: fine thread selection, precision pattern cutting, and bespoke fittings.",
              imageSrc: "https://images.pexels.com/photos/3984839/pexels-photo-3984839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dressmaker sewing machine and tailoring tools"
            },
            {
              title: "Cocktail",
              category: "Bespoke Dresses",
              description: "Structured lace overlay dresses with hand-stitched silk lining and customized fit.",
              imageSrc: "https://images.pexels.com/photos/1844131/pexels-photo-1844131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant bespoke cocktail dress"
            },
            {
              title: "Fitting",
              category: "Precision Alterations",
              description: "Flawless shoulder restructuring, waist re-pinning, and suit sleeve adjustments.",
              imageSrc: "https://images.pexels.com/photos/6766234/pexels-photo-6766234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Precision fitting and garment measuring"
            },
            {
              title: "Gala",
              category: "Special Occasion",
              description: "Custom velvet and silk evening dresses shaped perfectly for memorable nights.",
              imageSrc: "https://images.pexels.com/photos/28411842/pexels-photo-28411842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury formal evening dress"
            },
            {
              title: "Embroidery",
              category: "Hand Detail Work",
              description: "Intricate beadwork, sheer lace overlays, and delicate seam finishing.",
              imageSrc: "https://images.pexels.com/photos/6339511/pexels-photo-6339511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hand embroidery and lace detailing"
            },
            {
              title: "Heirloom",
              category: "Garment Restyling",
              description: "Modernizing vintage family dresses while preserving their emotional heritage.",
              imageSrc: "https://images.pexels.com/photos/8858643/pexels-photo-8858643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Heirloom gown restyling and lace detail"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Client Reviews"
          title="5.0 stars in Philadelphia"
          items={[
            {
              quote: "It was excellent! She left the dress with the perfect fit!",
              name: "Amélia Fatima",
              role: "Custom Dress Fitting",
              imageSrc: "https://images.pexels.com/photos/40468545/pexels-photo-40468545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Amélia Fatima"
            },
            {
              quote: "I can’t recommend her enough. Her work is absolutely perfect, every detail is done with so much care, talent, and excellence.",
              name: "Mari Kaizer",
              role: "Bespoke Eveningwear",
              imageSrc: "https://picsum.photos/seed/1846478234/1200/800",
              imageAlt: "Portrait of Mari Kaizer"
            },
            {
              quote: "Impeccable work, very meticulous and attentive. I loved the result ❤️ I highly recommend her.",
              name: "Cassiane Gomes",
              role: "Special Occasion Gown",
              imageSrc: "https://picsum.photos/seed/216727038/1200/800",
              imageAlt: "Portrait of Cassiane Gomes"
            },
            {
              quote: "I was very well received when I urgently needed a party dress for my daughter, and it turned out fantastic. Professionalism, ethics, excellence.",
              name: "Glaicia P. N. Miranda",
              role: "Party & Prom Dress",
              imageSrc: "https://picsum.photos/seed/982443774/1200/800",
              imageAlt: "Portrait of Glaicia P. N. Miranda"
            },
            {
              quote: "I trust her work completely! She’s been taking care of my clothes for a long time and everything always comes out impeccable, with great care.",
              name: "Jessica Danubia Goncalves",
              role: "Long-time Atelier Client",
              imageSrc: "https://picsum.photos/seed/278113910/1200/800",
              imageAlt: "Portrait of Jessica Danubia Goncalves"
            },
            {
              quote: "A highly professional person, excellent work, and great customer service. I highly recommend them.",
              name: "Daisa Rocha",
              role: "Garment Alteration Client",
              imageSrc: "https://picsum.photos/seed/1904649630/1200/800",
              imageAlt: "Portrait of Daisa Rocha"
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
