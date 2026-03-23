export interface Service {
	slug: string;
	name: string;
	description: string;
	image: string;
	imageAlt: string;
}

export const services: Service[] = [
	{
		slug: 'kitchen-cabinets',
		name: 'Kitchen Cabinets',
		description: 'Full kitchen builds — base, wall, pantry, and island cabinets. Available in face-frame and frameless styles, tailored to your space and lifestyle.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: 'Custom kitchen cabinets'
	},
	{
		slug: 'bathroom-vanities',
		name: 'Bathroom Vanities',
		description: 'Single and double vanities, floating and freestanding, custom sized to fit any bathroom. Functional and beautiful.',
		image: '/images/bathroom-vanity.jpg',
		imageAlt: 'Custom bathroom vanity'
	},
	{
		slug: 'custom-builtins',
		name: 'Custom Built-ins',
		description: 'Bookshelves, window seats, mudroom cubbies, and home office desks — built-in furniture that maximizes every inch of your home.',
		image: '/images/builtins.jpg',
		imageAlt: 'Custom built-in shelving'
	},
	{
		slug: 'closet-systems',
		name: 'Closet Systems',
		description: 'Walk-in and reach-in closet organizers and wardrobe cabinets. Custom designed to fit your wardrobe and your space perfectly.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: 'Custom closet system'
	},
	{
		slug: 'entertainment-centers',
		name: 'Entertainment Centers',
		description: 'Media walls, TV surrounds, and integrated shelving with built-in cable management. Designed to impress and built to last.',
		image: '/images/builtins.jpg',
		imageAlt: 'Custom entertainment center'
	},
	{
		slug: 'laundry-room',
		name: 'Laundry Room Cabinets',
		description: 'Upper and lower cabinets, sorting stations, and countertop workspace. Bring organization and style to your laundry room.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: 'Laundry room cabinets'
	},
	{
		slug: 'garage-storage',
		name: 'Garage Storage',
		description: 'Heavy-duty wall cabinets, workbench systems, and tool storage. Turn your garage into a functional workshop or organized storage space.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: 'Garage storage cabinets'
	},
	{
		slug: 'fireplace-surrounds',
		name: 'Fireplace Surrounds',
		description: 'Custom mantels and built-in shelving flanking fireplaces. Create a stunning focal point that anchors your living room.',
		image: '/images/builtins.jpg',
		imageAlt: 'Custom fireplace surround'
	},
	{
		slug: 'butlers-pantry',
		name: "Butler's Pantries",
		description: 'Transitional storage between kitchen and dining with display shelving. The perfect blend of function and elegance.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: "Butler's pantry cabinets"
	},
	{
		slug: 'refacing-refinishing',
		name: 'Cabinet Refacing & Refinishing',
		description: 'Update existing cabinets with new doors, drawer fronts, and finishes. Get a fresh look without the cost of a full replacement.',
		image: '/images/kitchen-cabinets.jpg',
		imageAlt: 'Cabinet refacing and refinishing'
	}
];
