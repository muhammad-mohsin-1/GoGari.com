export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  passengers: number;
  transmission: string;
  fuel: string;
  rating: number;
  location: string;
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'Sedan',
    price: 5000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.8,
    location: 'Lahore',
    description: 'The Toyota Corolla is a reliable and comfortable sedan perfect for city driving and long journeys. With excellent fuel economy and modern features, it\'s ideal for families and business travelers.',
    features: ['Air Conditioning', 'Power Steering', 'ABS Brakes', 'Airbags', 'Multimedia System', 'USB Charging']
  },
  {
    id: 2,
    name: 'Honda Civic',
    category: 'Sedan',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1634737581963-5a22ba471961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.9,
    location: 'Lahore',
    description: 'The Honda Civic offers a perfect blend of style, performance, and reliability. Known for its smooth ride and advanced safety features, it\'s a top choice for discerning customers.',
    features: ['Cruise Control', 'Sunroof', 'Leather Seats', 'Climate Control', 'Lane Watch', 'Honda Sensing']
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    category: 'SUV',
    price: 12000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/1200px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg',
    passengers: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    rating: 4.7,
    location: 'Lahore',
    description: 'The Toyota Fortuner is a powerful SUV designed for both city and off-road adventures. With spacious 7-seater capacity and robust build, it\'s perfect for family trips and group travel.',
    features: ['4WD', 'Hill Assist', 'Parking Sensors', '7 Seats', 'Premium Audio', 'Roof Rails']
  },
  {
    id: 4,
    name: 'Suzuki Alto',
    category: 'Economy',
    price: 3000,
    image: 'https://d36dyyw8x5qpnf.cloudfront.net/photos_new/2024-11-02/suzuki-alto-hybrid-a-76076lineup_b_08.jpg',
    passengers: 4,
    transmission: 'Manual',
    fuel: 'Petrol',
    rating: 4.5,
    location: 'Lahore',
    description: 'The Suzuki Alto is an economical choice for budget-conscious travelers. Compact and fuel-efficient, it\'s perfect for solo travelers or couples exploring the city.',
    features: ['Compact Design', 'Fuel Efficient', 'Easy Parking', 'AC', 'Power Windows', 'Central Locking']
  },
  {
    id: 5,
    name: 'Land Cruiser',
    category: 'SUV',
    price: 20000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVyj7RNT-2ANmNg_blChqismtZCfyagngvw&s',
    passengers: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    rating: 5.0,
    location: 'Islamabad',
    description: 'The Land Cruiser is the ultimate luxury SUV, offering unmatched comfort and capability. Ideal for VIP transport, long journeys, and challenging terrains.',
    features: ['Premium Interior', 'Advanced Safety', 'Off-Road Package', 'Rear Entertainment', 'Cooled Seats', 'Adaptive Cruise']
  },
  {
    id: 6,
    name: 'BMW 5 Series',
    category: 'Luxury',
    price: 15000,
    image: 'https://autodesignmagazine.com/wp-content/uploads/2023/10/https___eventistampabmw.com_wp-content_uploads_2023_10_DM_6160.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.9,
    location: 'Karachi',
    description: 'Experience luxury and performance with the BMW 5 Series. Perfect for business executives and special occasions, offering cutting-edge technology and premium comfort.',
    features: ['M Sport Package', 'Gesture Control', 'Harman Kardon', 'Head-Up Display', 'Massage Seats', 'Wireless Charging']
  },
  {
    id: 7,
    name: 'Honda BR-V',
    category: 'SUV',
    price: 7000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2017_Honda_BR-V_1.5_E_DG1_%28190316%29.jpg/330px-2017_Honda_BR-V_1.5_E_DG1_%28190316%29.jpg',
    passengers: 7,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.6,
    location: 'Lahore',
    description: 'Honda BR-V combines the versatility of an SUV with the comfort of a sedan. Perfect for families, with 7-seater configuration and excellent fuel economy.',
    features: ['7 Seater', 'Smart Entry', 'Push Start', 'Rear Camera', 'Alloy Wheels', 'Fog Lamps']
  },
  {
    id: 8,
    name: 'Suzuki Cultus',
    category: 'Economy',
    price: 3500,
    image: 'https://suzukifortmotors.com/wp-content/uploads/2020/04/Suzuki-Cultus-VXR.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.4,
    location: 'Karachi',
    description: 'Suzuki Cultus offers great value with modern features and reliable performance. Ideal for daily commutes and city travel with comfortable seating for 5.',
    features: ['Auto AC', 'Keyless Entry', 'Touchscreen', 'Reverse Camera', 'Alloy Wheels', 'ABS']
  },
  {
    id: 9,
    name: 'Audi A6',
    category: 'Luxury',
    price: 18000,
    image: 'https://kvdbil-images.imgix.net/7263214/e68cfdc5.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.9,
    location: 'Islamabad',
    description: 'The Audi A6 represents sophistication and advanced engineering. Perfect for corporate events and VIP transport with its luxurious interior and smooth performance.',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen', 'Adaptive Air', 'Night Vision']
  },
  {
    id: 10,
    name: 'Toyota Yaris',
    category: 'Sedan',
    price: 4500,
    image: 'https://www.gari.pk/images/news/2025-04/4291_1_36292.png',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.7,
    location: 'Lahore',
    description: 'Toyota Yaris is a compact sedan that offers excellent fuel economy and modern features. Perfect for daily commutes and weekend getaways.',
    features: ['Eco Mode', 'Touchscreen', 'Cruise Control', 'Immobilizer', 'Dual Airbags', 'USB/AUX']
  },
  {
    id: 11,
    name: 'Kia Sportage',
    category: 'SUV',
    price: 9000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/2022_Kia_Sportage_GT-Line_ISG_HEV_Automatic_1.6_Front.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 4.6,
    location: 'Islamabad',
    description: 'Kia Sportage offers modern design and advanced technology. Great for families and adventure seekers with its spacious interior and safety features.',
    features: ['Panoramic Roof', 'Wireless Charging', '360 Camera', 'Blind Spot', 'Lane Keep', 'Smart Cruise']
  },
  {
    id: 12,
    name: 'Mercedes C-Class',
    category: 'Luxury',
    price: 16000,
    image: 'https://sureshdrives.com/blog/wp-content/uploads/2024/12/c300-mercedes-w206-1.jpg',
    passengers: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    rating: 5.0,
    location: 'Karachi',
    description: 'Mercedes C-Class epitomizes luxury and elegance. Perfect for weddings, corporate events, and those who appreciate German engineering excellence.',
    features: ['Burmester Audio', 'MBUX System', 'AMG Line', 'Multibeam LED', '64-Color Ambient', 'Active Brake']
  }
];