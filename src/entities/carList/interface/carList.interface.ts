export interface ISpec {
	[key: string]: string | number;
}
export interface ICar {
	id: string;
	model: string;
	type: string;
	price: number;
	currency?: string;
	specs: ISpec[];
	imageUrl: string;
	discount?: number;
}

export interface ICarList {
	cars: ICar[];
}
