import { observable } from "mobx";

class Model {
	private static instance: Model;

	/**
	 * The Singleton's constructor should always be private to prevent direct
	 * construction calls with the `new` operator.
	 */
	private constructor() {}

	/**
	 * The static method that controls the access to the singleton instance.
	 *
	 * This implementation let you subclass the Singleton class while keeping
	 * just one instance of each subclass around.
	 */
	public static getInstance(): Model {
		if (!Model.instance) {
			Model.instance = new Model();
		}

		return Model.instance;
	}

	@observable tableId = null;
}
