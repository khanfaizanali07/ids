import * as Yup from 'yup'


export const contactSchema = Yup.object({
    name: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("Name is required"),
    email: Yup.string().email("Please enter a valid E-mail").required("E-mail is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required")
})
const phoneRegExp = /^[0]?[0-9]\d{9}$/;
export const enquiryFormSchema = Yup.object({
    firstName: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("First name is required"),
    lastName: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("Last name is required"),
    phoneNo: Yup.string().matches(phoneRegExp, 'Please enter a valid phone No').required("Phone No is required"),  
    email: Yup.string().email("Please enter a valid E-mail").required("E-mail is required"),
    service: Yup.string().required("Service is required"),
    service1: Yup.string().required("Service is required"),
    message: Yup.string().min(8, "Please Enter Atleast 8 Characters").max(100, "Please Enter Atmost 100 Characters")
})