import type { GeneralInfo, EducationInfo, WorkingInfo } from './types/information';


const initialGeneralInfo : GeneralInfo = [
  {
    key: "name",
    label: "Name",
    value:  "Your name",
    inputType: "text"
  },
  {
    key: "email",
    label: "Email",
    value: "your-email@example.com",
    inputType: "email"
  },
  {
    key: "tel",
    label: "Phone number",
    value:  "000 000 00 00",
    inputType: "tel"
  },
]

const initialEducationInfo : EducationInfo = [
  {
    key: "school",
    label: "School",
    value:  "Your School",
    inputType: "text"
  },
  {
    key: "title",
    label: "Title of Study",
    value:  "Your Degree",
    inputType: "text"
  },
  {
    key: "date",
    label: "Date",
    value:  "2020-06-01",
    inputType: "date"
  }
]

const initialWorkingInfo : WorkingInfo = [
  {
    key: "company",
    label: "Company",
    value:  "Your Company",
    inputType: "text"
  },
  {
    key: "position",
    label: "Position",
    value:  "Your Position",
    inputType: "text"
  },
  {
    key: "responsibilities",
    label: "Main Responsibilities",
    value:  "Your main responsibilities in this position",
    inputType: "textArea"
  },
  {
    key: "startDate",
    label: "From",
    value:  "2020-06-01",
    inputType: "date"
  },
  {
    key: "endDate",
    label: "To",
    value:  "2020-06-01",
    inputType: "date"
  }
]

export { initialGeneralInfo, initialEducationInfo, initialWorkingInfo };