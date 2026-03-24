
export type GeneralInfo = [{
  key: "name";
  label: "Name";
  value: string;
  inputType: "text";
} , {
  key: "email";
  label: "Email";
  value: string;
  inputType: "email";
} , {
  key: "tel";
  label: "Phone number";
  value: string;
  inputType: "tel";
}];


export type EducationInfo = [{
  key: "school";
  label: "School";
  value: string;
  inputType: "text";
} , {
  key: "title";
  label: "Title of Study";
  value: string;
  inputType: "text";
} , {
  key: "date";
  label: "Date";
  value: string;
  inputType: "date";
}];

export type WorkingInfo = [{
  key: "company";
  label: "Company";
  value: string;
  inputType: "text";
} , {
  key: "position";
  label: "Position";
  value: string;
  inputType: "text";
} , {
  key: "responsibilities";
  label: "Main Responsibilities";
  value: string;
  inputType: "textArea";
} , {
  key: "startDate";
  label: "From";
  value: string;
  inputType: "date";
} , {
  key: "endDate";
  label: "To";
  value: string;
  inputType: "date";
}];

export type Info = GeneralInfo | EducationInfo | WorkingInfo;