export const decideStatus = (status: any[]) => {
	if (!status) {
		return { status: "ERROR" };
	}
	if (!status.length) {
		return { status: "ERROR" };
	}

	switch (status[0].status) {
		case 0:
			return { status: "PENDING" };
		case 1:
			return { status: "SUCCESSFUL"};
		default:
			return { status: "ERROR"};
	}
}