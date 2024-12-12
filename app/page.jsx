import { IoIosArrowForward } from "react-icons/io";
import emailIcon from "../public/icons/icon-email.png";
import mapIcon from "../public/icons/icon-world-map.png";
import onlineSupportIcon from "../public/icons/icon-online-support.png";
import Image from 'next/image';
import ListSection from '@/components/home/ListSection';

const features = [
  { title: "Advanced Anti-Corrosion Protection", description: "Designed to resist corrosion even in harsh environments like offshore pipelines and buried pipes." },
  { title: "Easy Application", description: "Pypkote's flexible design allows fast and efficient application, reducing downtime and labor costs." },
  { title: "Durable and Long-Lasting", description: "Provides extended protection, ensuring a long service life for your equipment and pipelines." },
  { title: "Environmental Resistance", description: "Protects against UV, water, and chemical exposure, making it suitable for outdoor and submerged applications." },
  { title: "Compatible with Multiple Surfaces", description: "Can be applied to steel, concrete, and plastic pipes without requiring specialized equipment." }
];

const whyChoosePypkote = [
  { title: "Long-Term Corrosion Prevention", description: "Our petrolatum-based tapes and protective coatings are designed to deliver unmatched protection, minimizing corrosion over decades." },
  { title: "Versatile Protection", description: "Whether you're protecting buried pipelines, above-ground structures, or submerged surfaces, Pypkote adapts to various environments, providing reliable protection across industries." },
  { title: "Cost-Effective Solution", description: "Pypkote's easy application process means reduced labor costs and minimized maintenance, ensuring a better return on investment." }
];

const applicationSections = [
  {
    title: "Pipeline Coating Solutions",
    items: [
      "Buried Pipelines: Ideal for oil and gas pipelines requiring long-term protection against soil corrosivity and moisture penetration.",
      "Subsea Pipelines: Provides exceptional resistance to water pressure and corrosive saltwater, safeguarding pipelines in underwater applications."
    ]
  },
  {
    title: "Structural Protection",
    items: [
      "Bridges and Metal Structures: Prevent rust and corrosion on bridges, girders, and exposed steel structures, ensuring structural integrity.",
      "Industrial Storage Tanks: Protect large storage tanks from corrosion caused by exposure to chemicals, weather, and environmental pollutants."
    ]
  },
  {
    title: "Marine and Offshore Applications",
    items: [
      "Marine Pipelines: Protects pipes exposed to constant moisture, saltwater, and harsh weather conditions.",
      "Harbor and Port Infrastructure: Prevents corrosion in areas exposed to tidal forces and fluctuating water levels."
    ]
  }
];


const pypkoteVariations = [
  {
    name: "Pypkote 4mm",
    description: "A 4MM thick, specially engineered sandwich hot applied on mild steel pipelines."
  },
  {
    name: "Pypkote 2mm", 
    description: "A 2MM thick, highly flexible pre-formed barrier that can also be applied in 2 layers."
  },
  {
    name: "Pypkote Self Adhesive",
    description: "Self adhesive pipe coating and wrapping membrane, applied simply on peel and stick method."
  },
  {
    name: "Pypkote AW 4mm",
    description: "A coal tar based pipe coating tape for extra protection."
  },
  {
    name: "Pypkote AW 2mm",
    description: "A 2MM thick flexible coal tar based tape"
  }
];

const pypkoteSpecifications = [
  {
    parameter: "Product Name",
    specification: "Pypkote Anti-Corrosion Tape & Coating"
  },
  {
    parameter: "Composition",
    specification: "Petrolatum-based Tape with Inhibitive Fillers"
  },
  {
    parameter: "Thickness",
    specification: "1.2mm (tape)"
  },
  {
    parameter: "Width",
    specification: "50mm, 100mm, 150mm"
  },
  {
    parameter: "Temperature Range",
    specification: "-30°C to +80°C"
  },
  {
    parameter: "Tensile Strength",
    specification: "15 N/mm"
  },
  {
    parameter: "Dielectric Strength",
    specification: "36 kV/mm"
  },
  {
    parameter: "UV Resistance",
    specification: "Excellent"
  },
  {
    parameter: "Water Resistance",
    specification: "Impermeable"
  },
  {
    parameter: "Chemical Resistance",
    specification: "Resistant to acids, salts, and alkalis"
  }
];

const pypkoteApplicationSteps = [
  { title: "Surface Preparation", description: "Clean the surface to remove dirt, rust, and loose particles." },
  { title: "Primer Application (Optional)", description: "In certain environments, a primer may be applied to improve adhesion." },
  { title: "Tape Wrapping", description: "Start at the end of the pipe and wrap Pypkote tightly around the pipe surface with at least a 55% overlap." },
  { title: "Final Check", description: "Ensure a smooth application, pressing down the tape to remove air pockets." },
  { title: "Additional Layers", description: "In extremely corrosive environments, multiple layers can be applied for enhanced protection." }
];

const casestudies = [
  {
    title: "Project Highlight: Offshore Oil Pipeline in Gujarat, India",
    challenge: "Corrosion in subsea pipelines due to saltwater exposure.",
    solution: "Pypkote anti-corrosion tape was applied, offering full protection against water ingress and corrosion.",
    result: "No signs of corrosion after 5 years of installation, improving pipeline life and operational efficiency."
  },
  {
    title: "Project Highlight: Municipal Water Supply Pipeline",
    challenge: "Corrosion in underground pipelines caused frequent leaks.",
    solution: "Pypkote was applied to repair and protect the aging pipes.",
    result: "Leak rates dropped by 90%, extending the life of the water supply system."
  }
];

const pypkoteAdvantages = [
  { title: "Superior Material Composition", description: "Unlike other anti-corrosion solutions like petrolatum tape from Denso or pipe wraps from CS-NRI, Pypkote's unique formula offers better resistance to UV radiation and extreme temperatures." },
  { title: "Longer Lifespan", description: "Pypkote is formulated to provide protection for up to 25 years, making it more durable compared to traditional coatings." },
  { title: "Environmental Safety", description: "Pypkote is eco-friendly and safe for both operators and the environment, meeting stringent safety standards." }
];

const pypkoteFAQs = [
  {
    question: "What surfaces can Pypkote be applied to?",
    answer: "Pypkote is versatile and can be applied to metal, concrete, and plastic surfaces."
  },
  {
    question: "Is Pypkote environmentally safe?",
    answer: "Yes, Pypkote is non-toxic, making it safe for use in sensitive environments like water pipelines and marine applications."
  },
  {
    question: "How long does Pypkote last?",
    answer: "Pypkote provides protection for up to 25 years, depending on environmental conditions."
  }
];

export default function Home() {
  return (
    <div>
        {/* Section1  */}
        <div className='h-[190px] bg-slate-800 w-full'>
          <div className='wrapper flex items-center justify-between h-full'>
              <h2 className='text-4xl font-semibold text-white'>Pypkote</h2>
              <div className='uppercase flex gap-2 items-center text-sm font-medium text-white'>
                home  
                <IoIosArrowForward/>
                Pypkote
              </div>
          </div>
        </div>

        
        <div className="wrapper pt-10">
            {/* Section2 */}
            <div className="my-10 mt-20">
               <h3 className="text-3xl font-semibold">Pypkote - Anti-Corrosion Protection for Pipes and Structures</h3>
               <p className="mt-8 text-sm">
                  Pypkote is a high-performance anti-corrosion coating system designed to protect pipelines, 
                  industrial equipment, and metal structures from corrosion and environmental damage. Engineered to provide long-lasting protection, 
                  Pypkote is suitable for a wide range of industries, including oil and gas, water supply, and infrastructure projects. Our product delivers superior 
                  protection through its innovative petrolatum tape and robust coating technology, ensuring the longevity and durability of your assets.
                </p>
            </div>



          <ListSection title="Key Features and Benefits" items={features} />
          
          <ListSection title="Why Choose Pypkote for Anti-Corrosion Protection?" 
          subTitle={"Corrosion is one of the biggest challenges in industrial operations, leading to costly repairs, downtime, and even hazardous conditions. Pypkote offers a comprehensive solution by providing:"} 
          items={whyChoosePypkote} />



            {/* Section 5  */}
            <div>
              <h4 className="font-semibold">Applications of Pypkote Anti-Corrosion Systems</h4>
              <p className="mt-8 mb-6 text-sm">
                Pypkote is designed to handle a wide variety of industrial use cases.
                It is trusted by companies across several sectors for critical asset protection:
              </p>
              
              {applicationSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mt-3 text-sm">
                  <h5>{sectionIndex+1}{". "}{section.title}</h5>
                  <ul className="list-disc pl-8 mt-3">
                    {section.items.map((item, itemIndex) => {
                      const [bold, rest] = item.split(': ');
                      return (
                        <li key={itemIndex} className="mb-2">
                          <span>{bold}</span>: {rest}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Section 6  */}
            <div className="my-20">
              <h4 className="text-lg font-semibold">Available Pypkote Variations</h4>
              <div className="grid grid-cols-3 gap-5 my-10">
                  {
                     pypkoteVariations.map((item, index) => (
                       <div key={index} className="bg-white shadow-sm border rounded-lg p-2 transition-transform transform">
                         <div className="w-full h-[180px] bg-slate-500 rounded-t-lg"></div>
                         <h5 className="text-xl my-4 font-semibold text-gray-800">{item.name}</h5>
                         <p className="flex text-gray-600 font-medium">{item.description}</p>
                         <div className="flex justify-center my-5">
                           <button className="bg-[#FFAA2B] rounded-full text-sm font-medium py-2 px-4 text-white mx-auto hover:bg-[#e59400] transition duration-300">
                             TDS
                           </button>
                         </div>
                       </div>
                     ))
                  }
              </div>
            </div>

            {/* Section 7 */}
            <div className="my-10">
              <h4 className="font-semibold mb-5">Pypkote - Product Specifications</h4>
              <table className="w-[70%] border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#D9D9D9]">
                    <th className="border border-gray-300 p-2 font-bold text-center">Parameter</th>
                    <th className="border border-gray-300 p-2 font-bold  text-center">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {pypkoteSpecifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 font-semibold p-1">{spec.parameter}</td>
                      <td className="border border-gray-300 p-1">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ListSection 
              title="How to Apply Pypkote Anti-Corrosion Tape" 
              subTitle="Follow these steps for optimal application" 
              items={pypkoteApplicationSteps} 
              ordered = {true}
            />

            {/* Section 9 */}
            <div className="my-10">
              <h4 className="font-semibold text-lg">Case Studies and Success Stories</h4>
              
              {casestudies.map((study, studyIndex) => (
                <div key={studyIndex} className="mt-6 ml-2">
                  <h5 className="text-base font-semibold">{study.title}</h5>
                  <ul className="pl-2 mt-3 text-sm">
                    <li className="mb-2">
                      <span className="font-bold">Challenge</span>: {study.challenge}
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Solution</span>: {study.solution}
                    </li>
                    <li className="mb-2">
                      <span className="font-bold">Result</span>: {study.result}
                    </li>
                  </ul>
                </div>
              ))}
            </div>


            <ListSection title="Why Pypkote Stands Out" items={pypkoteAdvantages} ordered={true} />
        </div>

        {/* Get in out with us  */}
        <div className="h-[460px] bg-slate-100 p-14">
           <div className="wrapper flex flex-col items-center">
              <h3 className="text-3xl font-semibold">Get In Touch with Us</h3>

              <p className="mt-10">
                For more information about Pypkote or to request a demo, please contact us at info@iwlindia.com or call us at +91 80 1234 5678.
              </p>

              <div className="flex justify-between mt-10">
                  <div className="w-[40%]">
                      <h5 className="text-center">Explore how Pypkote can protect your pipelines and
                      structures from corrosion.</h5>

                      <div className="mt-10 h-[90px] w-[80%] mx-auto bg-[#E19D34] text-white text-2xl font-semibold rounded-md flex items-center justify-center hover:bg-[#d68a2b] transition duration-300">
                        Download brochure
                      </div>
                  </div>

                  <div className="w-[40%]">
                      <h5 className="text-center">Have questions? Our team is ready to assist you with custom solutions.</h5>

                      <div className="mt-10 h-[90px] w-[80%] mx-auto bg-[#E19D34] text-white text-2xl font-semibold rounded-md flex items-center justify-center">
                         Talk to an expert
                      </div>
                  </div>
              </div>
           </div>
           
        </div>


        {/* FAQs */}
        <div className="my-20 wrapper">
          <h4 className="font-semibold text mb-6">FAQs About Pypkote Anti-Corrosion Systems</h4>
          
          <div className="space-y-4 mt-2">
            {pypkoteFAQs.map((faq, index) => (
              <div key={index} className="text-sm">
                <p className="font-bold mb-2">Q: {faq.question}</p>
                <p>A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Contact Us  */}
        <div className="my-20 wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex gap-8 items-start">
              <Image
                width={80}
                height={80}
                src={mapIcon}
                alt="Map Icon"
               />
              <div>
                <h5 className="font-semibold text-lg">Head Office</h5>
                <p className="mt-5 text-[#9999a1]">
                  W360, North Main Road<br />
                  Anna Nagar West,<br />
                  Chennai 600 101,
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <Image
                width={80}
                height={80}
                src={onlineSupportIcon}
                alt="Telephone Icon"
               />
              <div>
                <h5 className="font-semibold text-lg">Telephones</h5>
                <p className="mt-5 text-[#9999a1]">Board: +91 44 2615 6000</p>
                <p className="text-[#9999a1]">Sales: +91 44 2615 6000 Extn 64</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <Image
                width={70}
                height={70}
                src={emailIcon}
                alt="Email Icon"
               />
              <div>
                <h5 className="font-semibold text-lg">Email Us</h5>
                <p className="mt-5 text-[#9999a1]">iwl@iwl.in</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
