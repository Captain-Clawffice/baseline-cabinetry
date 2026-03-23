export interface GalleryItem {
	id: number;
	src: string;
	alt: string;
	category: string;
}

export const galleryItems: GalleryItem[] = [
	{ id: 1, src: '/images/gallery-1.jpg', alt: 'Custom white shaker kitchen', category: 'Kitchen' },
	{ id: 2, src: '/images/gallery-2.jpg', alt: 'Modern kitchen with island', category: 'Kitchen' },
	{ id: 3, src: '/images/bathroom-vanity.jpg', alt: 'Floating bathroom vanity', category: 'Bathroom' },
	{ id: 4, src: '/images/builtins.jpg', alt: 'Built-in bookshelf with window seat', category: 'Built-ins' },
	{ id: 5, src: '/images/kitchen-cabinets.jpg', alt: 'Kitchen cabinet detail', category: 'Kitchen' },
	{ id: 6, src: '/images/gallery-1.jpg', alt: 'Custom cabinetry project', category: 'Kitchen' }
];
