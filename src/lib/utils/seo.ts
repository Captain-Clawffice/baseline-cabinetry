export interface LocalBusinessSchema {
	name: string;
	description: string;
	telephone?: string;
	email?: string;
	address?: {
		streetAddress?: string;
		addressLocality: string;
		addressRegion: string;
		postalCode?: string;
		addressCountry: string;
	};
	openingHours?: string[];
	url: string;
}

const business: LocalBusinessSchema = {
	name: 'Baseline Cabinetry',
	description: 'Custom cabinetry built to last. 20+ years of craftsmanship.',
	url: 'https://baselinecabinetry.com',
	address: {
		addressLocality: 'Your City',
		addressRegion: 'State',
		addressCountry: 'US'
	},
	openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-14:00']
};

export function localBusinessJsonLd(overrides: Partial<LocalBusinessSchema> = {}): string {
	const data = { ...business, ...overrides };
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: data.name,
		description: data.description,
		url: data.url,
		telephone: data.telephone,
		email: data.email,
		address: data.address
			? {
					'@type': 'PostalAddress',
					...data.address
				}
			: undefined,
		openingHours: data.openingHours
	});
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]): string {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	});
}
