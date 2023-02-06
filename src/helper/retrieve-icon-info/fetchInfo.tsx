import { applicationList } from "../../applicationObjectList";

export const getApplicationList = () => {
	return applicationList.filter((item) => item.regularApp);
};

export const findAllApplications = () => {
	return applicationList.find((item) => item.text == "All Applications");
};

export const getSpecificApp = (appName: string) => {
	return applicationList.find((item) => item.text == appName);
};
