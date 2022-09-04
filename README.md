### Summary

Patients can instantly connect with doctors over video chat for consultation and the transcription of the video chat will be saved for later reference as well as sent to the users email.

### Personas

- Patient
- Doctor

### Patient Flow

- User signs up with either email verification or phone verification using otp for faster sign up without password.
- User needs to answer a few questions like the problem type, language, region.
- User will be presented a list of doctors available for instant consultation filtered by paramaters like location and languages
- User will request consultation from appropriate doctor.

### Doctor Flow

- Doctor will need to sign up using given form including all necessary details for verification.
- Doctor can add slots for when he/she can be available for instant consultation.
- Doctor can add slots for when he/she can take appointments.
- Doctor will receive requests for consultation which he can deny (with reason) or accept.

### Other features

- Profiles for patient and doctor

### Entities

- User
  > id, first_name, last_name, email, phone, role, is_active, is_verified, languages, location
- Consultation
  > id, patient, doctor, transcription, rating, is_completed, deny_reason
- Appointment
  > id, patient, doctor, timing
- Doctor slot
  > id, doctor, start_time, end_time, type

### APIs

/login 
/signup 
/verify

/list-doctors

/book-appointment
/request-consultation

/slots

/profile
