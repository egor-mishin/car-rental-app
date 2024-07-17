export interface ISpec {
	gas: string;
	transmission: string;
	capacity: string;
}
export interface ICar {
	id: string;
	model: string;
	type: string;
	price: number;
	currency?: string;
	specs: ISpec;
	imageUrl: string;
	discount?: number;
}

export interface ICarList {
	cars: ICar[];
}
