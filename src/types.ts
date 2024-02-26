import * as Yup from 'yup';


export interface UserFormData {
    Name: string,
    Age: number,
    Sex: string,
    Mobile: string,
    IdType: string,
    IdNumber: string,
    Address: string | null,
    State: string | null,
    City: string | null,
    Country: string | null,
    Pincode: string | null,
}

export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, 'Minimum 3 Characters'),
    age: Yup.number().required('Age is required').min(10, "Must be at least 10 Years old."),
    sex: Yup.string().required('Sex is required').oneOf(['male', 'female'], 'Invalid Sex'),
    mobile: Yup.string().required('Mobile is required').matches(/^(?!(\d)\1{9})[6,7,8,9]\d{9}$/, 'Invalid mobile number'),
    idType: Yup.string().required("Govt Issued ID Type is required.").oneOf(["Aadhar", "PAN"]),
    idNumber: Yup.string().required("Govt Issued ID is required.").when('idType', {
        is: (idType: any) => idType === "Aadhar",
        then: () => Yup.string().required("Aadhar is required")
            .matches(/^[2-9][0-9]{11}$/, 'Invalid Aadhar number. Must be 12 digits and should not start with 0 or 1'),
        otherwise: () => Yup.string().required("PAN is required")
            .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, 'Invalid PAN number. Should be in the format ABCDE1234F'),
    }),
})

export const validationStep2Schema = Yup.object({
    address: Yup.string().nullable(),
    state: Yup.string().nullable(),
    city: Yup.string().nullable(),
    country: Yup.string().nullable(),
    pincode: Yup.string().nullable()
})