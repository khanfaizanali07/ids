import * as Yup from 'yup'


export const contactSchema = Yup.object({
    name: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    subject: Yup.string().min(6, "Please Enter Atleast 6 Characters").max(50, "Please Enter Atmost 50 Characters").required("Required"),
    message: Yup.string().min(8, "Please Enter Atleast 8 Characters").max(100, "Please Enter Atmost 50 Characters")
})
const phoneRegExp = /^[0]?[0-9]\d{9}$/;
export const enquiryFormSchema = Yup.object({
    firstName: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("Required"),
    lastName: Yup.string().min(3, "Please Enter Atleast 3 Characters").max(26, "Please Enter Atmost 26 Characters").required("Required"),
    phoneNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    service: Yup.string().required("Required"),
    message: Yup.string().min(8, "Please Enter Atleast 8 Characters").max(100, "Please Enter Atmost 100 Characters")
})