import {useState} from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}:{target: any}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};


// interface FormState {
//   [key: string]: string;
// }

// interface FormValidator {
//   [key: string]: (value: string) => string | undefined;
// }

// interface UseFormOptions {
//   initialValues: FormState;
//   onSubmit: (values: FormState) => void;
//   validators?: FormValidator;
// }

// interface UseFormReturn {
//   values: FormState;
//   errors: FormState;
//   handleChange: (fiel: string, value: string) => void;
//   handleSubmit: () => void;
// }

// export const useForm = ({
//   initialValues,
//   onSubmit,
//   validators = {},
// }: UseFormOptions): UseFormReturn => {
//   const [values, setValues] = useState<FormState>(initialValues);
//   const [errors, setErrors] = useState<FormState>({});

//   const handleChange = (field: string, value: string | undefined) => {
//     setValues(prevValues => ({
//       ...prevValues,
//       [field]: value?.toString() || '',
//     }));
//     // if (validators[field]) {
//     //   const error = validators[field](value?.toString() || '');
//     //   setErrors((prevErrors) => ({
//     //     ...prevErrors,
//     //     [field]: error,
//     //   }));
//     // }
//   };

//   const handleSubmit = () => {
//     const newErrors = {} as FormState;

//     Object.keys(values).forEach(key => {
//       if (validators[key]) {
//         const error = validators[key](values[key]);

//         if (error) {
//           newErrors[key] = error;
//         }
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       onSubmit(values);
//     }
//   };

//   return {values, errors, handleChange, handleSubmit};
// };

