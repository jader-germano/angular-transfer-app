/**
 * Omits keys of a type
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Constructor<T> = new (...args: any[]) => T;
/**
 * Represents the old "keyof T", getting only string keys
 */
export type StringKeyOf<T> = Extract<keyof T, string>;

export type NonNullableObject<T extends object> = { [KEY in keyof T]: NonNullable<T[KEY]>; };

export type RequiredAndNonNullable<T extends object> = Required<NonNullableObject<T>>;

/**
 * Create enums out of object literals
 */
export type EnumLiteral<T extends object> = T[keyof T];

/**
 * Safra's notion of a boolean
 */
export type StringBoolean = 'S' | 'N';

// tslint:disable-next-line:ban-types
export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export type PickKeys<T, K extends keyof T> = keyof Pick<T, K>;

export const objectKeys: <T extends { [key: string]: any }>(o: T) => Array<keyof T> = Object.keys;

export function pickObject<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
	return keys.reduce<Pick<T, K>>((acc, key) => {
		acc[key] = object[key];
		return acc;
	}, {} as any);
}

export function omitObject<T extends object, K extends keyof T>(object: T, keys: K[]): Omit<T, K> {
	const obj = Object.assign({}, object);
	keys.forEach((key) => {
		delete obj[key];
	});
	return obj;
}

export interface SuccessfulOperation<T> {
	success: true;
	data?: T;
}

export interface FailedOperation<T> {
	success: false;
	message: string;
	data?: T;
}

export type OperationResult<T = undefined, F = undefined> = SuccessfulOperation<T> | FailedOperation<F>;
