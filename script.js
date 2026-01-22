// Mysuru Unexplored - Tourism Platform Data
const data = {
    categories: [
        { id: 'hidden-places', name: 'Hidden Places', icon: 'fa-landmark', description: 'Discover Mysore\'s secret locations' },
        { id: 'local-artisans', name: 'Local Artisans', icon: 'fa-hands', description: 'Meet traditional craftspeople' },
        { id: 'cultural-experiences', name: 'Cultural Experiences', icon: 'fa-theater-masks', description: 'Immerse in local traditions' },
        { id: 'traditional-food', name: 'Traditional Food', icon: 'fa-utensils', description: 'Savor authentic flavors' }
    ],
    artisans: [
        // Channapatna Toy Maker
        {
            id: 1,
            name: 'Channapatna Toy Maker',
            description: 'Traditional wooden toy maker specializing in Channapatna lacquered toys.',
            rating: 4.8,
            distance: '10 km away',
            category: 'Local Artisans',
            subcategory: 'handicrafts',
            image: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Bannimantap',
            address: 'Main Street, Bannimantap, Mysore',
            hours: '9:00 AM - 6:00 PM',
            contact: '+91 98765 43210',
            email: 'toys@example.com',
            story: 'Creating traditional Channapatna wooden toys using natural dyes and eco-friendly materials.',
            highlights: ['Heritage Craft', 'Eco-friendly Colors', 'Handmade'],
            price: '₹50 - ₹500',
            verified: true,
            coordinates: [12.3000, 76.6500],
            approved: true
        },
        // Mysore Silk Weaver
        {
            id: 2,
            name: 'Mysore Silk Weaver',
            description: 'Master weaver creating authentic Mysore silk sarees and fabrics.',
            rating: 4.9,
            distance: '2 km away',
            category: 'Local Artisans',
            subcategory: 'textiles',
            image: 'https://images.unsplash.com/photo-1662904262396-699c0003d88f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Agrahara',
            address: 'Silk Colony, Agrahara, Mysore',
            hours: '10:00 AM - 7:00 PM',
            contact: '+91 98765 43211',
            email: 'silk@example.com',
            story: 'Master weaver creating authentic Mysore silk sarees with traditional motifs and techniques.',
            highlights: ['Certified', 'Traditional Method', 'Pure Silk'],
            price: '₹1000 - ₹10000',
            verified: true,
            coordinates: [12.2985, 76.6338],
            approved: true
        },
        // Stone Sculptor
        {
            id: 3,
            name: 'Stone Sculptor',
            description: 'Traditional stone sculptor creating intricate temple art and sculptures.',
            rating: 4.7,
            distance: '15 km away',
            category: 'Local Artisans',
            subcategory: 'sculpture',
            image: 'https://images.unsplash.com/photo-1537602114470-9c68d50ca8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Nanjangud',
            address: 'Temple Road, Nanjangud, Mysore',
            hours: '8:00 AM - 5:00 PM',
            contact: '+91 98765 43212',
            email: 'sculptor@example.com',
            story: 'Creating intricate stone sculptures with traditional techniques passed down through generations.',
            highlights: ['Heritage Art', 'Custom Orders', 'Temple Craft'],
            price: '₹5000 - ₹50000',
            verified: true,
            coordinates: [12.1833, 76.6833],
            approved: true
        }
    ],
    places: [
        // Kukkarahalli Lake Back Path
        {
            id: 1,
            name: 'Kukkarahalli Lake Back Path',
            description: 'Tranquil walking path behind Kukkarahalli Lake with scenic views.',
            rating: 4.5,
            distance: '3 km away',
            category: 'Hidden Places',
            subcategory: 'nature',
            image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Jayalakshmipuram',
            address: 'Behind Kukkarahalli Lake, Jayalakshmipuram, Mysore',
            hours: '6:00 AM - 7:00 PM',
            contact: 'Available on request',
            email: 'hiddenplaces@example.com',
            story: 'A serene path that offers beautiful views of the lake and surrounding nature.',
            highlights: ['Scenic Views', 'Bird Watching', 'Tranquil'],
            price: 'Free',
            verified: true,
            coordinates: [12.2958, 76.6392],
            approved: true
        },
        // Lingambudhi Bird Sanctuary
        {
            id: 2,
            name: 'Lingambudhi Bird Sanctuary',
            description: 'Undiscovered bird sanctuary with diverse avian species.',
            rating: 4.6,
            distance: '8 km away',
            category: 'Hidden Places',
            subcategory: 'sanctuary',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Lingambudhi',
            address: 'Lingambudhi Village, Mysore',
            hours: '6:00 AM - 5:00 PM',
            contact: 'Available on request',
            email: 'birds@example.com',
            story: 'A peaceful sanctuary home to various bird species and native flora.',
            highlights: ['Bird Watching', 'Nature Walk', 'Peaceful'],
            price: '₹30',
            verified: true,
            coordinates: [12.2658, 76.6092],
            approved: true
        },
        // Karighatta Hill Viewpoint
        {
            id: 3,
            name: 'Karighatta Hill Viewpoint',
            description: 'Secluded hilltop with breathtaking views of Mysore city.',
            rating: 4.7,
            distance: '14 km away',
            category: 'Hidden Places',
            subcategory: 'viewpoint',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Nanjangud',
            address: 'Near Karighatta Temple, Nanjangud, Mysore',
            hours: '5:00 AM - 6:00 PM',
            contact: 'Available on request',
            email: 'viewpoint@example.com',
            story: 'A hidden gem offering panoramic views of Mysore city and surrounding landscapes.',
            highlights: ['Panoramic Views', 'Nature Photography', 'Sunset Spot'],
            price: '₹20',
            verified: true,
            coordinates: [12.1833, 76.6833],
            approved: true
        }
    ],
    experiences: [
        // Doll Making Workshop
        {
            id: 1,
            name: 'Traditional Doll Making Workshop',
            description: 'Learn traditional doll making techniques from master artisans.',
            rating: 4.6,
            distance: '2 km away',
            category: 'Cultural Experiences',
            subcategory: 'workshop',
            image: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Mysuru',
            address: 'Cultural Center, Mysore',
            hours: '2:00 PM - 5:00 PM',
            contact: '+91 98765 43213',
            email: 'workshop@example.com',
            story: 'Experience the art of traditional doll making with expert guidance.',
            highlights: ['Hands-on Learning', 'Cultural Experience', 'Take Home'],
            price: '₹300 - ₹500',
            verified: true,
            coordinates: [12.2958, 76.6392],
            approved: true
        },
        // Yakshagana Evening Practice
        {
            id: 2,
            name: 'Evening Yakshagana Practice',
            description: 'Watch evening Yakshagana practice sessions with artists.',
            rating: 4.8,
            distance: '4 km away',
            category: 'Cultural Experiences',
            subcategory: 'performance',
            image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Outskirts',
            address: 'Community Hall, Mysore Outskirts',
            hours: '6:00 PM - 9:00 PM',
            contact: '+91 98765 43214',
            email: 'yakshagana@example.com',
            story: 'Witness the practice sessions of traditional Yakshagana performers.',
            highlights: ['Performance', 'Cultural Immersion', 'Interactive'],
            price: '₹150',
            verified: true,
            coordinates: [12.2858, 76.6292],
            approved: true
        },
        // Temple Flower Market Walk
        {
            id: 3,
            name: 'Temple Flower Market Walk',
            description: 'Guided walk through the vibrant flower market near temples.',
            rating: 4.5,
            distance: '1 km away',
            category: 'Cultural Experiences',
            subcategory: 'tour',
            image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Devaraja Market',
            address: 'Old Market Area, Devaraja Market, Mysore',
            hours: '7:00 AM - 10:00 AM',
            contact: '+91 98765 43215',
            email: 'flowermarket@example.com',
            story: 'Explore the colorful flower market with insights into its cultural significance.',
            highlights: ['Cultural Tour', 'Flower Knowledge', 'Local Interaction'],
            price: '₹200',
            verified: true,
            coordinates: [12.2885, 76.6288],
            approved: true
        }
    ],
    food: [
        // Mylari Dosa
        {
            id: 1,
            name: 'Mylari Dosa',
            description: 'Authentic Mylari dosa served with special chutneys and sambar.',
            rating: 4.7,
            distance: '6 km away',
            category: 'Traditional Food',
            subcategory: 'breakfast',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Nazarbad',
            address: 'Food Street, Nazirabad, Mysore',
            hours: '7:00 AM - 11:00 AM',
            contact: '+91 98765 43216',
            email: 'mylari@example.com',
            story: 'Serving authentic Mylari dosa with traditional preparation methods.',
            highlights: ['Authentic Taste', 'Traditional Recipe', 'Popular'],
            price: '₹30 - ₹60',
            verified: true,
            coordinates: [12.3078, 76.6472],
            approved: true
        },
        // Vinayaka Mylari
        {
            id: 2,
            name: 'Vinayaka Mylari',
            description: 'Traditional Mylari sweet shop serving homemade sweets since 1950.',
            rating: 4.6,
            distance: '2 km away',
            category: 'Traditional Food',
            subcategory: 'sweets',
            image: 'https://images.unsplash.com/photo-1563379926898-0ee016ec89d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Agrahara',
            address: 'Temple Road, Agrahara, Mysore',
            hours: '10:00 AM - 9:00 PM',
            contact: '+91 98765 43217',
            email: 'vinayaka@example.com',
            story: 'Family-owned sweet shop with recipes passed down through generations.',
            highlights: ['Heritage Sweet Shop', 'Family Recipe', 'Fresh Made'],
            price: '₹50 - ₹200',
            verified: true,
            coordinates: [12.2985, 76.6338],
            approved: true
        },
        // RRR Restaurant
        {
            id: 3,
            name: 'RRR Restaurant',
            description: 'Multi-cuisine restaurant serving traditional Karnataka dishes.',
            rating: 4.4,
            distance: '1 km away',
            category: 'Traditional Food',
            subcategory: 'multi-cuisine',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: 'Gandhi Square',
            address: 'Gandhi Square, Mysore',
            hours: '11:00 AM - 10:00 PM',
            contact: '+91 98765 43218',
            email: 'rrr@example.com',
            story: 'Multi-cuisine restaurant featuring traditional Karnataka and regional specialties.',
            highlights: ['Traditional', 'Vegetarian', 'Affordable'],
            price: '₹150 - ₹300',
            verified: true,
            coordinates: [12.2958, 76.6392],
            approved: true
        }
    ],
    locations: [
        { id: 'agrahara', name: 'Agrahara', population: 'High', crowdLevel: 'Very Crowded', alternative: 'Bannimantap', coordinates: [12.2985, 76.6338], density: 0.9 },
        { id: 'nanjangud', name: 'Nanjangud', population: 'Medium', crowdLevel: 'Moderately Crowded', alternative: 'Chamrajpet', coordinates: [12.1833, 76.6833], density: 0.6 },
        { id: 'bannimantap', name: 'Bannimantap', population: 'Low', crowdLevel: 'Peaceful', alternative: 'None needed', coordinates: [12.3000, 76.6500], density: 0.2 },
        { id: 'chamrajpet', name: 'Chamrajpet', population: 'High', crowdLevel: 'Very Crowded', alternative: 'Devaraja Mohalla', coordinates: [12.3050, 76.6450], density: 0.8 },
        { id: 'devarajamohalla', name: 'Devaraja Mohalla', population: 'Medium', crowdLevel: 'Moderately Crowded', alternative: 'Vijayanagar', coordinates: [12.2885, 76.6288], density: 0.5 }
    ],
    reviews: [
        { artisanId: 1, name: 'Ravi Kumar', rating: 5, comment: 'Absolutely beautiful sandalwood carvings! Worth every penny.', date: '2024-01-15' },
        { artisanId: 1, name: 'Priya Sharma', rating: 5, comment: 'Amazing craftsmanship and rich heritage story.', date: '2024-01-10' },
        { artisanId: 2, name: 'Amit Patel', rating: 4, comment: 'Best Mysore Pak I\'ve ever tasted!', date: '2024-01-12' },
        { artisanId: 3, name: 'Sunita Reddy', rating: 5, comment: 'Beautiful silk sarees with authentic designs.', date: '2024-01-08' },
        { artisanId: 4, name: 'Anita Iyer', rating: 5, comment: 'Wonderful experience learning traditional folk music.', date: '2024-01-18' }
    ],
    applications: [
        { id: 1, name: 'Spice Market Kitchen', type: 'traditional-food', description: 'Authentic local spices and cooking experiences', location: 'Devaraja Market', contact: '+91 98765 43222', status: 'pending', date: '2024-01-10' },
        { id: 2, name: 'Mysore Wooden Toys Workshop', type: 'handicrafts', description: 'Traditional wooden toys made by local artisans', location: 'Chamundi Hills Road', contact: '+91 98765 43223', status: 'pending', date: '2024-01-12' }
    ]
};

// Initialize data from server API or use default data
async function initializeData() {
    try {
        // Load data for each category separately from server
        data.artisans = await loadCategoryFromServer('artisans') || data.artisans;
        data.places = await loadCategoryFromServer('places') || data.places;
        data.experiences = await loadCategoryFromServer('experiences') || data.experiences;
        data.food = await loadCategoryFromServer('food') || data.food;
        data.locations = await loadCategoryFromServer('locations') || data.locations;
        data.reviews = await loadCategoryFromServer('reviews') || data.reviews;
        data.applications = await loadCategoryFromServer('applications') || data.applications;
    } catch (error) {
        console.warn('Could not load data from server, using default data:', error);
        // Use default data if server load fails
    }
    
    // Update IDs to continue from the highest existing ID
    updateNextIds();
}

// Function to load data by category from server
async function loadCategoryFromServer(category) {
    try {
        const response = await fetch(`/api/data/${category}`);
        if (response.ok) {
            return await response.json();
        }
        return null;
    } catch (error) {
        console.error(`Error loading ${category} data from server:`, error);
        return null;
    }
}

// Function to save data by category to server
async function saveDataByCategory(category, data) {
    try {
        const response = await fetch(`/api/data/${category}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`Failed to save ${category} data: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error(`Error saving ${category} data to server:`, error);
        return { success: false, error: error.message };
    }
}

// Function to save all data to server by category
async function saveDataToStorage() {
    await saveDataByCategory('artisans', data.artisans);
    await saveDataByCategory('places', data.places);
    await saveDataByCategory('experiences', data.experiences);
    await saveDataByCategory('food', data.food);
    await saveDataByCategory('locations', data.locations);
    await saveDataByCategory('reviews', data.reviews);
    await saveDataByCategory('applications', data.applications);
}

// Function to save data to localStorage
function saveDataToStorage() {
    const dataToSave = {
        artisans: data.artisans,
        places: data.places,
        experiences: data.experiences,
        food: data.food,
        locations: data.locations,
        reviews: data.reviews,
        applications: data.applications
    };
    localStorage.setItem('mysuruUnexploredData', JSON.stringify(dataToSave));
}

// Helper function to get data by type
function getDataByType(type) {
    switch(type) {
        case 'artisans':
            return data.artisans;
        case 'places':
            return data.places;
        case 'experiences':
            return data.experiences;
        case 'food':
            return data.food;
        case 'locations':
            return data.locations;
        case 'reviews':
            return data.reviews;
        case 'applications':
            return data.applications;
        default:
            return null;
    }
}

// Variables to track next available IDs
let nextArtisanId = 1;
let nextPlaceId = 1;
let nextExperienceId = 1;
let nextFoodId = 1;

// Function to update next IDs based on current data
function updateNextIds() {
    nextArtisanId = Math.max(...data.artisans.map(item => item.id), 0) + 1;
    nextPlaceId = Math.max(...data.places.map(item => item.id), 0) + 1;
    nextExperienceId = Math.max(...data.experiences.map(item => item.id), 0) + 1;
    nextFoodId = Math.max(...data.food.map(item => item.id), 0) + 1;
}

// Function to add a new listing
async function addListing(type, listingData) {
    const newListing = {
        ...listingData,
        id: getNextId(type),
        rating: listingData.rating || 0,
        distance: listingData.distance || 'N/A',
        verified: listingData.verified || false,
        approved: listingData.approved !== undefined ? listingData.approved : true,
        coordinates: listingData.coordinates || [12.2958, 76.6392] // Default Mysore coordinates
    };
    
    switch(type) {
        case 'artisans':
            data.artisans.push(newListing);
            break;
        case 'places':
            data.places.push(newListing);
            break;
        case 'experiences':
            data.experiences.push(newListing);
            break;
        case 'food':
            data.food.push(newListing);
            break;
        default:
            console.error('Invalid listing type:', type);
            return false;
    }
    
    // Save to server by category
    await saveDataByCategory(type, getDataByType(type));
    
    // Update next ID
    updateNextIds();
    
    return newListing;
}

// Function to update an existing listing
async function updateListing(type, id, updatedData) {
    let listingArray;
    
    switch(type) {
        case 'artisans':
            listingArray = data.artisans;
            break;
        case 'places':
            listingArray = data.places;
            break;
        case 'experiences':
            listingArray = data.experiences;
            break;
        case 'food':
            listingArray = data.food;
            break;
        default:
            console.error('Invalid listing type:', type);
            return false;
    }
    
    const index = listingArray.findIndex(item => item.id == id);
    if (index !== -1) {
        listingArray[index] = { ...listingArray[index], ...updatedData };
        
        // Save to server by category
        await saveDataByCategory(type, listingArray);
        return true;
    }
    
    return false;
}

// Function to delete a listing
async function deleteListingFromType(type, id) {
    let listingArray;
    
    switch(type) {
        case 'artisans':
            listingArray = data.artisans;
            break;
        case 'places':
            listingArray = data.places;
            break;
        case 'experiences':
            listingArray = data.experiences;
            break;
        case 'food':
            listingArray = data.food;
            break;
        default:
            console.error('Invalid listing type:', type);
            return false;
    }
    
    const initialLength = listingArray.length;
    const filteredArray = listingArray.filter(item => item.id != id);
    
    if (filteredArray.length !== initialLength) {
        // Update the array reference
        switch(type) {
            case 'artisans':
                data.artisans = filteredArray;
                break;
            case 'places':
                data.places = filteredArray;
                break;
            case 'experiences':
                data.experiences = filteredArray;
                break;
            case 'food':
                data.food = filteredArray;
                break;
        }
        
        // Save to server by category
        await saveDataByCategory(type, filteredArray);
        return true;
    }
    
    return false;
}

// Helper function to get next ID for a specific type
function getNextId(type) {
    switch(type) {
        case 'artisans':
            return nextArtisanId++;
        case 'places':
            return nextPlaceId++;
        case 'experiences':
            return nextExperienceId++;
        case 'food':
            return nextFoodId++;
        default:
            return 1;
    }
}

// State management
let currentUser = null;
let currentView = 'home';
let selectedCategory = null;
let searchQuery = '';
let cartItems = [];
let savedItems = [];
let map = null;
let heatmapLayer = null;
let markers = [];
let currentMapCategory = 'all';
let isHeatmapActive = false;

// DOM Elements
const elements = {
    searchInput: null,
    searchBtn: null,
    categoryGrid: null,
    featuredGrid: null,
    navbar: null,
    hamburger: null,
    navMenu: null,
    loginModal: null,
    addArtisanBtn: null,
    findAlternativesBtn: null,
    mainLoginBtn: null,
    artisanLoginBtn: null,
    adminNavItem: null,
    pages: {},
    activePage: null
};

// Initialize the application
async function initApp() {
    await initializeData(); // Load data from server
    initializeElements();
    initializeEventListeners();
    initializePages();
    renderHomepage();
    animateOnScroll();
    
    // Initialize map after a short delay to ensure DOM is ready
    setTimeout(initializeMap, 1000);
    
    // Ensure all interactive elements have event listeners
    ensureAllInteractions();
}

// Call the async init function
document.addEventListener('DOMContentLoaded', initApp);

function initializeElements() {
    elements.searchInput = document.getElementById('search-input') || document.querySelector('.search-container input');
    elements.searchBtn = document.getElementById('search-button') || document.querySelector('.search-btn');
    elements.categoryGrid = document.querySelector('.category-grid');
    elements.featuredGrid = document.getElementById('featured-grid');
    elements.navbar = document.querySelector('.navbar');
    elements.hamburger = document.querySelector('.hamburger');
    elements.navMenu = document.querySelector('.nav-menu');
    elements.adminNavItem = document.getElementById('admin-nav-item');
    
    // Get specific buttons
    elements.addArtisanBtn = document.getElementById('add-artisan-btn');
    elements.findAlternativesBtn = document.getElementById('find-alternatives-btn');
    elements.mainLoginBtn = document.getElementById('main-login-btn');
    elements.artisanLoginBtn = document.getElementById('artisan-login-btn');
    
    // Get all page sections
    elements.pages = {
        home: document.getElementById('home'),
        explore: document.getElementById('explore'),
        artisans: document.getElementById('artisans'),
        maps: document.getElementById('maps'),
        sustainability: document.getElementById('sustainability'),
        admin: document.getElementById('admin')
    };
    
    elements.activePage = elements.pages.home;
}

function initializePages() {
    // Initially hide all pages except home
    Object.keys(elements.pages).forEach(pageId => {
        const page = elements.pages[pageId];
        if (pageId !== 'home') {
            page.classList.remove('active');
            page.style.display = 'none';
        } else {
            page.classList.add('active');
            page.style.display = 'block';
        }
    });
}

function initializeEventListeners() {
    // Mobile navigation
    if (elements.hamburger && elements.navMenu) {
        elements.hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                goToPage(pageId);
            }
        });
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach((link, index) => {
        link.addEventListener('click', function() {
            closeMobileMenu();
            // Update active state
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close menu when clicking close button
    const closeMenuButton = document.querySelector('.close-menu');
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = elements.navMenu.contains(event.target) || 
                              elements.hamburger.contains(event.target);
        
        if (elements.navMenu.classList.contains('active') && !isClickInsideNav) {
            closeMobileMenu();
        }
    });
    
    // Search functionality
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', handleSearchInput);
        elements.searchInput.addEventListener('input', debounce(handleSearchInputRealTime, 300));
    }
    
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', handleSearchClick);
    }
    
    // Login functionality
    if (elements.mainLoginBtn) {
        elements.mainLoginBtn.addEventListener('click', showLoginModal);
    }
    
    if (elements.artisanLoginBtn) {
        elements.artisanLoginBtn.addEventListener('click', showArtisanLoginModal);
    }
    
    // Button interactions
    if (elements.addArtisanBtn) {
        elements.addArtisanBtn.addEventListener('click', showArtisanRegistration);
    }
    
    if (elements.findAlternativesBtn) {
        elements.findAlternativesBtn.addEventListener('click', handleFindAlternatives);
    }
    
    // Rating interactions
    document.addEventListener('click', handleRatingClick);
    
    // Window scroll event for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Add event listeners to featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a button inside the card
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            const artisanName = this.querySelector('h3').textContent;
            const artisan = data.artisans.find(a => a.name === artisanName);
            if (artisan) {
                showArtisanDetails(artisan);
            }
        });
    });
    
    // Add event listeners to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a button inside the card
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            const categoryId = this.getAttribute('data-category');
            if (categoryId) {
                showCategory(categoryId);
            }
        });
    });
    
    // Add mouse wheel scrolling to category grid
    const categoryGrid = document.querySelector('.category-grid');
    if (categoryGrid) {
        categoryGrid.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            categoryGrid.scrollBy({
                left: evt.deltaY,
                behavior: 'smooth'
            });
        });
        
        // Update gradient indicators based on scroll position
        const updateScrollIndicator = () => {
            const scrollLeft = categoryGrid.scrollLeft;
            const maxScroll = categoryGrid.scrollWidth - categoryGrid.clientWidth;
            
            if (scrollLeft <= 0) {
                categoryGrid.classList.add('at-start');
                categoryGrid.classList.remove('at-end');
            } else if (scrollLeft >= maxScroll - 1) {
                categoryGrid.classList.add('at-end');
                categoryGrid.classList.remove('at-start');
            } else {
                categoryGrid.classList.remove('at-start', 'at-end');
            }
        };
        
        // Initial update
        updateScrollIndicator();
        
        // Add scroll event listener
        categoryGrid.addEventListener('scroll', updateScrollIndicator);
    }
    
    // Function to scroll category grid with buttons
    window.scrollCategoryGrid = function(direction) {
        const grid = document.querySelector('.category-grid');
        if (grid) {
            const scrollAmount = grid.clientWidth * 0.8; // Scroll 80% of container width
            grid.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    // Explore page filters
    const locationFilter = document.getElementById('location-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    if (locationFilter) {
        locationFilter.addEventListener('change', filterExploreItems);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterExploreItems);
    }
    
    // Form submissions
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const artisanRegistrationForm = document.getElementById('artisan-registration-form');
    const adminAddListingForm = document.getElementById('admin-add-listing-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
    
    if (artisanRegistrationForm) {
        artisanRegistrationForm.addEventListener('submit', handleArtisanRegistrationSubmit);
    }
    
    if (adminAddListingForm) {
        adminAddListingForm.addEventListener('submit', handleAdminAddListingSubmit);
    }
    
    // Tab switching for modals
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(`${tab}-form`).classList.add('active');
        });
    });
}

function goToPage(pageId) {
    // Hide current page
    if (elements.activePage) {
        elements.activePage.classList.remove('active');
        elements.activePage.style.display = 'none';
    }
    
    // Check if user is admin and trying to access admin page
    if (pageId === 'admin' && (!currentUser || currentUser.type !== 'admin')) {
        showToast('Access denied. Admin privileges required.', 'error');
        return;
    }
    
    // Show new page
    const newPage = elements.pages[pageId];
    if (newPage) {
        newPage.classList.add('active');
        newPage.style.display = 'block';
        elements.activePage = newPage;
        
        // Update active navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Special handling for different pages
        switch(pageId) {
            case 'home':
                renderHomepage();
                break;
            case 'explore':
                renderExplorePage();
                break;
            case 'artisans':
                renderArtisansPage();
                break;
            case 'maps':
                refreshMap();
                break;
            case 'sustainability':
                // Nothing special needed
                break;
            case 'admin':
                renderAdminDashboard();
                break;
        }
    }
}

function renderHomepage() {
    if (elements.featuredGrid) {
        elements.featuredGrid.innerHTML = '';
        // Show first 6 artisans as featured
        const featuredArtisans = data.artisans.filter(a => a.approved).slice(0, 6);
        featuredArtisans.forEach(artisan => {
            const artisanCard = createArtisanCard(artisan);
            elements.featuredGrid.appendChild(artisanCard);
        });
    }
}

function createExploreCard(item) {
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.dataset.location = item.location.toLowerCase().replace(/ /g, '-');
    
    // Set category based on the actual category field in the data
    let categoryValue = item.category.toLowerCase();
    if (item.category === 'Local Artisans') {
        categoryValue = 'local-artisans';
    } else if (item.category === 'Traditional Food') {
        categoryValue = 'traditional-food';
    } else if (item.category === 'Cultural Experiences') {
        categoryValue = 'cultural-experiences';
    } else if (item.category === 'Hidden Places') {
        categoryValue = 'hidden-places';
    }
    card.dataset.category = categoryValue;
    
    card.onclick = () => {
        if (item.type === 'artisan' || item.type === 'place' || item.type === 'experience' || item.type === 'food') {
            showExploreItemDetails(item);
        }
    };

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="rating">
                <span class="stars">${generateStars(item.rating)}</span>
                <span class="distance">${item.distance}</span>
            </div>
            <div class="price-category">
                <span class="price">${item.price}</span>
                <span class="category">${item.category}</span>
            </div>
            ${item.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
        </div>
    `;

    return card;
}

function showExploreItemDetails(item) {
    // Create modal for item details
    let modal = document.getElementById('explore-item-modal');
    if (modal) {
        modal.remove();
    }

    const reviews = data.reviews.filter(r => r.artisanId === item.id);

    const modalHTML = `
    <div id="explore-item-modal" class="modal">
        <div class="modal-content artisan-details">
            <span class="close" onclick="closeModal('explore-item-modal')">&times;</span>
            <img src="${item.image}" alt="${item.name}">
            <div class="artisan-header">
                <h2>${item.name}</h2>
                <div class="rating-large">
                    <span class="stars-large">${generateStars(item.rating)}</span>
                    <span class="rating-value">${item.rating}/5 (${reviews.length} reviews)</span>
                    ${item.verified ? '<span class="verified-badge-large">✓ Verified</span>' : ''}
                </div>
            </div>
            <p class="description">${item.description}</p>
            <div class="highlights">
                <h4>Highlights:</h4>
                <div class="highlight-tags">
                    ${item.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
            <div class="details-grid">
                <div class="detail-item">
                    <strong>📍 Location:</strong> ${item.location}
                </div>
                <div class="detail-item">
                    <strong>🏢 Address:</strong> ${item.address}
                </div>
                <div class="detail-item">
                    <strong>🕒 Hours:</strong> ${item.hours || 'N/A'}
                </div>
                <div class="detail-item">
                    <strong>📞 Contact:</strong> ${item.contact}
                </div>
                <div class="detail-item">
                    <strong>✉️ Email:</strong> ${item.email}
                </div>
                <div class="detail-item">
                    <strong>💰 Price Range:</strong> ${item.price}
                </div>
            </div>
            <div class="story-section">
                <h4>About:</h4>
                <p>${item.story || item.description}</p>
            </div>
            <div class="reviews-section">
                <h4>Recent Reviews:</h4>
                <div class="reviews-list">
                    ${reviews.slice(0, 3).map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <span class="reviewer">${review.name}</span>
                                <span class="review-stars">${generateStars(review.rating)}</span>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                            <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="actions">
                <button class="btn-primary" onclick="contactItem(${item.id})">
                    <i class="fas fa-phone"></i> Contact
                </button>
                <button class="btn-secondary" onclick="saveItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                    <i class="fas fa-bookmark"></i> Save for Later
                </button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    document.querySelector('#explore-item-modal .close').addEventListener('click', () => {
        document.getElementById('explore-item-modal').remove();
    });

    // Close modal when clicking outside
    document.getElementById('explore-item-modal').onclick = function(event) {
        if (event.target === this) {
            this.remove();
        }
    };
}

function contactItem(itemId) {
    if (!currentUser) {
        showLoginModal();
        return;
    }

    showToast(`Sending contact request. They will reach out to you soon!`, 'success');
}

function saveItem(itemObj) {
    const item = typeof itemObj === 'string' ? JSON.parse(itemObj.replace(/&quot;/g, '"')) : itemObj;

    if (!currentUser) {
        showLoginModal();
        return;
    }

    // Check if already saved
    const alreadySaved = savedItems.some(savedItem => savedItem.id === item.id);
    if (alreadySaved) {
        showToast('This item is already in your saved list!', 'info');
        return;
    }

    savedItems.push(item);
    showToast(`"${item.name}" saved to your list!`, 'success');
}

function renderArtisansPage() {
    const artisansGrid = document.getElementById('artisans-grid');
    if (artisansGrid) {
        artisansGrid.innerHTML = '';
        // Show all approved artisans
        const approvedArtisans = data.artisans.filter(a => a.approved);
        approvedArtisans.forEach(artisan => {
            if (artisan.category === 'Local Artisans') {
                const artisanCard = createArtisanCard(artisan);
                artisansGrid.appendChild(artisanCard);
            }
        });
    }
}

function renderAdminDashboard() {
    if (currentUser && currentUser.type === 'admin') {
        // Update stats
        document.getElementById('total-listings-count').textContent = data.artisans.length;
        document.getElementById('new-applications-count').textContent = data.applications.filter(app => app.status === 'pending').length;
        
        // Count reviews from today
        const today = new Date().toISOString().split('T')[0];
        const todaysReviews = data.reviews.filter(r => r.date === today);
        document.getElementById('reviews-today-count').textContent = todaysReviews.length;
        
        // Count verified listings
        const verifiedListings = data.artisans.filter(a => a.verified);
        document.getElementById('verified-listings-count').textContent = verifiedListings.length;
        
        // Load listings for admin
        loadAdminListings();
    } else {
        showToast('Access denied. Admin privileges required.', 'error');
        goToPage('home');
    }
}

function loadAdminListings() {
    const container = document.getElementById('admin-listings-container');
    if (!container) return;
    
    container.innerHTML = '<h3>All Listings</h3>';
    
    const listingsGrid = document.createElement('div');
    listingsGrid.className = 'admin-listings-grid';
    listingsGrid.style.display = 'grid';
    listingsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    listingsGrid.style.gap = '20px';
    listingsGrid.style.marginTop = '20px';
    
    data.artisans.forEach(artisan => {
        const listingCard = document.createElement('div');
        listingCard.className = 'admin-listing-card';
        listingCard.style.border = '1px solid #ddd';
        listingCard.style.borderRadius = '8px';
        listingCard.style.padding = '15px';
        listingCard.style.backgroundColor = '#fff';
        
        listingCard.innerHTML = `
            <h4>${artisan.name}</h4>
            <p><strong>Category:</strong> ${artisan.category}</p>
            <p><strong>Location:</strong> ${artisan.location}</p>
            <p><strong>Rating:</strong> ${artisan.rating}/5</p>
            <p><strong>Status:</strong> ${artisan.approved ? 'Approved' : 'Pending'}</p>
            <p><strong>Verified:</strong> ${artisan.verified ? 'Yes' : 'No'}</p>
            <div style="margin-top: 10px;">
                <button class="btn-primary" style="margin-right: 10px;" onclick="editListing(${artisan.id})">Edit</button>
                <button class="btn-secondary" onclick="deleteListing(${artisan.id})">Delete</button>
            </div>
        `;
        
        listingsGrid.appendChild(listingCard);
    });
    
    container.appendChild(listingsGrid);
}

function showAddListingForm() {
    const modal = document.getElementById('admin-add-listing-modal');
    if (modal) {
        modal.style.display = 'block';
        
        // Reset form
        document.getElementById('admin-add-listing-form').reset();
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

function showPendingApplications() {
    if (!currentUser || currentUser.type !== 'admin') {
        showToast('Access denied. Admin privileges required.', 'error');
        return;
    }
    
    const pendingApps = data.applications.filter(app => app.status === 'pending');
    
    let appsHtml = '<h3>Pending Applications</h3>';
    if (pendingApps.length > 0) {
        appsHtml += '<div style="margin-top: 20px;">';
        pendingApps.forEach(app => {
            appsHtml += `
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 15px; background: #fff;">
                    <h4>${app.name}</h4>
                    <p><strong>Type:</strong> ${app.type}</p>
                    <p><strong>Description:</strong> ${app.description}</p>
                    <p><strong>Location:</strong> ${app.location}</p>
                    <p><strong>Contact:</strong> ${app.contact}</p>
                    <p><strong>Date:</strong> ${app.date}</p>
                    <div style="margin-top: 10px;">
                        <button class="btn-primary" style="margin-right: 10px;" onclick="approveApplication(${app.id})">Approve</button>
                        <button class="btn-secondary" onclick="rejectApplication(${app.id})">Reject</button>
                    </div>
                </div>
            `;
        });
        appsHtml += '</div>';
    } else {
        appsHtml += '<p>No pending applications.</p>';
    }
    
    document.getElementById('admin-listings-container').innerHTML = appsHtml;
}

function showEditListings() {
    loadAdminListings();
}

function showAnalytics() {
    // Placeholder for analytics page
    document.getElementById('admin-listings-container').innerHTML = `
        <h3>Analytics Dashboard</h3>
        <p>Platform usage statistics, visitor trends, and performance metrics would be displayed here.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                <h4>Total Visitors</h4>
                <p style="font-size: 24px; font-weight: bold;">1,248</p>
            </div>
            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px;">
                <h4>Engagement Rate</h4>
                <p style="font-size: 24px; font-weight: bold;">78%</p>
            </div>
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px;">
                <h4>Conversion Rate</h4>
                <p style="font-size: 24px; font-weight: bold;">12%</p>
            </div>
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                <h4>Return Visitors</h4>
                <p style="font-size: 24px; font-weight: bold;">34%</p>
            </div>
        </div>
    `;
}

function approveApplication(appId) {
    const app = data.applications.find(a => a.id === appId);
    if (app) {
        app.status = 'approved';
        
        // Add to artisans list as pending approval
        const newArtisan = {
            id: data.artisans.length + 1,
            name: app.name,
            description: app.description,
            rating: 4.0,
            distance: '0.0 km away',
            category: 'Local Artisans',
            subcategory: app.type,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjYyMTQ1MTh8&ixlib=rb-4.1.0&q=80&w=400',
            location: app.location,
            address: app.location,
            hours: 'TBD',
            contact: app.contact,
            email: 'pending@example.com',
            story: 'New listing awaiting details',
            highlights: ['New Addition'],
            price: 'TBD',
            verified: false,
            coordinates: [12.2958, 76.6392], // Default to center of Mysore
            approved: false // Will be approved by admin later
        };
        
        data.artisans.push(newArtisan);
        showToast(`Application ${app.name} approved and added to listings.`, 'success');
        renderAdminDashboard();
    }
}

function rejectApplication(appId) {
    const appIndex = data.applications.findIndex(a => a.id === appId);
    if (appIndex !== -1) {
        data.applications.splice(appIndex, 1);
        showToast('Application rejected and removed.', 'info');
        renderAdminDashboard();
    }
}

function editListing(id) {
    // Try to find the item in any of the data categories
    let item = null;
    let type = null;
    
    // Check each category
    item = data.artisans.find(a => a.id == id);
    if (item) {
        type = 'artisans';
    } else {
        item = data.places.find(p => p.id == id);
        if (item) type = 'places';
        else {
            item = data.experiences.find(e => e.id == id);
            if (item) type = 'experiences';
            else {
                item = data.food.find(f => f.id == id);
                if (item) type = 'food';
            }
        }
    }
    
    if (item) {
        // Fill the add listing form with current values
        document.getElementById('listing-name').value = item.name;
        document.getElementById('listing-category').value = item.category.toLowerCase().replace(/\s+/g, '-');
        document.getElementById('listing-description').value = item.description;
        document.getElementById('listing-location').value = item.location;
        document.getElementById('listing-address').value = item.address;
        document.getElementById('listing-contact').value = item.contact;
        document.getElementById('listing-rating').value = item.rating;
        document.getElementById('listing-price').value = item.price;
        document.getElementById('listing-image').value = item.image;
        document.getElementById('listing-highlights').value = item.highlights.join(', ');
        document.getElementById('listing-verified').checked = item.verified;
        
        // Change form to update mode
        const form = document.getElementById('admin-add-listing-form');
        form.onsubmit = function(e) {
            e.preventDefault();
            updateListingById(id, type);
        };
            
        // Add image preview functionality
        const imageUpload = document.getElementById('listing-image-upload');
        const imagePreview = document.getElementById('image-preview');
            
        imageUpload.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                    
                reader.onload = function(event) {
                    imagePreview.innerHTML = `<img src="${event.target.result}" style="max-width: 200px; max-height: 150px; border-radius: 8px; margin-top: 10px;">`;
                };
                    
                reader.readAsDataURL(file);
            }
        };
        
        // Change button text
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Update Listing';
        
        // Show the form
        const modal = document.getElementById('admin-add-listing-modal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
}

function updateListingById(id, type) {
    // Handle image update
    const imageInput = document.getElementById('listing-image');
    const imageUpload = document.getElementById('listing-image-upload');
    
    // Check if a new image was uploaded
    if (imageUpload.files && imageUpload.files[0]) {
        const file = imageUpload.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Create updated data object
            const updatedData = {
                name: document.getElementById('listing-name').value,
                category: document.getElementById('listing-category').value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                description: document.getElementById('listing-description').value,
                location: document.getElementById('listing-location').value,
                address: document.getElementById('listing-address').value,
                contact: document.getElementById('listing-contact').value,
                rating: parseFloat(document.getElementById('listing-rating').value),
                price: document.getElementById('listing-price').value,
                image: e.target.result, // Use uploaded image
                highlights: document.getElementById('listing-highlights').value.split(',').map(h => h.trim()).filter(h => h),
                verified: document.getElementById('listing-verified').checked
            };
            
            // Update the listing using the new function
            const success = updateListing(type, id, updatedData);
            
            if (success) {
                showToast(`Listing updated successfully.`, 'success');
                
                // Reset form to add mode
                document.getElementById('admin-add-listing-form').onsubmit = handleAdminAddListingSubmit;
                const submitBtn = document.getElementById('admin-add-listing-form').querySelector('button[type="submit"]');
                submitBtn.textContent = 'Add Listing';
                
                // Close modal
                closeModal('admin-add-listing-modal');
                
                // Refresh listings
                loadAdminListings();
                
                // Update UI across all sections to reflect changes
                updateUIAfterDataChange();
            } else {
                showToast('Error updating listing. Please try again.', 'error');
            }
        };
        
        reader.readAsDataURL(file);
    } else {
        // Use the URL from the text field
        const updatedData = {
            name: document.getElementById('listing-name').value,
            category: document.getElementById('listing-category').value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: document.getElementById('listing-description').value,
            location: document.getElementById('listing-location').value,
            address: document.getElementById('listing-address').value,
            contact: document.getElementById('listing-contact').value,
            rating: parseFloat(document.getElementById('listing-rating').value),
            price: document.getElementById('listing-price').value,
            image: document.getElementById('listing-image').value, // Use provided URL
            highlights: document.getElementById('listing-highlights').value.split(',').map(h => h.trim()).filter(h => h),
            verified: document.getElementById('listing-verified').checked
        };
        
        // Update the listing using the new function
        const success = updateListing(type, id, updatedData);
        
        if (success) {
            showToast(`Listing updated successfully.`, 'success');
            
            // Reset form to add mode
            document.getElementById('admin-add-listing-form').onsubmit = handleAdminAddListingSubmit;
            const submitBtn = document.getElementById('admin-add-listing-form').querySelector('button[type="submit"]');
            submitBtn.textContent = 'Add Listing';
            
            // Close modal
            closeModal('admin-add-listing-modal');
            
            // Refresh listings
            loadAdminListings();
            
            // Update UI across all sections to reflect changes
            updateUIAfterDataChange();
        } else {
            showToast('Error updating listing. Please try again.', 'error');
        }
    }
}

function deleteListing(id) {
    // Try to find the item in any of the data categories
    let item = null;
    let type = null;
    
    // Check each category
    item = data.artisans.find(a => a.id == id);
    if (item) {
        type = 'artisans';
    } else {
        item = data.places.find(p => p.id == id);
        if (item) type = 'places';
        else {
            item = data.experiences.find(e => e.id == id);
            if (item) type = 'experiences';
            else {
                item = data.food.find(f => f.id == id);
                if (item) type = 'food';
            }
        }
    }
    
    if (item && confirm('Are you sure you want to delete this listing?')) {
        // Use the new delete function
        const success = deleteListingFromType(type, id);
        
        if (success) {
            showToast('Listing deleted successfully.', 'info');
            loadAdminListings();
            
            // Update UI across all sections to reflect changes
            updateUIAfterDataChange();
        } else {
            showToast('Error deleting listing. Please try again.', 'error');
        }
    }
}

function filterExploreItems() {
    const locationFilter = document.getElementById('location-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    let location = 'all';
    let category = 'all';
    
    if (locationFilter) location = locationFilter.value;
    if (categoryFilter) category = categoryFilter.value;
    
    console.log('Selected location:', location);
    console.log('Selected category:', category);
    
    const exploreGrid = document.getElementById('explore-grid');
    if (exploreGrid) {
        // Get all cards in the grid
        const cards = exploreGrid.querySelectorAll('.featured-card');
        
        let visibleCount = 0;
        
        cards.forEach(card => {
            const cardLocation = card.dataset.location || '';
            const cardCategory = card.dataset.category || '';
            
            console.log('Card location:', cardLocation, 'Card category:', cardCategory);
            
            // Check if card matches filters
            const locationMatch = location === 'all' || cardLocation.includes(location);
            const categoryMatch = category === 'all' || cardCategory.includes(category);
            
            // Show/hide card based on filter matches
            if (locationMatch && categoryMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Remove any existing no-results message
        const existingNoResults = exploreGrid.querySelector('.no-results');
        if (existingNoResults) {
            existingNoResults.remove();
        }
        
        // If no cards are visible and filters are active, show no results message
        if (visibleCount === 0 && (location !== 'all' || category !== 'all')) {
            exploreGrid.innerHTML = '<p class="no-results">No items found matching your filters.</p>';
        } else if (visibleCount === 0 && location === 'all' && category === 'all') {
            // If no cards at all (shouldn't happen with our data)
            exploreGrid.innerHTML = '<p class="no-results">No items available.</p>';
        }
    }
}

// Add event listeners to dropdowns for dynamic filtering
function setupFilterEventListeners() {
    const locationFilter = document.getElementById('location-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    if (locationFilter) {
        locationFilter.addEventListener('change', function() {
            console.log('Location filter changed to:', locationFilter.value);
            filterExploreItems();
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            console.log('Category filter changed to:', categoryFilter.value);
            filterExploreItems();
        });
    }
}

// Initialize filter event listeners when page loads
window.addEventListener('load', function() {
    setupFilterEventListeners();
});

function createArtisanCard(artisan) {
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.dataset.location = artisan.location.toLowerCase();
    card.dataset.category = artisan.subcategory.toLowerCase();
    card.onclick = () => showArtisanDetails(artisan);

    card.innerHTML = `
        <img src="${artisan.image}" alt="${artisan.name}">
        <div class="card-content">
            <h3>${artisan.name}</h3>
            <p>${artisan.description}</p>
            <div class="rating">
                <span class="stars">${generateStars(artisan.rating)}</span>
                <span class="distance">${artisan.distance}</span>
            </div>
            <div class="price-category">
                <span class="price">${artisan.price}</span>
                <span class="category">${artisan.category}</span>
            </div>
            ${artisan.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
        </div>
    `;

    return card;
}

// Update the renderExplorePage function to use the new approach
function renderExplorePage() {
    // Populate the explore grid with all items
    const exploreGrid = document.getElementById('explore-grid');
    if (exploreGrid) {
        exploreGrid.innerHTML = '';
        
        // Combine all data sources
        const allItems = [];
        
        // Add artisans
        data.artisans.forEach(artisan => {
            allItems.push({
                ...artisan,
                type: 'artisan'
            });
        });
        
        // Add places
        data.places.forEach(place => {
            allItems.push({
                ...place,
                type: 'place'
            });
        });
        
        // Add experiences
        data.experiences.forEach(exp => {
            allItems.push({
                ...exp,
                type: 'experience'
            });
        });
        
        // Add food items
        data.food.forEach(food => {
            allItems.push({
                ...food,
                type: 'food'
            });
        });
        
        // Create cards for all items
        allItems.forEach(item => {
            const itemCard = createExploreCard(item);
            exploreGrid.appendChild(itemCard);
        });
    }
    
    // Wait for DOM to be ready before setting up filters
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            filterExploreItems();
            setupFilterEventListeners();
        });
    } else {
        filterExploreItems();
        setupFilterEventListeners();
    }
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

function showArtisanDetails(artisan) {
    // Create modal for artisan details
    let modal = document.getElementById('artisan-modal');
    if (modal) {
        modal.remove();
    }

    const reviews = data.reviews.filter(r => r.artisanId === artisan.id);

    const modalHTML = `
    <div id="artisan-modal" class="modal">
        <div class="modal-content artisan-details">
            <span class="close" onclick="closeModal('artisan-modal')">&times;</span>
            <img src="${artisan.image}" alt="${artisan.name}">
            <div class="artisan-header">
                <h2>${artisan.name}</h2>
                <div class="rating-large">
                    <span class="stars-large">${generateStars(artisan.rating)}</span>
                    <span class="rating-value">${artisan.rating}/5 (${reviews.length} reviews)</span>
                    ${artisan.verified ? '<span class="verified-badge-large">✓ Verified Artisan</span>' : ''}
                </div>
            </div>
            <p class="description">${artisan.description}</p>
            <div class="highlights">
                <h4>Highlights:</h4>
                <div class="highlight-tags">
                    ${artisan.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
            <div class="details-grid">
                <div class="detail-item">
                    <strong>📍 Location:</strong> ${artisan.location}
                </div>
                <div class="detail-item">
                    <strong>🏢 Address:</strong> ${artisan.address}
                </div>
                <div class="detail-item">
                    <strong>🕒 Hours:</strong> ${artisan.hours}
                </div>
                <div class="detail-item">
                    <strong>📞 Contact:</strong> ${artisan.contact}
                </div>
                <div class="detail-item">
                    <strong>✉️ Email:</strong> ${artisan.email}
                </div>
                <div class="detail-item">
                    <strong>💰 Price Range:</strong> ${artisan.price}
                </div>
            </div>
            <div class="story-section">
                <h4>About:</h4>
                <p>${artisan.story}</p>
            </div>
            <div class="reviews-section">
                <h4>Recent Reviews:</h4>
                <div class="reviews-list">
                    ${reviews.slice(0, 3).map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <span class="reviewer">${review.name}</span>
                                <span class="review-stars">${generateStars(review.rating)}</span>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                            <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="actions">
                <button class="btn-primary" onclick="contactArtisan(${artisan.id})">
                    <i class="fas fa-phone"></i> Contact Artisan
                </button>
                <button class="btn-secondary" onclick="saveArtisan(${JSON.stringify(artisan).replace(/"/g, '&quot;')})">
                    <i class="fas fa-bookmark"></i> Save for Later
                </button>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    document.querySelector('#artisan-modal .close').addEventListener('click', () => {
        document.getElementById('artisan-modal').remove();
    });

    // Close modal when clicking outside
    document.getElementById('artisan-modal').onclick = function(event) {
        if (event.target === this) {
            this.remove();
        }
    };
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function contactArtisan(artisanId) {
    if (!currentUser) {
        showLoginModal();
        return;
    }

    showToast(`Sending contact request to artisan. They will reach out to you soon!`, 'success');
}

function saveArtisan(artisanObj) {
    const artisan = typeof artisanObj === 'string' ? JSON.parse(artisanObj.replace(/&quot;/g, '"')) : artisanObj;

    if (!currentUser) {
        showLoginModal();
        return;
    }

    // Check if already saved
    const alreadySaved = savedItems.some(item => item.id === artisan.id);
    if (alreadySaved) {
        showToast('This item is already in your saved list!', 'info');
        return;
    }

    savedItems.push(artisan);
    showToast(`"${artisan.name}" saved to your list!`, 'success');
}

function showCategory(categoryId) {
    selectedCategory = categoryId;
    currentView = 'category';
    
    // Update active state in navigation
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-category') === categoryId) {
            card.classList.add('active');
        }
    });
    
    // Go to explore page and filter by category
    goToPage('explore');
    
    // Set the category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.value = categoryId;
        filterExploreItems();
    }
    
    // Update explore title
    const exploreTitle = document.getElementById('explore-title');
    if (exploreTitle) {
        const categoryNames = {
            'hidden-places': 'Hidden Places',
            'local-artisans': 'Local Artisans',
            'cultural-experiences': 'Cultural Experiences',
            'traditional-food': 'Traditional Food'
        };
        exploreTitle.textContent = categoryNames[categoryId] || 'Explore Mysuru';
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
    if (elements.hamburger) {
        elements.hamburger.classList.toggle('active');
    }
}

function closeMobileMenu() {
    elements.navMenu.classList.remove('active');
    if (elements.hamburger) {
        elements.hamburger.classList.remove('active');
    }
}

function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#' || !targetId.startsWith('#')) return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function handleSearchInput(e) {
    if (e.key === 'Enter') {
        performSearch(elements.searchInput.value);
    }
}

function handleSearchInputRealTime() {
    // Real-time search as user types
    if (elements.searchInput) {
        searchQuery = elements.searchInput.value.toLowerCase();
        if (searchQuery.length > 2) {
            renderSearchResults();
        } else if (searchQuery.length === 0) {
            renderHomepage();
        }
    }
}

function handleSearchClick() {
    performSearch(elements.searchInput.value);
}

function performSearch(query) {
    if (query.trim() !== '') {
        searchQuery = query.toLowerCase();
        renderSearchResults();
    } else {
        renderHomepage();
    }
}

function renderSearchResults() {
    // Filter all data types based on search query
    const filteredArtisans = data.artisans.filter(item => 
        item.approved &&
        (item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.subcategory.toLowerCase().includes(searchQuery) ||
        item.location.toLowerCase().includes(searchQuery) ||
        item.highlights.some(h => h.toLowerCase().includes(searchQuery)))
    );
    
    const filteredPlaces = data.places.filter(item => 
        item.approved &&
        (item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.subcategory.toLowerCase().includes(searchQuery) ||
        item.location.toLowerCase().includes(searchQuery) ||
        item.highlights.some(h => h.toLowerCase().includes(searchQuery)))
    );
    
    const filteredExperiences = data.experiences.filter(item => 
        item.approved &&
        (item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.subcategory.toLowerCase().includes(searchQuery) ||
        item.location.toLowerCase().includes(searchQuery) ||
        item.highlights.some(h => h.toLowerCase().includes(searchQuery)))
    );
    
    const filteredFood = data.food.filter(item => 
        item.approved &&
        (item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.subcategory.toLowerCase().includes(searchQuery) ||
        item.location.toLowerCase().includes(searchQuery) ||
        item.highlights.some(h => h.toLowerCase().includes(searchQuery)))
    );
    
    // Combine all results
    const allResults = [...filteredArtisans, ...filteredPlaces, ...filteredExperiences, ...filteredFood];
    
    // For search results, we'll show them on the explore page
    goToPage('explore');
    
    const exploreGrid = document.getElementById('explore-grid');
    if (exploreGrid) {
        exploreGrid.innerHTML = '';
        
        if (allResults.length > 0) {
            allResults.forEach(item => {
                const itemCard = createExploreCard(item); // Using the general card creation function
                exploreGrid.appendChild(itemCard);
            });
        } else {
            exploreGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found for "${searchQuery}"</h3>
                    <p>Try different keywords or explore our featured categories!</p>
                </div>
            `;
        }
    }
}

function showLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        // Update modal content to show role selection
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('login-modal')">&times;</span>
                <h2>Login to Mysuru Unexplored</h2>
                <div class="role-selector">
                    <p>Select your role to continue:</p>
                    <div class="role-options">
                        <button class="role-option" onclick="showLoginForm('tourist')">
                            <i class="fas fa-user"></i>
                            <h3>Tourist</h3>
                            <p>Explore hidden places, artisans, and experiences</p>
                        </button>
                        <button class="role-option" onclick="showLoginForm('artisan')">
                            <i class="fas fa-hands"></i>
                            <h3>Artisan</h3>
                            <p>Manage your listings and profile</p>
                        </button>
                        <button class="role-option" onclick="showLoginForm('admin')">
                            <i class="fas fa-cog"></i>
                            <h3>Admin</h3>
                            <p>Manage platform and listings</p>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

function showLoginForm(role) {
    const modal = document.getElementById('login-modal');
    if (modal) {
        // Update modal content to show login form
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('login-modal')">&times;</span>
                <h2>${role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
                <form id="login-form" onsubmit="handleLoginSubmit(event, '${role}')">
                    <input type="hidden" id="user-type" value="${role}">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" required placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" required placeholder="Enter your password">
                    </div>
                    <button type="submit" class="btn-primary">Login as ${role.charAt(0).toUpperCase() + role.slice(1)}</button>
                </form>
                <p class="switch-form">
                    Don't have an account? <a href="#" onclick="showRegisterForm('${role}')">Register</a>
                </p>
                <p class="switch-form">
                    <a href="#" onclick="showLoginModal()">Back to Role Selection</a>
                </p>
            </div>
        `;
    }
}

function showRegisterForm(role) {
    const modal = document.getElementById('login-modal');
    if (modal) {
        // Update modal content to show registration form
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('login-modal')">&times;</span>
                <h2>Register as ${role.charAt(0).toUpperCase() + role.slice(1)}</h2>
                <form id="register-form" onsubmit="handleRegisterSubmit(event, '${role}')">
                    <input type="hidden" id="reg-user-type" value="${role}">
                    <div class="form-group">
                        <label for="reg-name">Full Name:</label>
                        <input type="text" id="reg-name" required placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="reg-email">Email:</label>
                        <input type="email" id="reg-email" required placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="reg-password">Password:</label>
                        <input type="password" id="reg-password" required placeholder="Create a password">
                    </div>
                    <button type="submit" class="btn-primary">Register as ${role.charAt(0).toUpperCase() + role.slice(1)}</button>
                </form>
                <p class="switch-form">
                    Already have an account? <a href="#" onclick="showLoginForm('${role}')">Login</a>
                </p>
                <p class="switch-form">
                    <a href="#" onclick="showLoginModal()">Back to Role Selection</a>
                </p>
            </div>
        `;
    }
}

function showArtisanLoginModal() {
    // For artisan login, we'll direct them to registration
    showToast('Artisans can register using the "Become an Artisan" button', 'info');
    showArtisanRegistration();
}

function showArtisanRegistration() {
    const modal = document.getElementById('artisan-registration-modal');
    if (modal) {
        modal.style.display = 'block';
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function handleLoginSubmit(e, role = null) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = role || document.getElementById('user-type').value;
    
    // Simulate login with loading effect
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging in...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate successful login
        currentUser = {
            email: email,
            type: userType,
            name: email.split('@')[0],
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        // Close modal
        document.getElementById('login-modal').style.display = 'none';
        
        // Update navigation to show user info
        updateNavigationAfterLogin();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
    }, 1000);
}

function handleRegisterSubmit(e, role = null) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const userType = role || document.getElementById('reg-user-type').value;
    
    // Simulate registration
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate successful registration
        currentUser = {
            email: email,
            type: userType,
            name: name,
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        // Close modal
        document.getElementById('login-modal').style.display = 'none';
        
        // Update navigation to show user info
        updateNavigationAfterLogin();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        showToast(`Welcome, ${currentUser.name}! Registration successful.`, 'success');
    }, 1500);
}

function handleArtisanRegistrationSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('artisan-name').value;
    const type = document.getElementById('artisan-type').value;
    const description = document.getElementById('artisan-description').value;
    const location = document.getElementById('artisan-location').value;
    const address = document.getElementById('artisan-address').value;
    const contact = document.getElementById('artisan-contact').value;
    const email = document.getElementById('artisan-email').value;
    const hours = document.getElementById('artisan-hours').value;
    const season = document.getElementById('artisan-season').value;
    
    // Create application
    const newApplication = {
        id: data.applications.length + 1,
        name: name,
        type: type,
        description: description,
        location: location,
        address: address,
        contact: contact,
        email: email,
        hours: hours,
        season: season,
        status: 'pending',
        date: new Date().toISOString().split('T')[0]
    };
    
    data.applications.push(newApplication);
    
    // Simulate submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // In a real app, this would send to a server
        showToast(`Thank you! Your application "${name}" has been submitted for review. We'll contact you at ${email}.`, 'success');
        
        // Reset form
        e.target.reset();
        
        // Close modal
        document.getElementById('artisan-registration-modal').style.display = 'none';
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

async function handleAdminAddListingSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('listing-name').value;
    const category = document.getElementById('listing-category').value;
    const description = document.getElementById('listing-description').value;
    const location = document.getElementById('listing-location').value;
    const address = document.getElementById('listing-address').value;
    const contact = document.getElementById('listing-contact').value;
    const rating = parseFloat(document.getElementById('listing-rating').value);
    const price = document.getElementById('listing-price').value;
    const imageInput = document.getElementById('listing-image');
    const imageUpload = document.getElementById('listing-image-upload');
    const highlights = document.getElementById('listing-highlights').value.split(',').map(h => h.trim()).filter(h => h);
    const verified = document.getElementById('listing-verified').checked;
    
    // Determine the type based on the category
    let type;
    if (category.includes('artisan')) {
        type = 'artisans';
    } else if (category.includes('place') || category.includes('hidden')) {
        type = 'places';
    } else if (category.includes('experience') || category.includes('cultural')) {
        type = 'experiences';
    } else if (category.includes('food') || category.includes('traditional')) {
        type = 'food';
    } else {
        // Default to artisans if category is ambiguous
        type = 'artisans';
    }
    
    // Check if a file was uploaded
    if (imageUpload.files && imageUpload.files[0]) {
        // For now, we'll use a placeholder. In a real app, you'd upload to a server.
        const file = imageUpload.files[0];
        const reader = new FileReader();
        
        // Define an async function to handle the file load and listing creation
        const handleFileLoad = async function(e) {
            const image = e.target.result;
            
            // Create new listing data object
            const listingData = {
                name: name,
                description: description,
                rating: rating,
                distance: '0.0 km away',
                category: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                subcategory: category,
                image: image,
                location: location,
                address: address,
                hours: 'TBD',
                contact: contact,
                email: 'admin-added@example.com',
                story: 'Added by administrator',
                highlights: highlights,
                price: price,
                verified: verified,
                coordinates: [12.2958, 76.6392], // Default to center of Mysore
                approved: true
            };
            
            // Add the listing using the new async function
            const newListing = await addListing(type, listingData);
            
            if (newListing) {
                // Simulate addition
                const submitBtn = document.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Adding...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showToast(`Listing "${name}" added successfully.`, 'success');
                    
                    // Reset form
                    document.getElementById('admin-add-listing-form').reset();
                    
                    // Clear image preview
                    document.getElementById('image-preview').innerHTML = '';
                    
                    // Close modal
                    document.getElementById('admin-add-listing-modal').style.display = 'none';
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Refresh admin listings
                    loadAdminListings();
                    
                    // Update UI across all sections to reflect changes
                    updateUIAfterDataChange();
                }, 1000);
            } else {
                showToast('Error adding listing. Please try again.', 'error');
            }
        };
        
        reader.onload = handleFileLoad;
        
        reader.readAsDataURL(file);
    } else {
        // Use the URL from the text field
        const image = imageInput.value;
        
        // Create new listing data object
        const listingData = {
            name: name,
            description: description,
            rating: rating,
            distance: '0.0 km away',
            category: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            subcategory: category,
            image: image,
            location: location,
            address: address,
            hours: 'TBD',
            contact: contact,
            email: 'admin-added@example.com',
            story: 'Added by administrator',
            highlights: highlights,
            price: price,
            verified: verified,
            coordinates: [12.2958, 76.6392], // Default to center of Mysore
            approved: true
        };
        
        // Add the listing using the new async function
        const newListing = await addListing(type, listingData);
        
        if (newListing) {
            // Simulate addition
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Adding...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showToast(`Listing "${name}" added successfully.`, 'success');
                
                // Reset form
                document.getElementById('admin-add-listing-form').reset();
                
                // Clear image preview
                document.getElementById('image-preview').innerHTML = '';
                
                // Close modal
                document.getElementById('admin-add-listing-modal').style.display = 'none';
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Refresh admin listings
                loadAdminListings();
                
                // Update UI across all sections to reflect changes
                updateUIAfterDataChange();
            }, 1000);
        } else {
            showToast('Error adding listing. Please try again.', 'error');
        }
    }
}

function updateNavigationAfterLogin() {
    if (elements.mainLoginBtn) {
        elements.mainLoginBtn.innerHTML = `
            <i class="fas fa-user-circle"></i>
            <span>${currentUser.name}</span>
        `;
        elements.mainLoginBtn.className = 'btn-profile';
        elements.mainLoginBtn.onclick = function() {
            showUserProfile();
        };
        
        // Update navigation based on user role
        updateRoleSpecificNav(currentUser.type);
    }
    
    // Update artisan login button text
    if (elements.artisanLoginBtn) {
        if (currentUser.type === 'artisan') {
            elements.artisanLoginBtn.innerHTML = 'My Profile';
        } else {
            elements.artisanLoginBtn.innerHTML = 'Artisan Portal';
        }
    }
}

function updateRoleSpecificNav(role) {
    // Hide/show navigation items based on role
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    
    navLinks.forEach(link => {
        const pageId = link.getAttribute('data-page');
        
        // Show/hide specific pages based on role
        if (pageId === 'admin' && role !== 'admin') {
            link.closest('li').style.display = 'none';
        } else if (pageId === 'admin' && role === 'admin') {
            link.closest('li').style.display = 'list-item';
        } else if (pageId === 'artisan-portal' && role === 'artisan') {
            link.closest('li').style.display = 'list-item';
        } else if (pageId === 'favorites' && role === 'tourist') {
            link.closest('li').style.display = 'list-item';
        }
    });
    
    // Show/hide admin navigation item based on role
    if (elements.adminNavItem) {
        if (role === 'admin') {
            elements.adminNavItem.style.display = 'list-item';
            // Ensure the admin nav item has the correct content
            if (!elements.adminNavItem.querySelector('[data-page="admin"]')) {
                elements.adminNavItem.innerHTML = '<a href="#" class="nav-link" data-page="admin" onclick="goToPage(\'admin\')">Admin Panel</a>';
            }
        } else if (role === 'artisan') {
            elements.adminNavItem.style.display = 'list-item';
            // Update the content of the admin nav item for artisans
            elements.adminNavItem.innerHTML = '<a href="#" class="nav-link" data-page="artisan-portal" onclick="goToPage(\'artisan-portal\')">My Listings</a>';
        } else {
            elements.adminNavItem.style.display = 'none';
        }
    }
}

function showUserProfile() {
    const profileModalHTML = `
    <div id="profile-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('profile-modal')">&times;</span>
            <h2>User Profile</h2>
            <div class="profile-info">
                <p><strong>Name:</strong> ${currentUser.name}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Type:</strong> ${currentUser.type}</p>
                <p><strong>Member Since:</strong> ${currentUser.joinDate}</p>
                <p><strong>Saved Items:</strong> ${savedItems.length}</p>
                <p><strong>Cart Items:</strong> ${cartItems.length}</p>
            </div>
            <div class="profile-actions">
                <button class="btn-primary" onclick="viewSavedItems()">View Saved Items</button>
                <button class="btn-secondary" onclick="logoutUser()">Logout</button>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing profile modal
    const existingModal = document.getElementById('profile-modal');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', profileModalHTML);
    
    // Add event listeners
    document.querySelector('#profile-modal .close').addEventListener('click', () => {
        document.getElementById('profile-modal').remove();
    });
    
    // Close modal when clicking outside
    document.getElementById('profile-modal').onclick = function(event) {
        if (event.target === this) {
            this.remove();
        }
    };
}

function viewSavedItems() {
    if (savedItems.length === 0) {
        showToast('No saved items yet.', 'info');
        return;
    }
    
    const savedModalHTML = `
    <div id="saved-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('saved-modal')">&times;</span>
            <h2>Saved Items (${savedItems.length})</h2>
            <div class="saved-items-list">
                ${savedItems.map(item => `
                    <div class="saved-item">
                        <img src="${item.image}" alt="${item.name}" />
                        <div class="saved-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                            <div class="saved-item-actions">
                                <button class="btn-primary" onclick="showArtisanDetails(${JSON.stringify(item).replace(/"/g, '&quot;')})">View Details</button>
                                <button class="btn-secondary" onclick="removeFromSaved(${item.id})">Remove</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing saved modal
    const existingModal = document.getElementById('saved-modal');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', savedModalHTML);
    
    // Add event listeners
    document.querySelector('#saved-modal .close').addEventListener('click', () => {
        document.getElementById('saved-modal').remove();
    });
    
    // Close modal when clicking outside
    document.getElementById('saved-modal').onclick = function(event) {
        if (event.target === this) {
            this.remove();
        }
    };
}

function removeFromSaved(artisanId) {
    savedItems = savedItems.filter(item => item.id !== artisanId);
    document.getElementById('saved-modal').remove();
    showToast('Item removed from saved list.', 'info');
}

function logoutUser() {
    currentUser = null;
    
    // Update navigation
    if (elements.mainLoginBtn) {
        elements.mainLoginBtn.innerHTML = 'Login';
        elements.mainLoginBtn.className = 'btn-login';
        elements.mainLoginBtn.onclick = function() {
            showLoginModal();
        };
        
        // Hide admin nav item
        if (elements.adminNavItem) {
            elements.adminNavItem.style.display = 'none';
        }
    }
    
    // Reset navigation to default state
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        const pageId = link.getAttribute('data-page');
        // Show all default pages
        if (['admin', 'artisan-portal', 'favorites'].includes(pageId)) {
            link.closest('li').style.display = 'none';
        } else {
            link.closest('li').style.display = 'list-item';
        }
    });
    
    // Close profile modal if open
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.remove();
    
    showToast('Logged out successfully.', 'info');
}

function handleAddArtisan() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    if (currentUser.type !== 'artisan' && currentUser.type !== 'admin') {
        showToast('Please register as an artisan first.', 'warning');
        showArtisanRegistration();
        return;
    }
    
    showArtisanRegistration();
}

function handleFindAlternatives() {
    // Get current location data
    const crowdedLocations = data.locations.filter(loc => 
        loc.population === 'High' || loc.density > 0.7
    );
    
    const peacefulLocations = data.locations.filter(loc => 
        loc.population === 'Low' || loc.density <= 0.3
    );
    
    if (crowdedLocations.length === 0 && peacefulLocations.length === 0) {
        showToast('No location data available for alternatives.', 'info');
        return;
    }
    
    const altModalHTML = `
    <div id="alt-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('alt-modal')">&times;</span>
            <h2>Less Crowded Alternatives</h2>
            <p>Looking for peaceful experiences away from the crowds?</p>
            
            ${crowdedLocations.length > 0 ? `
            <div class="crowded-section">
                <h3>Currently Busy Areas:</h3>
                <div class="alternatives-list">
                    ${crowdedLocations.map(loc => `
                        <div class="alternative-item crowded">
                            <h4>${loc.name}</h4>
                            <p>Crowd Level: ${loc.crowdLevel}</p>
                            <p>Density: ${(loc.density * 100).toFixed(0)}%</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            ${peacefulLocations.length > 0 ? `
            <div class="peaceful-section">
                <h3>Peaceful Alternatives:</h3>
                <div class="alternatives-list">
                    ${peacefulLocations.map(loc => `
                        <div class="alternative-item peaceful">
                            <h4>${loc.name}</h4>
                            <p>Crowd Level: ${loc.crowdLevel}</p>
                            <p>Density: ${(loc.density * 100).toFixed(0)}%</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="tips-section">
                <h3>Tips for Better Experience:</h3>
                <ul>
                    <li>Visit popular locations during weekdays</li>
                    <li>Consider early morning or late evening visits</li>
                    <li>Explore the alternative locations suggested above</li>
                    <li>Check the map for real-time crowd density</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing alt modal
    const existingModal = document.getElementById('alt-modal');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', altModalHTML);
    
    // Add event listeners
    const closeBtn = document.querySelector('#alt-modal .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const modal = document.getElementById('alt-modal');
            if (modal) modal.remove();
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('alt-modal');
    if (modal) {
        modal.onclick = function(event) {
            if (event.target === this) {
                this.remove();
            }
        };
    }
}

function handleRatingClick(e) {
    if (e.target.classList.contains('rating') || e.target.classList.contains('fa-star')) {
        const ratingContainer = e.target.closest('.rating');
        if (ratingContainer) {
            const stars = ratingContainer.querySelectorAll('.fa-star, .fa-star-half-alt, .fa-star-half, .far.fa-star');
            const clickedStar = e.target.classList.contains('fa-star') || e.target.classList.contains('fa-star-half-alt') || e.target.classList.contains('fa-star-half') ? 
                               e.target : e.target.parentElement?.querySelector('.fa-star, .fa-star-half-alt, .fa-star-half');
            
            if (clickedStar) {
                // Calculate rating based on clicked star
                const starIndex = Array.from(stars).indexOf(clickedStar) + 1;
                
                // Update star colors to show rating
                stars.forEach((star, index) => {
                    if (index < starIndex) {
                        star.className = 'fas fa-star';
                    } else {
                        star.className = 'far fa-star';
                    }
                });
                
                // Show rating feedback
                showToast(`Thank you for rating ${starIndex} stars!`, 'success');
            }
        }
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

function showToast(message, type = 'info') {
    // Remove any existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Map functionality
function initializeMap() {
    if (typeof L !== 'undefined') {
        // Initialize the map centered on Mysore
        map = L.map('main-map').setView([12.2958, 76.6392], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add markers for all artisans and locations
        addMapMarkers();
    }
}

function addMapMarkers() {
    if (!map) return;
    
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Add markers for artisans
    data.artisans.filter(a => a.approved).forEach(artisan => {
        if (artisan.coordinates) {
            const marker = L.marker(artisan.coordinates)
                .addTo(map)
                .bindPopup(`
                    <b>${artisan.name}</b><br>
                    ${artisan.category}<br>
                    ${artisan.location}<br>
                    Rating: ${artisan.rating}/5
                `);
            markers.push(marker);
        }
    });
    
    // Add markers for places
    data.places.filter(p => p.approved).forEach(place => {
        if (place.coordinates) {
            const marker = L.marker(place.coordinates)
                .addTo(map)
                .bindPopup(`
                    <b>${place.name}</b><br>
                    ${place.category}<br>
                    ${place.location}<br>
                    Rating: ${place.rating}/5
                `);
            markers.push(marker);
        }
    });
    
    // Add markers for locations
    data.locations.forEach(location => {
        if (location.coordinates) {
            const color = location.population === 'High' ? 'red' : 
                         location.population === 'Medium' ? 'orange' : 'green';
            
            const circle = L.circle(location.coordinates, {
                color: color,
                fillColor: color,
                fillOpacity: 0.5,
                radius: 500
            }).addTo(map);
            
            circle.bindPopup(`
                <b>${location.name}</b><br>
                Crowd Level: ${location.crowdLevel}<br>
                Population: ${location.population}
            `);
            markers.push(circle);
        }
    });
}

function refreshMap() {
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    } else {
        initializeMap();
    }
}

function toggleHeatmap() {
    if (!map) return;
    
    if (isHeatmapActive) {
        // Remove heatmap
        if (heatmapLayer) {
            map.removeLayer(heatmapLayer);
            heatmapLayer = null;
        }
        isHeatmapActive = false;
        showToast('Heatmap turned off', 'info');
    } else {
        // Create heatmap using all location data
        const heatPoints = [];
        
        // Add artisans data to heatmap
        data.artisans.filter(a => a.approved && a.coordinates).forEach(artisan => {
            // Use rating as intensity (higher rating = more intensity)
            heatPoints.push([...artisan.coordinates, artisan.rating]);
        });
        
        // Add places data to heatmap
        data.places.filter(p => p.approved && p.coordinates).forEach(place => {
            // Use rating as intensity (higher rating = more intensity)
            heatPoints.push([...place.coordinates, place.rating]);
        });
        
        // Add locations data to heatmap
        data.locations.forEach(location => {
            if (location.coordinates) {
                // Use population density as intensity
                let intensity = 1;
                if (location.population === 'High') intensity = 3;
                else if (location.population === 'Medium') intensity = 2;
                heatPoints.push([...location.coordinates, intensity]);
            }
        });
        
        // Create heatmap layer
        if (heatPoints.length > 0) {
            heatmapLayer = L.heatLayer(heatPoints, {
                radius: 25,
                blur: 15,
                maxZoom: 16,
                max: 5, // Maximum intensity value
                gradient: { 0.2: 'blue', 0.4: 'lime', 0.6: 'yellow', 0.8: 'orange', 1.0: 'red' }
            }).addTo(map);
        }
        
        isHeatmapActive = true;
        showToast('Heatmap turned on - showing location density', 'info');
    }
}

function showAllCategories() {
    // Reset filters on explore page
    const locationFilter = document.getElementById('location-filter');
    const categoryFilter = document.getElementById('category-filter');
    
    if (locationFilter) locationFilter.value = 'all';
    if (categoryFilter) categoryFilter.value = 'all';
    
    filterExploreItems();
    
    // If on maps page, show all markers
    if (elements.activePage.id === 'maps') {
        addMapMarkers();
    }
}

function ensureAllInteractions() {
    // Add event listeners to all category cards
    document.querySelectorAll('.category-card').forEach(card => {
        if (!card.onclick) {
            const categoryLink = card.querySelector('[data-category]');
            if (categoryLink) {
                const categoryId = categoryLink.getAttribute('data-category');
                card.onclick = () => showCategory(categoryId);
            }
        }
    });
    
    // Add event listeners to all featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
        if (!card.onclick) {
            const img = card.querySelector('img');
            const nameElement = card.querySelector('h3');
            if (img && nameElement) {
                // Extract artisan info from the card
                const name = nameElement.textContent;
                const artisan = data.artisans.find(a => a.name === name);
                if (artisan) {
                    card.onclick = () => showArtisanDetails(artisan);
                }
            }
        }
    });
    
    // Ensure search functionality
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', debounce(handleSearchInputRealTime, 300));
    }
    
    // Ensure login button works
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn && !loginBtn.onclick) {
        loginBtn.onclick = showLoginModal;
    }
    
    // Ensure other buttons work
    const addBtn = document.querySelector('.btn-primary');
    if (addBtn && addBtn.textContent.includes('Add')) {
        addBtn.onclick = handleAddArtisan;
    }
    
    const altBtn = document.querySelector('.btn-secondary');
    if (altBtn && altBtn.textContent.includes('Find')) {
        altBtn.onclick = handleFindAlternatives;
    }
    
    // Ensure artisan login button works
    const artisanLoginBtn = document.getElementById('artisan-login-btn');
    if (artisanLoginBtn) {
        artisanLoginBtn.onclick = function(e) {
            e.preventDefault();
            showArtisanRegistration();
        };
    }
}

// Add toast styles
const toastStyles = `
.toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px 24px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 3000;
    max-width: 300px;
}

.toast.show {
    transform: translateX(0);
}

.toast-success {
    background: linear-gradient(to right, #4CAF50, #2E7D32);
}

.toast-error {
    background: linear-gradient(to right, #F44336, #C62828);
}

.toast-warning {
    background: linear-gradient(to right, #FF9800, #EF6C00);
}

.toast-info {
    background: linear-gradient(to right, #2196F3, #1565C0);
}

.no-results {
    text-align: center;
    padding: 60px 20px;
    color: #795548;
}

.no-results i {
    font-size: 3rem;
    color: #d7ccc8;
    margin-bottom: 20px;
}

.no-results h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #5d4037;
}

.no-results p {
    font-size: 1rem;
    color: #795548;
}

.login-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    flex: 1;
    padding: 12px;
    border: none;
    background: #f5f5f5;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.tab-btn.active {
    background: linear-gradient(to right, #d32f2f, #e64a19);
    color: white;
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

.profile-info {
    text-align: left;
    margin: 20px 0;
}

.profile-info p {
    margin: 10px 0;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.profile-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.saved-items-list {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 20px;
    width: 100%;
}

.saved-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 10px;
    background: white;
}

.saved-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.saved-item-info {
    flex: 1;
}

.saved-item-info h4 {
    margin: 0 0 5px 0;
    color: #5d4037;
}

.saved-item-info p {
    margin: 0 0 10px 0;
    font-size: 0.9rem;
    color: #795548;
}

.saved-item-actions {
    display: flex;
    gap: 10px;
}

.verified-badge, .verified-badge-large {
    background: linear-gradient(to right, #4CAF50, #2E7D32);
    color: white;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    display: inline-block;
    margin-top: 5px;
}

.verified-badge-large {
    padding: 6px 12px;
    font-size: 0.9rem;
}

.price-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.price {
    background: linear-gradient(to right, #ffd54f, #ffb300);
    color: #5d4037;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 600;
}

.highlights {
    margin: 20px 0;
}

.highlight-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}

.highlight-tag {
    background: linear-gradient(to right, #e3f2fd, #bbdefb);
    color: #1565c0;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

.reviews-section {
    margin: 25px 0;
}

.review-item {
    background: #fff3e0;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    border-left: 3px solid #ffd54f;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.reviewer {
    font-weight: 600;
    color: #5d4037;
}

.review-comment {
    margin: 8px 0;
    color: #795548;
    font-style: italic;
}

.review-date {
    font-size: 0.8rem;
    color: #9e9e9e;
}

.stars-large {
    font-size: 1.2rem;
}

.rating-large {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
}

.rating-value {
    font-weight: 600;
    color: #5d4037;
}

.alternatives-list {
    margin: 20px 0;
    max-height: 300px;
    overflow-y: auto;
}

.alternative-item {
    background: white;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    border-left: 4px solid #4CAF50;
}

.alternative-item.crowded {
    border-left: 4px solid #F44336;
}

.alternative-item.peaceful {
    border-left: 4px solid #4CAF50;
}

.crowd-tip {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    border-left: 4px solid #4CAF50;
    font-style: italic;
}

/* Page section styles */
.page-section {
    display: none;
}

.page-section.active {
    display: block;
    min-height: calc(100vh - 80px);
    padding: 20px 0;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 15px;
}

.back-btn {
    background: linear-gradient(to right, #795548, #5d4037);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.back-btn:hover {
    background: linear-gradient(to right, #5d4037, #4e342e);
    transform: translateY(-2px);
}

.explore-filters {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.explore-filters select {
    padding: 12px;
    border: 2px solid #d7ccc8;
    border-radius: 8px;
    background: white;
    font-size: 1rem;
    min-width: 200px;
}

.maps-container {
    margin-top: 20px;
}

.map-controls {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    flex-wrap: wrap;
}

#artisan-login-btn {
    background: linear-gradient(to right, #8BC34A, #4CAF50);
    color: white !important;
    padding: 10px 15px;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(139, 195, 74, 0.3);
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    margin-left: 10px;
}

#artisan-login-btn:hover {
    background: linear-gradient(to right, #7CB342, #43A047);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 195, 74, 0.4);
}

/* Admin Panel Styles */
.admin-dashboard {
    margin-top: 30px;
}

.admin-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.stat-card h3 {
    margin: 0 0 10px 0;
    color: #5d4037;
    font-size: 1rem;
}

.stat-card p {
    margin: 0;
    font-size: 1.8rem;
    font-weight: bold;
    color: #d32f2f;
}

.admin-controls {
    background: white;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.control-buttons {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    flex-wrap: wrap;
}

.admin-listings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-height: 60vh;
    overflow-y: auto;
}

.admin-listing-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background: #fff;
}

.admin-listing-card h4 {
    margin-top: 0;
}

/* Navbar alignment fix */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-menu {
    display: flex;
    gap: 20px;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu li {
    margin: 0;
}
`;

// Update UI after data changes
function updateUIAfterDataChange() {
    // Update featured section if it's currently active
    if (elements.activePage && elements.activePage.id === 'home') {
        renderHomepage();
    }
    
    // Update explore section if it's currently active
    if (elements.activePage && elements.activePage.id === 'explore') {
        renderExplorePage();
    }
    
    // Update artisans section if it's currently active
    if (elements.activePage && elements.activePage.id === 'artisans') {
        renderArtisansPage();
    }
    
    // Refresh map if it's currently active
    if (elements.activePage && elements.activePage.id === 'maps') {
        refreshMap();
    }
    
    // Make sure all interactive elements have event listeners
    ensureAllInteractions();
}

// Add toast styles to the page
const styleSheet = document.createElement('style');
styleSheet.innerText = toastStyles;
document.head.appendChild(styleSheet);
