import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
  {
    id: 1,
        title: "Skyline Haven",
        price: "$250,000",
        location: "California",
        image: project_img_1,
        description: "Skyline Haven is a luxurious high-rise apartment complex designed to elevate urban living to new heights. Offering breathtaking panoramic views of the city, this architectural masterpiece seamlessly blends modern elegance with unparalleled comfort. Residents enjoy top-notch amenities, including a rooftop infinity pool, a state-of-the-art fitness center, and a stylish lounge perfect for socializing or unwinding. The interiors feature open-concept layouts with floor-to-ceiling windows, premium finishes, and smart home technology for ultimate convenience. Located in the heart of California, Skyline Haven provides easy access to vibrant cultural scenes, fine dining, and bustling business districts. The building’s sleek design incorporates sustainable elements like energy-efficient lighting and water-saving systems, appealing to eco-conscious buyers. Whether you’re a professional seeking a dynamic lifestyle or a family desiring a sophisticated home, Skyline Haven offers a unique blend of luxury and practicality. With 24/7 concierge services, secure parking, and meticulously landscaped outdoor spaces, every detail has been crafted to enhance your living experience. This is more than just a residence—it’s a statement of prestige and a gateway to the best that city life has to offer.",
        general: {
          utilities: "Electricity, Water, High-Speed Internet, Heating/Cooling",
          petPolicy: "Pet-friendly with a dedicated dog park",
          community: "Rooftop infinity pool, fitness center, resident lounge"
        },
        roomDetails: {
          roomSize: "1,200 sq ft",
          numberOfBedrooms: 2,
          numberOfBathrooms: 2
        },
        nearbyPlaces: {
          school: "1.5 miles",
          busStop: "0.3 miles",
          hospital: "2 miles"
        }
      },
      {
        id: 2,
        title: "Vista Verde",
        price: "$250,000",
        location: "San Francisco",
        image: project_img_2,
        description: "Vista Verde redefines modern living with its eco-friendly design and serene surroundings in San Francisco. Nestled amidst lush greenery, this apartment complex prioritizes sustainability with energy-efficient appliances, solar panels, and a rainwater harvesting system. The contemporary architecture features expansive windows that flood the spacious interiors with natural light, creating a harmonious connection with the outdoors. Residents can enjoy a tranquil courtyard, walking trails, and a community garden, fostering a sense of peace and well-being. Located near major commercial hubs and cultural landmarks, Vista Verde offers the perfect balance of urban convenience and natural retreat. Amenities include a fully equipped gym, a yoga studio, and a cozy resident lounge with panoramic views of the city skyline. Each unit boasts high-end finishes, smart thermostats, and soundproof walls for privacy and comfort. Ideal for environmentally conscious individuals or families, Vista Verde combines luxury with a commitment to reducing its carbon footprint. With secure parking, bike storage, and proximity to public transit, this residence caters to a modern, active lifestyle while promoting sustainability. Vista Verde isn’t just a home—it’s a sanctuary where green living meets sophisticated design.",
        general: {
          utilities: "Solar-powered electricity, Water, High-Speed Internet",
          petPolicy: "Pet-friendly with restrictions",
          community: "Community garden, yoga studio, resident lounge"
        },
        roomDetails: {
          roomSize: "1,150 sq ft",
          numberOfBedrooms: 2,
          numberOfBathrooms: 1.5
        },
        nearbyPlaces: {
          school: "2 miles",
          busStop: "0.5 miles",
          hospital: "3 miles"
        }
      },
      {
        id: 3,
        title: "Serenity Suites",
        price: "$250,000",
        location: "Chicago",
        image: project_img_3,
        description: "Serenity Suites in Chicago offers an elegant escape from the urban hustle, blending tranquility with high-end living. Designed for comfort, these spacious suites feature sophisticated interiors with hardwood floors, custom cabinetry, and expansive windows showcasing stunning skyline views. Residents can unwind in the peaceful rooftop garden, relax in the spa-inspired wellness center, or entertain guests in the chic communal lounge. The building’s modern architecture incorporates soundproofing and energy-efficient systems, ensuring a serene and sustainable living environment. Located in a vibrant Chicago neighborhood, Serenity Suites provides easy access to world-class dining, entertainment, and business districts. Each unit includes smart home features like automated lighting and climate control, paired with luxurious finishes such as marble countertops and designer fixtures. Additional amenities include a 24/7 fitness center, secure underground parking, and a pet-friendly policy with a dedicated dog park. Whether you’re a professional seeking a calm retreat or a couple desiring upscale urban living, Serenity Suites delivers a perfect blend of peace and sophistication. With attentive concierge services and meticulously maintained grounds, this residence promises a lifestyle of elegance and relaxation in the heart of the Windy City.",
        general: {
          utilities: "Electricity, Water, High-Speed Internet, Gas Heating",
          petPolicy: "Pet-friendly with a dog park",
          community: "Rooftop garden, wellness center, communal lounge"
        },
        roomDetails: {
          roomSize: "1,300 sq ft",
          numberOfBedrooms: 3,
          numberOfBathrooms: 2
        },
        nearbyPlaces: {
          school: "1.8 miles",
          busStop: "0.4 miles",
          hospital: "2.5 miles"
        }
      },
      {
        id: 4,
        title: "Central Square",
        price: "$250,000",
        location: "Los Angeles",
        image: project_img_4,
        description: "Central Square offers stylish urban living in the pulsating heart of downtown Los Angeles. This contemporary residence is designed for those who crave convenience and connectivity, with immediate access to trendy restaurants, cutting-edge entertainment venues, and thriving business districts. The open-plan apartments feature sleek designs with high ceilings, large windows, and premium finishes like quartz countertops and stainless steel appliances. Residents can enjoy a vibrant community atmosphere with amenities such as a rooftop terrace with BBQ grills, a fully equipped fitness center, and a cozy co-working space for remote professionals. Central Square’s prime location ensures you’re steps away from cultural hotspots and public transit, making it ideal for city dwellers with dynamic lifestyles. The building incorporates smart home technology, energy-efficient lighting, and secure entry systems for modern comfort and safety. A landscaped courtyard provides a green oasis amidst the urban landscape, perfect for relaxation or social gatherings. With 24/7 concierge services and ample parking, Central Square caters to both convenience and luxury. This isn’t just a place to live—it’s a gateway to the best of Los Angeles, where style meets accessibility.",
        general: {
          utilities: "Electricity, Water, High-Speed Internet",
          petPolicy: "Pet-friendly with restrictions",
          community: "Rooftop terrace, fitness center, co-working space"
        },
        roomDetails: {
          roomSize: "1,100 sq ft",
          numberOfBedrooms: 2,
          numberOfBathrooms: 1.5
        },
        nearbyPlaces: {
          school: "1.2 miles",
          busStop: "0.2 miles",
          hospital: "1.8 miles"
        }
      },
      {
        id: 5,
        title: "Sunrise Apartments",
        price: "$275,000",
        location: "San Diego",
        image: project_img_5,
        description: "Sunrise Apartments in San Diego is a beautifully designed complex that captures the essence of modern coastal living. With its striking architecture, this residence features spacious interiors bathed in natural light, thanks to oversized windows and open floor plans. Each unit boasts high-end finishes like hardwood flooring, gourmet kitchens with island counters, and private balconies perfect for enjoying the California sunrise. Residents can take advantage of a vibrant community atmosphere with a sparkling pool, a clubhouse for events, and a fitness center with ocean views. Located in a prime San Diego neighborhood, Sunrise Apartments offers proximity to pristine beaches, trendy boutiques, and top-rated restaurants. The property emphasizes sustainability with energy-efficient appliances and solar power, appealing to eco-minded buyers. Additional perks include secure parking, a pet-friendly environment with a dog run, and lush landscaped grounds that enhance the outdoor experience. Whether you’re a young professional, a retiree, or a small family, Sunrise Apartments provides a blend of luxury, community, and convenience. This is more than a home—it’s a lifestyle destination where every day feels like a vacation in sunny San Diego.",
        general: {
          utilities: "Electricity, Water, Solar-powered systems",
          petPolicy: "Pet-friendly with a dog run",
          community: "Sparkling pool, clubhouse, fitness center"
        },
        roomDetails: {
          roomSize: "1,250 sq ft",
          numberOfBedrooms: 2,
          numberOfBathrooms: 2
        },
        nearbyPlaces: {
          school: "2 miles",
          busStop: "0.6 miles",
          hospital: "3 miles"
        }
      },
      {
        id: 6,
        title: "Horizon Towers",
        price: "$290,000",
        location: "Austin",
        image: project_img_6,
        description: "Horizon Towers in Austin is a sophisticated high-rise residence that redefines urban luxury with its stunning city views and cutting-edge design. This architectural gem features expansive apartments with floor-to-ceiling windows, sleek finishes like marble countertops, and smart home systems for seamless living. Residents enjoy state-of-the-art facilities, including a rooftop infinity pool, a 24/7 gym with personal trainers, and a stylish lounge with panoramic vistas of Austin’s skyline. Located in a thriving neighborhood, Horizon Towers offers easy access to the city’s vibrant music scene, tech hubs, and gourmet dining options. The building prioritizes sustainability with energy-efficient lighting and water conservation systems, appealing to environmentally conscious buyers. A landscaped terrace provides a serene escape, while secure parking and bike storage cater to active urbanites. With its dynamic blend of modern amenities and a prime location, Horizon Towers is perfect for professionals, creatives, or anyone seeking an upscale lifestyle. The attentive concierge team ensures every need is met, from package handling to event planning. Horizon Towers isn’t just a residence—it’s a gateway to Austin’s eclectic culture and a pinnacle of contemporary living.",
        general: {
          utilities: "Electricity, Water, High-Speed Internet",
          petPolicy: "Pet-friendly with restrictions",
          community: "Rooftop infinity pool, gym, stylish lounge"
        },
        roomDetails: {
          roomSize: "1,350 sq ft",
          numberOfBedrooms: 3,
          numberOfBathrooms: 2
        },
        nearbyPlaces: {
          school: "1.7 miles",
          busStop: "0.4 miles",
          hospital: "2.2 miles"
        }
      },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];