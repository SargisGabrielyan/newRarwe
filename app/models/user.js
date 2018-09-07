import DS from 'ember-data';
import { buildValidations } from 'ember-cp-validations';
import emailFieldValidation from 'new-rarwe/validations/email-field';
import passwordFieldValidation from 'new-rarwe/validations/password-field';


const Validations = buildValidations({
    // I removed the validations that are now defined in their own file
    email: emailFieldValidation,
    password: passwordFieldValidation
});

const {Model, attr} = DS;

// const Validations = buildValidations({
//     email: [
//         validator('presence', {
//             presence: true,
//             ignoreBlank: true,
//             message: "Email can't be empty"
//         }),
//         validator('format', {
//             type: 'email',
//             message: 'Email should be a valid email'
//         })
//     ],
//     password: [
//         validator('presence', {
//             presence: true,
//             ignoreBlank: true,
//             message: "Password can't be empty"
//         }),
//         validator('length', {
//             min: 8,
//             message: 'Password should be at least 8 characters'
//         })
//     ]
// });

export default Model.extend(Validations, {
    email: attr('string'),
    password: attr('string')
});