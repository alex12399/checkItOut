import { decideStatus } from "../api/crawler/utils";
import { error, pending, successful } from "./fixtures";

describe("crawler utils", () => {
	describe("decideStatus", () => {
		it("status null", () => {
			const status: any[] = null;

			const decided = decideStatus(status);

			expect(decided).toStrictEqual(error);
		});

		it("status array does not have status property", () => {
			const status = [{whatever: "null"}];

			const decided = decideStatus(status);

			expect(decided).toStrictEqual(error);
		});

		it("classic pending status", () => {
			const status = [{status: 0}];

			const decided = decideStatus(status);
			console.log(status[0]);

			expect(decided).toStrictEqual(pending);
		});

		it("classic success status", () => {
			const status = [{status: 1}];

			const decided = decideStatus(status);

			expect(decided).toStrictEqual(successful);
		});
	});
});