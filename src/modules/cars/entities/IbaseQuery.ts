interface Engine {
  type?: string;
  displacement?: number;
  horsepower?: number;
}

interface Owner {
  name?: string;
  contact?: string;
  purchaseDate?: Date;
}

interface Registration {
  plateNumber?: string;
  state?: string;
  expiryDate?: Date;
}

export interface IbaseQuery extends Document {
  brand?: string;
  model?: string;
  year?: number;
  color?: string;
  fuelType?: string;
  forSale?: boolean;
  transmission?: string;
  engine?: Engine;
  features?: string[];
  owners?: Owner[];
  registration?: Registration;
  imageUrl?: string;
}
