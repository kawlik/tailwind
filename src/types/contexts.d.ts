export default interface ContextItem<T> {
	get: () => T;
	set: (item: T) => void;
}
