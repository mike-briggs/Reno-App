const categories = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    tags: ['contractors', 'inspirations'],
    count: 147,
    image: require('../assets/icons/flambe.svg')
  },
  {
    id: 'garden',
    name: 'Garden',
    tags: ['contractors', 'FAQ'],
    count: 16,
    image: require('../assets/icons/garden.png')
  },
  {
    id: 'bath',
    name: 'Bath',
    tags: ['contractors', 'inspirations'],
    count: 68,
    image: require('../assets/icons/bath.png')
  },
  {
    id: 'yard',
    name: 'Yard',
    tags: ['contractors', 'FAQ'],
    count: 17,
    image: require('../assets/icons/yard.png')
  },
  {
    id: 'light',
    name: 'Light',
    tags: ['contractors', 'FAQ'],
    count: 47,
    image: require('../assets/icons/light.png')
  },
  {
    id: 'all',
    name: 'All',
    tags: ['contractors', 'FAQ'],
    count: 47,
    image: require('../assets/icons/garden.png')
  },
];

const products = [
  {
    id: 1, 
    name: '16 Best Plants That Thrive In Your Bedroom',
    description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ]
  }
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'briggzy',
  location: 'Whitby, ON',
  email: 'michael.briggs@queensu.ca',
  avatar: require('../assets/images/avatar.png'),
  budget: 10000,
  
  notifications: true,
  newsletter: false,
};

export {
  categories,
  explore,
  products,
  profile,
}